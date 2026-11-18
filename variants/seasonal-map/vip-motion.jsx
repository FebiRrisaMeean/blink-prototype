import React, {useEffect, useId, useRef, useState} from 'react';
import {paywallDust} from './vip-dust.js';
import {paywallSparkle} from './vip-sparkle.js';

const motionAssets = './seasonal-assets/motion/';
const reducedMotion = '(prefers-reduced-motion: reduce)';

export function useVipMotionPreferences(active) {
  const [reduced, setReduced] = useState(()=>matchMedia(reducedMotion).matches);
  const [visible, setVisible] = useState(()=>!document.hidden);
  useEffect(()=>{
    const media = matchMedia(reducedMotion);
    const updateMotion = ()=>setReduced(media.matches);
    const updateVisibility = ()=>setVisible(!document.hidden);
    media.addEventListener('change',updateMotion);
    document.addEventListener('visibilitychange',updateVisibility);
    updateMotion();
    return ()=>{
      media.removeEventListener('change',updateMotion);
      document.removeEventListener('visibilitychange',updateVisibility);
    };
  },[]);
  return {enabled: !reduced, active: !reduced && visible && active};
}

export function useVipRegion(ref, motion) {
  const [region, setRegion] = useState({seen:false, visible:false});
  useEffect(()=>{
    const node = ref.current;
    const scroller = node.closest('.vip-landing-scroll');
    const observer = new IntersectionObserver(([entry])=>{
      const {isIntersecting, intersectionRatio} = entry;
      setRegion(previous=>{
        const seen = previous.seen || isIntersecting && intersectionRatio>=.16;
        const visible = isIntersecting && intersectionRatio>=.05;
        return seen===previous.seen && visible===previous.visible ? previous : {seen,visible};
      });
    },{root:scroller,threshold:[.05,.16]});
    observer.observe(node);
    return ()=>observer.disconnect();
  },[ref]);
  return {
    revealed: !motion.enabled || region.seen,
    playing: motion.active && region.seen && region.visible,
  };
}

function useCanvasMotion(ref, mount, enabled, playing) {
  const animation = useRef(null);
  useEffect(()=>{
    if(!enabled) return;
    const effect = mount(ref.current);
    effect.pause();
    animation.current = effect;
    return ()=>{
      effect.stop();
      animation.current = null;
    };
  },[enabled,mount,ref]);
  useEffect(()=>{
    if(playing) animation.current?.resume();
    else animation.current?.pause();
  },[enabled,playing]);
}

const mountNicknameDust = canvas => paywallDust.mount(canvas,paywallDust.preset('paywall'));
const mountHeroSparkle = canvas => paywallSparkle.mount(canvas,paywallSparkle.preset('paywall',{
  w:390,h:512,star:{x:195,y:270,w:284},mouth:.26,
  sizeSpark:[1.54,3.78],sizeDot:[.77,2.59],
}));

export function VipHero({motion}) {
  const hero = useRef(null), particles = useRef(null), video = useRef(null);
  const {playing} = useVipRegion(hero,motion);
  const [mediaFailed,setMediaFailed] = useState(false);
  const animate = motion.enabled && !mediaFailed;
  useCanvasMotion(particles,mountHeroSparkle,animate,playing);
  useEffect(()=>{
    const element = video.current;
    if(!element) return;
    if(playing) element.play().catch(()=>{});
    else element.pause();
    return ()=>element.pause();
  },[animate,playing]);

  return <div className="vip-landing-hero vip-motion-region" ref={hero}
    data-motion={animate?'animated':'still'} data-playing={playing}>
    <img className="vip-figma-art vip-hero-glow" src="./seasonal-assets/vip-glow.png" alt=""/>
    {animate ? <div className="vip-hero-live" aria-hidden="true">
      <div className="vip-hero-rays">
        <img className="vip-motion-loop" src={motionAssets+'hero-rays.png'} alt=""/>
      </div>
      <canvas className="vip-hero-particles" ref={particles} width="390" height="512"/>
      <div className="vip-hero-halo vip-motion-loop"/>
      <img className="vip-hero-logo" src="./seasonal-assets/vip-success-name.png" alt=""/>
      <div className="vip-hero-star-entry">
        <video className="vip-hero-star vip-motion-loop" ref={video}
          poster={motionAssets+'hero-star-still.png'} preload="metadata" muted loop playsInline
          onError={()=>setMediaFailed(true)}>
          <source src={motionAssets+'hero-star.webm'} type="video/webm"/>
          <source src={motionAssets+'hero-star-alpha.mp4'} type={'video/mp4; codecs="hvc1"'}
            onError={()=>{if(!video.current?.currentSrc)setMediaFailed(true);}}/>
        </video>
      </div>
      <div className="vip-hero-glints">
        <img className="vip-motion-loop" src={motionAssets+'hero-glint.png'} alt=""/>
        <img className="vip-motion-loop" src={motionAssets+'hero-glint.png'} alt=""/>
        <img className="vip-motion-loop" src={motionAssets+'hero-shine.svg'} alt=""/>
      </div>
    </div> : <img className="vip-figma-art vip-hero-still" src="./seasonal-assets/vip-hero.png" alt=""/>}
    <img className="vip-figma-art vip-hero-laurels" src="./seasonal-assets/vip-laurels.png" alt=""/>
    <h1>тебя будет видно<br/>в каждом чате</h1>
  </div>;
}

