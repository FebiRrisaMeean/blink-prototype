const assetPathPrefix = "https://www.figma.com/api/mcp/asset/e1ad6b75-1e62-4532-96be-d43c2756be52";
const imgLogo = `${assetPathPrefix}/f548a.svg`;
const imgImage751 = `${assetPathPrefix}/c4ae0.png`;
const imgVector189Stroke = `${assetPathPrefix}/22949.svg`;
const imgGroup2 = `${assetPathPrefix}/1160e.svg`;
const imgGroup3 = `${assetPathPrefix}/a896f.svg`;
const imgTrail = `${assetPathPrefix}/3e052.png`;
const imgVector = `${assetPathPrefix}/2b6a7.svg`;
const imgEllipse395 = `${assetPathPrefix}/dc87c.png`;
const imgGlyphNavFriends24 = `${assetPathPrefix}/5f2ba.svg`;
const imgGlyphMessage24 = `${assetPathPrefix}/abe54.svg`;
const imgGlyphMarket24 = `${assetPathPrefix}/c0ac6.svg`;
const imgFrame540 = `${assetPathPrefix}/52ab5.svg`;
const imgGlyphGame24 = `${assetPathPrefix}/f1e87.svg`;
const imgImage66 = `${assetPathPrefix}/b34eb.png`;
const imgImage67 = `${assetPathPrefix}/0d5e6.png`;
const imgIconWeatherRain16 = `${assetPathPrefix}/aaf7e.png`;
const imgImage = `${assetPathPrefix}/f87c0.png`;
const imgImage1 = `${assetPathPrefix}/bed91.png`;
const imgImage2 = `${assetPathPrefix}/86aa4.png`;
const imgGradientBottom = `${assetPathPrefix}/b3405.svg`;
const imgLogoDark = `${assetPathPrefix}/beef8.svg`;
const imgOpenStreetMapDark = `${assetPathPrefix}/332a3.svg`;
const imgGlyphCheckin24 = `${assetPathPrefix}/bbc94.svg`;
const imgGlyphPeopleAround24 = `${assetPathPrefix}/36957.svg`;
const imgGlyphFootprints24 = `${assetPathPrefix}/59a69.svg`;
const imgGlyphLocationCursor20 = `${assetPathPrefix}/169fd.svg`;
const imgRightSide = `${assetPathPrefix}/2f068.svg`;

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
  darkMode?: "False";
};

function HomeIndicator({ className, darkMode = "False" }: HomeIndicatorProps) {
  return (
    <div className={className || "h-[34px] relative w-[390px]"} data-node-id="1525:11080">
      <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] w-[134px]" data-node-id="1525:11081" data-name="Home Indicator" />
    </div>
  );
}

type PinTimeProps = {
  className?: string;
  size?: "S";
  type?: "m";
};

function PinTime({ className, size = "S", type = "m" }: PinTimeProps) {
  return (
    <div className={className || "[word-break:break-word] content-stretch flex flex-col italic items-center relative whitespace-nowrap"} data-node-id="104495:70175">
      <p className="font-['Montserrat:Bold_Italic'] font-bold leading-none mb-[-2px] relative shrink-0 text-[13px] text-black" data-node-id="104495:70176">
        22
      </p>
      <div className="flex flex-col font-['Montserrat:ExtraBold_Italic'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#808080] text-[9px] text-center" data-node-id="104495:70177">
        <p className="leading-[10px]">мин</p>
      </div>
    </div>
  );
}

type PinPlacesProps = {
  className?: string;
  size?: "24";
  type?: "home";
};

function PinPlaces({ className, size = "24", type = "home" }: PinPlacesProps) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-node-id="108974:4993">
      <div className="absolute h-[19.625px] left-[0.96px] top-[2.32px] w-[22.087px]" data-node-id="108974:4994" data-name="Vector 189 (Stroke)">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector189Stroke} />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.5px] left-1/2 top-1/2 w-[17.534px]" data-node-id="108974:4995" data-name="image 751">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[99.82%] left-[-6.4%] max-w-none top-[0.09%] w-[112.8%]" src={imgImage751} />
        </div>
      </div>
    </div>
  );
}

