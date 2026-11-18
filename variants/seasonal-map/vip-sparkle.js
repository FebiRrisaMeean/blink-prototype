// Blink paywall glints and facets from /shared/sparkle.js
const sparkleRuntime = {document, devicePixelRatio: window.devicePixelRatio};
/* ═══════════════════════════════════════════════════════════════════════════════════════════
   BlinkSparkle — блёстки вокруг звезды. Один движок на четыре места.
   (Раньше я звал это «роем фасеток» — термин мой и плохой; по-русски это блёстки: спарклы
   и чешуйки фольги. Переименовано по просьбе Энди 04.08.)

   Где: маркет-баннер · пейвол-герой · экран подписки · тизер гостей.

   ⚠️ ЕДИНИЦЫ. В исходном коде движение считалось ПО КАДРАМ (`p.x += p.vx` без dt), поэтому темп
   зависел от частоты экрана: на 120 Гц вдвое быстрее, чем на 60. Здесь всё переведено в
   ПИКСЕЛИ В СЕКУНДУ, и пересчёт сделан через **120 fps** — именно на такой машине значения
   подбирались, и так сохраняется ровно тот вид, который принят. Через 60 всё стало бы вдвое
   медленнее принятого.
   По времени в исходнике уже шли только боковое покачивание, подъём и счётчик жизни.

   ── УСТРОЙСТВО ЧАСТИЦЫ (общее у четырёх) ────────────────────────────────────────────────
   Яркость = конверт × мерцание × общий множитель.
     конверт  = sin(π · прожито/жизнь) — плавно от нуля к пику в середине жизни и обратно.
                Без него частицы появляются и исчезают скачком и читаются мусором.
     мерцание = 0.55 + 0.45·sin(прожито·частота + фаза).
   Два вида:
     ТОЧКА    — радиальный градиент, две палитры (холодная и тёплая), выбор на частицу.
     ФАСЕТКА  — плоская чешуйка с поперечным градиентом. Вращается вокруг своей оси и
                СПЛЮЩИВАЕТСЯ: горизонтальный масштаб = 0.34 + 0.66·|cos(фаза)|. В момент
                «плашмя» даёт короткую аддитивную вспышку силой |cos|⁸ × 0.9 — восьмая степень
                и делает блик резким, на меньшей выходит ровное свечение вместо отблеска.

   ── ДВЕ ГЕОМЕТРИИ РОЖДЕНИЯ ──────────────────────────────────────────────────────────────
   'ring'     — эллиптическое кольцо вокруг звезды (радиус w·0.02…0.19, по вертикали сплющено
                ×0.72), разлёт по случайному квадранту под углом 0…62° ОТ ГОРИЗОНТАЛИ.
                ⚠️ Вертикали вырезаны намеренно: без этого кольцо читается полоской влево-вправо.
   'fountain' — узкий фонтан вверх из точки под звездой, плюс боковой снос.
   ═══════════════════════════════════════════════════════════════════════════════════════════ */
