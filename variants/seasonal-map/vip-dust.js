// Blink paywall dust renderer from /shared/dust.js
const dustRuntime = {document, devicePixelRatio: window.devicePixelRatio};
/* ═══════════════════════════════════════════════════════════════════════════════════════════
   BlinkDust — общий движок звёздной пыли. Один на все экраны прототипа.
   Канон и обоснование чисел: subscription-call/DUST-CANON.md

   Зачем: до 04.08 «одна и та же» пыль жила в ШЕСТИ местах двумя разными реализациями, и их
   параметры разъехались — формула свечения, такт, доля искр, порог края, наличие трейла и
   затухания. Хуже того, слово «размер» значило РАЗНОЕ: в одной ветке радиус ядра, в другой
   полный габарит, поэтому числа были несравнимы даже на глаз.

   Канонические единицы, всё в них:
     D      — ВИДИМЫЙ ГАБАРИТ пятна в CSS-пикселях (не радиус ядра!)
     glow   — во сколько раз радиус свечения больше лучей искры («мягкость»)
     speed  — пиксели в СЕКУНДУ
     damp   — во сколько раз падает скорость ЗА СЕКУНДУ
     flicker— период мерцания в СЕКУНДАХ
     density— частиц на 1000 px² поля (масштабируется по площади, не по стороне)
   Радиус ядра, длина лучей и радиус размытия ВЫВОДЯТСЯ из пары (D, glow) — поэтому вид
   частицы задаётся двумя числами, а не пятью несвязанными.

   Шаг по времени честный (dt). Свечение печётся в спрайты один раз и кэшируется:
   ctx.shadowBlur в пер-кадровом цикле роняет Chrome (Skia гонит blur-проход на каждый fill).
   ═══════════════════════════════════════════════════════════════════════════════════════════ */