type PinDirectionProps = {
  className?: string;
  size?: "24";
};

function PinDirection({ className, size = "24" }: PinDirectionProps) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="104375:16204">
      <div className="absolute h-[18px] left-[1.5px] top-[3px] w-[21px]" data-node-id="104375:16210">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup2} />
      </div>
    </div>
  );
}

type PinLeftIconProps = {
  className?: string;
  property1?: "direction";
  size?: "16";
};

function PinLeftIcon({ className, property1 = "direction", size = "16" }: PinLeftIconProps) {
  return (
    <div className={className || "relative size-[16px]"} data-node-id="104231:70757">
      <div className="absolute h-[12px] left-px top-[2px] w-[14px]" data-node-id="I104231:70720;104231:15738">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup3} />
      </div>
    </div>
  );
}

type PinTrailProps = {
  className?: string;
  size?: "S";
};

function PinTrail({ className, size = "S" }: PinTrailProps) {
  return (
    <div className={className || "h-[43px] relative w-[63px]"} data-node-id="104231:70578">
      <div className="absolute flex inset-0 items-center justify-center" data-node-id="104231:15768" style={{ containerType: "size" }}>
        <div className="-scale-x-100 flex-none h-[100cqw] rotate-90 w-[100cqh]">
          <div className="relative size-full" data-name="Trail">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTrail} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Glyph({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-node-id="92426:65219" data-name="glyph">
      <div className="-translate-y-1/2 absolute h-[24px] left-0 overflow-clip right-0 top-1/2" data-node-id="92426:65220" data-name="glyph_location_24">
        <div className="absolute h-[21px] left-[4.5px] top-[1.5px] w-[15.001px]" data-node-id="92426:65221" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
        </div>
      </div>
    </div>
  );
}

type TabBarProps = {
  className?: string;
  property1?: "with text";
};

function TabBar({ className, property1 = "with text" }: TabBarProps) {
  return (
    <div className={className || "backdrop-blur-[5px] bg-[rgba(0,0,0,0.86)] border border-[rgba(255,255,255,0.15)] border-solid content-stretch flex gap-[10px] items-center pl-[12px] pr-[10px] py-[2px] relative rounded-[40px]"} data-node-id="107036:15664">
      <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[10px] pt-[8px] relative shrink-0 w-[48px]" data-node-id="107036:15665" data-name="Tab 1">
        <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[100px]" data-node-id="107036:15666" data-name="Selection" />
        <Glyph className="overflow-clip relative shrink-0 size-[24px]" />
        <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold'] leading-[normal] lowercase min-w-full not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] w-[min-content]" data-node-id="107036:15668">
          карта
        </p>
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[10px] pt-[8px] relative shrink-0 w-[48px]" data-node-id="107036:15669" data-name="Tab 2">
        <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[100px]" data-node-id="107036:15670" data-name="Selection" />
        <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="107036:15671" data-name="glyph/nav friends/24">
          <div className="absolute left-0 size-[24px] top-0" data-node-id="I107036:15671;15719:323796" data-name="glyph_nav_friends_24">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphNavFriends24} />
          </div>
        </div>
        <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold'] leading-[normal] lowercase min-w-full not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center tracking-[-0.24px] w-[min-content]" data-node-id="107036:15672">
          друзья
        </p>
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[10px] pt-[8px] relative shrink-0 w-[48px]" data-node-id="107036:15673" data-name="Tab 3">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="107036:15674" data-name="glyph/message/24">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphMessage24} />
        </div>
        <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[100px]" data-node-id="107036:15675" data-name="Selection" />
        <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold'] leading-[normal] lowercase min-w-full not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center tracking-[-0.24px] w-[min-content]" data-node-id="107036:15676">
          чаты
        </p>
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[10px] pt-[8px] relative shrink-0 w-[48px]" data-node-id="107036:15677" data-name="Tab 4">
        <div className="relative shrink-0 size-[24px]" data-node-id="107036:15679" data-name="glyph/market/24">
          <div className="absolute left-0 size-[24px] top-0" data-node-id="I107036:15679;115927:23904" data-name="glyph_market_24">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphMarket24} />
          </div>
        </div>
        <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold'] leading-[normal] lowercase min-w-full not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center tracking-[-0.24px] w-[min-content]" data-node-id="107036:15680">
          маркет
        </p>
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[10px] pt-[8px] relative shrink-0 w-[48px]" data-node-id="107036:15681" data-name="Tab 5">
        <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[100px]" data-node-id="107036:15682" data-name="Selection" />
        <div className="relative shrink-0 size-[24px]" data-node-id="107036:15683">
          <div className="absolute left-0 size-[24px] top-0" data-node-id="107036:15684">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgEllipse395} width="24" />
          </div>
        </div>
        <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold'] leading-[normal] lowercase min-w-full not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center tracking-[-0.24px] w-[min-content]" data-node-id="107036:15685">
          ты
        </p>
      </div>
    </div>
  );
}

