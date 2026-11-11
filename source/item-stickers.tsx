const assetPathPrefix = "https://www.figma.com/api/mcp/asset/ab82f88e-6932-4678-9263-01d953a803da";
const imgAvatarSmall = `${assetPathPrefix}/2207c.png`;
const imgAvatarSmall1 = `${assetPathPrefix}/8b5b1.png`;
const imgAvatarSmall2 = `${assetPathPrefix}/d8597.png`;
const imgNewBadgeLimited = `${assetPathPrefix}/6a4cf.png`;
const imgZombie = `${assetPathPrefix}/952aa.png`;
const imgBat = `${assetPathPrefix}/510d6.png`;
const imgGhost = `${assetPathPrefix}/00566.png`;
const imgPumpkin = `${assetPathPrefix}/c5116.png`;
const imgGlyphClose20 = `${assetPathPrefix}/2d8ec.svg`;
const imgImage448 = `${assetPathPrefix}/05f22.png`;
const imgImage449 = `${assetPathPrefix}/505db.png`;
const imgRightSide = `${assetPathPrefix}/d00ef.svg`;
const imgPatternFill = `${assetPathPrefix}/822b1.svg`;
const imgStar = `${assetPathPrefix}/10be7.svg`;

type HomeIndicatorProps = {
  className?: string;
  darkMode?: "True";
};

function HomeIndicator({ className, darkMode = "True" }: HomeIndicatorProps) {
  return (
    <div className={className || "h-[34px] relative w-[390px]"} data-node-id="1525:11082">
      <div className="-translate-x-1/2 absolute bg-white bottom-[8px] h-[5px] left-1/2 rounded-[100px] w-[134px]" data-node-id="1525:11083" data-name="Home Indicator" />
    </div>
  );
}

type SocialSectionProps = {
  className?: string;
  available?: "Yes";
};

function SocialSection({ className, available = "Yes" }: SocialSectionProps) {
  return (
    <div className={className || "border-0 border-[rgba(255,255,255,0.15)] border-solid content-stretch flex gap-[12px] items-center pb-[8px] pt-[16px] px-[8px] relative w-[358px]"} data-node-id="84232:24896">
      <div className="content-stretch flex items-start relative shrink-0" data-node-id="84232:24880" data-name="Avatars">
        <div className="mr-[-16px] overflow-clip relative shrink-0 size-[40px]" data-node-id="84232:24881" data-name="_Avatar">
          <div className="absolute border-3 border-black border-solid left-0 rounded-[16px] size-[40px] top-0" data-node-id="I84232:24881;3951:109581" data-name="_AvatarSmall">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarSmall} />
          </div>
        </div>
        <div className="mr-[-16px] overflow-clip relative shrink-0 size-[40px]" data-node-id="84232:24882" data-name="_Avatar">
          <div className="absolute border-3 border-black border-solid left-0 rounded-[16px] size-[40px] top-0" data-node-id="I84232:24882;3951:109581" data-name="_AvatarSmall">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarSmall1} />
          </div>
        </div>
        <div className="mr-[-16px] overflow-clip relative shrink-0 size-[40px]" data-node-id="84232:24883" data-name="_Avatar">
          <div className="absolute border-3 border-black border-solid left-0 rounded-[16px] size-[40px] top-0" data-node-id="I84232:24883;3951:109581" data-name="_AvatarSmall">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarSmall2} />
          </div>
        </div>
        <div className="overflow-clip relative shrink-0 size-[40px]" data-node-id="84232:24884" data-name="_Avatar">
          <div className="absolute bg-[#242424] border-3 border-black border-solid left-0 overflow-clip rounded-[16px] size-[40px] top-0" data-node-id="I84232:24884;3951:109581" data-name="_AvatarSmall">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Montserrat:Bold'] font-bold justify-center leading-[0] left-1/2 text-[13px] text-center text-white top-1/2 uppercase whitespace-nowrap" data-node-id="I84232:24884;3951:109581;3951:109577">
              <p className="leading-[normal]">+2</p>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] lowercase relative shrink-0 text-[15px] text-[rgba(255,255,255,0.5)] text-center whitespace-nowrap" data-node-id="84232:24885">
        есть у 5 друзей
      </p>
    </div>
  );
}

type ItemBadgeProps = {
  className?: string;
  type?: "limited";
};

