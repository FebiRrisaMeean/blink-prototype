import React, {useEffect, useRef, useState} from 'react';

const assets = './assets/';
export const styleNames = {standard: 'стандарт', gta: 'потрачено', seasonal: 'зима'};
export const mapImages = {standard: assets+'map-style-standard.webp', gta: assets+'map-style-gta.webp', seasonal: assets+'map-style-winter.webp'};
export const appliedMapImages = {gta: assets+'map-style-gta-map.webp', seasonal: assets+'map-style-winter-map.webp'};
const coverImages = {...mapImages, seasonal: assets+'map-style-winter-cover.webp'};
const themes = [['light', 'светлый'], ['dark', 'тёмный'], ['system', 'системный']];
const gtaText = 'первый стиль карты Blink в духе GTA. в главных ролях — ты и твои друзья';
export const ownsGta = wallet => wallet.owned.some(id => /^maps-[012]$/.test(id));
export const currentPermanentStyle = wallet => wallet.selected.maps ? 'gta' : 'standard';

export function setPermanentStyle(wallet, style) {
  const selected = {...wallet.selected};
  if (style === 'standard') delete selected.maps;
  else selected.maps = selected.maps || wallet.owned.find(id => /^maps-[012]$/.test(id));
  return {...wallet, selected};
}

export function StatusBar({brand = true}) {
  return <div className="status-bar"><span className="time">4:20</span>{brand && <span className="brand"><img src={assets+'f548a.svg'} alt="Blink"/></span>}<img className="system-icons" src={assets+'2f068.svg'} alt=""/></div>;
}

export function useScreenFocus(ref, onClose) {
  const close = useRef(onClose);
  close.current = onClose;
  useEffect(() => {
    const screen = ref.current;
    const previous = document.activeElement;
    const focusable = () => [...screen.querySelectorAll('button:not(:disabled),a[href],input:not(:disabled),[tabindex="0"]')].filter(node => node.getClientRects().length && !node.closest('[inert]'));
    screen.focus({preventScroll: true});
    function keyboard(event) {
      if (screen.closest('[inert]') || event.defaultPrevented) return;
      if (event.key === 'Escape') {
        event.preventDefault();
        close.current();
      } else if (event.key === 'Tab') {
        const elements = focusable();
        const target = event.shiftKey ? elements.at(-1) : elements[0];
        const edge = event.shiftKey ? elements[0] : elements.at(-1);
        if (target && (!screen.contains(document.activeElement) || document.activeElement === edge)) {
          event.preventDefault();
          target.focus({preventScroll: true});
        }
      }
    }
    document.addEventListener('keydown', keyboard);
    return () => {
      document.removeEventListener('keydown', keyboard);
      requestAnimationFrame(() => {
        if (document.activeElement === document.body && previous?.isConnected && !previous.closest('[hidden],[inert]')) previous.focus({preventScroll: true});
      });
    };
  }, []);
}

export function StyleScreen({label, onClose, appearance = 'picker', children, blocked}) {
  const ref = useRef(null);
  useScreenFocus(ref, onClose);
  const sheet = appearance === 'sheet' || appearance === 'settings';
  const hasCloseButton = appearance === 'picker';
  return <section className={'map-style-screen style-screen-'+appearance} aria-label={label} role="dialog" aria-modal="true" tabIndex={-1} ref={ref} inert={blocked}>
    {appearance !== 'success' && <StatusBar brand={appearance !== 'sheet'}/>}
    <div className="style-screen-panel">
      {sheet ? <button className="style-sheet-handle" aria-label="Закрыть" onClick={onClose}><span/></button> :
        hasCloseButton ? <button className="style-square-close" aria-label="Закрыть" onClick={onClose}><img src={assets+'2d8ec.svg'} alt=""/></button> : null}
      {children}
    </div>
    {appearance!=='settings' && appearance!=='success' && <div className="home-indicator"/>}
  </section>;
}

