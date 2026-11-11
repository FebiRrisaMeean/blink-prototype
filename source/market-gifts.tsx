const assetPathPrefix = "https://www.figma.com/api/mcp/asset/e96fda7c-52f7-470f-81eb-7728749ed7a6";
const imgVector = `${assetPathPrefix}/2b6a7.svg`;
const imgEllipse395 = `${assetPathPrefix}/dc87c.png`;
const imgGlyphNavFriends24 = `${assetPathPrefix}/5f2ba.svg`;
const imgGlyphMessage24 = `${assetPathPrefix}/abe54.svg`;
const imgGlyphMarket24 = `${assetPathPrefix}/c0ac6.svg`;
const imgIconBlinkcoin28 = `${assetPathPrefix}/d8eee.svg`;
const imgIconBlinkcoin20 = `${assetPathPrefix}/f8243.svg`;
const imgNewBadgeSale = `${assetPathPrefix}/50419.png`;
const imgNewBadgeLimited = `${assetPathPrefix}/6a4cf.png`;
const imgVectorGroup = `${assetPathPrefix}/8cc10.svg`;
const imgGlare = `${assetPathPrefix}/ef51f.svg`;
const imgTailImage = `${assetPathPrefix}/0f67e.png`;
const imgImage495 = `${assetPathPrefix}/1fe87.png`;
const imgCaseImage = `${assetPathPrefix}/db1fa.png`;
const imgImage491 = `${assetPathPrefix}/ff8f8.png`;
const imgImage492 = `${assetPathPrefix}/0e518.png`;
const imgImage493 = `${assetPathPrefix}/74de7.png`;
const imgImage494 = `${assetPathPrefix}/4d65e.png`;
const imgVectorGroup1 = `${assetPathPrefix}/7e3ff.svg`;
const imgVectorGroup2 = `${assetPathPrefix}/ed3e6.svg`;
const imgVectorGroup3 = `${assetPathPrefix}/2da48.svg`;
const imgVectorGroup4 = `${assetPathPrefix}/2a886.svg`;
const imgAnimationGlowPa = `${assetPathPrefix}/9e94f.svg`;
const imgGlyphPlus16 = `${assetPathPrefix}/3312e.svg`;
const imgSpaceSvg = `${assetPathPrefix}/98b28.svg`;
const imgSpaceSvg1 = `${assetPathPrefix}/a95fe.svg`;
const imgRightSide = `${assetPathPrefix}/d00ef.svg`;

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

type IconProps = {
  className?: string;
  icon?: "blinkcoin";
  size?: "20" | "28";
};

function Icon({ className, icon = "blinkcoin", size = "28" }: IconProps) {
  const is20 = size === "20";
  return (
    <div className={className || `relative ${is20 ? "size-[20px]" : "size-[28px]"}`} id={is20 ? "node-85984_175214" : "node-83967_152689"}>
      {size === "28" && (
        <div className="absolute inset-[0_0.02%_0_-0.02%]" data-node-id="84305:251131" data-name="icon_blinkcoin_28">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconBlinkcoin28} />
        </div>
      )}
      {is20 && (
        <div className="absolute inset-[0_0.02%_0_-0.02%]" data-node-id="85984:175215" data-name="icon_blinkcoin_20">
          <div className="absolute inset-[-0.62%_-0.65%_-0.63%_-0.6%]">
            <img alt="" className="block max-w-none size-full" src={imgIconBlinkcoin20} />
          </div>
        </div>
      )}
    </div>
  );
}

type ItemBadgeProps = {
  className?: string;
  type?: "limited" | "sale";
};

