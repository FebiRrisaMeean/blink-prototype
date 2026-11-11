import React,{useState,useEffect,useRef,useLayoutEffect} from 'react';
import {createPortal} from 'react-dom';
import Stickers from './.generated/market.tsx';
import Tails,{Tail,Package} from './.generated/market-tails.tsx';
import Maps,{MapStyle} from './.generated/market-maps.tsx';
import Gifts from './.generated/market-gifts.tsx';
import StickerItem from './.generated/item-stickers.tsx';
import TailItem from './.generated/item-tail.tsx';
import OwnedItem from './.generated/item-owned.tsx';
import ArchiveItem from './.generated/item-archive.tsx';
import MapItem from './.generated/item-map.tsx';
import GiftCompose from './.generated/gift-compose.tsx';
import RecipientSource from './.generated/gift-recipients.tsx';
import {ModalSheet as CoinPackSheet} from './.generated/coin-packs.tsx';
import {productNames as names,giftImages,stickerSlides,product,productById,readWallet,saveWallet,cleanWallet,purchase,topUp,coinPacks} from './market-model.mjs';

const categories=[['stickers','стикеры',Stickers],['tails','хвосты',Tails],['maps','карты',Maps],['gifts','подарки',Gifts]];
const catalogScroll={stickers:'122634:86147',tails:'123450:103465',maps:'122710:229519',gifts:'95408:39934'};
const q=(root,id)=>root?.querySelector('[data-node-id="'+id+'"]');
function MarketHeader({balance,onCoins,blocked}){return <div className="market-fixed-header" inert={blocked} aria-hidden={blocked||undefined}><div className="status-bar"><span className="time">4:20</span><span className="brand"><img src="./assets/f548a.svg" alt="Blink"/></span><img className="system-icons" src="./assets/2f068.svg" alt=""/></div><header className="market-header"><h1>маркет</h1><button className="market-balance" onClick={onCoins} aria-label="Пополнить баланс"><img src="./assets/d8eee.svg" alt=""/><span>{balance.toLocaleString('ru-RU')}</span><span className="market-plus"><img src="./assets/3312e.svg" alt=""/></span></button></header></div>;}
const go=path=>{location.hash='#/market/'+path;};
const readRoute=()=>location.hash.replace(/^#\/?/,'').split('/');
function useRoute(){const [r,set]=useState(readRoute);useEffect(()=>{const f=()=>set(readRoute());addEventListener('hashchange',f);return()=>removeEventListener('hashchange',f);},[]);return r;}
const dialogTargets=root=>[...root.querySelectorAll('button:not([disabled]),a[href],[tabindex="0"],textarea,input')].filter(n=>n.getClientRects().length&&!n.closest('[hidden],[inert]'));
function useDialog(ref,onClose,autofocus){
 const dismiss=useRef(onClose);dismiss.current=onClose;
 useEffect(()=>{
  const root=ref.current,previous=document.activeElement;if(!root)return;
  const first=autofocus?root.querySelector(autofocus):dialogTargets(root)[0];(first||root).focus({preventScroll:true});
  const key=e=>{const top=[...document.querySelectorAll('[role="dialog"][aria-modal="true"]')].filter(n=>n.getClientRects().length&&!n.closest('[inert]')).at(-1);if(top!==root)return;
   if(e.key==='Escape'){e.preventDefault();e.stopPropagation();dismiss.current();}
   if(e.key==='Tab'){const targets=dialogTargets(root),first=targets[0],last=targets.at(-1);if(!first){e.preventDefault();root.focus();}else if(e.shiftKey&&(document.activeElement===first||!root.contains(document.activeElement))){e.preventDefault();last.focus();}else if(!e.shiftKey&&(document.activeElement===last||!root.contains(document.activeElement))){e.preventDefault();first.focus();}}
  };
  document.addEventListener('keydown',key);return()=>{document.removeEventListener('keydown',key);if(previous?.isConnected&&!previous.closest('[hidden],[inert]'))previous.focus({preventScroll:true});};
 },[]);
}
function Sheet({label,onClose,children,className=''}){const ref=useRef(null);useDialog(ref,onClose);return <div ref={ref} tabIndex={-1} className={'market-sheet '+className} role="dialog" aria-modal="true" aria-label={label}><button className="sheet-close" onClick={onClose} aria-label="Закрыть">×</button>{children}</div>;}
function makeAction(el,label,action){if(!el)return;el.setAttribute('role','button');el.tabIndex=0;el.setAttribute('aria-label',label);el.dataset.action=action;el.classList.add('market-action');}
function CollectionArtwork({p}){
 if(p.category==='maps')return <MapStyle showNewBadge={false} showPrice={false}/>;
 return <div className="collection-art"><Package type="Collection"/>{p.category==='tails'?<div className="collection-tail"><Tail type={p.name==='дементор'?'dementor':p.name==='кото йота'?'yota':'rocket'}/></div>:<img className="collection-sticker" src={'./assets/'+['952aa.png','510d6.png','00566.png','c5116.png'][stickerSlides[p.index]]} alt=""/>}</div>;
}
function Catalog({category,Component,active,onTopUp,balance,owned,blocked}){
 const ref=useRef(null),[collectionHost,setCollectionHost]=useState(null);
 useLayoutEffect(()=>{const scroll=q(ref.current,catalogScroll[category]);if(!scroll)return;const host=document.createElement('div');host.className='market-collection-host';const heading=[...scroll.children].find(n=>n.textContent.includes('уже у тебя'));scroll.insertBefore(host,heading?.nextSibling||null);setCollectionHost(host);return()=>host.remove();},[category]);
 useEffect(()=>{
  const root=ref.current;const scroll=q(root,catalogScroll[category]);scroll?.classList.add('market-catalog-scroll');scroll?.setAttribute('aria-label','Каталог: '+categories.find(c=>c[0]===category)[1]);if(scroll)scroll.tabIndex=0;
  const cards=(category==='maps'?[q(root,'122886:55334'),...root.querySelectorAll('[id="node-122941_63470"],[id="node-122947_56480"]')]:[...root.querySelectorAll('[data-name="item box"],[data-name="item"]')].slice(0,names[category].length)).filter(el=>el&&!el.closest('[data-acquired-product]'));
  cards.filter(Boolean).forEach((el,index)=>{const p=product(category,index),has=p.owned||owned.includes(p.id);el.dataset.product=p.id;if(p.owned&&el.parentElement!==scroll)el.parentElement.classList.add('market-owned-row');makeAction(el,p.name+(p.soon?', скоро':p.archived?', архив':has?', в коллекции':', '+(p.free?'бесплатно':p.price+' блинкоинов')),'item/'+p.id);[...el.querySelectorAll('p')].filter(n=>/^\d+$|^бесплатно$/.test(n.textContent.trim())).forEach(n=>{n.parentElement.style.visibility=has?'hidden':'';});});
  const plus=root.querySelector('[data-name="Coin balance"] [data-name="Button"]');makeAction(plus,'Пополнить баланс','coins');
 },[category,owned]);
 useEffect(()=>{const n=ref.current?.querySelector('[data-name="Coin balance"] [data-name="value"] p');if(n)n.textContent=balance.toLocaleString('ru-RU');},[balance]);
 const handle=e=>{const a=e.target.closest('[data-action]');if(!a)return;if(e.type==='keydown'&&!['Enter',' '].includes(e.key))return;e.preventDefault();if(a.dataset.action==='coins')onTopUp(category);else go(category+'/'+a.dataset.action);};
 const acquired=owned.map(productById).filter(p=>p?.category===category&&!p.owned);
 return <div ref={ref} className={'market-catalog category-'+category} hidden={!active} inert={blocked} aria-hidden={blocked||undefined} onClick={handle} onKeyDown={handle}><Component/>{collectionHost&&acquired.length>0&&createPortal(<section className="market-acquired" aria-label="Новые предметы в коллекции">{category==='maps'&&<h2>уже у тебя</h2>}<div className="market-acquired-grid">{acquired.map(p=><button key={p.id} className="market-acquired-card" data-acquired-product={p.id} data-action={'item/'+p.id} aria-label={p.name+', в коллекции'}><CollectionArtwork p={p}/></button>)}</div></section>,collectionHost)}</div>;
}
function Item({p,onClose,onBuy,onSelect,owned,selected,blocked}){
 const ref=useRef(null);
 const unavailable=p.archived||p.soon;
 const Component=p.category==='stickers'?StickerItem:p.archived?ArchiveItem:p.category==='maps'?MapItem:(owned?OwnedItem:TailItem);
 useLayoutEffect(()=>{
  const root=ref.current;const modal=root.querySelector('[data-name="Modal sheet"]');modal?.classList.add('market-item-sheet');
  const header=modal?.querySelector('[data-name="HeaderView"] p');if(header)header.textContent=p.name;
  const paragraphs=[...root.querySelectorAll('p')];paragraphs.filter(n=>/^название предмета$/.test(n.textContent.trim())).forEach(n=>n.textContent=p.name);
  makeAction(modal?.querySelector('[data-name="Indicator"]'),'Закрыть товар и вернуться в каталог','close');
  const cta=[...root.querySelectorAll('[data-name="Button"]')].find(el=>/купить|выбрать|применить|Уже не получить/i.test(el.textContent));
  if(cta){cta.classList.add('market-source-cta');if(unavailable){cta.setAttribute('aria-disabled','true');cta.textContent=p.soon?'скоро':'уже не получить :/';cta.classList.add('market-unavailable');}else {makeAction(cta,owned?(selected?'Уже выбрано':'Выбрать '+p.name):'Купить '+p.name,'purchase');const t=cta.querySelector('p');if(t)t.textContent=owned?(selected?'выбрано':p.category==='maps'?'применить':'выбрать'):(p.free?'получить':'купить');const nums=[...cta.querySelectorAll('p')].filter(n=>/^\d+$/.test(n.textContent.trim()));nums.forEach((n,i)=>{n.textContent=i===0?String(p.free?0:p.price):'';});if(owned)nums.forEach(n=>n.parentElement.style.display='none');}}
  const tail=root.querySelector('[data-name="tail image"] img');if(tail&&p.category==='tails'){tail.src='./assets/'+(p.name==='дементор'?'0f67e.png':p.name==='кото йота'?'987e5.png':'tail-rocket-fill-1.png');if(p.name==='огненный хвост'){tail.parentElement.parentElement.style.inset='-36.34% -50.12% -36.34% -49.12%';tail.parentElement.style.transform='rotate(-50deg)';tail.style.filter='url(#market-tail-alpha)';}}
  root.querySelectorAll('[data-name="Close window bottom"]').forEach(el=>el.style.display='none');
  if(cta&&p.free&&!owned&&!unavailable)cta.setAttribute('aria-label','Получить '+p.name);
  if(p.soon){const timer=q(root,'84232:25536');if(timer)timer.style.display='none';}
  paragraphs.filter(n=>/Регина|Здесь прикольный|здесь прикольный/.test(n.textContent)||(p.category==='tails'&&n.textContent.trim().toLowerCase().startsWith('этот пак'))).forEach(n=>{n.textContent=p.category==='tails'?'Хвост для твоего пина на карте':p.category==='maps'?'Стиль твоей карты':'Стикеры для переписок с друзьями';});
  [...root.firstElementChild.children].filter(n=>!n.contains(modal)&&n.getAttribute('data-name')!=='StatusBar').forEach(n=>n.setAttribute('aria-hidden','true'));
  if(cta&&p.category==='maps'){
   cta.querySelector('.market-map-price')?.remove();cta.classList.toggle('market-map-purchase',!owned);
   if(!owned){const price=document.createElement('span');price.className='market-map-price';const coin=document.createElement('img');coin.src='./assets/d8eee.svg';coin.alt='';price.append(coin,document.createTextNode(String(p.price)));cta.append(price);}
  }
  if(p.archived){const remaining=q(root,'84208:22320')?.querySelector('p');if(remaining)remaining.textContent='0';if(p.category==='stickers'){['84208:22312','84208:22313'].forEach(id=>{const n=q(root,id);if(n)n.style.display='none';});}}
 },[p.id,owned,selected]);
 useDialog(ref,onClose);
 const activate=e=>{const a=e.target.closest('[data-action]');if(!a)return;if(e.type==='keydown'&&!['Enter',' '].includes(e.key))return;e.preventDefault();if(a.dataset.action==='close'){onClose();return;}if(unavailable)return;owned?onSelect(p):onBuy(p);};
 return <div className={'market-detail item-'+p.category+(p.archived?' item-archived':'')} ref={ref} role="dialog" aria-modal="true" aria-label={p.name} inert={blocked} aria-hidden={blocked||undefined} onClick={activate} onKeyDown={activate}>
  <Component initialSlide={stickerSlides[p.index]||0}/>
 </div>;
}
const giftFriends=[{name:'sandra',avatar:'2207c.png'},{name:'kate',avatar:'8b5b1.png'},{name:'даша',avatar:'d8597.png'},{name:'алекс',avatar:'dc87c.png'}];
function FriendPicker({onClose,onSelect}){
 const ref=useRef(null),[query,setQuery]=useState('');useDialog(ref,onClose,'input');
 const found=giftFriends.filter(f=>f.name.includes(query.trim().toLocaleLowerCase('ru')));
 useLayoutEffect(()=>{const root=ref.current;const group=q(root,'104843:376026');[...root.firstElementChild.children].filter(n=>n!==group&&n.getAttribute('data-name')!=='StatusBar'&&n.getAttribute('data-node-id')!=='104843:376025'&&n.getAttribute('data-name')!=='HomeIndicator').forEach(n=>{n.style.display='none';});const rows=[...group.querySelectorAll('[data-name="ContactCard / Base"]')];rows.forEach((row,i)=>{const f=giftFriends[i%giftFriends.length];makeAction(row,f.name,'friend/'+f.name);const name=row.querySelector('[data-name="UserName"] p')||[...row.querySelectorAll('p')].find(n=>n.textContent.trim()==='title');if(name)name.textContent=f.name;const image=row.querySelector('img');if(image)image.src='./assets/'+f.avatar;row.hidden=i>=8||!found.some(person=>person.name===f.name);[...row.querySelectorAll('p')].filter(n=>/^(в сети|не в сети|\d+.*назад)$/.test(n.textContent.trim())).forEach(n=>n.textContent=['в сети','36 мин назад','2 часа назад','1 день назад'][i%4]);});['104843:376031','104843:376077'].forEach(id=>{const count=q(root,id)?.querySelectorAll('p')[1];if(count)count.textContent=String(found.length);});const handle=group.querySelector('[data-name="Slider"]');makeAction(handle,'Закрыть выбор получателя','close');},[query]);
 const activate=e=>{const a=e.target.closest('[data-action]');if(!a)return;if(e.type==='keydown'&&!['Enter',' '].includes(e.key))return;e.preventDefault();a.dataset.action==='close'?onClose():onSelect(a.dataset.action.slice(7));};
 return <div ref={ref} tabIndex={-1} className="recipient-screen" data-empty={!found.length} role="dialog" aria-modal="true" aria-label="Выбор получателя" onClick={activate} onKeyDown={activate}><RecipientSource/><div className="recipient-search"><label><img src="./assets/a3dfa.svg" alt=""/><input aria-label="Поиск получателя" placeholder="имя или ник" value={query} onChange={e=>setQuery(e.target.value)}/></label><button aria-label={query?'Очистить поиск':'Закрыть выбор получателя'} onClick={()=>query?setQuery(''):onClose()}><img src="./assets/62c78.svg" alt=""/></button></div>{!found.length&&<p className="recipient-empty" role="status">никого не нашли</p>}</div>;
}
function CoinPicker({onClose,onChoose,onInfo}){const ref=useRef(null);useDialog(ref,onClose);useLayoutEffect(()=>{const root=ref.current;root.querySelectorAll('[data-name="_coin-cell"] [data-name="Button"]').forEach((n,i)=>makeAction(n,coinPacks[i].coins+' блинкоинов за '+coinPacks[i].rubles+' рублей','pack/'+i));makeAction(root.querySelector('[data-name="Indicator"]'),'Закрыть блинкоины','close');makeAction(q(root,'85130:157853'),'О блинкоинах','info');makeAction(q(root,'85130:75514'),'Восстановить покупки','info');},[]);const activate=e=>{const a=e.target.closest('[data-action]');if(!a)return;if(e.type==='keydown'&&!['Enter',' '].includes(e.key))return;e.preventDefault();a.dataset.action==='close'?onClose():a.dataset.action==='info'?onInfo():onChoose(coinPacks[Number(a.dataset.action.slice(5))]);};return <div ref={ref} tabIndex={-1} className="market-detail coin-detail" role="dialog" aria-modal="true" aria-label="Купить блинкоины" onClick={activate} onKeyDown={activate}><div className="coin-colored"/><div className="status-bar"><span className="time">4:20</span><img className="system-icons" src="./assets/2f068.svg" alt=""/></div><div className="coin-scroll"><CoinPackSheet/></div><div className="home-indicator"/></div>;}
function Gift({p,onClose,onPurchase,friend,setFriend,comment,setComment,anonymous,setAnonymous,blocked}){
 const ref=useRef(null);const [choose,setChoose]=useState(false);
 useDialog(ref,onClose);
 useLayoutEffect(()=>{const root=ref.current;const input=q(root,'95933:228773');input?.classList.add('gift-native-input');const toggle=q(root,'95945:229506');toggle?.setAttribute('hidden','');makeAction(q(root,'95933:228748'),'Подарить '+p.name,'gift-buy');makeAction(q(root,'95933:228778'),'Выбрать получателя','choose-friend');const title=q(root,'99679:176768');if(title)title.textContent=p.name;const price=q(root,'95933:228752');if(price)price.textContent=p.price;const name=q(root,'95933:228785')?.querySelector('p');if(name)name.textContent=friend||'выбрать друга';const img=q(root,'99679:176766')?.querySelector('img');if(img)img.src='./assets/'+giftImages[p.index];},[p.id,friend]);
 const handle=e=>{const el=e.target.closest('[data-action]');if(!el)return;if(e.type==='keydown'&&!['Enter',' '].includes(e.key))return;e.preventDefault();if(el.dataset.action==='choose-friend')setChoose(true);if(el.dataset.action==='gift-buy'){if(!friend)setChoose(true);else onPurchase(p);}};
 useLayoutEffect(()=>{const avatar=q(ref.current,'95933:228784')?.querySelector('img'),person=giftFriends.find(f=>f.name===friend);if(avatar&&person)avatar.src='./assets/'+person.avatar;},[friend]);
 useLayoutEffect(()=>{if(!p.free)return;const price=q(ref.current,'95933:228752');if(price){price.textContent='бесплатно';if(price.previousElementSibling)price.previousElementSibling.style.display='none';}},[p.id,friend]);
 return <div ref={ref} className="market-detail gift-detail" role="dialog" aria-modal="true" aria-label="Подготовка подарка" inert={blocked} aria-hidden={blocked||undefined} onClick={handle} onKeyDown={handle}><div className="gift-main" inert={choose} aria-hidden={choose||undefined}>
 <GiftCompose/><button className="gift-dismiss" onClick={onClose} aria-label="Закрыть подарок"><img src="./assets/4b7b2.svg" alt=""/></button>
 <label className="gift-comment"><span>коммент к подарку <small>{comment.length}/130</small></span><textarea maxLength={130} value={comment} onChange={e=>setComment(e.target.value)} placeholder="я кринж, я свободен" aria-label="Комментарий к подарку"/></label>
 <button className={'gift-toggle '+(anonymous?'is-on':'')} aria-label="Отправить анонимно" role="switch" aria-checked={anonymous} onClick={()=>setAnonymous(v=>!v)}><span/></button>
 </div>{choose&&<FriendPicker onClose={()=>setChoose(false)} onSelect={name=>{setFriend(name);setChoose(false);}}/>}
 </div>;
}
export default function Market(){
 const route=useRoute(),lastCategory=useRef('stickers');if(route[0]==='market'&&categories.some(c=>c[0]===route[1]))lastCategory.current=route[1];const category=lastCategory.current;const isMarket=route[0]==='market';const itemId=isMarket&&route[2]==='item'?route[3]:null;const candidate=productById(itemId),p=candidate?.category===category?candidate:null;
 const [wallet,setWallet]=useState(()=>readWallet(localStorage)),[sheet,setSheet]=useState(null),[notice,setNotice]=useState('');const {balance,owned,selected}=wallet;
 const [friend,setFriend]=useState(''),[comment,setComment]=useState(''),[anonymous,setAnonymous]=useState(false);
 const close=()=>go(category);
 useEffect(()=>{setSheet(null);},[route.join('/')]);
 useEffect(()=>{saveWallet(localStorage,wallet);},[wallet]);
 useEffect(()=>{if(!notice)return;const t=setTimeout(()=>setNotice(''),2800);return()=>clearTimeout(t);},[notice]);
 const buy=item=>setSheet({type:'buy',p:item});
 const select=item=>{setWallet(w=>({...w,selected:{...w.selected,[item.category]:item.id}}));setNotice(item.category==='maps'?'стиль карты выбран':'предмет выбран');};
 const confirm=()=>{if(sheet?.type!=='buy')return;const item=sheet.p,result=purchase(wallet,item);if(result.error==='balance'){setSheet({type:'insufficient',insufficient:true,required:item.price});return;}if(result.error){setSheet(null);return;}setWallet(result.wallet);setSheet(null);setNotice(item.category==='gifts'?'подарок подготовлен для '+friend:'предмет теперь у тебя');if(item.category==='gifts'){close();setComment('');setFriend('');}};
 const confirmTopUp=()=>{if(sheet?.type!=='topup')return;const result=topUp(wallet,sheet.pack.coins);if(result.error){setNotice('не удалось пополнить баланс');return;}setWallet(result.wallet);setSheet(null);setNotice('баланс пополнен');};
 return <div className="market-app">
 <svg width="0" height="0" className="market-filters" aria-hidden="true"><defs><filter id="market-tail-alpha" colorInterpolationFilters="sRGB"><feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 1 1 1 0 0"/></filter></defs></svg>
 {categories.map(([id,label,C])=><Catalog key={id} category={id} Component={C} active={category===id} onTopUp={()=>setSheet({type:'coins'})} balance={balance} owned={owned} blocked={!!itemId||!!sheet}/>)}
 <MarketHeader balance={balance} onCoins={()=>setSheet({type:'coins'})} blocked={!!itemId||!!sheet}/>
 <nav className="market-categories" aria-label="Разделы маркета" inert={!!itemId||!!sheet} aria-hidden={!!itemId||!!sheet||undefined}>{categories.map(([id,label])=><a href={'#/market/'+id} key={id} aria-current={category===id?'page':undefined}>{label}</a>)}</nav>
 {p&&(p.category==='gifts'?<Gift key={p.id} p={p} blocked={!!sheet} onClose={close} onPurchase={buy} {...{friend,setFriend,comment,setComment,anonymous,setAnonymous}}/>:<Item key={p.id} p={p} blocked={!!sheet} onClose={close} onBuy={buy} onSelect={select} owned={p.owned||owned.includes(p.id)} selected={selected[p.category]===p.id}/>)}
 {itemId&&!p&&<Sheet label="Товар не найден" onClose={close}><h2>товар не найден</h2><button className="market-primary" onClick={close}>вернуться в маркет</button></Sheet>}
 {sheet?.type==='coins'&&<CoinPicker onClose={()=>setSheet(null)} onChoose={pack=>setSheet({type:'topup',pack})} onInfo={()=>setSheet({type:'coin-info'})}/>}
 {sheet&&sheet.type!=='coins'&&<div className="market-scrim" onClick={()=>setSheet(null)}><div className="market-sheet-host" onClick={e=>e.stopPropagation()}><Sheet key={sheet.type} label={sheet.type==='buy'?'Демонстрационная покупка':sheet.type==='topup'?'Подтверждение пополнения':'Блинкоины'} onClose={()=>setSheet(null)}>{sheet.type==='buy'?<><h2>{sheet.p.category==='gifts'?'подарить '+friend+'?':(sheet.p.free?'получить предмет?':'купить предмет?')}</h2><p>{sheet.p.name}</p><strong className="market-total"><img src="./assets/d8eee.svg" alt=""/>{sheet.p.free?'бесплатно':sheet.p.price}</strong><p className="demo-note">Демонстрация покупки — реальные деньги не списываются</p><button className="market-primary" onClick={confirm}>подтвердить</button></>:sheet.type==='topup'?<><h2>пополнить баланс?</h2><strong className="market-total"><img src="./assets/d8eee.svg" alt=""/>{sheet.pack.coins}</strong><p>{sheet.pack.rubles.toLocaleString('ru-RU')} ₽</p><p className="demo-note">Демонстрация оплаты — реальные деньги не списываются</p><button className="market-primary" onClick={confirmTopUp}>пополнить в демо</button><button className="market-back" onClick={()=>setSheet({type:'coins'})}>назад к наборам</button></>:sheet.type==='coin-info'?<><h2>блинкоины</h2><p>Монеты для покупки предметов в маркете</p><p className="demo-note">В прототипе доступно только демонстрационное пополнение, восстановление реальных покупок не подключено</p><button className="market-primary" onClick={()=>setSheet({type:'coins'})}>к наборам</button></>:<><h2>не хватает блинкоинов</h2><p>Твой баланс</p><strong className="market-total"><img src="./assets/d8eee.svg" alt=""/>{balance.toLocaleString('ru-RU')}</strong><p>Для покупки нужно {sheet.required.toLocaleString('ru-RU')}</p><button className="market-primary" onClick={()=>setSheet({type:'coins'})}>пополнить баланс</button></>}</Sheet></div></div>}
 {notice&&<div className="market-toast" role="status">{notice}</div>}
 </div>;
}