function Coin({price}) {
  return <span className="style-coin"><img src={assets+'d8eee.svg'} alt=""/>{price}</span>;
}

export function MapThemeBadge({children}) {
  return <span className="style-art-badge"><img src={assets+'71b76.svg'} alt=""/>{children}</span>;
}

export function MapArtworkLogo() {
  return <img className="style-art-logo" src={assets+'854e6.svg'} alt="Blink Maps"/>;
}

export function MapArtwork({
  style, className = '', src, theme = 'light', pin = false, limited = false, badge, children,
  onImageLoad, onImageError, showLogo = true,
}) {
  const standardDark = assets+'map-style-standard-dark.webp';
  const defaultImage = src || coverImages[style];
  const image = style==='standard' && theme==='dark' ? standardDark : defaultImage;
  return <div className={'style-art '+className} data-style={style} data-theme={theme}>
    <picture className="style-art-picture">
      {style==='standard' && theme==='system' && <source srcSet={standardDark} media="(prefers-color-scheme: dark)"/>}
      <img className="style-art-image" src={image} alt={'карта · '+styleNames[style]} draggable={false}
        onLoad={onImageLoad} onError={onImageError}/>
    </picture>
    {children}
    {limited && <img className="style-limited" src={assets+'6a4cf.png'} alt="limited"/>}
    {badge && <MapThemeBadge>{badge}</MapThemeBadge>}
    {pin && <>
      {pin==='detail'?<img className="style-art-pin-source" src={assets+'ca989.svg'} alt=""/>:
        <div className="style-art-pin">
          <img className="style-pin-outline" src={assets+'map-style-picker-pin.svg'} alt=""/>
          <img className="style-pin-avatar" src={assets+'map-style-picker-avatar.png'} alt=""/>
        </div>}
      {showLogo && <MapArtworkLogo/>}
    </>}
  </div>;
}

export function StyleTheme({value, onChange, disabled}) {
  return <div className="style-theme" role="group" aria-label="Тема карты">{themes.map(([id, name])=><button key={id} type="button" disabled={disabled} aria-pressed={!disabled && id === value} onClick={()=>onChange(id)}>{name}</button>)}</div>;
}

const collectionArtwork = {standard: assets+'map-style-standard-collection.webp', gta: appliedMapImages.gta};

function MapCardArtwork({style, packaged = false, newBadge = false, vipBadge, receipt = false}) {
  const src = packaged && style==='gta' ? assets+'map-style-gta-cover.webp' : collectionArtwork[style];
  return <div className={'style-market-art'+(packaged?' is-packaged':'')+(receipt?' style-success-art':'')} data-card-style={style}>
    <MapArtwork style={style} src={src}/>
    {packaged && <>
      <svg className="style-card-edge" viewBox="0 0 180 139" aria-hidden="true">
        <rect x="3.1" y="3.1" width="173.8" height="132.8" rx="14.9" fill="none" stroke="#2b2b2b" strokeWidth="6.19" strokeDasharray=".9 .9"/>
      </svg>
      <img className="style-card-film" src={assets+'map-style-card-film.webp'} alt=""/>
    </>}
    {newBadge && <img className="style-card-new" src={assets+'map-style-card-new.webp'} alt="новинка"/>}
    {vipBadge && <img className="seasonal-shelf-badge" src={vipBadge} alt="Blink VIP"/>}
    <strong>{styleNames[style]}</strong>
  </div>;
}

function MapCard({style, price, selected, large, offer, href, vipBadge, subscriptionLabel}) {
  const labelId=subscriptionLabel ? 'style-market-subscription-'+style : undefined;
  return <a className={'style-market-card'+(large?' is-large':'')} href={href} aria-describedby={labelId}
    aria-label={styleNames[style]+(selected?', выбрано':price!=null?', '+price+' блинкоинов':'')}>
    <MapCardArtwork style={style} packaged={offer} newBadge={offer && style==='gta'} vipBadge={vipBadge}/>
    {price != null && <Coin price={price}/>}
    {subscriptionLabel && <span id={labelId} className="seasonal-shelf-label">{subscriptionLabel}</span>}
    {selected && <span className="style-chosen"><b aria-hidden="true">✓</b> выбрано</span>}
  </a>;
}

