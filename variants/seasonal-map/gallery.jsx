import React, {useId, useLayoutEffect, useRef, useState} from 'react';
import {appliedMapImages, MapArtwork, MapArtworkLogo} from '../../map-styles.jsx';

export const retrySource = (src, count) => count ? src+'?retry='+count : src;

export function PreviewLoadError({retry}) {
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

export function MapPreviewFrame({style, src, active, pin = true, limited, badge, className = '', children}) {
  const [attempt,setAttempt] = useState(0);
  const [status,setStatus] = useState('loading');
  const ready = status==='loaded';

  function retry() {
    setStatus('loading');
    setAttempt(count=>count+1);
  }

  return <MapArtwork style={style}
    className={'style-detail-image seasonal-gallery-art'+(ready?'':' is-awaiting-poster')+(className?' '+className:'')}
    src={retrySource(src,attempt)} pin={pin && ready && 'detail'} showLogo={false} limited={limited} badge={badge}
    onImageLoad={()=>setStatus('loaded')} onImageError={()=>setStatus('error')}>
    {active && status==='loading' && <PreviewLoader/>}
    {active && status==='error' && <PreviewLoadError retry={retry}/>}
    {active && ready && children}
  </MapArtwork>;
}

export function MapPreviewGallery({label, trackLabel, frames, renderFrame, children, className = '', slider = true, previewIndex = 0, previewSelection}) {
  const track = useRef(null);
  const drag = useRef(null);
  const id = useId();
  const [page,setPage] = useState(previewIndex);
  const activePage = slider?page:previewIndex;

  function goTo(index) {
    const viewport = track.current;
    const next = Math.max(0,Math.min(frames.length-1,index));
    viewport.scrollTo({left:next*viewport.clientWidth,behavior:'instant'});
    setPage(next);
  }
  useLayoutEffect(()=>{
    if (slider) goTo(previewIndex);
  },[slider,previewIndex,previewSelection]);

  function keyDown(event) {
    if (event.target!==track.current) return;
    const destinations = {ArrowLeft:page-1,ArrowRight:page+1,Home:0,End:frames.length-1};
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

  const sliderHandlers = slider ? {
    onScroll: event=>setPage(Math.round(event.currentTarget.scrollLeft/event.currentTarget.clientWidth)),
    onKeyDown: keyDown,
    onPointerDown: startDrag,
    onPointerMove: moveDrag,
    onPointerUp: endDrag,
    onPointerCancel: endDrag,
    onPointerLeave: event=>{if(!track.current.hasPointerCapture(event.pointerId))endDrag(event);},
  } : {};

  return <div className={'seasonal-preview'+(className?' '+className:'')} role="group" aria-label={label}>
    <div className={'seasonal-gallery-track'+(slider?'':' is-static-preview')} tabIndex={slider?0:undefined}
      aria-label={trackLabel} ref={track} {...sliderHandlers}>
      {frames.map((frame,index)=>{
        const active = index===activePage;
        return <div className="seasonal-gallery-page" key={frame.label} id={id+'-'+index} role="group"
          aria-roledescription={slider?'слайд':undefined}
          aria-label={frame.label+(slider?', '+(index+1)+' из '+frames.length:'')} aria-hidden={!active}>
          {renderFrame(frame,active,index)}
        </div>;
      })}
    </div>
    {children}
    {slider && <div className="seasonal-pager" role="group" aria-label="Кадры галереи">
      {frames.map((frame,index)=><button key={frame.label} type="button" aria-label={frame.label}
        aria-controls={id+'-'+index} aria-pressed={page===index} onClick={()=>goTo(index)}/>)}
    </div>}
  </div>;
}

const gtaFrames = [
  {label:'городские кварталы', src:appliedMapImages.gta, original:true},
  {label:'река и мосты', src:'./seasonal-assets/gta-gallery-river.webp'},
  {label:'стадион и парк', src:'./seasonal-assets/gta-gallery-stadium.webp'},
];

export function GtaGallery() {
  return <MapPreviewGallery className="gta-gallery" label="Галерея стиля «Потрачено»" trackLabel="Превью стиля «Потрачено»" frames={gtaFrames}
    renderFrame={(frame,active)=><MapPreviewFrame style="gta" src={frame.src} active={active} pin={frame.original===true}
      className={frame.original?'':'gta-scene-art'} limited badge="только тёмная"/>}>
    <MapArtworkLogo/>
  </MapPreviewGallery>;
}
