const assetPathPrefix = "https://www.figma.com/api/mcp/asset/a88fad36-0457-4aa4-b4a5-e626f3ca315e";
const imgStyleSelected = `${assetPathPrefix}/ca989.svg`;
const imgNewBadgeLimited = `${assetPathPrefix}/6a4cf.png`;
const imgBlinkmapsBetaLight = `${assetPathPrefix}/854e6.svg`;
const imgMapLine1 = `${assetPathPrefix}/f70c8.png`;
const imgMapLine = `${assetPathPrefix}/d7ad0.png`;
const imgGlyphClose20 = `${assetPathPrefix}/2d8ec.svg`;
const imgTailImage = `${assetPathPrefix}/987e5.png`;
const imgImage448 = `${assetPathPrefix}/05f22.png`;
const imgImage449 = `${assetPathPrefix}/505db.png`;
const imgRightSide = `${assetPathPrefix}/d00ef.svg`;
const imgDirection = `${assetPathPrefix}/73f6f.svg`;
const imgStar = `${assetPathPrefix}/10be7.svg`;
const imgGlyphTime20 = `${assetPathPrefix}/c1f60.svg`;

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
  available?: "no";
};

function SocialSection({ className, available = "no" }: SocialSectionProps) {
  return (
    <div className={className || "border-0 border-[rgba(255,255,255,0.15)] border-solid content-stretch flex gap-[12px] h-[60px] items-center justify-center pb-[6px] pt-[16px] px-[8px] relative w-[358px]"} data-node-id="84232:24897">
      <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] lowercase relative shrink-0 text-[15px] text-[rgba(255,255,255,0.5)] text-center whitespace-nowrap" data-node-id="84232:24893">
        такого предмета нет у друзей
      </p>
    </div>
  );
}

type PinProps = {
  className?: string;
  style?: "Selected";
};

function Pin({ className, style = "Selected" }: PinProps) {
  return (
    <div className={className || "h-[80px] relative w-[72px]"} data-node-id="1561:20313">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStyleSelected} />
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

function BlinkmapsBetaLight({ className }: { className?: string }) {
  return (
    <div className={className || "h-[17px] relative w-[122px]"} data-node-id="93316:128706" data-name="Blinkmaps_beta_light">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBlinkmapsBetaLight} />
    </div>
  );
}

type MapMovementProps = {
  className?: string;
  property1?: "1";
};

function MapMovement({ className, property1 = "1" }: MapMovementProps) {
  return (
    <div className={className || "h-[292px] overflow-clip relative rounded-[24px] w-[342px]"} data-node-id="89503:89642">
      <div className="absolute h-[292px] right-0 top-0 w-[725px]" data-node-id="90336:24222" data-name="Map line 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMapLine1} />
      </div>
      <div className="absolute h-[292px] left-[-383px] overflow-clip top-0 w-[725px]" data-node-id="91749:33559" data-name="Map line">
        <div className="absolute flex inset-[-362.78%_-162.98%_-442.08%_-131.39%] items-center justify-center" data-node-id="91749:33560" style={{ containerType: "size" }}>
          <div className="flex-none h-[hypot(-30.8699cqw,48.9512cqh)] rotate-[34.31deg] w-[hypot(69.1301cqw,51.0488cqh)]">
            <div className="relative size-full" data-name="Map line">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMapLine} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute aspect-[3090/2022] bottom-[-32.88%] right-[-527px] top-[-114.73%]" data-node-id="93309:49897" data-name="Снимок экрана 2025-10-27 в 13.26.37 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMapLine} />
      </div>
      <BlinkmapsBetaLight className="absolute bottom-[16px] h-[17px] left-[16px] w-[122px]" />
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

