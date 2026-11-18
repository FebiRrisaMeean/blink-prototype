import React, {useEffect, useId, useLayoutEffect, useRef, useState} from 'react';
import {MapArtwork, MapArtworkLogo, mapImages, MapThemeBadge, StyleScreen} from '../../map-styles.jsx';

const sessionKey = 'blink-seasonal-map-v1';
const delay = 600;
const baseState = {vip: 'none', applied: false};
const seasonalAssets = './seasonal-assets/';
const vipBadge = seasonalAssets+'market-vip-badge.png';
const previews = [
  {label:'светлая карта', effect:'snow', poster:'winter-gallery-day.webp', animation:'winter-gallery-snow.webp'},
  {label:'тёмная карта', effect:'lights', poster:'winter-gallery-night.webp', animation:'winter-gallery-lights.webp'},
];

export function seasonalOffer(scenario) {
  return {badge:vipBadge, label:scenario.vip?'бесплатно':'blink vip'};
}

function initialState() {
  try {
    const value = JSON.parse(sessionStorage.getItem(sessionKey));
    if (value && ['none','active','expired'].includes(value.vip)) {
      return {vip: value.vip, applied: value.vip==='active' && value.applied === true};
    }
  } catch {}
  return baseState;
}

const retrySource = (src, count) => count ? src+'?retry='+count : src;

async function loadArtwork(src, fail) {
  const image = new Image();
  image.src = src;
  const decoded = image.decode().then(()=>true,()=>false);
  await new Promise(resolve=>setTimeout(resolve,delay));
  if (!(await decoded) || fail) throw Error('Map image unavailable');
}

export function useSeasonalScenario(enabled) {
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
    setState(previous=>({vip:value,applied:value==='active' && previous.applied}));
  }
  function deselect() {
    stopApply();
    setState(previous=>previous.applied?{...previous,applied:false}:previous);
  }
  async function apply() {
    if (!vip || applyStatus==='loading') return;
    const request = ++activeRequest.current;
    setApplyStatus('loading');
    try {
      await loadArtwork(retrySource(mapImages.seasonal,applyAttempt.current++),takeFailure('apply'));
      if (request!==activeRequest.current) return;
      setState(previous=>previous.vip==='active'?{...previous,applied:true}:previous);
      setApplyStatus('idle');
    } catch {
      if (request===activeRequest.current) setApplyStatus('error');
    }
  }
  return {enabled, vip, vipStatus:state.vip, applied:state.applied, applyStatus, pending, armFailure, takeFailure, apply, deselect, setVip};
}

export function SeasonalControls({scenario}) {
  return <details className="seasonal-controls">
    <summary>управление сценарием</summary>
    <div className="seasonal-control-buttons" role="group" aria-label="Подписка в прототипе">
      {[['none','без VIP'],['active','VIP активен'],['expired','VIP закончился']].map(([state,label])=><button key={state} aria-pressed={scenario.vipStatus===state} onClick={()=>scenario.setVip(state)}>{label}</button>)}
    </div>
    <label><input type="checkbox" checked={scenario.pending.includes('preview')} onChange={()=>scenario.armFailure('preview')}/> сбой следующей загрузки превью</label>
    <label><input type="checkbox" checked={scenario.pending.includes('apply')} onChange={()=>scenario.armFailure('apply')}/> сбой следующей попытки применить</label>
  </details>;
}

export function SeasonalApplyMessage({scenario}) {
  if (!scenario.vip) return null;
  if (scenario.applyStatus==='loading') return <p className="style-feedback" role="status">загружаем стиль карты…</p>;
  if (scenario.applyStatus==='error') return <div className="style-feedback" role="alert">не удалось применить стиль <button className="style-link" onClick={scenario.apply}>повторить</button></div>;
  return null;
}

function PreviewLoadError({retry}) {
  return <div className="seasonal-preview-status" role="alert">
    не удалось загрузить превью<button type="button" className="style-retry" onClick={retry}>повторить</button>
  </div>;
}