export function MapsCatalog({active, wallet, selected, price, seasonal, blocked}) {
  const gtaOwned = ownsGta(wallet);
  return <section className="style-market" hidden={!active} inert={blocked} aria-label="Стили карт">
    <div className="style-market-glow" aria-hidden="true"/>
    <div className="style-market-scroll" tabIndex={0} aria-label="Каталог карт">
      <div className={'style-market-offers'+(seasonal?' seasonal-market-offers':'')}>
        {!gtaOwned && <MapCard offer large={!seasonal || seasonal.largeCards.gta} style="gta" price={price} href="#/market/maps/item/maps-0"/>}
        {seasonal && <MapCard offer large={seasonal.largeCards.seasonal} style="seasonal" selected={selected==='seasonal'} href="#/market/maps/seasonal"
          vipBadge={selected!=='seasonal' && seasonal.badge} subscriptionLabel={selected!=='seasonal' && seasonal.label}/>}
      </div>
      <div className="style-collection-copy"><h2>уже у тебя</h2><p>стили карт в коллекции</p></div>
      <div className="style-market-owned">
        <MapCard style="standard" selected={selected==='standard'} href="#/market/maps/standard"/>
        {gtaOwned && <MapCard style="gta" selected={selected==='gta'} href="#/market/maps/item/maps-0"/>}
      </div>
    </div>
    <div className="home-indicator"/>
  </section>;
}

export function MapStyleDetail({style, canUse, selected, price, theme, setTheme, onApply, onBuy, onClose, blocked}) {
  const gta = style === 'gta';
  return <StyleScreen label={styleNames[style]} onClose={onClose} appearance="sheet" blocked={blocked}>
    <div className="style-detail-scroll">
      <h1>{styleNames[style]}</h1>
      <p className="style-detail-description">{gta ? gtaText : 'стандартная карта Blink'}</p>
      <MapArtwork style={style} className="style-detail-image" src={gta?appliedMapImages.gta:undefined} theme={gta?'light':theme} pin="detail" limited={gta} badge={gta?'только тёмная':'светлая и тёмная'}/>
      {!gta && <StyleTheme value={theme} onChange={setTheme}/>}
      <div className="style-friends">
        <div aria-hidden="true">{['2207c.png','8b5b1.png','d8597.png'].map(src=><img src={assets+src} alt="" key={src}/>)}<b>+42</b></div>
        <span>есть у 5 друзей</span>
      </div>
    </div>
    <div className="style-detail-footer">
      {selected ? <span className="style-already" role="status">уже выбрано</span> :
        <button className={'style-primary'+(!canUse?' style-buy':'')} onClick={canUse?onApply:onBuy}>{canUse?'применить':'купить'}{!canUse && <Coin price={price}/>}</button>}
    </div>
  </StyleScreen>;
}

export function GtaSuccess({onClose}) {
  return <StyleScreen label="Стиль карты куплен" appearance="success" onClose={onClose}>
    <div className="style-success-card">
      <MapCardArtwork style="gta" packaged receipt/>
      <h2>с покупкой!</h2><p>карта теперь в новом стиле!</p>
      <button className="style-primary" onClick={onClose}>круто!</button>
    </div>
    <div className="style-confetti" aria-hidden="true">
      <img src={assets+'map-style-confetti.png'} alt=""/>
      <img src={assets+'map-style-confetti.png'} alt=""/>
    </div>
  </StyleScreen>;
}