function ItemBadge({ className, type = "sale" }: ItemBadgeProps) {
  const isLimited = type === "limited";
  return (
    <div className={className || `h-[40px] relative ${isLimited ? "w-[112px]" : "w-[75px]"}`} id={isLimited ? "node-84466_16272" : "node-84466_16270"}>
      <div className={`absolute flex items-center justify-center ${isLimited ? "inset-[-11.95%_-1.37%]" : "bottom-[-7.9%] left-[-1.62px] top-[-7.9%] w-[78.234px]"}`} id={isLimited ? "node-84466_16260" : "node-84466_16268"} style={{ containerType: "size" }}>
        <div className={`flex-none ${isLimited ? "h-[hypot(3.04499cqw,80.4041cqh)] rotate-[-4.97deg] skew-x-[0.05deg] w-[hypot(96.955cqw,-19.5959cqh)]" : "h-[hypot(4.49898cqw,86.0231cqh)] rotate-[-4.95deg] skew-x-[0.1deg] w-[hypot(95.501cqw,-13.9769cqh)]"}`}>
          {type === "sale" && (
            <div className="relative size-full" data-name="new_badge _ sale">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[118.83%] left-[-23.08%] max-w-none top-[-9.42%] w-[135.58%]" src={imgNewBadgeSale} />
              </div>
            </div>
          )}
          {isLimited && (
            <div className="relative size-full" data-name="new_badge _ limited">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[118.48%] left-[-17.31%] max-w-none top-[-9.24%] w-[128.21%]" src={imgNewBadgeLimited} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

type PackageProps = {
  className?: string;
  flare?: boolean;
  type?: "Case (vector)";
};

function Package({ className, flare = false, type = "Case (vector)" }: PackageProps) {
  return (
    <div className={className || "h-[152px] relative w-[143px]"} data-node-id="82387:109877">
      <div className="absolute inset-[0.66%_9.09%_0_9.09%]" data-node-id="84613:21494" data-name="vector group">
        <div className="absolute inset-[-1.92%_-12.82%_-9.93%_-9.4%]">
          <img alt="" className="block max-w-none size-full" src={imgVectorGroup} />
        </div>
      </div>
      {flare && (
        <div className="absolute h-[112px] left-[25px] top-[26px] w-[95px]" data-node-id="82642:35144" data-name="_glare">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlare} />
        </div>
      )}
    </div>
  );
}

type TailProps = {
  className?: string;
  type?: "dementor" | "rocket";
};

function Tail({ className, type = "rocket" }: TailProps) {
  const isDementor = type === "dementor";
  return (
    <div className={className || "h-[118px] overflow-clip relative rounded-[6px] w-[100px]"} id={isDementor ? "node-79244_81078" : "node-79244_81079"}>
      <div className={`absolute flex items-center justify-center ${isDementor ? "inset-[5.16%_-14.62%_-28.83%_-26.53%]" : "inset-[-36.34%_-50.12%_-36.34%_-49.12%] mix-blend-screen"}`} id={isDementor ? "node-79244_81070" : "node-79244_81062"} style={{ containerType: "size" }}>
        <div className={`flex-none ${isDementor ? "-rotate-140 -scale-x-100 h-[hypot(55.2366cqw,-63.6704cqh)] w-[hypot(44.7634cqw,36.3296cqh)]" : "-rotate-50 h-[hypot(47.9411cqw,39.3349cqh)] w-[hypot(52.0589cqw,-60.6651cqh)]"}`}>
          <div className="relative size-full" data-name="tail image">
            {isDementor && <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTailImage} />}
          </div>
        </div>
      </div>
    </div>
  );
}

type PriceTagProps = {
  className?: string;
  type?: "paid" | "free";
};

function PriceTag({ className, type = "paid" }: PriceTagProps) {
  const isFree = type === "free";
  return (
    <div className={className || `bg-[#121213] border border-[#2b2b2b] border-solid content-stretch flex gap-[8px] items-center justify-center relative rounded-[24px] ${isFree ? "px-[8px] py-[5px]" : "pl-[4px] pr-[8px] py-[4px]"}`} id={isFree ? "node-84796_112958" : "node-82542_113434"}>
      {type === "paid" && <Icon className="relative shrink-0 size-[20px]" size="20" />}
      <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[15px] text-right text-white whitespace-nowrap" id={isFree ? "node-84796_112960" : "node-82534_31726"}>
        {isFree ? "бесплатно" : "300"}
      </p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-black overflow-clip relative rounded-[40px] size-full" data-node-id="95408:38939" data-name="маркет / хвосты">
      <div className="absolute content-stretch flex flex-col gap-[36px] items-center overflow-x-clip overflow-y-auto pt-[36px] px-[16px] right-0 rounded-[40px] top-[156px] w-[390px]" data-node-id="95408:39934" data-name="Frame">
        <div className="content-stretch flex items-center justify-center relative shrink-0 w-[358px]" data-node-id="95408:39935" data-name="row">
          <div className="flex-[1_0_0] h-[228px] min-w-px overflow-clip relative rounded-[32px]" data-node-id="95408:39936" data-name="item box">
            <div className="absolute flex h-[202.711px] items-center justify-center left-[82.14px] top-[0.64px] w-[192.712px]" data-node-id="95408:39937">
              <div className="-rotate-5 flex-none">
                <div className="h-[188px] overflow-clip relative w-[177px]" data-name="Item (large)">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[188px] left-1/2 top-1/2 w-[177px]" data-node-id="95408:39938" data-name="tail box">
                    <div className="absolute aspect-[104.78603980690241/112.96739012002945] flex items-center justify-center left-[20.9%] right-[19.9%] top-[56.16px]" data-node-id="95408:39939" style={{ containerType: "size" }}>
                      <div className="flex-none h-[hypot(-8.73337cqw,92.5935cqh)] rotate-5 w-[hypot(91.2666cqw,7.40652cqh)]">
                        <div className="relative size-full" data-name="image 495">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage495} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-translate-y-1/2 absolute aspect-[143/152] left-0 right-0 top-1/2" data-node-id="I95408:39940;85907:27553" data-name="case image">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-[111.18%] left-[-0.7%] max-w-none top-[-1.32%] w-[101.4%]" src={imgCaseImage} />
                    </div>
                  </div>
                  <ItemBadge className="-translate-x-1/2 -translate-y-1/2 absolute h-[40px] left-[calc(50%-8.5px)] top-[calc(50%-58px)] w-[112px]" type="limited" />
                </div>
              </div>
            </div>
            <div className="-translate-x-1/2 absolute bg-[#121213] border border-[#2b2b2b] border-solid bottom-0 content-stretch flex gap-[8px] items-center justify-center left-[calc(50%+0.5px)] pl-[4px] pr-[8px] py-[4px] rounded-[24px]" data-node-id="95408:39942" data-name="price tag">
              <Icon className="relative shrink-0 size-[20px]" size="20" />
              <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[15px] text-right text-white whitespace-nowrap" data-node-id="I95408:39942;82534:31726">
                5000
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-[358px]" data-node-id="95408:39943" data-name="row">
          <div className="flex-[1_0_0] h-[192px] min-w-px overflow-clip relative rounded-[32px]" data-node-id="95408:39944" data-name="item box">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[159.276px] items-center justify-center left-1/2 top-[calc(50%-12px)] w-[150.759px]" data-node-id="95408:39945">
              <div className="-rotate-3 flex-none">
                <div className="h-[152px] relative w-[143px]" data-name="Item (small)">
                  <div className="absolute h-[152px] left-0 top-0 w-[143px]" data-node-id="95408:39946" data-name="tail box">
                    <div className="absolute flex items-center justify-center left-[17.56px] size-[106.148px] top-[39.4px]" data-node-id="95408:39947">
                      <div className="flex-none rotate-3">
                        <div className="relative size-[101px]" data-name="image 491">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage491} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-[0.66%_9.09%_0_9.09%]" data-node-id="I95408:39948;84613:21494" data-name="vector group">
                    <div className="absolute inset-[-1.92%_-12.82%_-9.93%_-9.4%]">
                      <img alt="" className="block max-w-none size-full" src={imgVectorGroup1} />
                    </div>
                  </div>
                  <ItemBadge className="absolute h-[40px] left-[16px] top-[8px] w-[112px]" type="limited" />
                </div>
              </div>
            </div>
            <PriceTag className="-translate-x-1/2 absolute bg-[#121213] border border-[#2b2b2b] border-solid bottom-0 content-stretch flex gap-[8px] items-center justify-center left-1/2 pl-[4px] pr-[8px] py-[4px] rounded-[24px]" />
          </div>
          <div className="flex-[1_0_0] h-[192px] min-w-px overflow-clip relative rounded-[32px]" data-node-id="95408:39951" data-name="item box">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[159.276px] items-center justify-center left-1/2 top-[calc(50%-12px)] w-[150.759px]" data-node-id="95408:39952">
              <div className="-rotate-3 flex-none">
                <div className="h-[152px] relative w-[143px]" data-name="Item (small)">
                  <div className="absolute h-[152px] left-0 top-0 w-[143px]" data-node-id="95408:39953" data-name="tail box">
                    <div className="absolute flex h-[82.341px] items-center justify-center left-[23.3px] top-[50.16px] w-[94.778px]" data-node-id="95408:39954">
                      <div className="flex-none rotate-[-27.99deg]">
                        <div className="h-[50.456px] relative w-[80.516px]" data-name="image 492">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage492} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-[0.66%_9.09%_0_9.09%]" data-node-id="I95408:39955;84613:21494" data-name="vector group">
                    <div className="absolute inset-[-1.92%_-12.82%_-9.93%_-9.4%]">
                      <img alt="" className="block max-w-none size-full" src={imgVectorGroup1} />
                    </div>
                  </div>
                  <ItemBadge className="absolute h-[40px] left-[16px] top-[8px] w-[112px]" type="limited" />
                </div>
              </div>
            </div>
            <div className="-translate-x-1/2 absolute bg-[#121213] border border-[#2b2b2b] border-solid bottom-0 content-stretch flex gap-[8px] items-center justify-center left-1/2 pl-[4px] pr-[8px] py-[4px] rounded-[24px]" data-node-id="95408:39957" data-name="price tag">
              <Icon className="relative shrink-0 size-[20px]" size="20" />
              <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[15px] text-right text-white whitespace-nowrap" data-node-id="I95408:39957;82534:31726">
                100
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-[358px]" data-node-id="95408:39958" data-name="row">
          <div className="flex-[1_0_0] h-[192px] min-w-px overflow-clip relative rounded-[32px]" data-node-id="95408:39959" data-name="item box">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[156.898px] items-center justify-center left-1/2 top-[calc(50%-12px)] w-[148.218px]" data-node-id="95408:39960">
              <div className="flex-none rotate-2">
                <div className="h-[152px] relative w-[143px]" data-name="Item (small)">
                  <div className="absolute h-[152px] left-0 top-0 w-[143px]" data-node-id="95408:39961" data-name="tail box">
                    <div className="absolute flex items-center justify-center left-[21.98px] size-[104.463px] top-[44.19px]" data-node-id="95408:39962">
                      <div className="-rotate-2 flex-none">
                        <div className="relative size-[101px]" data-name="image 493">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage493} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-[0.66%_9.09%_0_9.09%]" data-node-id="I95408:39963;84613:21494" data-name="vector group">
                    <div className="absolute inset-[-1.92%_-12.82%_-9.93%_-9.4%]">
                      <img alt="" className="block max-w-none size-full" src={imgVectorGroup2} />
                    </div>
                  </div>
                  <ItemBadge className="absolute h-[40px] left-[16px] top-[8px] w-[112px]" type="limited" />
                </div>
              </div>
            </div>
            <PriceTag className="-translate-x-1/2 absolute bg-[#121213] border border-[#2b2b2b] border-solid bottom-0 content-stretch flex gap-[8px] items-center justify-center left-1/2 px-[8px] py-[5px] rounded-[24px]" type="free" />
          </div>
          <div className="flex-[1_0_0] h-[192px] min-w-px overflow-clip relative rounded-[32px]" data-node-id="95408:39966" data-name="item box">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[163.885px] items-center justify-center left-1/2 top-[calc(50%-12px)] w-[155.704px]" data-node-id="95408:39967">
              <div className="-rotate-5 flex-none">
                <div className="h-[152px] relative w-[143px]" data-name="Item (small)">
                  <div className="absolute h-[152px] left-0 top-0 w-[143px]" data-node-id="95408:39968" data-name="tail box">
                    <div className="absolute flex h-[77.13px] items-center justify-center left-[34.59px] top-[53.24px] w-[68.039px]" data-node-id="95408:39969">
                      <div className="flex-none rotate-5">
                        <div className="h-[72px] relative w-[62px]" data-name="image 494">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage494} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-[0.66%_9.09%_0_9.09%]" data-node-id="I95408:39970;84613:21494" data-name="vector group">
                    <div className="absolute inset-[-1.92%_-12.82%_-9.93%_-9.4%]">
                      <img alt="" className="block max-w-none size-full" src={imgVectorGroup3} />
                    </div>
                  </div>
                  <ItemBadge className="absolute h-[40px] left-[16px] top-[8px] w-[112px]" type="limited" />
                </div>
              </div>
            </div>
            <div className="-translate-x-1/2 absolute bg-[#121213] border border-[#2b2b2b] border-solid bottom-0 content-stretch flex gap-[8px] items-center justify-center left-1/2 pl-[4px] pr-[8px] py-[4px] rounded-[24px]" data-node-id="95408:39972" data-name="price tag">
              <Icon className="relative shrink-0 size-[20px]" size="20" />
              <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[15px] text-right text-white whitespace-nowrap" data-node-id="I95408:39972;82534:31726">
                300
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-[358px]" data-node-id="95408:39973" data-name="row">
          <div className="flex-[1_0_0] h-[192px] min-w-px overflow-clip relative rounded-[32px]" data-node-id="95408:39974" data-name="item box">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[156.898px] items-center justify-center left-1/2 top-[calc(50%-12px)] w-[148.218px]" data-node-id="95408:39975">
              <div className="flex-none rotate-2">
                <div className="h-[152px] relative w-[143px]" data-name="Item (small)">
                  <div className="absolute h-[152px] left-0 top-0 w-[143px]" data-node-id="95408:39976" data-name="tail box">
                    <Tail className="-translate-y-1/2 absolute h-[109px] left-[18.88%] overflow-clip right-[16.09%] rounded-[6px] top-[calc(50%+11.5px)]" />
                  </div>
                  <div className="absolute inset-[0.66%_9.09%_0_9.09%]" data-node-id="I95408:39978;84613:21494" data-name="vector group">
                    <div className="absolute inset-[-1.92%_-12.82%_-9.93%_-9.4%]">
                      <img alt="" className="block max-w-none size-full" src={imgVectorGroup4} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <PriceTag className="-translate-x-1/2 absolute bg-[#121213] border border-[#2b2b2b] border-solid bottom-0 content-stretch flex gap-[8px] items-center justify-center left-1/2 px-[8px] py-[5px] rounded-[24px]" type="free" />
          </div>
          <div className="flex-[1_0_0] h-[192px] min-w-px overflow-clip relative rounded-[32px]" data-node-id="95408:39981" data-name="item box">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[163.885px] items-center justify-center left-1/2 top-[calc(50%-12px)] w-[155.704px]" data-node-id="95408:39982">
              <div className="-rotate-5 flex-none">
                <div className="h-[152px] relative w-[143px]" data-name="Item (small)">
                  <div className="absolute h-[152px] left-0 top-0 w-[143px]" data-node-id="95408:39983" data-name="tail box">
                    <Tail className="-translate-y-1/2 absolute h-[109px] left-[18.88%] overflow-clip right-[16.08%] rounded-[6px] top-[calc(50%+11.5px)]" type="dementor" />
                  </div>
                  <div className="absolute inset-[0.66%_9.09%_0_9.09%]" data-node-id="I95408:39985;84613:21494" data-name="vector group">
                    <div className="absolute inset-[-1.92%_-12.82%_-9.93%_-9.4%]">
                      <img alt="" className="block max-w-none size-full" src={imgVectorGroup3} />
                    </div>
                  </div>
                  <ItemBadge className="absolute h-[40px] left-[16px] top-[8px] w-[75px]" />
                </div>
              </div>
            </div>
            <div className="-translate-x-1/2 absolute bg-[#121213] border border-[#2b2b2b] border-solid bottom-0 content-stretch flex gap-[8px] items-center justify-center left-1/2 pl-[4px] pr-[8px] py-[4px] rounded-[24px]" data-node-id="95408:39987" data-name="price tag">
              <Icon className="relative shrink-0 size-[20px]" size="20" />
              <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[15px] text-right text-white whitespace-nowrap" data-node-id="I95408:39987;82534:31726">
                300
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-[358px]" data-node-id="95408:39988" data-name="row">
          <div className="flex-[1_0_0] h-[192px] min-w-px overflow-clip relative rounded-[32px]" data-node-id="95408:39989" data-name="item box">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[156.898px] items-center justify-center left-1/2 top-[calc(50%-12px)] w-[148.218px]" data-node-id="95408:39990">
              <div className="flex-none rotate-2">
                <div className="h-[152px] relative w-[143px]" data-name="Item (small)">
                  <div className="absolute h-[152px] left-0 top-0 w-[143px]" data-node-id="95408:39991" data-name="tail box">
                    <Tail className="-translate-y-1/2 absolute h-[109px] left-[18.88%] overflow-clip right-[16.09%] rounded-[6px] top-[calc(50%+11.5px)]" />
                  </div>
                  <div className="absolute inset-[0.66%_9.09%_0_9.09%]" data-node-id="I95408:39993;84613:21494" data-name="vector group">
                    <div className="absolute inset-[-1.92%_-12.82%_-9.93%_-9.4%]">
                      <img alt="" className="block max-w-none size-full" src={imgVectorGroup2} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <PriceTag className="-translate-x-1/2 absolute bg-[#121213] border border-[#2b2b2b] border-solid bottom-0 content-stretch flex gap-[8px] items-center justify-center left-1/2 px-[8px] py-[5px] rounded-[24px]" type="free" />
          </div>
          <div className="flex-[1_0_0] h-[192px] min-w-px overflow-clip relative rounded-[32px]" data-node-id="95408:39996" data-name="item box">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[163.885px] items-center justify-center left-1/2 top-[calc(50%-12px)] w-[155.704px]" data-node-id="95408:39997">
              <div className="-rotate-5 flex-none">
                <div className="h-[152px] relative w-[143px]" data-name="Item (small)">
                  <div className="absolute h-[152px] left-0 top-0 w-[143px]" data-node-id="95408:39998" data-name="tail box">
                    <Tail className="-translate-y-1/2 absolute h-[109px] left-[18.88%] overflow-clip right-[16.08%] rounded-[6px] top-[calc(50%+11.5px)]" type="dementor" />
                  </div>
                  <div className="absolute inset-[0.66%_9.09%_0_9.09%]" data-node-id="I95408:40000;84613:21494" data-name="vector group">
                    <div className="absolute inset-[-1.92%_-12.82%_-9.93%_-9.4%]">
                      <img alt="" className="block max-w-none size-full" src={imgVectorGroup3} />
                    </div>
                  </div>
                  <ItemBadge className="absolute h-[40px] left-[16px] top-[8px] w-[75px]" />
                </div>
              </div>
            </div>
            <div className="-translate-x-1/2 absolute bg-[#121213] border border-[#2b2b2b] border-solid bottom-0 content-stretch flex gap-[8px] items-center justify-center left-1/2 pl-[4px] pr-[8px] py-[4px] rounded-[24px]" data-node-id="95408:40002" data-name="price tag">
              <Icon className="relative shrink-0 size-[20px]" size="20" />
              <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[15px] text-right text-white whitespace-nowrap" data-node-id="I95408:40002;82534:31726">
                300
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-between opacity-0 relative shrink-0 w-[358px]" data-node-id="95408:40003" data-name="row">
          <div className="flex-[1_0_0] h-[192px] min-w-px overflow-clip relative rounded-[32px]" data-node-id="95408:40004" data-name="item box">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[156.898px] items-center justify-center left-1/2 top-[calc(50%-12px)] w-[148.218px]" data-node-id="95408:40005">
              <div className="flex-none rotate-2">
                <div className="h-[152px] relative w-[143px]" data-name="Item (small)">
                  <div className="absolute h-[152px] left-0 top-0 w-[143px]" data-node-id="95408:40006" data-name="tail box">
                    <Tail className="-translate-y-1/2 absolute h-[109px] left-[18.88%] overflow-clip right-[16.09%] rounded-[6px] top-[calc(50%+11.5px)]" />
                  </div>
                  <div className="absolute inset-[0.66%_9.09%_0_9.09%]" data-node-id="I95408:40008;84613:21494" data-name="vector group">
                    <div className="absolute inset-[-1.92%_-12.82%_-9.93%_-9.4%]">
                      <img alt="" className="block max-w-none size-full" src={imgVectorGroup4} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <PriceTag className="-translate-x-1/2 absolute bg-[#121213] border border-[#2b2b2b] border-solid bottom-0 content-stretch flex gap-[8px] items-center justify-center left-1/2 px-[8px] py-[5px] rounded-[24px]" type="free" />
          </div>
          <div className="flex-[1_0_0] h-[192px] min-w-px overflow-clip relative rounded-[32px]" data-node-id="95408:40011" data-name="item box">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[163.885px] items-center justify-center left-1/2 top-[calc(50%-12px)] w-[155.704px]" data-node-id="95408:40012">
              <div className="-rotate-5 flex-none">
                <div className="h-[152px] relative w-[143px]" data-name="Item (small)">
                  <div className="absolute h-[152px] left-0 top-0 w-[143px]" data-node-id="95408:40013" data-name="tail box">
                    <Tail className="-translate-y-1/2 absolute h-[109px] left-[18.88%] overflow-clip right-[16.08%] rounded-[6px] top-[calc(50%+11.5px)]" type="dementor" />
                  </div>
                  <div className="absolute inset-[0.66%_9.09%_0_9.09%]" data-node-id="I95408:40015;84613:21494" data-name="vector group">
                    <div className="absolute inset-[-1.92%_-12.82%_-9.93%_-9.4%]">
                      <img alt="" className="block max-w-none size-full" src={imgVectorGroup3} />
                    </div>
                  </div>
                  <ItemBadge className="absolute h-[40px] left-[16px] top-[8px] w-[75px]" />
                </div>
              </div>
            </div>
            <div className="-translate-x-1/2 absolute bg-[#121213] border border-[#2b2b2b] border-solid bottom-0 content-stretch flex gap-[8px] items-center justify-center left-1/2 pl-[4px] pr-[8px] py-[4px] rounded-[24px]" data-node-id="95408:40017" data-name="price tag">
              <Icon className="relative shrink-0 size-[20px]" size="20" />
              <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[15px] text-right text-white whitespace-nowrap" data-node-id="I95408:40017;82534:31726">
                300
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-[844px] left-0 pointer-events-none top-0" data-node-id="95408:39039">
        <div className="bg-gradient-to-b from-[79.808%] from-black h-[156px] overflow-clip pointer-events-auto sticky to-[rgba(0,0,0,0)] top-0 w-[390px]" data-name="Background">
          <div className="absolute bottom-0 h-[156px] left-1/2 pointer-events-none top-0" data-node-id="95408:39040">
            <div className="-translate-x-1/2 bg-gradient-to-b from-[60.959%] from-black h-[156px] pointer-events-auto sticky to-[rgba(0,0,0,0)] top-0 w-[390px]" data-name="background">
              <div className="absolute left-[77px] size-[634px] top-[-576px]" data-node-id="95408:39041" data-name="Animation / Glow PA">
                <div className="absolute inset-[-3.52%_-4.37%_-9.79%_-10.98%]">
                  <img alt="" className="block max-w-none size-full" src={imgAnimationGlowPa} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[390px]" data-node-id="95408:39042" data-name="Store top nav">
        <div className="backdrop-blur-[0px] content-stretch flex items-start justify-between pt-[62px] px-[16px] relative shrink-0 w-full" data-node-id="I95408:39042;83018:34910" data-name="Nav">
          <div className="flex-[1_0_0] h-[40px] min-w-px relative" data-node-id="I95408:39042;83018:34912" data-name="title">
            <p className="[word-break:break-word] absolute font-['Montserrat:SemiBold'] font-semibold leading-[1.05] left-0 lowercase text-[36px] text-white top-[calc(50%-19px)] tracking-[-0.72px] whitespace-nowrap" data-node-id="I95408:39042;84540:21210">
              маркет
            </p>
          </div>
          <div className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[16px] items-center justify-end pl-[6px] pr-[4px] py-[4px] relative rounded-[16px] shrink-0" data-node-id="I95408:39042;84073:127983" data-name="Coin balance">
            <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-node-id="I95408:39042;84073:127983;84073:127839" data-name="value">
              <Icon className="relative shrink-0 size-[28px]" />
              <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[1.119] lowercase relative shrink-0 text-[20px] text-right text-white whitespace-nowrap" data-node-id="I95408:39042;84073:127983;84073:127841">
                55 000
              </p>
            </div>
            <div className="bg-white content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[12px] shrink-0" data-node-id="I95408:39042;84073:127983;84073:127842" data-name="Button">
              <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="I95408:39042;84073:127983;84073:127842;3520:72446" data-name="glyph/plus/16">
                <div className="absolute left-0 size-[16px] top-0" data-node-id="I95408:39042;84073:127983;84073:127842;3520:72446;3250:57783" data-name="glyph_plus_16">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphPlus16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[var(--tab-group\/item-gap-\(with-counter\),20px)] h-[54px] items-center left-0 overflow-x-auto overflow-y-clip px-[16px] py-[8px] top-[102px] w-[390px]" data-node-id="112466:182701" data-name="tab group">
        <div className="content-stretch flex h-[38px] items-center py-[8px] relative rounded-[4px] shrink-0" data-node-id="I112466:182701;111326:115245" data-name="item 1">
          <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold'] font-semibold justify-center leading-[0] lowercase relative shrink-0 text-[20px] text-[rgba(255,255,255,0.5)] whitespace-nowrap" data-node-id="I112466:182701;111326:115245;85999:176931">
            <p className="leading-[1.119]">хвосты</p>
          </div>
        </div>
        <div className="content-stretch flex h-[38px] items-center py-[8px] relative rounded-[4px] shrink-0" data-node-id="I112466:182701;111326:115246" data-name="item 2">
          <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold'] font-semibold justify-center leading-[0] lowercase relative shrink-0 text-[20px] text-white whitespace-nowrap" data-node-id="I112466:182701;111326:115246;85999:176935">
            <p className="leading-[1.119]">стикеры</p>
          </div>
        </div>
      </div>
      <div className="absolute h-[844px] left-0 overflow-clip top-0 w-[390px]" data-node-id="95408:39044" data-name="1.1 : stars background">
        <div className="absolute h-[518px] left-[-19px] top-0 w-[428px]" data-node-id="95408:39045" data-name="space.svg">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSpaceSvg} />
        </div>
        <div className="absolute flex h-[572.997px] items-center justify-center left-[-19px] top-[513px] w-[422px]" data-node-id="95408:39088">
          <div className="flex-none rotate-180">
            <div className="h-[572.997px] relative w-[422px]" data-name="space.svg">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSpaceSvg1} />
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[47px] left-1/2 overflow-clip top-0 w-[390px]" data-node-id="95408:39132" data-name="StatusBar">
        <div className="absolute contents left-[27px] top-[14px]" data-node-id="I95408:39132;2604:14897" data-name="Left Side">
          <div className="absolute h-[21px] left-[27px] rounded-[24px] top-[14px] w-[54px]" data-node-id="I95408:39132;2604:14898" data-name="_StatusBar-time">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro_Text:Semibold'] h-[20px] leading-[22px] left-[27px] not-italic text-[17px] text-center text-white top-px tracking-[-0.408px] w-[54px]" data-node-id="I95408:39132;2604:14898;839:7100" style={{ fontFeatureSettings: '"case" 1' }}>
              4:20
            </p>
          </div>
        </div>
        <div className="absolute h-[13px] right-[26.6px] top-[19px] w-[77.401px]" data-node-id="I95408:39132;2604:14899" data-name="Right Side">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRightSide} />
        </div>
      </div>
      <HomeIndicator className="-translate-x-1/2 absolute bottom-0 h-[34px] left-1/2 w-[390px]" />
      <div className="absolute bottom-[34px] content-stretch flex flex-col items-center left-0 right-0" data-node-id="119651:117928" data-name="tab_bar + button_group">
        <TabBar className="backdrop-blur-[5px] bg-[rgba(0,0,0,0.86)] border border-[rgba(255,255,255,0.15)] border-solid content-stretch flex gap-[10px] items-center pl-[12px] pr-[10px] py-[2px] relative rounded-[40px] shrink-0" />
      </div>
    </div>
  );
}
