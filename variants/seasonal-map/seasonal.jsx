import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {MapArtworkLogo, mapImages, MapStyleFriends, MapThemeBadge, seasonalVipBadge, StyleScreen, StyleTheme} from '../../map-styles.jsx';
import {MapPreviewFrame, MapPreviewGallery, PreviewLoadError, retrySource} from './gallery.jsx';

const sessionKey = 'blink-seasonal-map-v1';
const delay = 600;
const defaultLargeCards = {gta: false, seasonal: false};
const baseState = {vip: 'none', applied: false, gallerySlider: false, largeCards: defaultLargeCards};
const seasonalAssets = './seasonal-assets/';
const detailAssets = seasonalAssets+'winter-detail/';
const seasonalFriends = ['91715.jpg','81587.png','207a3.jpg'].map(src=>detailAssets+src);
const vipStar = detailAssets+'858c6.png';
const previews = [
  {label:'светлая карта', effect:'snow', poster:'winter-gallery-day.webp', animation:'winter-gallery-snow.webp'},
  {label:'тёмная карта', effect:'lights', poster:'winter-gallery-night.webp', animation:'winter-gallery-lights.webp'},
];

export function seasonalOffer(scenario) {
  return {available:scenario.vip, badge:seasonalVipBadge, label:'Blink VIP', labelIcon:vipStar, largeCards:scenario.largeCards};
}

function initialState() {
  try {
    const value = JSON.parse(sessionStorage.getItem(sessionKey));
    if (value && ['none','active','expired'].includes(value.vip)) {
      return {
        vip: value.vip, applied: value.vip==='active' && value.applied === true,
        gallerySlider: value.gallerySlider===true,
        largeCards: {gta:value.largeCards?.gta===true, seasonal:value.largeCards?.seasonal===true},
      };
    }
  } catch {}
  return baseState;
}

async function loadArtwork(src, fail) {
  const image = new Image();
  image.src = src;
  const decoded = image.decode().then(()=>true,()=>false);
  await new Promise(resolve=>setTimeout(resolve,delay));
  if (!(await decoded) || fail) throw Error('Map image unavailable');
}

export function useSeasonalScenario(enabled, onSeasonalAccessLost) {
  const [state, setState] = useState(()=>enabled?initialState():baseState);
  const [applyStatus, setApplyStatus] = useState('idle');
  const failures = useRef(new Set());
  const [pending, setPending] = useState([]);
  const activeRequest = useRef(0);
  const applyAttempt = useRef(0);
  const vip = state.vip==='active';

  useEffect(()=>{
    if (!enabled) return;
    try {sessionStorage.setItem(sessionKey,JSON.stringify(state));} catch {}
  },[enabled,state]);

  function armFailure(kind) {
    const flags = failures.current;
    if (flags.has(kind)) flags.delete(kind); else flags.add(kind);
    setPending([...flags]);
  }
  function takeFailure(kind) {
    const armed = failures.current.delete(kind);
    if (armed) setPending([...failures.current]);
    return armed;
  }
  function stopApply() {
    activeRequest.current++;
    setApplyStatus('idle');
  }
  function setVip(value) {
    stopApply();
    if (value!=='active' && state.applied) onSeasonalAccessLost();
    setState(previous=>({...previous,vip:value,applied:value==='active' && previous.applied}));
  }
  function setCardSize(style, large) {
    setState(previous=>({...previous,largeCards:{...previous.largeCards,[style]:large}}));
  }
  function resetCardSizes() {
    setState(previous=>({...previous,largeCards:defaultLargeCards}));
  }
  function setGallerySlider(gallerySlider) {
    setState(previous=>({...previous,gallerySlider}));
  }
  function deselect() {
    stopApply();
    setState(previous=>previous.applied?{...previous,applied:false}:previous);
  }
  async function apply(onApplied) {
    if (!vip || applyStatus==='loading') return;
    const request = ++activeRequest.current;
    setApplyStatus('loading');
    try {
      await loadArtwork(retrySource(mapImages.seasonal,applyAttempt.current++),takeFailure('apply'));
      if (request!==activeRequest.current) return;
      setState(previous=>previous.vip==='active'?{...previous,applied:true}:previous);
      onApplied?.();
      setApplyStatus('idle');
    } catch {
      if (request===activeRequest.current) setApplyStatus('error');
    }
  }
  return {
    enabled, vip, vipStatus:state.vip, applied:state.applied, applyStatus, pending, armFailure, takeFailure, apply, deselect, setVip,
    largeCards:state.largeCards, setCardSize, resetCardSizes, gallerySlider:state.gallerySlider, setGallerySlider,
  };
}

export function SeasonalControls({scenario}) {
  return <details className="seasonal-controls">
    <summary>управление сценарием</summary>
    <div className="seasonal-control-buttons" role="group" aria-label="Подписка в прототипе">
      {[['none','без VIP'],['active','VIP активен'],['expired','VIP закончился']].map(([state,label])=><button key={state} aria-pressed={scenario.vipStatus===state} onClick={()=>scenario.setVip(state)}>{label}</button>)}
    </div>
    {[['gta','Потрачено'],['seasonal','Зима']].map(([style,label])=><fieldset className="seasonal-size-control" key={style}>
      <legend>{label}</legend>
      <div className="seasonal-control-buttons">
        {[[false,'маленькая'],[true,'большая']].map(([large,size])=><button key={size} type="button"
          aria-pressed={scenario.largeCards[style]===large} onClick={()=>scenario.setCardSize(style,large)}>{size}</button>)}
      </div>
    </fieldset>)}
    <button type="button" className="seasonal-size-reset" onClick={scenario.resetCardSizes}>сбросить размеры</button>
    <label><input type="checkbox" checked={scenario.gallerySlider} onChange={event=>scenario.setGallerySlider(event.target.checked)}/> слайдер превью</label>
    <label><input type="checkbox" checked={scenario.pending.includes('preview')} onChange={()=>scenario.armFailure('preview')}/> сбой следующей загрузки превью</label>
    <label><input type="checkbox" checked={scenario.pending.includes('apply')} onChange={()=>scenario.armFailure('apply')}/> сбой следующей попытки применить</label>
  </details>;
}