export function MapStyleSettings({wallet, selected, price, theme, setTheme, seasonal, vip, onChoose, onClose, settingsOrigin, applyStatus, feedback}) {
  const [locked, setLocked] = useState(false);
  const gtaOwned = ownsGta(wallet);
  const selectedLabel = styleNames[selected];
  return <StyleScreen label="Стиль карты" onClose={locked?()=>setLocked(false):onClose}>
    <div className="style-picker-scroll" inert={locked}>
      <h1>стиль карты</h1>
      <MapArtwork style={selected} theme={selected==='gta'?'light':theme} src={mapImages[selected]} className="style-picker-image" pin/>
      <div className="style-picker-options" role="group" aria-label="Доступные стили карты">
        {Object.entries(styleNames).map(([style, name])=>{
          const chosen = style === selected;
          const isGtaOffer = style==='gta' && !gtaOwned;
          const isSeasonLocked = style==='seasonal' && (!seasonal || !vip);
          function choose() {
            if (isGtaOffer) location.hash = '#/market/maps/item/maps-0/'+settingsOrigin;
            else if (isSeasonLocked && seasonal) location.hash = '#/market/maps/seasonal/'+settingsOrigin;
            else if (isSeasonLocked) setLocked(true);
            else onChoose(style);
          }
          return <button type="button" key={style} disabled={style==='seasonal' && applyStatus==='loading'} aria-label={name+(isGtaOffer?', купить':isSeasonLocked?', закрыто':'')} aria-pressed={chosen} onClick={choose}>
            <MapArtwork style={style}/>
            {isGtaOffer && <Coin price={price}/>}
            {isSeasonLocked && <span className="style-lock" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 16 16"><path d="M4.5 7V5a3.5 3.5 0 017 0v2h1v7h-9V7zM6 7h4V5a2 2 0 00-4 0z" fill="currentColor"/></svg></span>}
            <span>{name}</span>
          </button>;
        })}
      </div>
      <StyleTheme value={theme} onChange={setTheme} disabled={selected==='gta'}/>
      {feedback}<div className="style-live" role="status">{selectedLabel} · выбран</div>
    </div>
    {locked && <div className="style-lock-overlay"><div className="style-lock-card">
      <img className="style-lock-art" src={assets+'map-style-winter-locked.png'} alt=""/>
      <h2>зима</h2><p>скоро эта тема карты станет доступна.<br/>следи за обновлениями!</p>
      <button autoFocus className="style-primary" onClick={()=>setLocked(false)}>понятно</button>
    </div></div>}
  </StyleScreen>;
}

const settingsRows = [['1','уведомления'],['13','приватность'],['18','настройки видимости'],['10','стиль карты'],['16','устройства'],[null,'помощь'],[null,'о приложении']];
function SettingsIcon({id, fallback}) {
  return id ? <img src={assets+'map-style-settings-'+id+'.svg'} alt=""/> : <span className="settings-icon-fallback" aria-hidden="true">{fallback}</span>;
}
export function SettingsIndex({onClose}) {
  return <StyleScreen label="Настройки" onClose={onClose} appearance="settings">
    <div className="style-index-scroll">
      <h1>настройки</h1>
      <ul>
        {settingsRows.map(([id,label])=><li key={label}>
          {label==='стиль карты' ? <a href="#/profile/map-style"><SettingsIcon id={id}/>{label}</a> :
            <span><SettingsIcon id={id} fallback={label==='помощь'?'?':'i'}/>{label}</span>}
        </li>)}
        <li><span><SettingsIcon id="12"/><span className="settings-location-label">улучшить геолокацию</span></span></li>
      </ul>
      <h2>твоя иконка приложения</h2>
      <div className="style-app-icons">
        {[1,3,2,5].map((id,index)=><span key={id}><img src={assets+'map-style-settings-app-'+id+'.png'} alt=""/>{index===0&&<span className="style-settings-active-icon" role="img" aria-label="выбрано"/>}</span>)}
      </div>
      <h2>а ещё мы смешные! подписывайся!</h2>
      <div className="style-settings-social" aria-hidden="true">{['telegram','vk','tiktok','youtube','whatsapp','instagram','x'].map(id=><img key={id} src={assets+'map-style-settings-'+id+'.png'} alt=""/>)}</div>
    </div>
  </StyleScreen>;
}