function ItemBadge({ className, type = "limited" }: ItemBadgeProps) {
  return (
    <div className={className || "h-[40px] relative w-[112px]"} data-node-id="84466:16272">
      <div className="absolute flex inset-[-11.95%_-1.37%] items-center justify-center" data-node-id="84466:16260" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(3.04499cqw,80.4041cqh)] rotate-[-4.97deg] skew-x-[0.05deg] w-[hypot(96.955cqw,-19.5959cqh)]">
          <div className="relative size-full" data-name="new_badge _ limited">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[118.48%] left-[-17.31%] max-w-none top-[-9.24%] w-[128.21%]" src={imgNewBadgeLimited} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type StickerSliderProps = {
  className?: string;
  position?: "1";
};

function StickerSlider({className,initialSlide=0}) {
 const [index,setIndex]=React.useState(initialSlide);const gesture=React.useRef(null);
 const slides=[imgZombie,imgBat,imgGhost,imgPumpkin];
 return <div className={className||"h-[292px] relative w-[342px]"} data-node-id="83941:151196" aria-label="Предпросмотр стикеров" onPointerDown={e=>{gesture.current=e.clientX;}} onPointerUp={e=>{if(gesture.current!==null&&Math.abs(e.clientX-gesture.current)>35)setIndex(i=>(i+(e.clientX<gesture.current?1:3))%4);gesture.current=null;}}>
 <div className="-translate-y-1/2 absolute content-stretch flex gap-[8px] items-center left-[63px] top-[calc(50%-14px)]" data-name="row">
 <div className="relative shrink-0 size-[216px]"><div className="absolute flex inset-[-7.87%_-8.2%_-7.98%_-7.64%] items-center justify-center" style={{containerType:'size'}}><div className="flex-none h-[hypot(-14.9896cqw,85.0104cqh)] rotate-10 w-[hypot(85.0104cqw,14.9896cqh)]"><img className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={slides[index]} alt={['зомби','летучая мышь','привидение','тыква'][index]}/></div></div></div>
 {[1,2,3].map(offset=><button key={offset} aria-label="Следующий стикер" className="relative shrink-0 size-[76px]" onClick={()=>setIndex(i=>(i+offset)%4)}><img className="absolute inset-0 opacity-50 object-cover pointer-events-none size-full" src={slides[(index+offset)%4]} alt=""/></button>)}
 </div>
 <div className="absolute bottom-[16px] h-[24px] left-0 overflow-clip right-0" data-name="Pagination / 4-1"><div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[10px] items-center left-1/2 top-1/2">{slides.map((_,i)=><button key={i} aria-label={'Показать стикер '+(i+1)} aria-pressed={index===i} onClick={()=>setIndex(i)} style={{position:'relative',width:index===i?32:8,height:8,borderRadius:24,border:'0.5px solid #ffffff40',background:index===i?'white':'#ffffff26',cursor:'pointer'}}><span style={{position:'absolute',inset:-8}}/></button>)}</div></div>
 </div>;
}

type LimitedSectionProps = {
  className?: string;
  type?: "count";
};

function LimitedSection({ className, type = "count" }: LimitedSectionProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start justify-end pb-[16px] pt-[8px] px-[8px] relative w-[358px]"} data-node-id="84239:25587">
      <div className="border border-[#2b2b2b] border-solid content-stretch flex flex-col h-[28px] items-start overflow-clip p-[3px] relative rounded-[10px] shrink-0 w-[342px]" data-node-id="84208:22310">
        <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative w-full" data-node-id="84208:22311">
          <div className="h-full relative rounded-bl-[7px] rounded-br-[2px] rounded-tl-[7px] rounded-tr-[2px] shrink-0 w-[132px]" data-node-id="84208:22312" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 132 22' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(11.703 0.70278 -4.7192 2.1829 7.0278 8.7593)'><stop stop-color='rgba(248,225,145,1)' offset='0'/><stop stop-color='rgba(251,199,193,1)' offset='0.24222'/><stop stop-color='rgba(255,173,242,1)' offset='0.48443'/><stop stop-color='rgba(201,214,242,1)' offset='0.70668'/><stop stop-color='rgba(147,255,242,1)' offset='0.92892'/></radialGradient></defs></svg>\")" }} />
          <div className="bg-white h-full relative rounded-[2px] shrink-0 w-px" data-node-id="84208:22313" />
          <div className="bg-[rgba(255,255,255,0.1)] flex-[1_0_0] h-full min-w-px relative rounded-bl-[2px] rounded-br-[7px] rounded-tl-[2px] rounded-tr-[7px]" data-node-id="84208:22314" />
        </div>
      </div>
      <div className="content-stretch flex h-[28px] items-center justify-between pt-[8px] relative shrink-0 w-[342px]" data-node-id="84232:25383">
        <div className="content-stretch flex items-center relative shrink-0" data-node-id="84208:22315">
          <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold'] font-semibold justify-center leading-[0] lowercase relative shrink-0 text-[13px] text-white whitespace-nowrap" data-node-id="84208:22318">
            <p className="leading-[normal]">осталось на складе</p>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex font-['Montserrat:SemiBold'] font-semibold gap-[2px] items-center leading-[0] lowercase relative shrink-0 text-[13px] whitespace-nowrap" data-node-id="84208:22319">
          <div className="flex flex-col justify-center relative shrink-0 text-right text-white" data-node-id="84208:22320">
            <p className="leading-[normal]">68</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-[rgba(255,255,255,0.5)] text-center" data-node-id="84208:22321">
            <p className="leading-[normal]">/</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-[rgba(255,255,255,0.5)] text-right" data-node-id="84208:22322">
            <p className="leading-[normal]">100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

