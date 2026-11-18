import React, {useLayoutEffect, useRef, useState} from 'react';
import {StatusBar, useScreenFocus} from '../../map-styles.jsx';
import {
  useVipMotionPreferences, useVipRegion, VipFontArt, VipGuestsArt, VipHero, VipLimitedArt, VipNicknameArt,
} from './vip-motion.jsx';

const artwork = './seasonal-assets/vip-';
const plans = [
  {id: 'year', label: '12 месяцев', monthly: '125 ₽ / мес', total: '1 499 ₽', discount: '–35%'},
  {id: 'half-year', label: '6 месяцев', monthly: '150 ₽ / мес', total: '899 ₽', discount: '–25%'},
  {id: 'quarter', label: '3 месяца', monthly: '166 ₽ / мес', total: '499 ₽', discount: '–15%'},
  {id: 'month', label: '1 месяц', monthly: 'бесплатно', total: '0 ₽'},
];

function Art({name, className = ''}) {
  return <img className={'vip-figma-art '+className} src={artwork+name+'.png'} alt="" draggable={false}/>;
}

function Benefit({id, title, children, description}) {
  return <section className={'vip-benefit vip-benefit-'+id}>
    {children}
    <div className="vip-benefit-copy"><h2>{title}</h2><p>{description}</p></div>
  </section>;
}

function MotionBenefit({id, title, description, motion, ArtComponent}) {
  const ref = useRef(null);
  const region = useVipRegion(ref,motion);
  return <section className={'vip-benefit vip-benefit-'+id+' vip-motion-region vip-reveal'} ref={ref}
    data-motion-enabled={motion.enabled} data-playing={region.playing} data-revealed={region.revealed}>
    <ArtComponent enabled={motion.enabled} {...region}/>
    <div className="vip-benefit-copy"><h2>{title}</h2><p>{description}</p></div>
  </section>;
}

function VipSeasonArtwork() {
  const [animationFailed, setAnimationFailed] = useState(false);
  return <div className="style-art vip-season-art">
    <picture className="style-art-picture">
      {!animationFailed && <source media="(prefers-reduced-motion: no-preference)" srcSet={artwork+'seasons.webp'}/>}
      <img className="style-art-image" src={artwork+'seasons-winter.webp'} alt="" draggable={false}
        onError={()=>setAnimationFailed(true)}/>
    </picture>
  </div>;
}

function VipBenefits({motion}) {
  return <div className="vip-benefits">
    <Benefit id="seasons" title="сезонный стиль карты" description={<>один стиль, четыре оформления — зима, весна, лето и осень<br/>карта меняется автоматически раз в сезон</>}>
      <VipSeasonArtwork/>
    </Benefit>
    <MotionBenefit id="guests" title="пали гостей" description="смотри, кто заходил в твой профиль 👀"
      motion={motion} ArtComponent={VipGuestsArt}/>
    <MotionBenefit id="nickname" title="выделяйся" description={<>с блестящим ником и эффектом<br/>тебя будет видно издалека</>}
      motion={motion} ArtComponent={VipNicknameArt}/>
    <MotionBenefit id="font" title="пиши по-своему" description="уникальный шрифт в чатах"
      motion={motion} ArtComponent={VipFontArt}/>
    <MotionBenefit id="limited" title="забирай лимитки" description="сезонные стикеры и хвосты — бесплатно, пока не разобрали"
      motion={motion} ArtComponent={VipLimitedArt}/>
  </div>;
}

function PlanPicker({plan, setPlan}) {
  return <fieldset className="vip-plans" aria-label="Тариф Blink VIP">
    {plans.map(option => {
      const selected = option.id === plan.id;
      return <div className={'vip-plan'+(selected?' is-selected':'')} key={option.id}>
        <label>
          <input type="radio" name="vip-plan" checked={selected} onChange={()=>setPlan(option)} aria-label={option.label}/>
          <span className="vip-radio" aria-hidden="true"/>
          <span>{option.label}</span>
          <span className="vip-plan-monthly">{option.monthly}</span>
          {option.discount && <strong className="vip-discount">{option.discount}</strong>}
        </label>
        {option.id==='month' && selected &&
          <p>первый месяц — бесплатно,<br/>далее 199 ₽ / месяц</p>}
      </div>;
    })}
  </fieldset>;
}

const paymentMethods = [
  ['bank', 'банковской картой'], ['tpay', 'T Pay'], ['split', 'Долями'],
  ['spay', 'SberPay'], ['sbp', 'СБП'],
];

