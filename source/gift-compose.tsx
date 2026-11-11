const assetPathPrefix = "https://www.figma.com/api/mcp/asset/8bbe42d5-3548-49b5-9ef9-af35e0d90f2d";
const imgLogo = `${assetPathPrefix}/f548a.svg`;
const imgGlyphClose20 = `${assetPathPrefix}/4b7b2.svg`;
const imgNewBadgeLimited = `${assetPathPrefix}/6a4cf.png`;
const imgBackgroundGlow1 = `${assetPathPrefix}/9c398.png`;
const imgVector = `${assetPathPrefix}/c01af.svg`;
const imgIconBlinkcoin28 = `${assetPathPrefix}/d8eee.svg`;
const imgImage497 = `${assetPathPrefix}/1fe87.png`;
const imgAvatarMedium = `${assetPathPrefix}/8b5b1.png`;
const imgPatternFill = `${assetPathPrefix}/4502f.svg`;
const imgRightSide = `${assetPathPrefix}/5b3f9.svg`;

type LogoNotchProps = {
  className?: string;
  type?: "Variant4";
};

function LogoNotch({ className, type = "Variant4" }: LogoNotchProps) {
  return (
    <div className={className || "content-stretch flex items-center px-[8px] py-[5px] relative rounded-[100px] w-[81.718px]"} data-node-id="70573:55455" style={{ backgroundImage: "linear-gradient(119.99999906090316deg, rgb(199, 255, 32) 24.849%, rgb(255, 163, 58) 52.854%, rgb(255, 0, 212) 102.14%)" }}>
      <div className="h-[16px] relative shrink-0 w-[66.625px]" data-node-id="70573:55456" data-name="logo">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogo} />
      </div>
    </div>
  );
}

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

type SquareButtonProps = {
  className?: string;
  color?: "Outline Dark";
  icon?: "Close";
};

function SquareButton({ className, color = "Outline Dark", icon = "Close" }: SquareButtonProps) {
  return (
    <div className={className || "bg-black border-2 border-[#242424] border-solid content-stretch flex items-center justify-center relative rounded-[12px] size-[46px]"} data-node-id="6008:103723">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="6008:103724" data-name="glyph/close/20">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphClose20} />
      </div>
    </div>
  );
}

type UserNameProps = {
  className?: string;
  size?: "Medium";
  status?: "Default";
};

function UserName({ className, size = "Medium", status = "Default" }: UserNameProps) {
  return (
    <div className={className || "content-stretch flex items-center justify-center relative"} data-node-id="119891:189599">
      <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] lowercase relative shrink-0 text-[15px] text-white whitespace-nowrap" data-node-id="119891:189598">
        title
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

function BackgroundGlow({ className }: { className?: string }) {
  return (
    <div className={className || "h-[160px] overflow-clip relative w-[390px]"} data-node-id="95954:231208" data-name="_background_glow">
      <div className="absolute h-[160px] left-0 top-0 w-[390px]" data-node-id="99530:100821" data-name="_background_glow 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBackgroundGlow1} />
      </div>
    </div>
  );
}

type IconProps = {
  className?: string;
  icon?: "amb status" | "blinkcoin";
  size?: "16" | "28";
};

function Icon({ className, icon = "amb status", size = "16" }: IconProps) {
  const isBlinkcoinAnd28 = icon === "blinkcoin" && size === "28";
  return (
    <div className={className || `relative ${isBlinkcoinAnd28 ? "size-[28px]" : "size-[16px]"}`} id={isBlinkcoinAnd28 ? "node-83967_152689" : "node-38771_321895"}>
      {icon === "amb status" && size === "16" && (
        <div className="-translate-x-1/2 absolute bottom-0 left-1/2 size-[16px]" data-node-id="38771:321896" data-name="icon_amb_status_16">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[16.551px] items-center justify-center left-[calc(50%-0.34px)] top-[calc(50%+0.28px)] w-[18.185px]" data-node-id="44882:190079">
            <div className="flex-none rotate-10">
              <div className="h-[13.985px] relative w-[16px]" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
              </div>
            </div>
          </div>
        </div>
      )}
      {isBlinkcoinAnd28 && (
        <div className="absolute inset-[0_0.02%_0_-0.02%]" data-node-id="84305:251131" data-name="icon_blinkcoin_28">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconBlinkcoin28} />
        </div>
      )}
    </div>
  );
}