type SquareButtonProps = {
  className?: string;
  color?: "Light Skeuo";
  icon?: "Close";
};

function SquareButton({ className, color = "Light Skeuo", icon = "Close" }: SquareButtonProps) {
  return (
    <div className={className || "backdrop-blur-[10px] bg-gradient-to-b border border-[#e4e4e4] border-solid content-stretch flex from-[#ebebeb] from-[26.061%] items-center justify-center relative rounded-[12px] size-[46px] to-[#b2b2b2]"} data-node-id="43997:352984">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="43997:352985" data-name="glyph/close/20">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphClose20} />
      </div>
    </div>
  );
}

export default function Component({initialSlide=0}) {
  return (
    <div className="bg-black overflow-clip relative rounded-[40px] size-full" data-node-id="84232:25129" data-name="карточка предмета / иконка (куплен)">
      <div className="absolute bottom-0 h-[128px] left-0 right-0" data-node-id="84232:25130" data-name="Close window bottom">
        <div className="absolute bottom-0 flex h-[128px] items-center justify-center left-0 right-0" data-node-id="I84232:25130;43958:82136" style={{ containerType: "size" }}>
          <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
            <div className="bg-gradient-to-b from-black relative size-full to-[rgba(0,0,0,0)]" data-name="Gradient Black" />
          </div>
        </div>
        <SquareButton className="-translate-x-1/2 absolute backdrop-blur-[10px] bg-gradient-to-b border border-[#e4e4e4] border-solid content-stretch flex from-[#ebebeb] from-[26.061%] items-center justify-center left-1/2 rounded-[12px] size-[46px] to-[#b2b2b2] top-[18px]" />
      </div>
      <div className="-translate-x-1/2 absolute bottom-0 h-[844px] left-1/2 opacity-90 w-[390px]" data-node-id="84232:25131" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%), url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 390 844' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(33.85 89.05 -30.843 11.724 3.7886e-14 0)'><stop stop-color='rgba(211,119,255,1)' offset='0.34082'/><stop stop-color='rgba(165,171,255,1)' offset='0.67041'/><stop stop-color='rgba(119,222,255,1)' offset='1'/></radialGradient></defs></svg>\")" }} data-name="image_bg_colored" />
      <div className="-translate-x-1/2 absolute h-[47px] left-1/2 overflow-clip top-0 w-[390px]" data-node-id="84232:25132" data-name="StatusBar">
        <div className="absolute contents left-[27px] top-[14px]" data-node-id="I84232:25132;2604:14897" data-name="Left Side">
          <div className="absolute h-[21px] left-[27px] rounded-[24px] top-[14px] w-[54px]" data-node-id="I84232:25132;2604:14898" data-name="_StatusBar-time">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro_Text:Semibold'] h-[20px] leading-[22px] left-[27px] not-italic text-[17px] text-center text-white top-px tracking-[-0.408px] w-[54px]" data-node-id="I84232:25132;2604:14898;839:7100" style={{ fontFeatureSettings: '"case" 1' }}>
              4:20
            </p>
          </div>
        </div>
        <div className="absolute h-[13px] right-[26.6px] top-[19px] w-[77.401px]" data-node-id="I84232:25132;2604:14899" data-name="Right Side">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRightSide} />
        </div>
      </div>
      <div className="absolute bg-black bottom-0 content-stretch flex flex-col items-center justify-end left-0 pb-[56px] px-[16px] rounded-tl-[40px] rounded-tr-[40px] w-[390px]" data-node-id="84232:25133" data-name="Modal sheet">
        <div className="content-stretch flex flex-col h-[12px] items-center mb-[-12px] pt-[8px] relative shrink-0 w-full" data-node-id="84232:25134" data-name="Indicator">
          <div className="bg-[#808080] h-[4px] relative rounded-[20px] shrink-0 w-[33px]" data-node-id="I84232:25134;2702:17814" data-name="Vector" />
        </div>
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-[358px]" data-node-id="84232:25136">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="84232:25137">
            <div className="content-stretch flex h-[84px] items-end justify-center mb-[-12px] pt-[28px] px-[8px] relative shrink-0 w-[358px]" data-node-id="84232:25138" data-name="HeaderView">
              <div className="content-stretch flex flex-[1_0_0] h-[56px] items-center min-w-px relative" data-node-id="I84232:25138;3962:106372" data-name="Content">
                <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[34px] lowercase relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="I84232:25138;3962:106373">
                  «Жутко весело»
                </p>
              </div>
            </div>
            <div className="content-stretch flex items-center pb-[16px] pt-[8px] px-[8px] relative shrink-0 w-[358px]" data-node-id="84232:25139">
              <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro_Text:Medium'] leading-[20px] lowercase min-w-px not-italic relative text-[15px] text-[rgba(255,255,255,0.5)]" data-node-id="84232:25140">
                Этот пак оживает по ночам… и в твоих чатах. Добавь немного жути в переписках с друзьями
              </p>
            </div>
          </div>
          <LimitedSection className="content-stretch flex flex-col items-start justify-end pb-[16px] pt-[8px] px-[8px] relative shrink-0 w-[358px]" />
          <div className="bg-black border-2 border-[#1c1c1c] border-solid h-[292px] overflow-clip relative rounded-[32px] shrink-0 w-[342px]" data-node-id="84232:25141" data-name="item section">
            <div className="absolute h-[292px] inset-[-2px] pointer-events-none" data-node-id="I84232:25141;84208:23754">
              <div className="pointer-events-auto sticky top-0" data-name="Pattern fill">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPatternFill} />
              </div>
            </div>
            <StickerSlider initialSlide={initialSlide} className="absolute inset-[-2px]" />
            <ItemBadge className="absolute h-[40px] left-[10px] top-[6px] w-[112px]" />
          </div>
          <SocialSection className="border-0 border-[rgba(255,255,255,0.15)] border-solid content-stretch flex gap-[12px] items-center pb-[8px] pt-[16px] px-[8px] relative shrink-0 w-[358px]" />
          <div className="content-stretch flex flex-col items-start p-[8px] relative shrink-0 w-[358px]" data-node-id="84239:27802" data-name="_section / bottom">
            <div className="bg-white content-stretch flex h-[56px] items-center justify-between px-[16px] py-[18px] relative rounded-[20px] shrink-0 w-full" data-node-id="84239:27803" data-name="Button">
              <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[15px] text-black text-center uppercase whitespace-nowrap" data-node-id="84239:27804">
                купить
              </p>
              <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="84239:27805">
                <div className="overflow-clip relative shrink-0 size-[22px]" data-node-id="84239:27806" data-name="_coin/1">
                  <div className="absolute inset-0 overflow-clip" data-node-id="I84239:27806;83842:150670" data-name="glyph">
                    <div className="absolute inset-[-2.27%]" data-node-id="I84239:27806;83842:150673" data-name="image 448">
                      <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgImage448} />
                    </div>
                    <div className="absolute inset-[-2.27%] mix-blend-hard-light opacity-50" data-node-id="I84239:27806;83842:150683" data-name="image 449">
                      <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgImage449} />
                    </div>
                    <div className="absolute inset-[26.72%_27.7%_29.33%_27.72%]" data-node-id="I84239:27806;83985:153638" data-name="star">
                      <div className="absolute inset-[-12.8%_-35.95%_-36.86%_-13.01%]">
                        <img alt="" className="block max-w-none size-full" src={imgStar} />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[15px] text-black text-center uppercase whitespace-nowrap" data-node-id="84239:27807">
                  1500
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeIndicator className="-translate-x-1/2 absolute bottom-0 h-[34px] left-1/2 w-[390px]" />
    </div>
  );
}