export function VipGuestsArt() {
  return <div className="vip-guests-art" aria-hidden="true">
    <div className="vip-guests-sweep vip-motion-loop">
      <div className="vip-guests-bob vip-motion-loop"><img src={motionAssets+'guest-eyes.png'} alt=""/></div>
    </div>
    <img className="vip-guests-avatars" src={motionAssets+'guest-avatars.png'} alt=""/>
  </div>;
}

export function VipFontArt() {
  return <div className="vip-font-art" aria-hidden="true">
    <img className="vip-font-chasto" src={motionAssets+'font-chasto.png'} alt=""/>
    <div className="vip-font-tryah">
      <div className="vip-font-shake vip-motion-loop">
        <img src={motionAssets+'font-tryah.png'} alt=""/>
        <span className="vip-font-shine vip-motion-loop"/>
      </div>
    </div>
  </div>;
}

export function VipLimitedArt() {
  return <div className="vip-limited-art vip-motion-loop" aria-hidden="true">
    <img className="vip-figma-art" src="./seasonal-assets/vip-stickers.png" alt=""/>
    <img className="vip-figma-art" src="./seasonal-assets/vip-tail.png" alt=""/>
  </div>;
}

function VipName() {
  const id = useId();
  const stroke = id+'stroke', shine = id+'shine', mask = id+'mask';
  return <svg className="vip-nickname-name-svg" width="132" height="26" viewBox="0 0 132 26">
    <defs>
      <linearGradient id={stroke}>
        <stop offset="0" stopColor="#b1cbe0"/><stop offset=".18" stopColor="#eaeff3"/>
        <stop offset=".31" stopColor="#c2d4e1"/><stop offset=".49" stopColor="#ffebfa"/>
        <stop offset=".62" stopColor="#fff3fc"/><stop offset=".79" stopColor="#bdb7e2"/>
        <stop offset=".95" stopColor="#deebf6"/>
      </linearGradient>
      <linearGradient id={shine} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="185" y2="0" spreadMethod="repeat">
        <stop offset="0" stopColor="#fff" stopOpacity="0"/><stop offset=".33" stopColor="#fff" stopOpacity="0"/>
        <stop offset=".5" stopColor="#fff"/><stop offset=".67" stopColor="#fff" stopOpacity="0"/>
        <stop offset="1" stopColor="#fff" stopOpacity="0"/>
      </linearGradient>
      <mask id={mask}><text x="3" y="19" fill="#000" stroke="#fff">красивое имя</text></mask>
    </defs>
    <text x="3" y="19" fill="#000" stroke={'url(#'+stroke+')'}>красивое имя</text>
    <g mask={'url(#'+mask+')'}><rect className="vip-name-shimmer vip-motion-loop" x="-185" y="-4" width="728" height="34" fill={'url(#'+shine+')'}/></g>
  </svg>;
}

export function VipNicknameArt({enabled, revealed, playing}) {
  const dust = useRef(null);
  useCanvasMotion(dust,mountNicknameDust,enabled && revealed,playing);
  return <div className="vip-nickname-art" aria-hidden="true">
    <img className="vip-nickname-phone" src={motionAssets+'nickname-phone.png'} alt=""/>
    <canvas className="vip-nickname-dust" width="200" height="200" ref={dust}/>
    <img className="vip-nickname-profile" src={motionAssets+'nickname-profile.png'} alt=""/>
    <div className="vip-nickname-plate">
      <img className="vip-nickname-foil vip-motion-loop" src={motionAssets+'nickname-foil.png'} alt=""/>
      <span className="vip-nickname-icon"><img src={motionAssets+'nickname-copy.svg'} alt=""/></span>
      <span className="vip-nickname-handle">красивый_ник</span>
    </div>
    <div className="vip-nickname-name">
      <VipName/>
      <span className="vip-nickname-star-wrap">
        <img className="vip-nickname-star vip-motion-loop" src={motionAssets+(playing?'nickname-star.png':'nickname-star-still.png')} alt=""/>
      </span>
    </div>
  </div>;
}