(function (root) {
  'use strict';

  var DPR = Math.min(root.devicePixelRatio || 1, 2);
  var SPR = new Map();
  function rnd(a, b) { return a + Math.random() * (b - a); }

  /* Палитра точек по умолчанию. Искры всегда белые — палитра к ним не применяется. */
  var SILVER = ['#ffffff', '#f2f5fa', '#e3e9f2', '#cfd8e6', '#bcc7d8', '#eaf1ff'];

  /* ── Спрайт частицы. Кэш по (вид|цвет|габарит|мягкость); габарит квантуется до 0.5,
        иначе кэш вырождается в тысячи вариантов и смысл печения пропадает. ── */
  function sprite(kind, color, D, glow, halo, th, style) {
    var d = Math.max(1, Math.round(D * 2) / 2);
    /* ⚠️ Искра всегда БЕЛАЯ — палитра к ней не применяется, поэтому цвет не должен попадать
       в ключ кэша. С цветом в ключе на шести оттенках пеклось вшестеро больше одинаковых
       спрайтов: 129 против 69 на одном только профиле. */
    var key = kind + '|' + color + '|' + d + '|' + glow + '|' + halo + '|' + (th ? th.id : '-') + '|' + style;
    var hit = SPR.get(key); if (hit) return hit;

    var R = d / 2;
    /* ⚠️ ДВА РАЗНЫХ УСТРОЙСТВА ИСКРЫ, и путать их нельзя.
       • Без подложки (аватарки): свечение даёт ТЕНЬ креста, поэтому радиус делится между
         лучами и размытием — arms + blur = R. Чем больше glow, тем мягче частица.
       • С подложкой (карта): свечение даёт ДИСК во весь радиус, а крест тянется почти на
         весь радиус поверх него — как в исходных спрайтах карты, где луч = 0.96 от радиуса.
       05.08: считал длину луча по первой формуле в обоих случаях — на карте выходил
       полноразмерный диск с крестиком в 45% радиуса, то есть шар. Энди поймал дважды. */
    /* ⚠️ ДВА СТИЛЯ ИСКРЫ, и различать их надо ЯВНО — не по наличию подложки.
       • 'cross' (карта, обе темы): крест на 96% радиуса, ЧЁТКИЙ, без тени. Свечение, если оно
         есть, даёт подложка-диск. На СВЕТЛОЙ карте подложки нет вовсе (её сняли 03.08 — в
         source-over по светлому плану круг читался тенью), и остаётся голый крест.
       • 'glow' (аватарки): короткий крест, а свечение — его ТЕНЬ, поэтому радиус делится
         между лучами и размытием.
       05.08: сначала я вывел стиль из `halo > 0` — и светлая карта, где подложки нет, уехала
       в аватарочную ветку: короткий крест с тенью вместо чистого. Энди поймал третий раз.
       Наличие свечения и длина луча — РАЗНЫЕ вещи, и связывать их нельзя. */
    var cross = style === 'cross';
    var arms = cross ? R * 0.96 : R / (1 + glow);
    var blur = cross ? 0 : R - arms;
    var pad = Math.ceil(R + blur + 2);
    var cv = root.document.createElement('canvas');
    cv.width = cv.height = Math.ceil(pad * 2 * DPR);
    var c = cv.getContext('2d');
    c.setTransform(DPR, 0, 0, DPR, 0, 0);
    c.translate(pad, pad);

    if (kind === 'spark') {
      var sc = (color && color !== 'w') ? color : null;   // подкраска искры, если экран её задал
      /* ⚠️ Подложка-диск под крестом есть НЕ ВЕЗДЕ. На карте она была (спрайт печётся целиком
         в габарит), на аватарках её не было вовсе — там только крест с тенью. Свалить их в одно
         значит превратить аватарочную искру в светящийся шар: ровно это и вышло 04.08. */
      if (halo > 0) {
        var g = c.createRadialGradient(0, 0, 0, 0, 0, R);
        var gc = th ? th.glow : ['255,255,255', '226,238,255'];
        g.addColorStop(0, 'rgba(' + gc[0] + ',' + halo + ')');
        g.addColorStop(.4, 'rgba(' + gc[1] + ',' + (halo * .39) + ')');
        g.addColorStop(1, 'rgba(' + gc[1] + ',0)');
        c.fillStyle = g; c.beginPath(); c.arc(0, 0, R, 0, 6.2832); c.fill();
      }
      /* Крест: 4 луча шагом 90°, каждый — лепесток из ДВУХ КВАДРАТИЧНЫХ КРИВЫХ от кончика
         к центру. Пропорция ширины к длине 0.16 — она уже была общей у обеих старых веток
         (0.154 и 0.167), поэтому форму унифицировать не пришлось.
         ⚠️ Именно кривые, а не отрезки: на отрезках выходит плюсик, а не блик. */
      /* ⚠️ Тень у креста — ТОЛЬКО когда нет подложки. Если подложка есть (картовый стиль),
         свечением служит ОНА, а крест рисуется чётким: в старом коде карты у спрайта искры
         тени не было вовсе. Дать и то и другое — значит выпустить свечение за габарит D
         и получить размытые шары вместо искр (поймано Энди 05.08 на пинах). */
      c.shadowBlur = blur;      // при подложке blur уже 0 — свечение даёт диск, не тень
      c.shadowColor = sc || (th ? 'rgba(' + th.glow[1] + ',1)' : 'rgba(226,238,255,1)');
      c.fillStyle = sc || (th ? th.cross : 'rgba(255,255,255,.97)');
      var L = arms, W = arms * 0.16;
      for (var k = 0; k < 2; k++) {
        c.beginPath();
        c.moveTo(0, -L); c.quadraticCurveTo(W, 0, 0, 0); c.quadraticCurveTo(-W, 0, 0, -L);
        c.moveTo(0, L); c.quadraticCurveTo(W, 0, 0, 0); c.quadraticCurveTo(-W, 0, 0, L);
        c.fill(); c.rotate(Math.PI / 2);
      }
      c.beginPath(); c.arc(0, 0, arms * 0.22, 0, 6.2832); c.fill();
    } else {
      /* ⚠️ У ТОЧКИ своя мягкость, и она СИЛЬНО больше, чем у искры. В доканонном профиле ядро
         было 0.35–0.85px при размытии 6–7.5 — отношение 9–17, то есть точка это ТОЧЕЧНЫЙ СВЕТ
         со слабым ореолом, а не диск. На карте наоборот: там точка и есть диск (отношение ~1.5).
         Одно число на обе ветки давало в профиле жирные шары вместо пыли. */
      var coreR = R / (1 + glow), dblur = R - coreR;
      if (glow > 4) {                       // точечный свет: маленькое ядро + тень
        c.shadowBlur = dblur; c.shadowColor = color;
        c.fillStyle = color;
        c.beginPath(); c.arc(0, 0, coreR, 0, 6.2832); c.fill();
      } else {                              // диск: сплошной градиент во весь габарит
        /* Тема задаёт ЧЕТЫРЕ стопа (0 / .25 / .55 / 1) тремя цветами — так собраны все четыре
           набора карты: тёмная и светлая × обычный и зелёный онлайн. Форма у них одна,
           отличается только палитра, поэтому это параметр, а не вторая реализация. */
        if (th) {
          var gg = c.createRadialGradient(0, 0, 0, 0, 0, R), dc = th.dot, da = th.dotA;
          gg.addColorStop(0,   'rgba(' + dc[0] + ',' + da[0] + ')');
          gg.addColorStop(.25, 'rgba(' + dc[1] + ',' + da[1] + ')');
          gg.addColorStop(.55, 'rgba(' + dc[2] + ',' + da[2] + ')');
          gg.addColorStop(1,   'rgba(' + dc[2] + ',0)');
          c.fillStyle = gg;
        } else {
          c.fillStyle = dotGrad(c, R, color);
        }
        c.beginPath(); c.arc(0, 0, R, 0, 6.2832); c.fill();
      }
    }
    var s = { cv: cv, pad: pad, d: pad * 2 };
    SPR.set(key, s); return s;
  }

  /* Точка — мягкое пятно без жёсткого края. Цвет принимаем и как #rrggbb, и как rgb(...). */
  function dotGrad(c, R, color) {
    var g = c.createRadialGradient(0, 0, 0, 0, 0, R);
    if (color.charAt(0) === '#') {
      g.addColorStop(0, color); g.addColorStop(.28, color + 'd9');
      g.addColorStop(.6, color + '4d'); g.addColorStop(1, color + '00');
    } else {
      var rgb = color.replace(/rgba?\(|\)/g, '').split(',').slice(0, 3).join(',');
      g.addColorStop(0, 'rgba(' + rgb + ',1)'); g.addColorStop(.28, 'rgba(' + rgb + ',.85)');
      g.addColorStop(.6, 'rgba(' + rgb + ',.3)'); g.addColorStop(1, 'rgba(' + rgb + ',0)');
    }
    return g;
  }

  /* ═══ Монтаж эффекта на канвас ═══
     Возвращает ручку: { stop, set, pause, resume }.
     `set` нужен экранам карты — там палитра и композит меняются на живом экране
     (тема светлая/тёмная, зелёный онлайн). */
  function mount(cv, o) {
    if (!cv) return { stop: function () {}, set: function () {}, pause: function () {}, resume: function () {} };
    var W = o.w, H = o.h;
    cv.width = W * DPR; cv.height = H * DPR;
    var ctx = cv.getContext('2d');
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

    var P = {
      density: o.density, dotD: o.dotD, sparkD: o.sparkD, sparkShare: o.sparkShare,
      speed: o.speed, damp: o.damp || 0, rangeFrac: o.rangeFrac || [.6, .85],
      edge: o.edge == null ? .60 : o.edge, flicker: o.flicker || [0.8, 2.1],
      trail: o.trail || 0, glow: o.glow == null ? 2.2 : o.glow,
      /* Мягкость ТОЧКИ отдельно от искры: 12 = точечный свет (аватарки), ~1.5 = диск (карта).
         halo — альфа подложки-диска под крестом искры: 0 на аватарках, ~0.9 на карте. */
      glowDot: o.glowDot == null ? 12 : o.glowDot,
      halo: o.halo == null ? 0 : o.halo,
      sparkStyle: o.sparkStyle || 'glow',
      palette: o.palette || SILVER, additive: o.additive !== false, gain: o.gain || 1,
      mode: o.mode || 'radial', rise: o.rise || [4, 15], colorFor: o.colorFor || null,
      /* Искра по умолчанию БЕЛАЯ — палитра точек к ней не применяется. Хук нужен там, где
         искру всё-таки красят: зелёный онлайн в чатах и на пинах. */
      sparkColorFor: o.sparkColorFor || null,
      onFrame: o.onFrame || null,
      zone: o.zone || null,
      /* Тема = палитра диска и креста. Меняется живьём через set({theme}): на карте она
         зависит от темы экрана и от онлайна конкретного пина. */
      theme: o.theme || null,
      themeFor: o.themeFor || null
    };
    var ex = o.epicenter ? o.epicenter[0] : W / 2;
    var ey = o.epicenter ? o.epicenter[1] : H / 2;
    var half = Math.min(W, H) / 2;
    var N = Math.max(1, Math.round(P.density * (W * H) / 1000));
    var parts = [];

    function pick() {
      var pal = P.palette;
      return pal[(Math.random() * pal.length) | 0];
    }
    function born(seed) {
      var spark = Math.random() < P.sparkShare;
      var D = spark ? rnd(P.sparkD[0], P.sparkD[1]) : rnd(P.dotD[0], P.dotD[1]);
      var base = {
        spark: spark, D: D, color: pick(),
        w: 6.2832 / rnd(P.flicker[0], P.flicker[1]), ph: Math.random() * 6.28, hist: []
      };
      if (P.mode === 'rise') {
        /* Поле, а не облако: частицы всплывают снизу вверх и рождаются заново под кадром.
           ⚠️ ЗОНА СГУЩЕНИЯ: часть частиц живёт в полосе вокруг объекта и перерождается ТАМ ЖЕ.
           Без привязки перерождения к зоне сгущение уплывает вверх и растворяется за минуту —
           поле остаётся, а «облако вокруг аватарки» пропадает. */
        var z = P.zone, near = z && Math.random() < z.frac;
        base.near = near;
        if (near) {
          base.x = z.x[0] + Math.random() * (z.x[1] - z.x[0]);
          base.y = seed ? z.y[0] + Math.random() * (z.y[1] - z.y[0]) : z.y[1] + Math.random() * 24;
        } else {
          base.x = Math.random() * W;
          base.y = seed ? Math.random() * H : H + rnd(6, 46);
        }
        base.vx = 0; base.vy = -rnd(P.rise[0], P.rise[1]) * (near && z.riseNear ? z.riseNear : 1);
        base.range = Infinity;
      } else {
        var a = Math.random() * 6.2832, sp = rnd(P.speed[0], P.speed[1]);
        base.range = half * rnd(P.rangeFrac[0], P.rangeFrac[1]);
        var sR = seed ? Math.random() * base.range : Math.random() * (half * 0.06);
        base.x = ex + Math.cos(a) * sR; base.y = ey + Math.sin(a) * sR;
        base.vx = Math.cos(a) * sp; base.vy = Math.sin(a) * sp;
      }
      return base;
    }
    for (var i = 0; i < N; i++) parts.push(born(true));

    var raf = 0, last = performance.now() / 1000, t = 0, acc = 0, running = false;

    function step(now) {
      now /= 1000;
      var dt = Math.min(0.05, now - last); last = now; t += dt;
      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = P.additive ? 'lighter' : 'source-over';
      var damp = P.damp ? Math.pow(P.damp, dt) : 1;
      /* Отсчёты трейла пишем раз на эталонный кадр (1/60 c), а не каждый кадр: иначе на 120 Гц
         хвост укорачивается в пикселях при той же длине в отсчётах. */
      acc += dt; var push = acc >= 1 / 60; if (push) acc -= 1 / 60;

      for (var j = 0; j < parts.length; j++) {
        var p = parts[j];
        p.vx *= damp; p.vy *= damp;
        p.x += p.vx * dt; p.y += p.vy * dt;

        if (P.mode === 'rise') {
          if (p.y < (p.near && P.zone ? P.zone.y[0] : -8)) { parts[j] = born(false); continue; }
        } else {
          if (P.trail && push) { p.hist.push({ x: p.x, y: p.y }); if (p.hist.length > P.trail) p.hist.shift(); }
          var dr = Math.hypot(p.x - ex, p.y - ey) / p.range;
          if (dr >= 1) { parts[j] = born(false); continue; }
        }

        var edge = 1;
        if (P.mode !== 'rise') {
          var d2 = Math.hypot(p.x - ex, p.y - ey) / p.range;
          edge = d2 < P.edge ? 1 : (1 - d2) / (1 - P.edge);
        }
        var tw = 0.6 + 0.4 * Math.sin(t * p.w + p.ph);
        var a2 = Math.min(1, edge * tw * P.gain * (p.near && P.zone && P.zone.gainNear ? P.zone.gainNear : 1));
        if (a2 <= 0.02) continue;

        var col = P.colorFor ? P.colorFor(p) : p.color;

        if (P.trail && p.hist.length > 1) {
          var h = p.hist;
          for (var q = 1; q < h.length; q++) {
            var s2 = q / h.length;
            ctx.globalAlpha = a2 * s2 * 0.35;
            ctx.strokeStyle = (col && col.a) ? col.a : col;
            ctx.lineWidth = Math.max(0.4, p.D * 0.06 * s2);
            ctx.lineCap = 'round';
            ctx.beginPath(); ctx.moveTo(h[q - 1].x, h[q - 1].y); ctx.lineTo(h[q].x, h[q].y); ctx.stroke();
          }
        }
        /* Альфа искры. В аватарочной ветке она берётся в КВАДРАТЕ — так сохраняется исходная
           картинка: там искра красилась полупрозрачным цветом поверх полупрозрачного слоя,
           и множители перемножались. ⚠️ В КАРТОВОЙ ветке (с подложкой) альфа ЛИНЕЙНАЯ —
           там спрайт всегда рисовался с globalAlpha = a, и квадрат гасил бы искры зря. */
        var aDraw = (p.spark && P.sparkStyle !== 'cross') ? a2 * a2 : a2;
        var kind = p.spark ? 'spark' : 'dot';
        var gl = p.spark ? P.glow : P.glowDot;
        if (p.spark) col = P.sparkColorFor ? (P.sparkColorFor(p) || 'w') : 'w';
        var th = P.themeFor ? P.themeFor(p) : P.theme;
        /* Подложку под крестом задаёт ТЕМА, если она про неё знает: на светлой карте её нет
           вовсе (03.08 — в source-over по светлому плану круг читался тенью), на тёмной .9,
           у зелёной на светлой .55. */
        var hl = (th && th.halo != null) ? th.halo : P.halo;
        /* colorFor может вернуть либо цвет, либо КРОССФЕЙД {a,b,t}: так сделан переход
           «серебро у свечения → зелень наружу» в чатах. Подмешивать по альфе дешевле, чем
           печь ещё градации спрайтов, и переход выходит плавным, а не ступенькой. */
        if (col && col.a) {
          var sA = sprite(kind, col.a, p.D, gl, hl, th, P.sparkStyle);
          var sB = sprite(kind, col.b, p.D, gl, hl, th, P.sparkStyle);
          if (col.t < 1) { ctx.globalAlpha = aDraw * (1 - col.t); ctx.drawImage(sA.cv, p.x - sA.pad, p.y - sA.pad, sA.d, sA.d); }
          if (col.t > 0) { ctx.globalAlpha = aDraw * col.t;       ctx.drawImage(sB.cv, p.x - sB.pad, p.y - sB.pad, sB.d, sB.d); }
        } else {
          var s3 = sprite(kind, col, p.D, gl, hl, th, P.sparkStyle);
          ctx.globalAlpha = aDraw;
          ctx.drawImage(s3.cv, p.x - s3.pad, p.y - s3.pad, s3.d, s3.d);
        }
      }
      /* Хук дорисовки на ТОТ ЖЕ канвас, после пыли. Нужен модалке: там на одном холсте
         с пылью живут крупные блёстки, и разносить их по двум канвасам значит платить
         вторым композитным слоем ни за что. */
      if (P.onFrame) P.onFrame(ctx, dt, t);
      ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
    }

    function loop(now) { step(now); raf = requestAnimationFrame(loop); }
    function resume() { if (raf || o.manual) return; last = performance.now() / 1000; raf = requestAnimationFrame(loop); running = true; }
    function pause() { if (raf) { cancelAnimationFrame(raf); raf = 0; } running = false; }
    if (!o.manual) resume();

    return {
      stop: function () { pause(); ctx.clearRect(0, 0, W, H); },
      pause: pause, resume: resume,
      /* ⚠️ Внешний цикл. На карте шесть пинов, и там канон — ОДИН общий rAF на все эффекты
         экрана: пять параллельных циклов когда-то валили рендерер Chrome. С `manual: true`
         движок своего цикла не заводит, а экран сам дёргает step() из своего. */
      step: function (nowSec) { step((nowSec == null ? performance.now() / 1000 : nowSec) * 1000); },
      /* Живая правка — палитра, композит, усиление. Нужна экранам карты: тема и онлайн
         меняются на открытом экране, пересоздавать эффект ради этого незачем. */
      set: function (patch) { for (var k in patch) if (patch.hasOwnProperty(k)) P[k] = patch[k]; }
    };
  }

  /* ═══ ПРЕСЕТЫ ШЕСТИ ЭКРАНОВ ═══
     Держим ЗДЕСЬ, а не в экранах: смысл унификации в том, чтобы разницу между экранами можно
     было увидеть в одной таблице. Отличий по канону остаётся три — габарит, плотность, палитра
     (плюс мягкость на карте и режим движения у модалки). Обоснование каждого — в DUST-CANON.md §3. */
  var PRESETS = {
    /* аватарочная ветка — чёрный фон, серебристая палитра */
    profile:  { glowDot: 12, halo: 0, w: 240, h: 240, epicenter: [120, 116], density: 8.0,
                dotD: [12, 16], sparkD: [22, 29], sparkShare: .30, speed: [12, 27], damp: .87,
                rangeFrac: [.60, .85], trail: 5, glow: 2.8 },
    /* ⚠️ Дальность у чатов МЕНЬШЕ канонной (0.60–0.85) — и это оправданное отклонение, а не
       недосмотр: аватарка 46px сидит в поле 150px внутри плотного списка, и на канонной
       амплитуде облако лезет на соседние строки. Значение выверено Энди до канона; вернул его
       04.08 по замечанию «в чатах амплитуда слишком большая». */
    chats:    { glowDot: 12, halo: 0, w: 150, h: 150, epicenter: [75, 73], density: 9.6,
                dotD: [8, 11], sparkD: [14, 20], sparkShare: .30, speed: [12, 27], damp: .87,
                rangeFrac: [.45, .72], trail: 5, glow: 2.8 },
    /* пейвол: экран телефона в карточке СВЕТЛЫЙ, мелкая пыль на нём тонет → искр больше */
    paywall:  { glowDot: 12, halo: 0, w: 200, h: 200, density: 5.75,
                dotD: [12, 16], sparkD: [22, 29], sparkShare: .42, speed: [12, 27], damp: .87,
                rangeFrac: [.60, .85], trail: 5, glow: 2.8 },
    /* модалка: не облако, а ПОЛЕ — частицы всплывают снизу вверх */
    modal:    { glowDot: 12, halo: 0, w: 390, h: 844, density: 1.3, mode: 'rise', rise: [4, 15],
                dotD: [8, 12], sparkD: [16, 22], sparkShare: .30, speed: [12, 27], damp: 0,
                trail: 0, glow: 2.8 },
    /* картовая ветка — поверх плана города: мельче, чётче (низкая мягкость), палитра темы */
    /* ⚠️ 05.08 габариты ВЕРНУТЫ к доканонным (были 4–6 и 8–11). Канон их поднял, но одобряли
       увеличение по лаборатории, которая рисовала картовую искру неверно — крест выходил вчетверо
       короче свечения, и оценивались шары, а не искры. Решение принималось по кривой картинке. */
    map:      { sparkStyle: 'cross', glowDot: 1.5, halo: .9, w: 200, h: 200, density: 3.5,
                dotD: [2.6, 4.8], sparkD: [5, 9], sparkShare: .30, speed: [12, 27], damp: .87,
                rangeFrac: [.30, .48], trail: 0, glow: 1.2, gain: 2.0 },
    mapfriend:{ sparkStyle: 'cross', glowDot: 1.5, halo: .9, w: 280, h: 280, density: 1.9,
                dotD: [3.6, 6.6], sparkD: [7, 12.5], sparkShare: .30, speed: [12, 27], damp: .87,
                rangeFrac: [.30, .47], trail: 0, glow: 1.2, gain: 2.0 }
  };

  /* 04.08: вариант, который вышел при первой сборке канона — точка рисуется ДИСКОМ, под искрой
     подложка. Энди попросил оставить: «спрошу потом мнение у команды». Отличие от `profile`
     ровно в двух числах, поэтому держим производным пресетом, а не копией. */
  PRESETS.profileDisc = (function () {
    var o = {}; for (var k in PRESETS.profile) if (PRESETS.profile.hasOwnProperty(k)) o[k] = PRESETS.profile[k];
    o.glowDot = 2.2; o.halo = .9; return o;
  })();

  function preset(name, over) {
    var base = PRESETS[name];
    if (!base) throw new Error('BlinkDust: нет пресета «' + name + '»');
    var out = {};
    for (var k in base) if (base.hasOwnProperty(k)) out[k] = base[k];
    if (over) for (var k2 in over) if (over.hasOwnProperty(k2)) out[k2] = over[k2];
    return out;
  }

  root.BlinkDust = {
    mount: mount,
    preset: preset,
    PRESETS: PRESETS,
    SILVER: SILVER,
    /* для отладки: сколько спрайтов реально напеклось — если сотни, кэш вырождается */
    spriteCount: function () { return SPR.size; }
  };
})(dustRuntime);

export const paywallDust = dustRuntime.BlinkDust;
