import React,{useState,useEffect,useRef} from 'react';
import {createRoot} from 'react-dom/client';
import MapScreen from './.generated/map.tsx';
import ProfileScreen from './profile.jsx';
import ChatsScreen from './.generated/chats.tsx';
import MarketScreen from './market.jsx';
import MyFriends from './.generated/friends.tsx';
import Recommendations from './.generated/recommendations.tsx';
import FriendActions from './.generated/friendactions.tsx';
import FriendTitle from './.generated/friendtitle.tsx';
import FriendsGlow from './.generated/glow.tsx';
import {currentPermanentStyle, appliedMapImages, MapStyleSettings, SettingsIndex, setPermanentStyle, StatusBar, styleNames} from './map-styles.jsx';
import {SeasonalApplyMessage, SeasonalControls, useSeasonalScenario} from './variants/seasonal-map/seasonal.jsx';
import {readWallet, saveWallet, getGtaOffer} from './market-model.mjs';

const tabs=[
  {id:'map',label:'карта',icon:'2b6a7.svg',pin:true},
  {id:'friends',label:'друзья',icon:'5f2ba.svg'},
  {id:'chats',label:'чаты',icon:'abe54.svg'},
  {id:'market',label:'маркет',icon:'c0ac6.svg',activeIcon:'map-style-market-tab-active.svg'},
  {id:'profile',label:'ты',icon:'dc87c.png',avatar:true}
];
const readRoute=()=>location.hash || '#/map';
function TabBar({active}){
  return <nav className="tab-bar" aria-label="Основные разделы">{tabs.map(tab=>{
    const selected=tab.id===active;
    const icon=selected && tab.activeIcon || tab.icon;
    return <a key={tab.id} href={'#/'+tab.id} aria-current={selected?'page':undefined} className={'tab-item '+(selected?'selected':'')} aria-label={tab.label}><span className={'tab-icon '+(tab.pin?'pin-icon':'')+(tab.avatar?' avatar-icon':'')}><img src={'./assets/'+icon} alt="" /></span><span>{tab.label}</span></a>;
  })}</nav>;
}
function InteractiveMap({style, theme}){
  const [position,setPosition]=useState({x:0,y:0});
  const gesture=useRef(null);
  const xLimit=style==='gta'?40:style==='seasonal'?130:null;
  const yLimit=style==='standard'?115:35;
  const clamp=(x,y)=>({x:Math.max(-(xLimit??692),Math.min(xLimit??343,x)),y:Math.max(-yLimit,Math.min(yLimit,y))});
  const offset=clamp(position.x,position.y);
  useEffect(()=>{setPosition({x:0,y:0});},[style]);
  return <div className="interactive-map" tabIndex={0} aria-label="Карта, перетащите для перемещения" data-style={style} data-theme={theme} style={{'--map-x':offset.x+'px','--map-y':offset.y+'px'}}
    onPointerDown={e=>{if(e.button!==0||e.target.closest('[data-name="top"],[data-name="tab_bar + button_group"],[data-name="StatusBar"],[data-name="MapLogoDark"],[data-name="HomeIndicator"]'))return;const scale=e.currentTarget.getBoundingClientRect().width/390;gesture.current={id:e.pointerId,x:e.clientX,y:e.clientY,position:offset,scale};e.currentTarget.setPointerCapture(e.pointerId);e.currentTarget.classList.add('dragging');e.preventDefault();}}
    onPointerMove={e=>{const g=gesture.current;if(g&&g.id===e.pointerId)setPosition(clamp(g.position.x+(e.clientX-g.x)/g.scale,g.position.y+(e.clientY-g.y)/g.scale));}}
    onLostPointerCapture={e=>{gesture.current=null;e.currentTarget.classList.remove('dragging');}}
    onPointerUp={e=>{if(e.currentTarget.hasPointerCapture(e.pointerId))e.currentTarget.releasePointerCapture(e.pointerId);}}
    onPointerCancel={e=>{gesture.current=null;e.currentTarget.classList.remove('dragging');}}
    onKeyDown={e=>{const delta={ArrowLeft:[40,0],ArrowRight:[-40,0],ArrowUp:[0,40],ArrowDown:[0,-40]}[e.key];if(delta){e.preventDefault();setPosition(p=>clamp(p.x+delta[0],p.y+delta[1]));}else if(e.key==='Home'){e.preventDefault();setPosition({x:0,y:0});}}}>
    <MapScreen artwork={appliedMapImages[style]}/>
  </div>;
}
function FriendsScreen({active}){
  const [query,setQuery]=useState('');
  const list=useRef(null);
  const initialized=useRef(false);
  useEffect(()=>{const row=list.current?.querySelector('[data-node-id="118790:104960"]');if(active&&row&&!initialized.current){row.scrollLeft=row.scrollWidth-row.clientWidth;initialized.current=true;}},[active]);
  useEffect(()=>{
    const row=list.current?.querySelector('[data-node-id="118790:104960"]');if(!row)return;
    let drag=null;
    const scale=()=>row.closest('.phone').getBoundingClientRect().width/390;
    const down=e=>{if(e.pointerType!=='mouse'||e.button!==0)return;drag={id:e.pointerId,x:e.clientX,start:row.scrollLeft,scale:scale()};row.setPointerCapture(e.pointerId);row.classList.add('dragging');e.preventDefault();};
    const move=e=>{if(drag&&e.pointerId===drag.id)row.scrollLeft=drag.start-(e.clientX-drag.x)/drag.scale;};
    const end=e=>{drag=null;row.classList.remove('dragging');if(row.hasPointerCapture(e.pointerId))row.releasePointerCapture(e.pointerId);};
    const wheel=e=>{if(Math.abs(e.deltaX)>Math.abs(e.deltaY)||e.ctrlKey)return;const max=row.scrollWidth-row.clientWidth;const next=Math.max(0,Math.min(max,row.scrollLeft+e.deltaY));if(next!==row.scrollLeft){e.preventDefault();row.scrollLeft=next;}};
    row.addEventListener('pointerdown',down);row.addEventListener('pointermove',move);row.addEventListener('pointerup',end);row.addEventListener('pointercancel',end);row.addEventListener('lostpointercapture',end);row.addEventListener('wheel',wheel,{passive:false});
    return()=>{row.removeEventListener('pointerdown',down);row.removeEventListener('pointermove',move);row.removeEventListener('pointerup',end);row.removeEventListener('pointercancel',end);row.removeEventListener('lostpointercapture',end);row.removeEventListener('wheel',wheel);};
  },[]);
  useEffect(()=>{
    const rows=list.current?.querySelector('[data-node-id="118790:104576"]');
    if(!rows)return;
    [...rows.children].forEach(row=>{row.hidden=!!query&&!row.textContent.toLocaleLowerCase('ru').includes(query.toLocaleLowerCase('ru'));});
  },[query]);
  return <div className="friends-page">
    <StatusBar/>
    <header className="friends-header"><FriendTitle/></header>
    <div className="friends-scroll" ref={list} data-scroll="friends" tabIndex={0} aria-label="Список друзей">
      <section className="friend-actions"><FriendActions/></section>
      <section className="my-friends"><MyFriends/></section>
      <section className="recommended"><Recommendations/></section>
    </div>
    <div className="friends-glow"><FriendsGlow/></div>
    <label className="friends-search"><img src="./assets/42b45.svg" alt=""/><input aria-label="Поиск друзей" placeholder="имя или ник" value={query} onChange={e=>setQuery(e.target.value)}/>{query&&<button aria-label="Очистить поиск" onClick={()=>setQuery('')}>×</button>}</label>
    <div className="home-indicator"/>
  </div>;
}
function useFit(seasonal){
  const [scale,setScale]=useState(1);
  useEffect(()=>{const fit=()=>setScale(Math.min(innerWidth/390,(innerHeight-(seasonal&&innerWidth<=840?42:0))/844,1));fit();addEventListener('resize',fit);return()=>removeEventListener('resize',fit);},[seasonal]);
  return scale;
}
function App(){
  const [route,setRoute]=useState(readRoute);
  const [page,subpage,origin]=route.replace(/^#\/?/,'').split('/');
  const active=tabs.some(t=>t.id===page)?page:'map';
  const seasonal=document.body.dataset.variant==='seasonal';
  const gtaOffer=getGtaOffer(seasonal);
  const themeKey=seasonal?'blink-seasonal-theme-v1':'blink-map-theme-v1';
  const [theme,setTheme]=useState(()=>{
    try {const saved=localStorage.getItem(themeKey);if (['light','dark','system'].includes(saved))return saved;} catch {}
    return 'light';
  });
  const walletKey=seasonal?'blink-market-seasonal-v1':undefined;
  const [wallet,setWallet]=useState(()=>readWallet(localStorage,walletKey));
  const scenario=useSeasonalScenario(seasonal,()=>setWallet(previous=>setPermanentStyle(previous,'standard')));
  const selected=scenario.applied?'seasonal':currentPermanentStyle(wallet);
  const styleOverlay=active==='profile'&&['map-style','settings'].includes(subpage);
  const scale=useFit(seasonal);
  const returnTo=origin==='market'?'#/market/maps/seasonal':origin==='edit'?'#/profile':'#/profile/settings';
  function selectPermanent(style) {
    scenario.deselect();
    setWallet(previous=>setPermanentStyle(previous,style));
  }
  function selectStyle(style) {
    if (style==='seasonal') scenario.apply();
    else selectPermanent(style);
  }
  useEffect(()=>{const update=()=>setRoute(readRoute());addEventListener('hashchange',update);if(!location.hash)history.replaceState(null,'','#/map');return()=>removeEventListener('hashchange',update);},[]);
  useEffect(()=>{try {localStorage.setItem(themeKey,theme);} catch {}},[theme,themeKey]);
  useEffect(()=>{saveWallet(localStorage,wallet,walletKey);},[wallet,walletKey]);
  useEffect(()=>{document.title='Blink — '+tabs.find(t=>t.id===active).label;},[active]);
  return <>
    <main className="stage" style={{width:390*scale,height:844*scale}}><div className="phone" style={{transform:'scale('+scale+')'}}>
      <div className="screens" inert={styleOverlay}>
        <section className="source-screen map-screen" aria-label="Карта" hidden={active!=='map'}><InteractiveMap style={selected} theme={theme}/></section>
        <section className="source-screen friends-screen" aria-label="Друзья" hidden={active!=='friends'}><FriendsScreen active={active==='friends'}/></section>
        <section className="source-screen chats-screen" aria-label="Чаты" hidden={active!=='chats'}><ChatsScreen/></section>
        <section className="source-screen market-screen" aria-label="Маркет" hidden={active!=='market'}><MarketScreen {...{wallet,setWallet,selected,theme,setTheme,scenario,selectPermanent,gtaOffer}}/></section>
        <section className="source-screen profile-screen" aria-label="Профиль" hidden={active!=='profile'}><ProfileScreen mapStyle={styleNames[selected]}/></section>
      </div>
      {!styleOverlay && <TabBar active={active}/>}
      {styleOverlay && (subpage==='settings'?<SettingsIndex onClose={()=>{location.hash='#/profile';}}/>:
        <MapStyleSettings wallet={wallet} selected={selected} price={gtaOffer.price} theme={theme} setTheme={setTheme}
          seasonal={seasonal} vip={scenario.vip} onChoose={selectStyle} onClose={()=>{location.hash=returnTo;}}
          settingsOrigin={origin==='edit'?'edit':'settings'} applyStatus={scenario.applyStatus} feedback={seasonal && <SeasonalApplyMessage scenario={scenario}/>}/>)}
    </div></main>
    {seasonal && <SeasonalControls scenario={scenario}/>}
  </>;
}
createRoot(document.getElementById('root')).render(<App/>);