export default function Component() {
  return (
    <div className="bg-black overflow-clip relative rounded-[40px] size-full" data-node-id="84232:25403" data-name="карточка предмета / иконка (куплен)">
      <div className="absolute bottom-0 h-[128px] left-0 right-0" data-node-id="84232:25404" data-name="Close window bottom">
        <div className="absolute bottom-0 flex h-[128px] items-center justify-center left-0 right-0" data-node-id="I84232:25404;43958:82136" style={{ containerType: "size" }}>
          <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
            <div className="bg-gradient-to-b from-black relative size-full to-[rgba(0,0,0,0)]" data-name="Gradient Black" />
          </div>
        </div>
        <SquareButton className="-translate-x-1/2 absolute backdrop-blur-[10px] bg-gradient-to-b border border-[#e4e4e4] border-solid content-stretch flex from-[#ebebeb] from-[26.061%] items-center justify-center left-1/2 rounded-[12px] size-[46px] to-[#b2b2b2] top-[18px]" />
      </div>
      <div className="-translate-x-1/2 absolute bottom-0 h-[844px] left-1/2 opacity-90 w-[390px]" data-node-id="84232:25405" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%), url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 390 844' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(33.85 89.05 -30.843 11.724 3.7886e-14 0)'><stop stop-color='rgba(211,119,255,1)' offset='0.34082'/><stop stop-color='rgba(165,171,255,1)' offset='0.67041'/><stop stop-color='rgba(119,222,255,1)' offset='1'/></radialGradient></defs></svg>\")" }} data-name="image_bg_colored" />
      <div className="-translate-x-1/2 absolute h-[47px] left-1/2 overflow-clip top-0 w-[390px]" data-node-id="84232:25406" data-name="StatusBar">
        <div className="absolute contents left-[27px] top-[14px]" data-node-id="I84232:25406;2604:14897" data-name="Left Side">
          <div className="absolute h-[21px] left-[27px] rounded-[24px] top-[14px] w-[54px]" data-node-id="I84232:25406;2604:14898" data-name="_StatusBar-time">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro_Text:Semibold'] h-[20px] leading-[22px] left-[27px] not-italic text-[17px] text-center text-white top-px tracking-[-0.408px] w-[54px]" data-node-id="I84232:25406;2604:14898;839:7100" style={{ fontFeatureSettings: '"case" 1' }}>
              4:20
            </p>
          </div>
        </div>
        <div className="absolute h-[13px] right-[26.6px] top-[19px] w-[77.401px]" data-node-id="I84232:25406;2604:14899" data-name="Right Side">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRightSide} />
        </div>
      </div>
      <div className="absolute bg-black bottom-0 content-stretch flex flex-col items-center justify-end left-0 pb-[56px] px-[16px] rounded-tl-[40px] rounded-tr-[40px] w-[390px]" data-node-id="84232:25407" data-name="Modal sheet">
        <div className="content-stretch flex flex-col h-[12px] items-center mb-[-12px] pt-[8px] relative shrink-0 w-full" data-node-id="84232:25408" data-name="Indicator">
          <div className="bg-[#808080] h-[4px] relative rounded-[20px] shrink-0 w-[33px]" data-node-id="I84232:25408;2702:17814" data-name="Vector" />
        </div>
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-[358px]" data-node-id="84232:25410">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="84232:25411">
            <div className="content-stretch flex h-[84px] items-end justify-center mb-[-12px] pt-[28px] px-[8px] relative shrink-0 w-[358px]" data-node-id="84232:25412" data-name="HeaderView">
              <div className="content-stretch flex flex-[1_0_0] h-[56px] items-center min-w-px relative" data-node-id="I84232:25412;3962:106372" data-name="Content">
                <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[34px] lowercase relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="I84232:25412;3962:106373">
                  кото йота
                </p>
              </div>
            </div>
            <div className="content-stretch flex items-center pb-[16px] pt-[8px] px-[8px] relative shrink-0 w-[358px]" data-node-id="84232:25413">
              <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro_Text:Medium'] leading-[20px] lowercase min-w-px not-italic relative text-[15px] text-[rgba(255,255,255,0.5)]" data-node-id="84232:25414">
                Этот пак оживает по ночам… и в твоих чатах. Добавь немного жути в переписках с друзьями
              </p>
            </div>
          </div>
          <div className="h-[292px] overflow-clip relative rounded-[24px] shrink-0 w-[342px]" data-node-id="84232:25433" data-name="item section">
            <MapMovement className="absolute inset-0 overflow-clip rounded-[24px]" />
            <ItemBadge className="absolute h-[40px] left-[12px] top-[8px] w-[112px]" />
            <div className="-translate-x-1/2 absolute h-[143px] left-1/2 top-[72px] w-[104px]" data-node-id="I84232:25433;89503:89889" data-name="Pin">
              <div className="absolute flex inset-[3.43%_-75.04%_11.23%_57.69%] items-center justify-center" data-node-id="I84232:25433;89503:92344" style={{ containerType: "size" }}>
                <div className="flex-none h-[hypot(-53.9843cqw,53.9843cqh)] rotate-45 w-[hypot(46.0157cqw,46.0157cqh)]">
                  <div className="overflow-clip relative size-full" data-name="_tail">
                    <div className="absolute flex inset-[-13.6%_-31.68%_-35.32%_-44.05%] items-center justify-center" data-node-id="I84232:25433;89503:92344;79575:82321" style={{ containerType: "size" }}>
                      <div className="-rotate-135 flex-none h-[hypot(60.5263cqw,-60.5263cqh)] w-[hypot(-39.4737cqw,-39.4737cqh)]">
                        <div className="relative size-full" data-name="tail image">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTailImage} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-translate-x-1/2 absolute h-[143px] left-1/2 top-0 w-[114px]" data-node-id="I84232:25433;89503:90669" data-name="Advanced Pin">
                <Pin className="-translate-x-1/2 absolute h-[80px] left-1/2 top-[36px] w-[72px]" />
                <div className="-translate-x-1/2 absolute content-stretch flex gap-[24px] items-center left-1/2 top-[73px]" data-node-id="I84232:25433;89503:91400" data-name="Icon+Label">
                  <div className="flex items-center justify-center relative shrink-0" data-node-id="I84232:25433;89503:91402">
                    <div className="-scale-y-100 flex-none rotate-180">
                      <div className="content-stretch flex items-center justify-center relative size-[44px]" data-name="LabelDirection">
                        <div className="bg-black content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[36px]" data-node-id="I84232:25433;89503:91403" data-name="Label">
                          <div className="h-[14.527px] relative shrink-0 w-[22px]" data-node-id="I84232:25433;89503:91403;22106:166918" data-name="direction">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDirection} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative shrink-0 size-[44px]" data-node-id="I84232:25433;89503:91404" data-name="LaberSpeed">
                    <div className="bg-white border border-black border-solid content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[36px]" data-node-id="I84232:25433;89503:91405" data-name="Label">
                      <div className="[word-break:break-word] content-stretch flex flex-col items-center not-italic relative shrink-0 text-black text-center" data-node-id="I84232:25433;89503:91405;1768:7168">
                        <p className="font-['SF_Pro_Display:Bold'] leading-[12px] relative shrink-0 text-[12px] w-[26px]" data-node-id="I84232:25433;89503:91405;1768:7169">
                          25
                        </p>
                        <p className="font-['SF_Pro_Text:Semibold'] leading-[normal] min-w-full relative shrink-0 text-[11px] w-[min-content]" data-node-id="I84232:25433;89503:91405;1768:7170">
                          км/ч
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SocialSection className="border-0 border-[rgba(255,255,255,0.15)] border-solid content-stretch flex gap-[12px] h-[60px] items-center justify-center pb-[6px] pt-[16px] px-[8px] relative shrink-0 w-[358px]" />
          <div className="content-stretch flex flex-col items-center pt-[8px] px-[8px] relative shrink-0 w-[358px]" data-node-id="84232:25529" data-name="_section / bottom">
            <div className="bg-white content-stretch flex h-[56px] items-center justify-between px-[16px] py-[18px] relative rounded-[20px] shrink-0 w-full" data-node-id="84232:25530" data-name="Button">
              <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[15px] text-black text-center uppercase whitespace-nowrap" data-node-id="84232:25531">
                купить
              </p>
              <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="84232:25532">
                <div className="overflow-clip relative shrink-0 size-[22px]" data-node-id="84232:25533" data-name="_coin/1">
                  <div className="absolute inset-0 overflow-clip" data-node-id="I84232:25533;83842:150670" data-name="glyph">
                    <div className="absolute inset-[-2.27%]" data-node-id="I84232:25533;83842:150673" data-name="image 448">
                      <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgImage448} />
                    </div>
                    <div className="absolute inset-[-2.27%] mix-blend-hard-light opacity-50" data-node-id="I84232:25533;83842:150683" data-name="image 449">
                      <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgImage449} />
                    </div>
                    <div className="absolute inset-[26.72%_27.7%_29.33%_27.72%]" data-node-id="I84232:25533;83985:153638" data-name="star">
                      <div className="absolute inset-[-12.8%_-35.95%_-36.86%_-13.01%]">
                        <img alt="" className="block max-w-none size-full" src={imgStar} />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[15px] text-black text-center uppercase whitespace-nowrap" data-node-id="84232:25534">
                  1500
                </p>
                <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Montserrat:Bold'] font-bold leading-[normal] line-through relative shrink-0 text-[#808080] text-[15px] text-center uppercase whitespace-nowrap" data-node-id="84232:25535">
                  2500
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-center justify-center pb-[8px] pt-[12px] relative shrink-0 w-full" data-node-id="84232:25536">
              <div className="relative shrink-0 size-[20px]" data-node-id="84232:25537" data-name="glyph/time/20">
                <div className="absolute left-0 size-[20px] top-0" data-node-id="I84232:25537;44671:176058" data-name="glyph_time_20">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphTime20} />
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex font-['Montserrat:SemiBold'] font-semibold gap-[4px] items-center leading-[0] lowercase relative shrink-0 text-[#ff3b30] text-[13px] text-center whitespace-nowrap" data-node-id="84232:25538" data-name="row">
                <div className="flex flex-col justify-center relative shrink-0" data-node-id="84232:25539">
                  <p className="leading-[normal]">48:23:44</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0" data-node-id="84232:25540">
                  <p className="leading-[normal]">до конца распродажи</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeIndicator className="-translate-x-1/2 absolute bottom-0 h-[34px] left-1/2 w-[390px]" />
    </div>
  );
}