export default function Gift() {
  return (
    <div className="bg-white overflow-clip relative rounded-[40px] size-full" data-node-id="95933:228728" data-name="gift">
      <div className="absolute bg-black content-stretch flex flex-col h-[912px] items-center left-0 px-[16px] rounded-tl-[40px] rounded-tr-[40px] top-[-68px] w-[390px]" data-node-id="95933:228729" data-name="Modal sheet">
        <div className="content-stretch flex flex-col h-[12px] items-center justify-end pt-[8px] relative shrink-0 w-full" data-node-id="I95933:228729;3277:68117" data-name="Slider">
          <div className="bg-[#808080] h-[4px] relative rounded-[20px] shrink-0 w-[33px]" data-node-id="I95933:228729;3277:68117;2702:17814" data-name="Vector" />
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[24px] top-[732px] w-[342px]" data-node-id="95933:228745" data-name="Btns">
        <div className="bg-white content-stretch flex h-[56px] items-center justify-between px-[16px] py-[18px] relative rounded-[20px] shrink-0 w-full" data-node-id="95933:228748" data-name="Button">
          <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[15px] text-black text-center uppercase whitespace-nowrap" data-node-id="95933:228749">
            подарить
          </p>
          <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="95933:228750">
            <Icon className="relative shrink-0 size-[28px]" icon="blinkcoin" size="28" />
            <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[15px] text-black text-center uppercase whitespace-nowrap" data-node-id="95933:228752">
              5000
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-[844px] left-0 pointer-events-none top-0" data-node-id="97660:107397">
        <div className="bg-gradient-to-b from-[79.808%] from-black h-[156px] overflow-clip pointer-events-auto sticky to-[rgba(0,0,0,0)] top-0 w-[390px]" data-name="Background">
          <div className="absolute bottom-0 h-[156px] left-1/2 pointer-events-none top-0" data-node-id="97660:107398">
            <div className="-translate-x-1/2 bg-gradient-to-b from-[60.959%] from-black h-[156px] pointer-events-auto sticky to-[rgba(0,0,0,0)] top-0 w-[390px]" data-name="background" />
          </div>
        </div>
      </div>
      <BackgroundGlow className="absolute bottom-0 h-[844px] left-0 pointer-events-none top-0" />
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[24px] top-[122px] w-[342px]" data-node-id="95933:228760">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative shrink-0 w-full" data-node-id="99679:176762" data-name="gift_info_container">
          <div className="absolute border-2 border-[rgba(28,28,28,0.5)] border-solid inset-0 overflow-clip rounded-[40px]" data-node-id="99679:176763" data-name="item section">
            <div className="absolute h-[320px] inset-[-2px] pointer-events-none" data-node-id="I99679:176763;84208:23754">
              <div className="pointer-events-auto sticky top-0" data-name="Pattern fill">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPatternFill} />
              </div>
            </div>
          </div>
          <ItemBadge className="h-[40px] relative shrink-0 w-[112px]" />
          <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-full" data-node-id="99679:176765">
            <div className="relative shrink-0 size-[150px]" data-node-id="99679:176766" data-name="image 497">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-full left-[4.46%] max-w-none top-0 w-[92.14%]" src={imgImage497} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Montserrat:SemiBold'] font-semibold gap-[4px] items-center justify-center px-[16px] relative shrink-0 text-center w-full" data-node-id="99679:176767" data-name="title">
            <p className="leading-[1.119] lowercase relative shrink-0 text-[20px] text-white w-full" data-node-id="99679:176768">
              рарное кольцо всевластия дизайна
            </p>
            <p className="leading-[normal] relative shrink-0 text-[#808080] text-[15px] w-full" data-node-id="99679:176769">
              гифт
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start justify-end pb-[16px] pt-[8px] relative shrink-0 w-full" data-node-id="100359:121144" data-name="limited section">
          <div className="border border-[#2b2b2b] border-solid content-stretch flex flex-col h-[28px] items-start overflow-clip p-[3px] relative rounded-[10px] shrink-0 w-[342px]" data-node-id="I100359:121144;84208:22310">
            <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative w-full" data-node-id="I100359:121144;84208:22311" data-name="row">
              <div className="h-full relative rounded-bl-[7px] rounded-br-[2px] rounded-tl-[7px] rounded-tr-[2px] shrink-0 w-[132px]" data-node-id="I100359:121144;84208:22312" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 132 22' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(11.703 0.70278 -4.7192 2.1829 7.0278 8.7593)'><stop stop-color='rgba(248,225,145,1)' offset='0'/><stop stop-color='rgba(251,199,193,1)' offset='0.24222'/><stop stop-color='rgba(255,173,242,1)' offset='0.48443'/><stop stop-color='rgba(201,214,242,1)' offset='0.70668'/><stop stop-color='rgba(147,255,242,1)' offset='0.92892'/></radialGradient></defs></svg>\")" }} />
              <div className="bg-white h-full relative rounded-[2px] shrink-0 w-px" data-node-id="I100359:121144;84208:22313" />
              <div className="bg-[rgba(255,255,255,0.1)] flex-[1_0_0] h-full min-w-px relative rounded-bl-[2px] rounded-br-[7px] rounded-tl-[2px] rounded-tr-[7px]" data-node-id="I100359:121144;84208:22314" />
            </div>
          </div>
          <div className="content-stretch flex h-[28px] items-center justify-between pt-[8px] relative shrink-0 w-[342px]" data-node-id="I100359:121144;84232:25383">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I100359:121144;84208:22315">
              <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold'] font-semibold justify-center leading-[0] lowercase relative shrink-0 text-[13px] text-white whitespace-nowrap" data-node-id="I100359:121144;84208:22318">
                <p className="leading-[normal]">осталось на складе</p>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex font-['Montserrat:SemiBold'] font-semibold gap-[2px] items-center leading-[0] lowercase relative shrink-0 text-[13px] whitespace-nowrap" data-node-id="I100359:121144;84208:22319">
              <div className="flex flex-col justify-center relative shrink-0 text-right text-white" data-node-id="I100359:121144;84208:22320">
                <p className="leading-[normal]">42</p>
              </div>
              <div className="flex flex-col justify-center relative shrink-0 text-[rgba(255,255,255,0.5)] text-center" data-node-id="I100359:121144;84208:22321">
                <p className="leading-[normal]">/</p>
              </div>
              <div className="flex flex-col justify-center relative shrink-0 text-[rgba(255,255,255,0.5)] text-right" data-node-id="I100359:121144;84208:22322">
                <p className="leading-[normal]">100</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="95933:228772">
          <div className="bg-[#1c1c1c] border border-[#2b2b2b] border-solid content-stretch flex flex-col gap-[4px] h-[105px] items-start pb-[14px] pt-[10px] px-[16px] relative rounded-[12px] shrink-0 w-full" data-node-id="95933:228773" data-name="InputProfile">
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="I95933:228773;44415:90282" data-name="Top">
              <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold'] leading-[normal] lowercase not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" data-node-id="I95933:228773;44415:90283">
                коммент к подарку
              </p>
              <div className="content-stretch flex h-[17px] items-center justify-center relative shrink-0 w-[39px]" data-node-id="I95933:228773;44415:90284" data-name="Counter" />
            </div>
            <p className="[word-break:break-word] font-['SF_Pro_Text:Medium'] leading-[normal] lowercase not-italic relative shrink-0 text-[#494949] text-[17px] whitespace-nowrap" data-node-id="I95933:228773;44087:82706">
              я кринж, я свободен
              <br aria-hidden />
              <br aria-hidden />
            </p>
          </div>
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="95933:228774">
            <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#808080] text-[15px] text-ellipsis whitespace-nowrap" data-node-id="95933:228775">
              отправить анонимно
            </p>
            <div className="content-stretch flex items-center justify-end overflow-clip p-[4px] relative rounded-[100px] shrink-0 w-[53px]" data-node-id="95945:229506" style={{ backgroundImage: "linear-gradient(210.03455393106827deg, rgb(170, 148, 237) 12.734%, rgb(102, 250, 255) 92.437%)" }} data-name="Switcher">
              <div className="bg-black relative rounded-[100px] shrink-0 size-[22px]" data-node-id="I95945:229506;6220:108819" data-name="Point" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex items-center justify-between left-0 px-[16px] top-[60px] w-[390px]" data-node-id="95933:228777" data-name="Component 14">
        <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-[296px]" data-node-id="95933:228778" data-name="ContentLeft">
          <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="95933:228783">
            <div className="relative shrink-0 size-[46px]" data-node-id="95933:228784" data-name="_Avatar">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[16px] size-[46.001px] top-1/2" data-node-id="I95933:228784;3951:109567" data-name="_AvatarMedium">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarMedium} />
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="95933:228785" data-name="ContactCard / Title">
              <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I95933:228785;13893:187677" data-name="Title">
                <UserName className="content-stretch flex items-center justify-center relative shrink-0" />
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I95933:228785;6638:126608" data-name="Show/Hide SubTitle">
                <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I95933:228785;6638:126626" data-name="ContactCard / Subtitle">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I95933:228785;6638:126626;6656:130265" data-name="Text">
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I95933:228785;6638:126626;6699:135282" data-name="ContactCard / Subtitle / Text">
                      <p className="[word-break:break-word] font-['SF_Pro_Text:Medium'] leading-[20px] lowercase not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.5)] whitespace-nowrap" data-node-id="I95933:228785;6638:126626;6699:135282;6699:135271">
                        получатель
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-[33px]" data-node-id="I95933:228785;6638:126626;6671:145702" data-name="Show/Hide Date" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <SquareButton className="bg-black border-2 border-[#242424] border-solid content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[46px]" />
      </div>
      <HomeIndicator className="absolute h-[34px] left-0 top-[810px] w-[390px]" />
      <div className="absolute h-[47px] left-0 overflow-clip top-0 w-[390px]" data-node-id="95933:228789" data-name="StatusBar">
        <div className="absolute contents left-[27px] top-[14px]" data-node-id="I95933:228789;2604:14897" data-name="Left Side">
          <div className="absolute h-[21px] left-[27px] rounded-[24px] top-[14px] w-[54px]" data-node-id="I95933:228789;2604:14898" data-name="_StatusBar-time">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro_Text:Semibold'] h-[20px] leading-[22px] left-[27px] not-italic text-[17px] text-center text-white top-px tracking-[-0.408px] w-[54px]" data-node-id="I95933:228789;2604:14898;839:7100" style={{ fontFeatureSettings: '"case" 1' }}>
              4:20
            </p>
          </div>
        </div>
        <div className="absolute h-[13px] right-[26.6px] top-[19px] w-[77.401px]" data-node-id="I95933:228789;2604:14899" data-name="Right Side">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRightSide} />
        </div>
        <LogoNotch className="-translate-x-1/2 absolute content-stretch flex items-center left-[calc(50%-0.14px)] px-[8px] py-[5px] rounded-[100px] top-[11px] w-[81.718px]" />
      </div>
    </div>
  );
}