export function SeasonalApplyMessage({scenario, onRetry=()=>scenario.apply()}) {
  if (!scenario.vip) return null;
  if (scenario.applyStatus==='loading') return <p className="style-feedback" role="status">загружаем стиль карты…</p>;
  if (scenario.applyStatus==='error') return <div className="style-feedback" role="alert">не удалось применить стиль <button className="style-link" onClick={onRetry}>повторить</button></div>;
  return null;
}

function GalleryAnimation({preview, takeFailure}) {
  const [attempt,setAttempt] = useState(0);
  const [status,setStatus] = useState('loading');
  const simulatedFailure = useRef(false);
  const failure = useRef(takeFailure);
  failure.current = takeFailure;

  useLayoutEffect(()=>{
    simulatedFailure.current = failure.current('preview');
    if (!simulatedFailure.current) return;
    const timeout = setTimeout(()=>setStatus('error'),delay);
    return ()=>clearTimeout(timeout);
  },[attempt]);

  function retry() {
    setStatus('loading');
    setAttempt(count=>count+1);
  }

  if (status==='error') return <PreviewLoadError retry={retry}/>;
  return <img key={attempt} className="seasonal-gallery-animation" data-effect={preview.effect}
    data-ready={status==='loaded'} src={retrySource(seasonalAssets+preview.animation,attempt)} alt="" draggable={false}
    onLoad={()=>{if (!simulatedFailure.current) setStatus('loaded');}} onError={()=>setStatus('error')}/>;
}

function useMediaQuery(query) {
  const [matches,setMatches] = useState(()=>matchMedia(query).matches);
  useEffect(()=>{
    const media = matchMedia(query);
    const update = ()=>setMatches(media.matches);
    media.addEventListener('change',update);
    update();
    return ()=>media.removeEventListener('change',update);
  },[query]);
  return matches;
}

function WinterGallery({scenario, theme, onThemeChange}) {
  const [themeClicks,setThemeClicks] = useState(0);
  const guest = !scenario.vip;
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const darkDevice = useMediaQuery('(prefers-color-scheme: dark)');
  const themePage = theme==='dark' || theme==='system' && darkDevice ? 1 : 0;

  function chooseTheme(value) {
    if (scenario.gallerySlider) setThemeClicks(count=>count+1);
    onThemeChange(value);
  }

  return <>
    <MapPreviewGallery label="Галерея зимней карты" trackLabel="Превью зимней карты" frames={previews}
      className="winter-gallery"
      slider={guest || scenario.gallerySlider} previewIndex={themePage} previewSelection={themeClicks}
      pagerClass={guest?'market-pagination':undefined} pagerLabel={guest?'Превью темы карты':undefined}
      onPageChange={guest?index=>onThemeChange(index===0?'light':'dark'):undefined}
      renderFrame={(preview,active)=><MapPreviewFrame style="seasonal" src={seasonalAssets+preview.poster} active={active}>
        {!reducedMotion && <GalleryAnimation preview={preview} takeFailure={scenario.takeFailure}/>}
      </MapPreviewFrame>}>
      <MapArtworkLogo/>
      <MapThemeBadge>светлая и тёмная</MapThemeBadge>
      {guest && <img className="seasonal-detail-badge" src={seasonalVipBadge} alt="Blink VIP"/>}
    </MapPreviewGallery>
    {!guest && <StyleTheme value={theme} onChange={chooseTheme}/>}
  </>;
}

export function SeasonalDetail({scenario, theme, onThemeChange, onApplyTheme, onClose, settingsOrigin}) {
  const themeForApply = useRef(theme);
  themeForApply.current = theme;
  const apply = ()=>scenario.apply(()=>onApplyTheme(themeForApply.current));
  const guest = !scenario.vip;
  return <StyleScreen label="Сезоны · стиль карты" appearance="sheet" className={'seasonal-detail'+(guest?' is-vip-locked':'')} onClose={onClose}>
    {guest && <img className="seasonal-guest-glow" src={detailAssets+'vip-glow.svg'} alt=""/>}
    <div className="style-detail-scroll">
      <h1>сезоны</h1>
      <p className="style-detail-description">за окном новый сезон — на карте<br/>новый стиль</p>
      <WinterGallery scenario={scenario} theme={theme} onThemeChange={onThemeChange}/>
      <MapStyleFriends avatars={seasonalFriends}/>
      <SeasonalApplyMessage scenario={scenario} onRetry={apply}/>
    </div>
    <div className="style-detail-footer">
      {scenario.applied ? <span className="style-already" role="status">уже выбрано</span> :
      scenario.vip ? <button className="style-primary" disabled={scenario.applyStatus!=='idle'} onClick={apply}>{scenario.applyStatus==='loading'?'загружаем стиль…':'применить'}</button> :
        <>
          <div className="seasonal-vip-condition" id="seasonal-vip-condition">
            <img className="seasonal-vip-wordmark" src={detailAssets+'4b886.png'} alt=""/>
            <p>доступно только<br/>для подписчиков</p>
            <img className="seasonal-vip-star" src={vipStar} alt=""/>
          </div>
          <a className="style-primary" href={'#/market/maps/vip'+(settingsOrigin?'/'+settingsOrigin:'')} aria-describedby="seasonal-vip-condition">получить с Blink VIP</a>
        </>}
    </div>
  </StyleScreen>;
}