function PreviewLoader() {
  return <div className="seasonal-gallery-loader" role="status" aria-label="Загрузка превью">
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <g><circle cx="20" cy="20" r="18.5" pathLength="360"/></g>
    </svg>
  </div>;
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

function GalleryPreview({preview, active, reducedMotion, takeFailure}) {
  const [attempt,setAttempt] = useState(0);
  const [status,setStatus] = useState('loading');
  const ready = status==='loaded';

  function retry() {
    setStatus('loading');
    setAttempt(count=>count+1);
  }

  return <MapArtwork style="seasonal" className={'style-detail-image seasonal-gallery-art'+(ready?'':' is-awaiting-poster')}
    src={retrySource(seasonalAssets+preview.poster,attempt)} pin={ready && 'detail'} showLogo={false}
    onImageLoad={()=>setStatus('loaded')} onImageError={()=>setStatus('error')}>
    {active && status==='loading' && <PreviewLoader/>}
    {active && status==='error' && <PreviewLoadError retry={retry}/>}
    {active && ready && !reducedMotion && <GalleryAnimation preview={preview} takeFailure={takeFailure}/>}
  </MapArtwork>;
}

function WinterGallery({scenario}) {
  const track = useRef(null);
  const drag = useRef(null);
  const id = useId();
  const [page,setPage] = useState(0);
  const motionQuery = '(prefers-reduced-motion: reduce)';
  const [reducedMotion,setReducedMotion] = useState(()=>matchMedia(motionQuery).matches);
  useEffect(()=>{
    const media = matchMedia(motionQuery);
    const updateMotion = ()=>setReducedMotion(media.matches);
    media.addEventListener('change',updateMotion);
    updateMotion();
    return ()=>media.removeEventListener('change',updateMotion);
  },[]);

  function goTo(index) {
    const viewport = track.current;
    const next = Math.max(0,Math.min(previews.length-1,index));
    viewport.scrollTo({left:next*viewport.clientWidth,behavior:'instant'});
    setPage(next);
  }
  function keyDown(event) {
    if (event.target!==track.current) return;
    const destinations = {ArrowLeft:page-1,ArrowRight:page+1,Home:0,End:previews.length-1};
    if (!Object.hasOwn(destinations,event.key)) return;
    event.preventDefault();
    goTo(destinations[event.key]);
  }
  function startDrag(event) {
    if (event.pointerType!=='mouse' || event.button!==0 || event.target.closest('button')) return;
    const viewport = track.current;
    drag.current = {id:event.pointerId,x:event.clientX,position:viewport.scrollLeft,scale:viewport.getBoundingClientRect().width/viewport.clientWidth};
  }
  function moveDrag(event) {
    const gesture = drag.current;
    if (!gesture || event.pointerId!==gesture.id) return;
    const viewport = track.current;
    const distance = (event.clientX-gesture.x)/gesture.scale;
    if (!viewport.hasPointerCapture(event.pointerId) && Math.abs(distance)<5) return;
    viewport.setPointerCapture(event.pointerId);
    viewport.dataset.dragging = '';
    viewport.scrollLeft = gesture.position-distance;
  }
  function endDrag(event) {
    if (drag.current?.id!==event.pointerId) return;
    drag.current = null;
    const viewport = track.current;
    if (!viewport.hasAttribute('data-dragging')) return;
    const next = Math.round(viewport.scrollLeft/viewport.clientWidth);
    delete viewport.dataset.dragging;
    goTo(next);
  }

  return <div className="seasonal-preview" role="group" aria-label="Галерея зимней карты">
    <div className="seasonal-gallery-track" tabIndex={0} aria-label="Превью зимней карты"
      ref={track} onScroll={event=>setPage(Math.round(event.currentTarget.scrollLeft/event.currentTarget.clientWidth))}
      onKeyDown={keyDown} onPointerDown={startDrag} onPointerMove={moveDrag}
      onPointerUp={endDrag} onPointerCancel={endDrag} onPointerLeave={event=>{if(!track.current.hasPointerCapture(event.pointerId))endDrag(event);}}>
      {previews.map((preview,index)=>{
        const active = index===page;
        return <div className="seasonal-gallery-page" key={preview.effect} id={id+'-'+index} role="group"
          aria-roledescription="слайд" aria-label={preview.label+', '+(index+1)+' из '+previews.length} aria-hidden={!active}>
          <GalleryPreview preview={preview} active={active} reducedMotion={reducedMotion} takeFailure={scenario.takeFailure}/>
        </div>;
      })}
    </div>
    <MapArtworkLogo/>
    <MapThemeBadge>светлая и тёмная</MapThemeBadge>
    {!scenario.applied && <img className="seasonal-detail-badge" src={vipBadge} alt="Blink VIP"/>}
    <div className="seasonal-pager" role="group" aria-label="Кадры галереи">
      {previews.map((preview,index)=><button key={preview.effect} type="button" aria-label={preview.label}
        aria-controls={id+'-'+index} aria-pressed={page===index} onClick={()=>goTo(index)}/>)}
    </div>
  </div>;
}

export function SeasonalDetail({scenario, onClose, settingsOrigin}) {
  return <StyleScreen label="Зима · стиль карты" appearance="sheet" onClose={onClose}>
    <div className="style-detail-scroll">
      <h1>зима</h1>
      <p className="style-detail-description">сезонный стиль Blink. карта меняется вместе со временем года</p>
      <WinterGallery scenario={scenario}/>
      <SeasonalApplyMessage scenario={scenario}/>
    </div>
    <div className="style-detail-footer">
      {scenario.applied ? <span className="style-already" role="status">уже выбрано</span> :
        scenario.vip ? <button className="style-primary" disabled={scenario.applyStatus!=='idle'} onClick={scenario.apply}>{scenario.applyStatus==='loading'?'загружаем стиль…':'применить'}</button> :
        <a className="style-primary" href={'#/market/maps/vip'+(settingsOrigin?'/'+settingsOrigin:'')}>получить с Blink VIP</a>}
    </div>
  </StyleScreen>;
}