function VipCheckout({plan, onClose, onActivate}) {
  const ref = useRef(null);
  useScreenFocus(ref, onClose);
  return <section ref={ref} tabIndex={-1} role="dialog" aria-modal="true" aria-label="Оформление Blink VIP" className="vip-checkout-layer">
    <div className="vip-payment-sheet">
      <button className="vip-payment-close" aria-label="Закрыть" onClick={onClose}><img src="./assets/2d8ec.svg" alt=""/></button>
      <div className="vip-payment-summary">
        <img className="vip-payment-logo" src={artwork+'payment-processor.png'} alt=""/>
        <div><h2>Подписка Blink VIP</h2><p>Период — {plan.label}<br/>Демооформление<br/>Списания не будет</p><strong>{plan.total}</strong></div>
      </div>
      <div className="vip-payment-methods" aria-label="Демонстрационные способы оплаты">{paymentMethods.map(([id,label])=>
        <button key={id} type="button" className={'vip-payment-method vip-payment-'+id} disabled={id==='split'}
          onClick={onActivate} aria-label={'Подключить в демо · '+label}>
          {id==='bank' ? 'Банковской картой' : <img src={artwork+'payment-'+id+'.png'} alt=""/>}
          {id==='split' && <span>Недоступно в демо</span>}
        </button>)}</div>
      <div className="vip-payment-options">
        <p>Сохранить данные карты или счета <span className="vip-payment-help" aria-hidden="true">?</span><span className="vip-payment-toggle" aria-hidden="true"/></p>
        <p>Отправить квитанцию на E-mail<span className="vip-payment-toggle" aria-hidden="true"/></p>
      </div>
      <div className="vip-payment-footer">
        <img className="vip-payment-logos" src={artwork+'payment-marks.png'} alt=""/>
        <img className="vip-payment-secured" src={artwork+'payment-secured.png'} alt="Secured by CloudPayments"/>
      </div>
    </div>
  </section>;
}

function VipSuccess({plan, onClose}) {
  const ref = useRef(null);
  useScreenFocus(ref,onClose);
  return <section className="vip-success-layer" ref={ref} tabIndex={-1} role="dialog" aria-modal="true" aria-label="Blink VIP подключён">
    <div className="vip-success-window">
      <Art name="success-glow"/><Art name="success-name"/><Art name="success-star"/>
      <h2>vip на {plan.id==='month'?'месяц':plan.label}</h2>
      <p>подписка уже действует</p>
      <button className="style-primary" onClick={onClose}>Клёво 🤙</button>
    </div>
    <div className="home-indicator"/>
  </section>;
}

export default function VipFlow({page, scenario, settingsOrigin, onClose}) {
  const landing = useRef(null);
  const scroll = useRef(null);
  const plansRef = useRef(null), termsRef = useRef(null), actionRef = useRef(null);
  const [plan, setPlan] = useState(plans.at(-1));
  const [scrolled,setScrolled] = useState(false);
  const checkout = page === 'vip-checkout';
  const success = page === 'vip-success';
  const dialogOpen = checkout || success;
  const motion = useVipMotionPreferences(!dialogOpen);
  const plansRegion = useVipRegion(plansRef,motion);
  const termsRegion = useVipRegion(termsRef,motion);
  const actionRegion = useVipRegion(actionRef,motion);
  const suffix = settingsOrigin ? '/'+settingsOrigin : '';
  const path = '#/market/maps/';
  useScreenFocus(landing,onClose);
  useLayoutEffect(()=>{
    if (success || checkout && scroll.current?.scrollTop===0) scroll.current.scrollTop=scroll.current.scrollHeight;
  },[checkout,success]);

  function activate() {
    scenario.setVip('active');
    location.hash=path+'vip-success'+suffix;
  }
  return <>
    <section className="map-style-screen vip-landing-screen" ref={landing} tabIndex={-1} role="dialog" aria-modal={!dialogOpen}
      aria-label="Blink VIP" inert={dialogOpen} aria-hidden={dialogOpen||undefined}>
      <div className={'vip-landing-top'+(scrolled?' is-scrolled':'')}>
        <StatusBar/>
        <button className="vip-landing-close" aria-label="Закрыть" onClick={onClose}><img src="./assets/2d8ec.svg" alt=""/></button>
      </div>
      <div className="vip-landing-scroll" ref={scroll} onScroll={event=>setScrolled(event.currentTarget.scrollTop>8)} tabIndex={0} aria-label="Преимущества и тарифы Blink VIP">
        <VipHero motion={motion}/>
        <VipBenefits motion={motion}/>
        <div className="vip-landing-plans">
          <div className="vip-reveal" ref={plansRef} data-motion-enabled={motion.enabled} data-revealed={plansRegion.revealed}>
            <PlanPicker plan={plan} setPlan={setPlan}/>
          </div>
          <div className="vip-action-motion" ref={actionRef} data-motion-enabled={motion.enabled} data-revealed={actionRegion.revealed}>
            {scenario.vip ? <p className="style-already vip-landing-active" role="status">подписка активна</p> :
              <a href={path+'vip-checkout'+suffix} className="style-primary vip-landing-action">подключить <span>{plan.total}</span></a>}
          </div>
          <div className="vip-terms vip-reveal" ref={termsRef} data-motion-enabled={motion.enabled} data-revealed={termsRegion.revealed}>лицензионное соглашение</div>
        </div>
      </div>
      <div className="home-indicator"/>
    </section>
    {checkout && <VipCheckout plan={plan} onActivate={activate} onClose={()=>{location.hash=path+'vip'+suffix;}}/>}
    {success && <VipSuccess plan={plan} onClose={onClose}/>}
  </>;
}