(function (root) {
  'use strict';

  var FPS = 120;                     // опорная частота пересчёта «за кадр» → «за секунду»
  function rnd(a, b) { return a + Math.random() * (b - a); }

  /* Спрайт чешуйки — ромб с поперечным градиентом. Печётся один раз на монтаж. */
  function bakeFacet(size) {
    var cv = root.document.createElement('canvas');
    cv.width = cv.height = size;
    var c = cv.getContext('2d'), m = size / 2;
    var g = c.createLinearGradient(m, 0, m, size);
    g.addColorStop(0, 'rgba(190,210,238,0)');
    g.addColorStop(.34, 'rgba(216,228,244,.85)');
    g.addColorStop(.5, 'rgba(255,255,255,.98)');
    g.addColorStop(.66, 'rgba(216,228,244,.85)');
    g.addColorStop(1, 'rgba(190,210,238,0)');
    c.fillStyle = g;
    c.beginPath(); c.moveTo(m, 0); c.lineTo(size, m); c.lineTo(m, size); c.lineTo(0, m); c.closePath(); c.fill();
    return cv;
  }

  function mount(cv, o) {
    if (!cv) return { stop: function () {}, pause: function () {}, resume: function () {}, step: function () {} };
    var W = o.w, H = o.h;
    var dpr = Math.min(root.devicePixelRatio || 1, 2);
    cv.width = W * dpr; cv.height = H * dpr;
    var ctx = cv.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    var SP = bakeFacet(32);
    var star = o.star, ex = star.x, ey = star.y + star.w * (o.emitFrac == null ? 0.13 : o.emitFrac);
    var parts = [], acc = 0, t = 0, raf = 0, last = performance.now() / 1000;
    var geo = o.geometry || 'ring';

    function spawn() {
      var sp = Math.random() < o.sparkShare, X, Y, VX, VY, SW;
      if (geo === 'ring') {
        var a0 = Math.random() * 6.2832, r0 = star.w * rnd(0.02, 0.19);
        var sx = Math.random() < .5 ? -1 : 1, sy = Math.random() < .5 ? -1 : 1;
        var dg = Math.random() * 62 * Math.PI / 180;     // ≤62° от горизонтали, вертикали вырезаны
        var v = rnd(o.speed[0], o.speed[1]);
        X = star.x + Math.cos(a0) * r0;
        /* ⚠️ Подъём устья — ПАРАМЕТР, а не константа. 0.04 пришли от фольговых вариантов;
           у тизера смещения нет вовсе, и зашитое число уводило бы облако на 6px вниз от лиц. */
        Y = star.y + star.w * (o.ringDrop == null ? 0.04 : o.ringDrop) + Math.sin(a0) * r0 * 0.72;
        VX = sx * Math.cos(dg) * v; VY = sy * Math.sin(dg) * v;
      } else {
        var ang = -Math.PI / 2 + (Math.random() - .5) * Math.PI * (o.spread || 0.96);
        var v2 = rnd(o.speed[0], o.speed[1]), s = Math.random() - .5;
        X = ex + s * star.w * (o.mouth || 0.26);
        /* ⚠️ Вертикальный разброс устья — ПАРАМЕТР. У подписки и пейвола 0.12, у маркет-баннера
           0.34: там звезда 53px на плашке высотой 61px, и узкая щель читалась бы строчкой. */
        Y = ey + (Math.random() - .5) * star.w * (o.mouthY == null ? 0.12 : o.mouthY);
        VX = Math.cos(ang) * v2 + s * (o.drift || 0) ; VY = Math.sin(ang) * v2 - (o.rise || 0);
      }
      SW = rnd(o.sway[0], o.sway[1]);
      parts.push({
        x: X, y: Y, vx: VX, vy: VY, life: 0, max: rnd(o.life[0], o.life[1]),
        sp: sp, size: sp ? rnd(o.sizeSpark[0], o.sizeSpark[1]) : rnd(o.sizeDot[0], o.sizeDot[1]),
        ph: Math.random() * 6.28, tw: rnd(3, 7), cool: Math.random() < (o.coolShare == null ? .4 : o.coolShare),
        swF: rnd(.4, 1.1), swA: SW,
        fa: Math.random() * 6.28, fav: (Math.random() - .5) * 1.6,
        fs: Math.random() * 6.28, fsv: rnd(1.6, 5.0) * (Math.random() < .5 ? -1 : 1)
      });
    }

    function dot(x, y, r, a, cool) {
      var g = ctx.createRadialGradient(x, y, 0, x, y, r);
      var c0 = cool ? '232,242,255' : '255,255,255', c1 = cool ? '150,182,255' : '214,208,255';
      g.addColorStop(0, 'rgba(' + c0 + ',' + a + ')');
      g.addColorStop(.4, 'rgba(' + c1 + ',' + (a * .6) + ')');
      g.addColorStop(1, 'rgba(' + c1 + ',0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, 6.2832); ctx.fill();
    }
    function facet(p, a) {
      var flat = Math.abs(Math.cos(p.fs + p.fsv * t)), S = p.size * 2.6;
      ctx.save();
      ctx.globalAlpha = a * (0.55 + 0.45 * flat);
      ctx.translate(p.x, p.y); ctx.rotate(p.fa + p.fav * t);
      ctx.scale(0.34 + 0.66 * flat, 1);
      ctx.drawImage(SP, -S / 2, -S / 2, S, S);
      ctx.restore(); ctx.globalAlpha = 1;
      /* вспышка «плашмя»: восьмая степень даёт короткий резкий блик, а не ровное свечение */
      var fl = a * Math.pow(flat, 8) * 0.9;
      if (fl > .03) dot(p.x, p.y, p.size * 2.2, fl, true);
    }

    /* Физика отдельно от отрисовки — чтобы её можно было прокрутить вхолостую при прогреве. */
    function advance(dt) {
      acc += dt * o.spawnPerSec;
      while (acc > 1) { acc -= 1; if (parts.length < o.cap) spawn(); }
      var damp = Math.pow(o.damp, dt);          // затухание уже приведено к «за секунду»
      for (var i = parts.length - 1; i >= 0; i--) {
        var p = parts[i]; p.life += dt;
        if (p.life >= p.max) { parts.splice(i, 1); continue; }
        p.x += (p.vx + Math.sin(p.life * p.swF) * p.swA) * dt;
        p.y += p.vy * dt;
        p.vy *= damp; p.vy -= o.grav * dt;
      }
    }

    /* ⚠️ ПРОГРЕВ. Без него рой стартует с ПУСТОГО поля: частицы копятся, и каждая ещё разгорается
       к середине жизни (конверт sin), поэтому облако выходит на вид только через пару секунд —
       Энди ждал появления 2–3 сек. Прокручиваем симуляцию вхолостую до первого кадра, и эффект
       начинается уже населённым. Шаг 1/60 — компромисс: крупнее даёт заметную ошибку затухания.
       ⚠️ ДЛИНУ ПРОГРЕВА НАДО СЧИТАТЬ, А НЕ БРАТЬ НА ГЛАЗ. Поле выходит на равновесие примерно
       за две средних жизни частицы, и промежуточное значение даёт ровно ту же жалобу, только
       слабее: 3.5 сек давали 160 частиц из равновесных 236, и Энди по-прежнему видел, как облако
       доливается. Замер по подписке: 3.5с → 160 · 6с → 223 · 9с → 236 · 12с → 236.
       Ориентир: warmup ≈ 2 × средней жизни (`life`). Стоит это сотни итераций на монтаж — ничто. */
    function warmup(sec) {
      var n = Math.round(sec * 60);
      for (var i = 0; i < n; i++) { t += 1 / 60; advance(1 / 60); }
    }

    function step(now) {
      now /= 1000;
      var dt = Math.min(0.05, now - last); last = now; t += dt;
      if (o.startAfter && t < o.startAfter) { ctx.clearRect(0, 0, W, H); return; }

      advance(dt);

      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = 'lighter';
      for (var j = 0; j < parts.length; j++) {
        var q = parts[j];
        var env = Math.sin(Math.min(q.life / q.max, 1) * Math.PI);
        var tw = .55 + .45 * Math.sin(q.life * q.tw + q.ph);
        var a = env * tw * o.alpha;
        if (a <= .01) continue;
        if (q.sp) facet(q, a); else dot(q.x, q.y, q.size * 2.3, a, q.cool);
      }
      ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
    }

    function loop(n) { step(n); raf = requestAnimationFrame(loop); }
    function resume() { if (raf || o.manual) return; last = performance.now() / 1000; raf = requestAnimationFrame(loop); }
    function pause() { if (raf) { cancelAnimationFrame(raf); raf = 0; } }
    /* ⚠️ Прогрев несовместим с `startAfter`: он крутит `t` вперёд и проскочил бы задержку.
       На пейволе рой НАМЕРЕННО стартует через 0.7 сек — сперва должна проявиться сама звезда,
       иначе первый кадр открывается облаком без источника. Там прогрев не нужен и запрещён. */
    if (o.warmup && !o.startAfter) warmup(o.warmup);
    if (!o.manual) resume();

    return {
      stop: function () { pause(); ctx.clearRect(0, 0, W, H); },
      pause: pause, resume: resume,
      step: function (sec) { step((sec == null ? performance.now() / 1000 : sec) * 1000); },
      count: function () { return parts.length; }
    };
  }

  /* ═══ ПРЕСЕТЫ ═══ Скорости и затухания уже переведены из «за кадр» в «за секунду» через 120 fps. */
  var PRESETS = {
    /* Маркет-баннер: жизнь и скорость НАМЕРЕННО ужаты — пейвольные увели бы частицы
       за пределы плашки высотой 61px. Веер разлёта самый широкий в семье: ±112°. */
    marketBanner: { star: { x: 44.5, y: 58.7, w: 53 }, geometry: 'fountain', spread: 1.25,
                    mouth: 0.34, mouthY: 0.34, emitFrac: 0, warmup: 4,
                    drift: 10.8, rise: 1.8, spawnPerSec: 48, cap: 200,
                    speed: [6, 24], life: [1.3, 2.5], sizeSpark: [1.1, 2.6], sizeDot: [0.5, 1.8],
                    sparkShare: .34, alpha: .46, coolShare: .40, sway: [1, 3.5],
                    damp: 0.485, grav: 0.010 },
    paywall:      { star: { x: 195, y: 238, w: 322 }, geometry: 'fountain', spread: 0.96,
                    mouth: 0.13, drift: 74, rise: 3.6, spawnPerSec: 99, cap: 760, startAfter: 0.7,
                    speed: [26, 128], life: [3.6, 7.0], sizeSpark: [2.2, 5.4], sizeDot: [1.1, 3.7],
                    sparkShare: .34, alpha: .46, coolShare: .42, sway: [6, 19],
                    damp: 0.382, grav: 0.02 },
    paywallFoil:  { star: { x: 195, y: 238, w: 322 }, geometry: 'ring',
                    spawnPerSec: 99, cap: 760, startAfter: 0.7,
                    speed: [26, 113], life: [3.6, 7.0], sizeSpark: [2.2, 5.4], sizeDot: [1.1, 3.7],
                    sparkShare: .34, alpha: .46, coolShare: .42, sway: [8, 24],
                    damp: 0.382, grav: 0.02 },
    /* Подписка: искр больше (44% против 34%) — рой втрое реже пейвольного и должен успевать блеснуть. */
    /* 05.08 по замечаниям Энди: плотнее (29 → 46 частиц/сек), шире по горизонтали
       (устье 0.4 → 0.56 ширины звезды, боковой снос 60 → 96 px/сек) и с прогревом 3.5 сек —
       раньше приходилось ждать появления облака пару секунд. */
    subscription:     { star: { x: 180, y: 132, w: 130 }, geometry: 'fountain', spread: 0.9,
                        mouth: 0.56, drift: 96, rise: 4.8, emitFrac: 0.15, warmup: 9,
                        spawnPerSec: 46, cap: 380,
                        speed: [24, 120], life: [3.4, 6.8], sizeSpark: [1.6, 3.9], sizeDot: [0.8, 2.7],
                        sparkShare: .44, alpha: .46, coolShare: .40, sway: [5, 16],
                        damp: 0.485, grav: 0.012 },
    subscriptionFoil: { star: { x: 180, y: 132, w: 130 }, geometry: 'ring', emitFrac: 0.15,
                        spawnPerSec: 29, cap: 300,
                        speed: [12, 53], life: [3.4, 6.8], sizeSpark: [1.6, 3.9], sizeDot: [0.8, 2.7],
                        sparkShare: .44, alpha: .46, coolShare: .40, sway: [4, 13],
                        damp: 0.485, grav: 0.012 },
    /* Тизер: скорость поджата намеренно — облако держится у лиц, а не растекается на текст. */
    /* ⚠️ Затухание и гравитация здесь ОТКЛЮЧЕНЫ, и это не пропуск: в тизере их не было никогда —
       0.485/0.012 попали в пресет переносом от подписки, до подключения экрана. Облако тизера
       держится у лиц за счёт поджатой скорости (16–58 против 24–120), а не за счёт торможения.
       ⚠️ Размах болтанки вдвое меньше «того же» числа у соседей: в живом коде тизера сдвиг шёл
       с множителем 0.5, которого нет ни у баннера, ни у подписки. 8–24 × 0.5 = 4–12. */
    views:        { geometry: 'ring', star: { x: 170, y: 139, w: 150 }, ringDrop: 0,
                    spawnPerSec: 30, cap: 150, warmup: 8,
                    speed: [16, 58], life: [2.8, 5.2], sizeSpark: [0.8, 2.6], sizeDot: [0.8, 2.6],
                    sparkShare: .40, alpha: .46, coolShare: .45, sway: [4, 12],
                    damp: 1, grav: 0 }
  };

  function preset(name, over) {
    var b = PRESETS[name];
    if (!b) throw new Error('BlinkSparkle: нет пресета «' + name + '»');
    var out = {}; for (var k in b) out[k] = b[k];
    if (over) for (var k2 in over) out[k2] = over[k2];
    return out;
  }

  root.BlinkSparkle = { mount: mount, preset: preset, PRESETS: PRESETS, FPS: FPS };
})(sparkleRuntime);

export const paywallSparkle = sparkleRuntime.BlinkSparkle;