type StepsProps = {
  className?: string;
  property1?: "your steps";
};

function Steps({ className, property1 = "your steps" }: StepsProps) {
  return (
    <div className={className || "backdrop-blur-[3px] bg-[rgba(255,255,255,0.3)] border border-[rgba(255,255,255,0.3)] border-solid content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[6px] relative rounded-[12px] shadow-[0px_0px_12px_0px_rgba(88,82,123,0.2)]"} data-node-id="107049:15673">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="107049:15674" data-name="glyph/steps/16">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-node-id="I107049:15674;15497:209780" data-name="glyph_steps_16">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-node-id="I107049:15674;15497:209781">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame540} />
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="107049:15675" data-name="text">
        <div className="[word-break:break-word] flex flex-col font-['SF_Pro_Text:Semibold'] justify-center leading-[0] lowercase not-italic relative shrink-0 text-[13px] text-black text-center whitespace-nowrap" data-node-id="107049:15676">
          <p className="leading-none whitespace-pre">{`345 шагов · 9 место  `}</p>
        </div>
      </div>
    </div>
  );
}

function Button({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[rgba(0,0,0,0.86)] overflow-clip relative rounded-[30px] size-[44px]"} data-node-id="107036:15615" data-name="button">
      <div className="absolute left-[10px] overflow-clip size-[24px] top-[10px]" data-node-id="107036:15616" data-name="glyph/game/24">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphGame24} />
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white overflow-clip relative rounded-[36px] size-full" data-node-id="111805:64774" data-name="карта">
      <div className="-translate-y-1/2 absolute bg-white h-[844px] left-0 overflow-clip top-1/2 w-[390px]" data-node-id="111805:64775" data-name="MapView - BlinkMaps">
        <div className="absolute h-[844px] left-[-343px] top-0 w-[1425px]" data-node-id="I111805:64775;82209:26099" data-name="image 66">
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage66} />
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage67} />
          </div>
        </div>
      </div>
      <div className="absolute h-[844px] left-0 top-0 w-[390px]" data-node-id="111805:64776" data-name="Gradient">
        <div className="absolute bg-gradient-to-t from-[#ffa439] inset-[75.12%_0_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-634px] mask-size-[390px_844px] to-[145%] to-[rgba(255,164,57,0)]" data-node-id="111805:64778" style={{ maskImage: `url("${imgGradientBottom}")` }} data-name="gradient bottom" />
      </div>
      <div className="absolute contents left-[10px] top-[647px]" data-node-id="111805:64806">
        <div className="absolute bg-white h-[12.778px] left-[10px] opacity-40 rounded-[7.031px] top-[657.56px] w-[60px]" data-node-id="111805:64807" data-name="BubbleText" />
        <div className="absolute bg-white h-[12.778px] left-[11.67px] opacity-40 rounded-[7.031px] top-[647px] w-[54.444px]" data-node-id="111805:64808" data-name="BubbleText" />
        <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[0] left-[calc(50%-155.83px)] lowercase not-italic opacity-40 text-[#262626] text-[9.444px] text-center top-[calc(50%+226.11px)] w-[56.111px]" data-node-id="111805:64809">
          <p className="leading-none mb-0">выставка</p>
          <p className="leading-none">в anna nova</p>
        </div>
      </div>
      <div className="absolute contents left-[14px] top-[813.06px]" data-node-id="111805:64810" data-name="MapLogoDark">
        <div className="-translate-x-1/2 absolute h-[19.088px] left-[calc(50%-144px)] top-[813.84px] w-[74px]" data-node-id="111805:64811" data-name="LogoDark">
          <div className="absolute inset-[-5.24%_-0.76%_-5.24%_-1.35%]">
            <img alt="" className="block max-w-none size-full" src={imgLogoDark} />
          </div>
        </div>
        <div className="absolute h-[20.051px] left-[291.81px] top-[813.06px] w-[84.634px]" data-node-id="111805:64814" data-name="OpenStreetMapDark">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgOpenStreetMapDark} />
        </div>
      </div>
      <div className="absolute h-[280px] left-0 top-[47px] w-[390px]" data-node-id="111805:64817" data-name="top">
        <div className="absolute content-stretch flex flex-col gap-[10px] items-end left-[314px] px-[16px] top-[20px]" data-node-id="I111805:64817;107049:15734" data-name="toolbar">
          <div className="bg-[rgba(0,0,0,0.86)] overflow-clip relative rounded-[30px] shrink-0 size-[44px]" data-node-id="I111805:64817;107049:15734;118961:28619" data-name="button">
            <div className="absolute left-[10px] overflow-clip size-[24px] top-[10px]" data-node-id="I111805:64817;107049:15734;118961:28619;107036:15616" data-name="glyph/checkin/24">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-node-id="I111805:64817;107049:15734;118961:28619;107036:15616;87287:117271" data-name="glyph_checkin_24">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphCheckin24} />
              </div>
            </div>
          </div>
          <div className="bg-[rgba(0,0,0,0.86)] overflow-clip relative rounded-[30px] shrink-0 size-[44px]" data-node-id="I111805:64817;107049:15734;118961:27802" data-name="button">
            <div className="absolute left-[10px] overflow-clip size-[24px] top-[10px]" data-node-id="I111805:64817;107049:15734;118961:27802;107036:15616" data-name="glyph/people_around/24">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphPeopleAround24} />
            </div>
          </div>
          <Button className="bg-[rgba(0,0,0,0.86)] overflow-clip relative rounded-[30px] shrink-0 size-[44px]" />
        </div>
        <div className="absolute content-stretch flex items-start left-0 pl-[16px] pt-[16px] top-0 w-[390px]" data-node-id="I111805:64817;107049:15735" data-name="NavTop">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-node-id="I111805:64817;107049:15736" data-name="Content">
            <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0" data-node-id="I111805:64817;107049:15737" data-name="Location">
              <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] decoration-[10%] decoration-solid font-['Montserrat:SemiBold'] font-semibold leading-[1.05] lowercase relative shrink-0 text-[36px] text-black tracking-[-0.72px] underline w-[294px]" data-node-id="I111805:64817;107049:15738">
                москва
              </p>
              <div className="content-stretch flex gap-[16px] items-start px-[2px] relative shrink-0" data-node-id="I111805:64817;107049:15739" data-name="Conditions">
                <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I111805:64817;107049:15740" data-name="Conditions">
                  <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap" data-node-id="I111805:64817;107049:15743">
                    09:53
                  </p>
                </div>
                <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I111805:64817;107049:15744" data-name="Conditions">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I111805:64817;107049:15745" data-name="icon">
                    <div className="absolute left-0 size-[16px] top-0" data-node-id="I111805:64817;107049:15746" data-name="icon_weather_rain_16">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIconWeatherRain16} />
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[15px] text-black text-center whitespace-nowrap" data-node-id="I111805:64817;107049:15747">
                    -15 °С
                  </p>
                </div>
              </div>
            </div>
            <Steps className="backdrop-blur-[3px] bg-[rgba(255,255,255,0.3)] border border-[rgba(255,255,255,0.3)] border-solid content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[6px] relative rounded-[12px] shadow-[0px_0px_12px_0px_rgba(88,82,123,0.2)] shrink-0" />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col h-[120px] items-center left-0 top-[690px] w-[390px]" data-node-id="111805:64818" data-name="tab_bar + button_group">
        <div className="content-stretch flex gap-[61px] items-center justify-end pb-[16px] px-[16px] relative shrink-0 w-[390px]" data-node-id="I111805:64818;107049:15967" data-name="tools_2_row">
          <div className="backdrop-blur-[3px] bg-[rgba(255,255,255,0.3)] border border-[rgba(255,255,255,0.3)] border-solid content-stretch flex flex-col h-[40px] items-start justify-center px-[12px] py-[22px] relative rounded-[16px] shadow-[0px_0px_12px_0px_rgba(88,82,123,0.2)] shrink-0" data-node-id="I111805:64818;107049:15967;107036:15619" data-name="button_my_world">
            <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I111805:64818;107049:15967;107036:15619;107036:15623">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I111805:64818;107049:15967;107036:15619;107036:15624" data-name="glyph/footprints/24">
                <div className="absolute left-0 size-[24px] top-0" data-node-id="I111805:64818;107049:15967;107036:15619;107036:15624;17711:353467" data-name="glyph_footprints_24">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphFootprints24} />
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['SF_Pro_Text:Medium'] justify-center leading-[0] lowercase not-italic relative shrink-0 text-[16px] text-[color:var(--grays\/black,black)] whitespace-nowrap" data-node-id="I111805:64818;107049:15967;107036:15619;107036:15625">
                <p className="leading-[1.2]">мой мир</p>
              </div>
            </div>
          </div>
          <div className="backdrop-blur-[3px] bg-[rgba(255,255,255,0.3)] border border-[rgba(255,255,255,0.3)] border-solid content-stretch flex flex-col h-[40px] items-center justify-center px-[17px] py-[22px] relative rounded-[16px] shadow-[0px_0px_12px_0px_rgba(88,82,123,0.2)] shrink-0 w-[53px]" data-node-id="I111805:64818;107049:15967;107036:15620" data-name="NavCheckinLocation">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I111805:64818;107049:15967;107036:15620;27643:89392" data-name="glyph/location_cursor/20">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphLocationCursor20} />
            </div>
          </div>
        </div>
        <TabBar className="backdrop-blur-[5px] bg-[rgba(0,0,0,0.86)] border border-[rgba(255,255,255,0.15)] border-solid content-stretch flex gap-[10px] items-center pl-[12px] pr-[10px] py-[2px] relative rounded-[40px] shrink-0" />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+113px)] rounded-[8px] size-[20px] top-[calc(50%+10px)]" data-node-id="112414:18664" data-name="_Pin_base">
        <div className="absolute bg-white left-0 rounded-[8px] shadow-[0px_1px_5px_0px_rgba(28,10,46,0.4)] size-[20px] top-0" data-node-id="I112414:18664;107289:2064" data-name="back" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[7px] size-[18px] top-1/2" data-node-id="I112414:18664;104041:17701" data-name="_Pin_avatar">
          <div className="absolute h-[22.5px] left-[-0.03px] overflow-clip rounded-[6.75px] top-[-4.5px] w-[18px]" data-node-id="I112414:18664;104041:17701;104041:17587" data-name="mask">
            <div className="-translate-x-1/2 absolute left-1/2 size-[27.234px] top-[-4.5px]" data-node-id="I112414:18664;104041:17701;104041:17588" data-name="image">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-[-42.8%] max-w-none size-[182.27%] top-[6.67%]" src={imgImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[79px] size-[36px] top-[360px]" data-node-id="112414:18665" data-name="Pin">
        <PinTrail className="absolute h-[43px] left-[-51px] top-[-1px] w-[63px]" />
        <div className="absolute inset-0 rounded-[14px]" data-node-id="I112414:18665;104231:70654;104142:70443" data-name="_Pin_base">
          <div className="absolute bg-white left-0 rounded-[14px] shadow-[0px_1px_5px_0px_rgba(28,10,46,0.4)] size-[36px] top-0" data-node-id="I112414:18665;104231:70654;104142:70443;107289:2050" data-name="back" />
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[12px] size-[32px] top-1/2" data-node-id="I112414:18665;104231:70654;104142:70443;104041:17695" data-name="_Pin_avatar">
            <div className="absolute h-[40.533px] left-[-0.05px] overflow-clip rounded-[12px] top-[-8.53px] w-[32px]" data-node-id="I112414:18665;104231:70654;104142:70443;104041:17695;104037:17571" data-name="mask">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.26px)] size-[48.416px] top-[calc(50%+0.47px)]" data-node-id="I112414:18665;104231:70654;104142:70443;104041:17695;104037:17572" data-name="image">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute left-[-8.36%] max-w-none size-full top-[19.59%]" src={imgImage1} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <PinLeftIcon className="absolute left-[-4px] size-[16px] top-[20px]" />
      </div>
      <div className="absolute left-[244px] size-[52px] top-[280px]" data-node-id="112414:18666" data-name="Pin">
        <div className="absolute inset-0 rounded-[21px]" data-node-id="I112414:18666;104375:26058;104375:16127" data-name="_Pin_base">
          <div className="absolute bg-white left-0 rounded-[21px] shadow-[0px_1px_5px_0px_rgba(28,10,46,0.4)] size-[52px] top-0" data-node-id="I112414:18666;104375:26058;104375:16127;107289:2041" data-name="back" />
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[18px] size-[46px] top-1/2" data-node-id="I112414:18666;104375:26058;104375:16127;104041:17697" data-name="_Pin_avatar">
            <div className="absolute bottom-0 h-[60px] left-[-0.07px] overflow-clip rounded-[18px] w-[46px]" data-node-id="I112414:18666;104375:26058;104375:16127;104041:17697;104036:224937" data-name="mask">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.2px)] size-[69.598px] top-[calc(50%-0.2px)]" data-node-id="I112414:18666;104375:26058;104375:16127;104041:17697;104036:224938" data-name="image">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute left-[-17.4%] max-w-none size-[134.87%] top-[13.84%]" src={imgImage2} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-[-6px] size-[24px] top-[28px]" data-node-id="I112414:18666;104375:26058;104375:16182" data-name="_pin/left_icon">
          <PinPlaces className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" />
        </div>
        <div className="absolute content-stretch flex h-[24px] items-center justify-center left-[29px] top-[28px] w-[29px]" data-node-id="I112414:18666;104375:26058;107742:14913" data-name="_pin/right">
          <PinTime className="[word-break:break-word] content-stretch flex flex-col italic items-center relative shrink-0 whitespace-nowrap" />
        </div>
      </div>
      <HomeIndicator className="absolute h-[34px] left-0 top-[810px] w-[390px]" />
      <div className="absolute h-[47px] left-0 overflow-clip top-0 w-[390px]" data-node-id="111805:64820" data-name="StatusBar">
        <div className="absolute contents left-[27px] top-[14px]" data-node-id="I111805:64820;2604:14897" data-name="Left Side">
          <div className="absolute h-[21px] left-[27px] rounded-[24px] top-[14px] w-[54px]" data-node-id="I111805:64820;2604:14898" data-name="_StatusBar-time">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro_Text:Semibold'] h-[20px] leading-[22px] left-[27px] not-italic text-[17px] text-black text-center top-px tracking-[-0.408px] w-[54px]" data-node-id="I111805:64820;2604:14898;839:7100" style={{ fontFeatureSettings: '"case" 1' }}>
              4:20
            </p>
          </div>
        </div>
        <div className="absolute h-[13px] right-[26.6px] top-[19px] w-[77.401px]" data-node-id="I111805:64820;2604:14899" data-name="Right Side">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRightSide} />
        </div>
        <LogoNotch className="-translate-x-1/2 absolute content-stretch flex items-center left-[calc(50%-0.14px)] px-[8px] py-[5px] rounded-[100px] top-[11px] w-[81.718px]" />
      </div>
    </div>
  );
}
