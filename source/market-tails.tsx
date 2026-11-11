const assetPathPrefix = "https://www.figma.com/api/mcp/asset/96d3b026-6df8-49ea-b536-8e90f2aeac54";
const imgIconBlinkcoin28 = `${assetPathPrefix}/d8eee.svg`;
const imgIconBlinkcoin20 = `${assetPathPrefix}/f8243.svg`;
const imgVectorGroup = `${assetPathPrefix}/8cc10.svg`;
const imgGlare = `${assetPathPrefix}/ef51f.svg`;
const imgSubtract = `${assetPathPrefix}/34804.svg`;
const imgNewBadgeSale = `${assetPathPrefix}/50419.png`;
const imgFrame20873305444 = `${assetPathPrefix}/52ce4.png`;
const imgTailImage = `${assetPathPrefix}/0f67e.png`;
const imgTailImage1 = `${assetPathPrefix}/987e5.png`;
const imgCaseImage = `${assetPathPrefix}/db1fa.png`;
const imgTailImage2 = `${assetPathPrefix}/b5c6e.png`;
const imgFrame20873305282 = `${assetPathPrefix}/156a9.png`;
const imgEllipse395 = `${assetPathPrefix}/dc87c.png`;
const imgVectorGroup1 = `${assetPathPrefix}/30f67.svg`;
const imgVectorGroup2 = `${assetPathPrefix}/86510.svg`;
const imgVectorGroup3 = `${assetPathPrefix}/fc21e.svg`;
const imgGlyphCheck12 = `${assetPathPrefix}/a84f8.svg`;
const imgAnimationGlowPa = `${assetPathPrefix}/9e94f.svg`;
const imgVector = `${assetPathPrefix}/911a2.svg`;
const imgGlyphNavFriends24 = `${assetPathPrefix}/5f2ba.svg`;
const imgGlyphMessage24 = `${assetPathPrefix}/abe54.svg`;
const imgGlyphMarket24 = `${assetPathPrefix}/39d2e.svg`;
const imgGlyphPlus16 = `${assetPathPrefix}/3312e.svg`;
const imgSpaceSvg = `${assetPathPrefix}/e167a.svg`;
const imgSpaceSvg1 = `${assetPathPrefix}/39407.svg`;
const imgRightSide = `${assetPathPrefix}/d00ef.svg`;

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

type PackageProps = {
  className?: string;
  flare?: boolean;
  type?: "Case (vector)" | "Collection";
};

function Package({ className, flare = false, type = "Case (vector)" }: PackageProps) {
  const isCaseVector = type === "Case (vector)";
  const isCollection = type === "Collection";
  return (
    <div className={className || "h-[152px] relative w-[143px]"} id={isCollection ? "node-82914_230159" : "node-82387_109877"}>
      {isCaseVector && (
        <div className="absolute inset-[0.66%_9.09%_0_9.09%]" data-node-id="84613:21494" data-name="vector group">
          <div className="absolute inset-[-1.92%_-12.82%_-9.93%_-9.4%]">
            <img alt="" className="block max-w-none size-full" src={imgVectorGroup} />
          </div>
        </div>
      )}
      {isCaseVector && flare && (
        <div className="absolute h-[112px] left-[25px] top-[26px] w-[95px]" data-node-id="82642:35144" data-name="_glare">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlare} />
        </div>
      )}
      {isCollection && (
        <div className="absolute inset-[7.89%_8.39%_0_11.19%]" data-node-id="87925:57126" data-name="Subtract">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSubtract} />
        </div>
      )}
    </div>
  );
}

type PriceTagProps = {
  className?: string;
  type?: "paid" | "free" | "soon";
};

function PriceTag({ className, type = "paid" }: PriceTagProps) {
  const isFree = type === "free";
  const isFreeOrSoon = ["free", "soon"].includes(type);
  const isPaid = type === "paid";
  const isSoon = type === "soon";
  return (
    <div className={className || `bg-[#121213] border border-[#2b2b2b] border-solid content-stretch flex gap-[8px] items-center justify-center relative rounded-[24px] ${isFreeOrSoon ? "px-[8px] py-[5px]" : "pl-[4px] pr-[8px] py-[4px]"}`} id={isSoon ? "node-87779_117597" : isFree ? "node-84796_112958" : "node-82542_113434"}>
      {isFreeOrSoon && (
        <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[15px] text-right text-white whitespace-nowrap" id={isSoon ? "node-87779_117599" : "node-84796_112960"}>
          {isSoon ? "скоро" : isFree ? "бесплатно" : ""}
        </p>
      )}
      {isPaid && (
        <>
          <Icon className="relative shrink-0 size-[20px]" size="20" />
          <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[15px] text-right text-white whitespace-nowrap" data-node-id="82534:31726">
            300
          </p>
        </>
      )}
    </div>
  );
}

type ItemBadgeProps = {
  className?: string;
  type?: "sale" | "partner";
};

function ItemBadge({ className, type = "sale" }: ItemBadgeProps) {
  const isPartner = type === "partner";
  return (
    <div className={className || `h-[40px] relative ${isPartner ? "w-[114px]" : "w-[75px]"}`} id={isPartner ? "node-87758_116869" : "node-84466_16270"}>
      <div className={`absolute flex items-center justify-center ${isPartner ? "inset-[4.13%_-0.84%_1.63%_0.04%]" : "bottom-[-7.9%] left-[-1.62px] top-[-7.9%] w-[78.234px]"}`} id={isPartner ? "node-87779_117006" : "node-84466_16268"} style={{ containerType: "size" }}>
        <div className={`flex-none ${isPartner ? "h-[hypot(1.96196cqw,76.6961cqh)] rotate-[-4.46deg] w-[hypot(98.038cqw,-23.3039cqh)]" : "h-[hypot(4.49898cqw,86.0231cqh)] rotate-[-4.95deg] skew-x-[0.1deg] w-[hypot(95.501cqw,-13.9769cqh)]"}`}>
          {type === "sale" && (
            <div className="relative size-full" data-name="new_badge _ sale">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[118.83%] left-[-23.08%] max-w-none top-[-9.42%] w-[135.58%]" src={imgNewBadgeSale} />
              </div>
            </div>
          )}
          {isPartner && (
            <div className="relative size-full" data-name="Frame 2087330544 4">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[217.87%] left-[-13.58%] max-w-none top-[-59.17%] w-[126.41%]" src={imgFrame20873305444} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

type TailProps = {
  className?: string;
  type?: "dementor" | "rocket" | "yota" | "Soon";
};

function Tail({ className, type = "rocket" }: TailProps) {
  const isDementor = type === "dementor";
  const isRocketOrDementorOrYota = ["rocket", "dementor", "yota"].includes(type);
  const isSoon = type === "Soon";
  const isYota = type === "yota";
  return (
    <div className={className || "h-[118px] overflow-clip relative rounded-[6px] w-[100px]"} id={isSoon ? "node-88053_57100" : isYota ? "node-79568_82306" : isDementor ? "node-79244_81078" : "node-79244_81079"}>
      <div className={`absolute flex items-center justify-center ${isSoon ? "-translate-x-1/2 h-[164.512px] left-1/2 top-[-13.26px] w-[146.942px]" : isYota ? "inset-[-13.6%_-31.68%_-35.32%_-44.05%]" : isDementor ? "inset-[5.16%_-14.62%_-28.83%_-26.53%]" : "inset-[-36.34%_-50.12%_-36.34%_-49.12%] mix-blend-screen"}`} id={isSoon ? "node-89631_69707" : isYota ? "node-79575_82321" : isDementor ? "node-79244_81070" : "node-79244_81062"} style={isRocketOrDementorOrYota ? { containerType: "size" } : undefined}>
        <div className={`flex-none ${isSoon ? "rotate-30" : isYota ? "-rotate-135 h-[hypot(60.5263cqw,-60.5263cqh)] w-[hypot(-39.4737cqw,-39.4737cqh)]" : isDementor ? "-rotate-140 -scale-x-100 h-[hypot(55.2366cqw,-63.6704cqh)] w-[hypot(44.7634cqw,36.3296cqh)]" : "-rotate-50 h-[hypot(47.9411cqw,39.3349cqh)] w-[hypot(52.0589cqw,-60.6651cqh)]"}`}>
          {isRocketOrDementorOrYota && (
            <div className="relative size-full" data-name="tail image">
              {isRocketOrDementorOrYota && <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={type === "rocket" ? "./assets/tail-rocket-fill-1.png" : isYota ? imgTailImage1 : imgTailImage} />}
            </div>
          )}
          {isSoon && (
            <div className="h-[138px] relative w-[90px]" data-name="_Component 127">
              <div className="absolute inset-[91.3%_76.67%_0_10%] overflow-clip" data-node-id="I89631:69707;89624:67700">
                <div className="absolute bg-[#4a4a4a] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67700;89631:67839" />
              </div>
              <div className="absolute inset-[82.61%_76.67%_8.7%_10%] overflow-clip" data-node-id="I89631:69707;89624:67715">
                <div className="absolute bg-[#4a4a4a] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67715;89631:67839" />
              </div>
              <div className="absolute inset-[73.91%_76.67%_17.39%_10%] overflow-clip" data-node-id="I89631:69707;89624:67727">
                <div className="absolute bg-[#c7c7c7] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67727;89631:67833" />
              </div>
              <div className="absolute inset-[65.22%_76.67%_26.09%_10%] overflow-clip" data-node-id="I89631:69707;89624:67739">
                <div className="absolute bg-[#fafafa] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67739;89624:67696" />
              </div>
              <div className="absolute inset-[56.52%_76.67%_34.78%_10%] overflow-clip" data-node-id="I89631:69707;89624:67751">
                <div className="absolute bg-[#c7c7c7] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67751;89631:67833" />
              </div>
              <div className="absolute inset-[47.83%_76.67%_43.48%_10%] overflow-clip" data-node-id="I89631:69707;89624:67763">
                <div className="absolute bg-[#727272] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67763;89631:67835" />
              </div>
              <div className="absolute inset-[30.43%_76.67%_60.87%_10%] overflow-clip" data-node-id="I89631:69707;89624:67787">
                <div className="absolute bg-[#5e5e5e] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67787;89631:67837" />
              </div>
              <div className="absolute inset-[91.3%_63.33%_0_23.33%] overflow-clip" data-node-id="I89631:69707;89624:67706">
                <div className="absolute bg-[#5e5e5e] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67706;89631:67837" />
              </div>
              <div className="absolute inset-[82.61%_63.33%_8.7%_23.33%] overflow-clip" data-node-id="I89631:69707;89624:67716">
                <div className="absolute bg-[#5e5e5e] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67716;89631:67837" />
              </div>
              <div className="absolute inset-[73.91%_63.33%_17.39%_23.33%] overflow-clip" data-node-id="I89631:69707;89624:67728">
                <div className="absolute bg-[#fafafa] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67728;89624:67696" />
              </div>
              <div className="absolute inset-[65.22%_63.33%_26.09%_23.33%] overflow-clip" data-node-id="I89631:69707;89624:67740">
                <div className="absolute bg-[#c7c7c7] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67740;89631:67833" />
              </div>
              <div className="absolute inset-[56.52%_63.33%_34.78%_23.33%] overflow-clip" data-node-id="I89631:69707;89624:67752">
                <div className="absolute bg-[#fafafa] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67752;89624:67696" />
              </div>
              <div className="absolute inset-[47.83%_63.33%_43.48%_23.33%] overflow-clip" data-node-id="I89631:69707;89624:67764">
                <div className="absolute bg-[#c7c7c7] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67764;89631:67833" />
              </div>
              <div className="absolute inset-[39.13%_63.33%_52.17%_23.33%] overflow-clip" data-node-id="I89631:69707;89624:67776">
                <div className="absolute bg-[#5e5e5e] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67776;89631:67837" />
              </div>
              <div className="absolute inset-[30.43%_63.33%_60.87%_23.33%] overflow-clip" data-node-id="I89631:69707;89624:67788">
                <div className="absolute bg-[#727272] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67788;89631:67835" />
              </div>
              <div className="absolute inset-[21.74%_63.33%_69.57%_23.33%] overflow-clip" data-node-id="I89631:69707;89624:67800">
                <div className="absolute bg-[#5e5e5e] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67800;89631:67837" />
              </div>
              <div className="absolute bottom-0 left-[36.67%] overflow-clip right-1/2 top-[91.3%]" data-node-id="I89631:69707;89624:67709">
                <div className="absolute bg-[#727272] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67709;89631:67835" />
              </div>
              <div className="absolute bottom-[8.7%] left-[36.67%] overflow-clip right-1/2 top-[82.61%]" data-node-id="I89631:69707;89624:67717">
                <div className="absolute bg-[#fafafa] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67717;89624:67696" />
              </div>
              <div className="absolute bottom-[17.39%] left-[36.67%] overflow-clip right-1/2 top-[73.91%]" data-node-id="I89631:69707;89624:67729">
                <div className="absolute bg-[#727272] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67729;89631:67835" />
              </div>
              <div className="absolute bottom-[26.09%] left-[36.67%] overflow-clip right-1/2 top-[65.22%]" data-node-id="I89631:69707;89624:67741">
                <div className="absolute bg-[#fafafa] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67741;89624:67696" />
              </div>
              <div className="absolute bottom-[34.78%] left-[36.67%] overflow-clip right-1/2 top-[56.52%]" data-node-id="I89631:69707;89624:67753">
                <div className="absolute bg-[#5e5e5e] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67753;89631:67837" />
              </div>
              <div className="absolute bottom-[43.48%] left-[36.67%] overflow-clip right-1/2 top-[47.83%]" data-node-id="I89631:69707;89624:67765">
                <div className="absolute bg-[#4a4a4a] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67765;89631:67839" />
              </div>
              <div className="absolute bottom-[52.17%] left-[36.67%] overflow-clip right-1/2 top-[39.13%]" data-node-id="I89631:69707;89624:67777">
                <div className="absolute bg-[#4a4a4a] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67777;89631:67839" />
              </div>
              <div className="absolute bottom-[60.87%] left-[36.67%] overflow-clip right-1/2 top-[30.43%]" data-node-id="I89631:69707;89624:67789">
                <div className="absolute bg-[#727272] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67789;89631:67835" />
              </div>
              <div className="absolute bottom-[69.57%] left-[36.67%] overflow-clip right-1/2 top-[21.74%]" data-node-id="I89631:69707;89624:67801">
                <div className="absolute bg-[#4a4a4a] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67801;89631:67839" />
              </div>
              <div className="absolute bottom-0 left-1/2 overflow-clip right-[36.67%] top-[91.3%]" data-node-id="I89631:69707;89624:67703">
                <div className="absolute bg-[#fafafa] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67703;89624:67696" />
              </div>
              <div className="absolute bottom-[8.7%] left-1/2 overflow-clip right-[36.67%] top-[82.61%]" data-node-id="I89631:69707;89624:67718">
                <div className="absolute bg-[#c7c7c7] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67718;89631:67833" />
              </div>
              <div className="absolute bottom-[17.39%] left-1/2 overflow-clip right-[36.67%] top-[73.91%]" data-node-id="I89631:69707;89624:67730">
                <div className="absolute bg-[#fafafa] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67730;89624:67696" />
              </div>
              <div className="absolute bottom-[26.09%] left-1/2 overflow-clip right-[36.67%] top-[65.22%]" data-node-id="I89631:69707;89624:67742">
                <div className="absolute bg-[#5e5e5e] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67742;89631:67837" />
              </div>
              <div className="absolute bottom-[34.78%] left-1/2 overflow-clip right-[36.67%] top-[56.52%]" data-node-id="I89631:69707;89624:67754">
                <div className="absolute bg-[#727272] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67754;89631:67835" />
              </div>
              <div className="absolute bottom-[43.48%] left-1/2 overflow-clip right-[36.67%] top-[47.83%]" data-node-id="I89631:69707;89624:67766">
                <div className="absolute bg-[#727272] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67766;89631:67835" />
              </div>
              <div className="absolute bottom-[52.17%] left-1/2 overflow-clip right-[36.67%] top-[39.13%]" data-node-id="I89631:69707;89624:67778">
                <div className="absolute bg-[#fafafa] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67778;89624:67696" />
              </div>
              <div className="absolute bottom-[60.87%] left-1/2 overflow-clip right-[36.67%] top-[30.43%]" data-node-id="I89631:69707;89624:67790">
                <div className="absolute bg-[#727272] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67790;89631:67835" />
              </div>
              <div className="absolute bottom-[69.57%] left-1/2 overflow-clip right-[36.67%] top-[21.74%]" data-node-id="I89631:69707;89624:67802">
                <div className="absolute bg-[#c7c7c7] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67802;89631:67833" />
              </div>
              <div className="absolute inset-[91.3%_23.33%_0_63.33%] overflow-clip" data-node-id="I89631:69707;89624:67697" data-name="_Component 126">
                <div className="absolute bg-[#4a4a4a] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67697;89631:67839" />
              </div>
              <div className="absolute inset-[82.61%_23.33%_8.7%_63.33%] overflow-clip" data-node-id="I89631:69707;89624:67719">
                <div className="absolute bg-[#727272] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67719;89631:67835" />
              </div>
              <div className="absolute inset-[73.91%_23.33%_17.39%_63.33%] overflow-clip" data-node-id="I89631:69707;89624:67731">
                <div className="absolute bg-[#c7c7c7] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67731;89631:67833" />
              </div>
              <div className="absolute inset-[65.22%_23.33%_26.09%_63.33%] overflow-clip" data-node-id="I89631:69707;89624:67743">
                <div className="absolute bg-[#5e5e5e] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67743;89631:67837" />
              </div>
              <div className="absolute inset-[56.52%_23.33%_34.78%_63.33%] overflow-clip" data-node-id="I89631:69707;89624:67755">
                <div className="absolute bg-[#727272] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67755;89631:67835" />
              </div>
              <div className="absolute inset-[47.83%_23.33%_43.48%_63.33%] overflow-clip" data-node-id="I89631:69707;89624:67767">
                <div className="absolute bg-[#fafafa] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67767;89624:67696" />
              </div>
              <div className="absolute inset-[39.13%_23.33%_52.17%_63.33%] overflow-clip" data-node-id="I89631:69707;89624:67779">
                <div className="absolute bg-[#4a4a4a] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67779;89631:67839" />
              </div>
              <div className="absolute inset-[30.43%_23.33%_60.87%_63.33%] overflow-clip" data-node-id="I89631:69707;89624:67791">
                <div className="absolute bg-[#5e5e5e] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67791;89631:67837" />
              </div>
              <div className="absolute inset-[21.74%_23.33%_69.57%_63.33%] overflow-clip" data-node-id="I89631:69707;89624:67803">
                <div className="absolute bg-[#c7c7c7] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67803;89631:67833" />
              </div>
              <div className="absolute inset-[13.04%_23.33%_78.26%_63.33%] overflow-clip" data-node-id="I89631:69707;89624:67815">
                <div className="absolute bg-[#4a4a4a] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67815;89631:67839" />
              </div>
              <div className="absolute inset-[91.3%_10%_0_76.67%] overflow-clip" data-node-id="I89631:69707;89624:67712">
                <div className="absolute bg-[#c7c7c7] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67712;89631:67833" />
              </div>
              <div className="absolute inset-[82.61%_10%_8.7%_76.67%] overflow-clip" data-node-id="I89631:69707;89624:67720">
                <div className="absolute bg-[#4a4a4a] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67720;89631:67839" />
              </div>
              <div className="absolute inset-[73.91%_10%_17.39%_76.67%] overflow-clip" data-node-id="I89631:69707;89624:67732">
                <div className="absolute bg-[#727272] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67732;89631:67835" />
              </div>
              <div className="absolute inset-[65.22%_10%_26.09%_76.67%] overflow-clip" data-node-id="I89631:69707;89624:67744">
                <div className="absolute bg-[#fafafa] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67744;89624:67696" />
              </div>
              <div className="absolute inset-[47.83%_10%_43.48%_76.67%] overflow-clip" data-node-id="I89631:69707;89624:67768">
                <div className="absolute bg-[#5e5e5e] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67768;89631:67837" />
              </div>
              <div className="absolute inset-[13.04%_10%_78.26%_76.67%] overflow-clip" data-node-id="I89631:69707;89624:67816">
                <div className="absolute bg-[#727272] left-0 size-[12px] top-0" data-node-id="I89631:69707;89624:67816;89631:67835" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-black overflow-clip relative rounded-[40px] size-full" data-node-id="123450:103463" data-name="маркет / хвосты">
      <div className="absolute content-stretch flex flex-col gap-[36px] items-center overflow-x-clip overflow-y-auto pt-[36px] px-[16px] right-0 rounded-[40px] top-[156px] w-[390px]" data-node-id="123450:103465" data-name="Frame">
        <div className="content-stretch flex items-center justify-center relative shrink-0 w-[358px]" data-node-id="123450:103466" data-name="row">
          <div className="flex-[1_0_0] h-[228px] min-w-px overflow-clip relative rounded-[32px]" data-node-id="123450:103467" data-name="item box">
            <div className="absolute flex h-[202.711px] items-center justify-center left-[82.14px] top-[0.64px] w-[192.712px]" data-node-id="123450:103468">
              <div className="-rotate-5 flex-none">
                <div className="h-[188px] overflow-clip relative w-[177px]" data-name="Item (large)">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[188px] left-1/2 top-1/2 w-[177px]" data-node-id="123450:103469" data-name="tail box">
                    <Tail className="absolute inset-[21.71%_16.08%_6.58%_18.88%] overflow-clip rounded-[6px]" />
                  </div>
                  <div className="-translate-y-1/2 absolute aspect-[143/152] left-0 right-0 top-1/2" data-node-id="I123450:103471;85907:27553" data-name="case image">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-[111.18%] left-[-0.7%] max-w-none top-[-1.32%] w-[101.4%]" src={imgCaseImage} />
                    </div>
                  </div>
                  <ItemBadge className="-translate-x-1/2 -translate-y-1/2 absolute h-[40px] left-[calc(50%-27px)] top-[calc(50%-58px)] w-[75px]" />
                </div>
              </div>
            </div>
            <PriceTag className="-translate-x-1/2 absolute bg-[#121213] border border-[#2b2b2b] border-solid bottom-0 content-stretch flex gap-[8px] items-center justify-center left-[calc(50%+0.5px)] pl-[4px] pr-[8px] py-[4px] rounded-[24px]" />
          </div>
        </div>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-[358px]" data-node-id="123450:103474" data-name="row">
          <div className="flex-[1_0_0] h-[192px] min-w-px overflow-clip relative rounded-[32px]" data-node-id="123450:103475" data-name="item box">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[159.276px] items-center justify-center left-1/2 top-[calc(50%-12px)] w-[150.759px]" data-node-id="123450:103476">
              <div className="-rotate-3 flex-none">
                <div className="h-[152px] relative w-[143px]" data-name="Item (small)">
                  <div className="absolute h-[152px] left-0 top-0 w-[143px]" data-node-id="123450:103477" data-name="tail box">
                    <Tail className="-translate-y-1/2 absolute h-[109px] left-[18.88%] overflow-clip right-[16.08%] rounded-[6px] top-[calc(50%+11.5px)]" type="yota" />
                  </div>
                  <div className="absolute inset-[0.66%_9.09%_0_9.09%]" data-node-id="I123450:103479;84613:21494" data-name="vector group">
                    <div className="absolute inset-[-1.92%_-12.82%_-9.93%_-9.4%]">
                      <img alt="" className="block max-w-none size-full" src={imgVectorGroup1} />
                    </div>
                  </div>
                  <ItemBadge className="absolute h-[40px] left-[16px] top-[8px] w-[114px]" type="partner" />
                </div>
              </div>
            </div>
            <PriceTag className="-translate-x-1/2 absolute bg-[#121213] border border-[#2b2b2b] border-solid bottom-0 content-stretch flex gap-[8px] items-center justify-center left-1/2 pl-[4px] pr-[8px] py-[4px] rounded-[24px]" />
          </div>
          <div className="flex-[1_0_0] h-[192px] min-w-px overflow-clip relative rounded-[32px]" data-node-id="123450:103482" data-name="item box">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[156.898px] items-center justify-center left-1/2 top-[calc(50%-12px)] w-[148.218px]" data-node-id="123450:103483">
              <div className="flex-none rotate-2">
                <div className="h-[152px] relative w-[143px]" data-name="Item (small)">
                  <div className="absolute h-[152px] left-0 top-0 w-[143px]" data-node-id="123450:103484" data-name="tail box">
                    <Tail className="-translate-y-1/2 absolute h-[109px] left-[18.88%] overflow-clip right-[16.08%] rounded-[6px] top-[calc(50%+11.5px)]" />
                  </div>
                  <div className="absolute inset-[0.66%_9.09%_0_9.09%]" data-node-id="I123450:103486;84613:21494" data-name="vector group">
                    <div className="absolute inset-[-1.92%_-12.82%_-9.93%_-9.4%]">
                      <img alt="" className="block max-w-none size-full" src={imgVectorGroup2} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="-translate-x-1/2 absolute bg-[#121213] border border-[#2b2b2b] border-solid bottom-0 content-stretch flex gap-[8px] items-center justify-center left-1/2 px-[8px] py-[5px] rounded-[24px]" data-node-id="123450:103488" data-name="price tag">
              <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[15px] text-right text-white whitespace-nowrap" data-node-id="I123450:103488;84796:112960">
                бесплатно
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-[358px]" data-node-id="123450:103489" data-name="row">
          <div className="flex-[1_0_0] h-[192px] min-w-px overflow-clip relative rounded-[32px]" data-node-id="123450:103490" data-name="item box">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[156.898px] items-center justify-center left-1/2 top-[calc(50%-12px)] w-[148.218px]" data-node-id="123450:103491">
              <div className="flex-none rotate-2">
                <div className="h-[152px] relative w-[143px]" data-name="Item (small)">
                  <div className="absolute h-[152px] left-0 top-0 w-[143px]" data-node-id="123450:103492" data-name="tail box">
                    <Tail className="-translate-y-1/2 absolute h-[109px] left-[18.88%] overflow-clip right-[16.08%] rounded-[6px] top-[calc(50%+11.5px)]" />
                  </div>
                  <div className="absolute inset-[0.66%_9.09%_0_9.09%]" data-node-id="I123450:103494;84613:21494" data-name="vector group">
                    <div className="absolute inset-[-1.92%_-12.82%_-9.93%_-9.4%]">
                      <img alt="" className="block max-w-none size-full" src={imgVectorGroup3} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <PriceTag className="-translate-x-1/2 absolute bg-[#121213] border border-[#2b2b2b] border-solid bottom-0 content-stretch flex gap-[8px] items-center justify-center left-1/2 px-[8px] py-[5px] rounded-[24px]" type="free" />
          </div>
          <div className="flex-[1_0_0] h-[192px] min-w-px overflow-clip relative rounded-[32px]" data-node-id="123450:103497" data-name="item box">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[163.885px] items-center justify-center left-1/2 top-[calc(50%-12px)] w-[155.704px]" data-node-id="123450:103498">
              <div className="-rotate-5 flex-none">
                <div className="h-[152px] relative w-[143px]" data-name="Item (small)">
                  <div className="absolute h-[152px] left-0 top-0 w-[143px]" data-node-id="123450:103499" data-name="tail box">
                    <Tail className="-translate-y-1/2 absolute h-[109px] left-[18.88%] overflow-clip right-[16.08%] rounded-[6px] top-[calc(50%+11.5px)]" type="dementor" />
                  </div>
                  <div className="absolute inset-[0.66%_9.09%_0_9.09%]" data-node-id="I123450:103501;84613:21494" data-name="vector group">
                    <div className="absolute inset-[-1.92%_-12.82%_-9.93%_-9.4%]">
                      <img alt="" className="block max-w-none size-full" src={imgVectorGroup} />
                    </div>
                  </div>
                  <ItemBadge className="absolute h-[40px] left-[16px] top-[8px] w-[75px]" />
                </div>
              </div>
            </div>
            <div className="-translate-x-1/2 absolute bg-[#121213] border border-[#2b2b2b] border-solid bottom-0 content-stretch flex gap-[8px] items-center justify-center left-1/2 pl-[4px] pr-[8px] py-[4px] rounded-[24px]" data-node-id="123450:103503" data-name="price tag">
              <Icon className="relative shrink-0 size-[20px]" size="20" />
              <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[15px] text-right text-white whitespace-nowrap" data-node-id="I123450:103503;82534:31726">
                300
              </p>
            </div>
          </div>
        </div>
        <div className="h-[192px] overflow-clip relative rounded-[32px] shrink-0 w-full" data-node-id="123450:103504" data-name="item box">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[159.276px] items-center justify-center left-[calc(50%-0.5px)] top-[calc(50%-12px)] w-[150.759px]" data-node-id="123450:103505">
            <div className="-rotate-3 flex-none">
              <div className="h-[152px] relative w-[143px]" data-name="Item (small)">
                <div className="absolute h-[152px] left-0 top-0 w-[143px]" data-node-id="123450:103506" data-name="tail box">
                  <Tail className="-translate-y-1/2 absolute h-[109px] left-[18.88%] overflow-clip right-[16.08%] rounded-[6px] top-[calc(50%+11.5px)]" type="Soon" />
                </div>
                <div className="absolute inset-[0.66%_9.09%_0_9.09%]" data-node-id="I123450:103508;84613:21494" data-name="vector group">
                  <div className="absolute inset-[-1.92%_-12.82%_-9.93%_-9.4%]">
                    <img alt="" className="block max-w-none size-full" src={imgVectorGroup1} />
                  </div>
                </div>
                <ItemBadge className="absolute h-[40px] left-[16px] top-[8px] w-[114px]" type="partner" />
              </div>
            </div>
          </div>
          <PriceTag className="-translate-x-1/2 absolute bg-[#121213] border border-[#2b2b2b] border-solid bottom-0 content-stretch flex gap-[8px] items-center justify-center left-[calc(50%-0.5px)] px-[8px] py-[5px] rounded-[24px]" type="soon" />
        </div>
        <div className="content-stretch flex flex-col items-center overflow-clip pt-[36px] relative shrink-0 w-[358px]" data-node-id="123450:103511" data-name="Frame">
          <div className="h-[55px] relative shrink-0 w-full" data-node-id="123450:103512" data-name="Frame">
            <div className="-translate-x-1/2 absolute flex h-[64.599px] items-center justify-center left-1/2 top-[-4.8px] w-[277.751px]" data-node-id="123450:103513">
              <div className="-rotate-2 flex-none">
                <div className="[word-break:break-word] content-stretch flex flex-col font-['Montserrat:SemiBold'] font-semibold gap-[8px] items-center leading-[normal] relative text-center w-[276px]" data-name="Frame">
                  <p className="lowercase relative shrink-0 text-[24px] text-white w-full" data-node-id="123450:103514">
                    уже у тебя
                  </p>
                  <p className="relative shrink-0 text-[#808080] text-[15px] w-full" data-node-id="123450:103515">
                    хвосты в коллекции
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-[358px]" data-node-id="123450:103516" data-name="Frame">
          <div className="flex-[1_0_0] h-[184px] min-w-px overflow-clip relative" data-node-id="123450:103517" data-name="item">
            <div className="-translate-x-1/2 absolute flex h-[159.276px] items-center justify-center left-1/2 top-[-3.64px] w-[150.759px]" data-node-id="123450:103518">
              <div className="-rotate-3 flex-none">
                <div className="h-[152px] relative w-[143px]" data-name="Item box">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[152px] left-1/2 top-1/2 w-[143px]" data-node-id="123450:103519" data-name="tail box">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[118px] left-[calc(50%+0.5px)] overflow-clip rounded-[6px] top-[calc(50%+11px)] w-[100px]" data-node-id="123450:103520" data-name="_tail">
                      <div className="absolute flex inset-[-11.23%_-23.47%_-28.18%_-23.47%] items-center justify-center" data-node-id="123450:103521" style={{ containerType: "size" }}>
                        <div className="-rotate-150 -scale-x-100 flex-none h-[hypot(46.9572cqw,-72.6463cqh)] w-[hypot(53.0428cqw,27.3537cqh)]">
                          <div className="relative size-full" data-name="tail image">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" height="138" src={imgTailImage2} width="90" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Package className="-translate-x-1/2 -translate-y-1/2 absolute h-[152px] left-1/2 top-1/2 w-[143px]" type="Collection" />
                </div>
              </div>
            </div>
            <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex gap-[4px] items-center left-1/2" data-node-id="123450:103523" data-name="Frame">
              <div className="relative shrink-0 size-[30px]" data-node-id="123450:103524" data-name="checkmark">
                <div className="absolute bg-[#adff58] border-3 border-black border-solid left-0 rounded-[100px] size-[30px] top-0" data-node-id="123450:103525" data-name="background" />
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[12px] top-1/2" data-node-id="123450:103526" data-name="glyph/check/12">
                  <div className="absolute left-0 size-[12px] top-0" data-node-id="I123450:103526;3277:58161" data-name="glyph_check_12">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphCheck12} />
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#adff58] text-[15px] text-center whitespace-nowrap" data-node-id="123450:103527">
                выбрано
              </p>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[184px] min-w-px overflow-clip relative" data-node-id="123450:103528" data-name="item">
            <div className="-translate-x-1/2 absolute flex h-[156.898px] items-center justify-center left-1/2 top-[-2.45px] w-[148.218px]" data-node-id="123450:103529">
              <div className="flex-none rotate-2">
                <div className="h-[152px] relative w-[143px]" data-name="Item box">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[152px] left-1/2 top-1/2 w-[143px]" data-node-id="123450:103530" data-name="tail box">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[118px] left-[calc(50%+0.5px)] overflow-clip rounded-[6px] top-[calc(50%+11px)] w-[100px]" data-node-id="123450:103531" data-name="_tail">
                      <div className="absolute flex inset-[-11.23%_-23.47%_-28.18%_-23.47%] items-center justify-center" data-node-id="123450:103532" style={{ containerType: "size" }}>
                        <div className="-rotate-150 -scale-x-100 flex-none h-[hypot(46.9572cqw,-72.6463cqh)] w-[hypot(53.0428cqw,27.3537cqh)]">
                          <div className="relative size-full" data-name="tail image">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" height="138" src={imgTailImage2} width="90" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Package className="-translate-x-1/2 -translate-y-1/2 absolute h-[152px] left-1/2 top-1/2 w-[143px]" type="Collection" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-center relative shrink-0 w-[358px]" data-node-id="123450:103535" data-name="row">
          <div className="flex-[1_0_0] h-[184px] min-w-px overflow-clip relative" data-node-id="123450:103536" data-name="item">
            <div className="-translate-x-1/2 absolute flex h-[156.898px] items-center justify-center left-[calc(50%-0.5px)] top-[-2.45px] w-[148.218px]" data-node-id="123450:103537">
              <div className="flex-none rotate-2">
                <div className="h-[152px] relative w-[143px]" data-name="Item box">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[152px] left-1/2 top-1/2 w-[143px]" data-node-id="123450:103538" data-name="tail box">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[118px] left-[calc(50%+0.5px)] overflow-clip rounded-[6px] top-[calc(50%+11px)] w-[100px]" data-node-id="123450:103539" data-name="_tail">
                      <div className="absolute flex inset-[-11.23%_-23.47%_-28.18%_-23.47%] items-center justify-center" data-node-id="123450:103540" style={{ containerType: "size" }}>
                        <div className="-rotate-150 -scale-x-100 flex-none h-[hypot(46.9572cqw,-72.6463cqh)] w-[hypot(53.0428cqw,27.3537cqh)]">
                          <div className="relative size-full" data-name="tail image">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" height="138" src={imgTailImage2} width="90" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Package className="-translate-x-1/2 -translate-y-1/2 absolute h-[152px] left-1/2 top-1/2 w-[143px]" type="Collection" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-[390px]" data-node-id="123450:103543" data-name="Frame">
          <div className="h-[164px] relative shrink-0 w-[496px]" data-node-id="123450:103544" data-name="Frame 2087330528 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame20873305282} />
          </div>
          <div className="h-[100px] relative shrink-0 w-[390px]" data-node-id="123450:103545" data-name="Frame">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[82.588px] items-center justify-center left-[calc(50%+0.19px)] top-[calc(50%+1.5px)] w-[278.38px]" data-node-id="123450:103546">
              <div className="-rotate-2 flex-none">
                <div className="[word-break:break-word] content-stretch flex flex-col font-['Montserrat:SemiBold'] font-semibold gap-[8px] items-center leading-[normal] relative text-center w-[276px]" data-name="Frame">
                  <p className="lowercase relative shrink-0 text-[24px] text-white w-full" data-node-id="123450:103547">
                    архив
                  </p>
                  <p className="relative shrink-0 text-[#808080] text-[15px] w-full" data-node-id="123450:103548">{`лимитированные хвосты, которые остались в истории `}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-[358px]" data-node-id="123450:103549" data-name="Frame">
          <div className="flex-[1_0_0] h-[184px] min-w-px overflow-clip relative rounded-[32px]" data-node-id="123450:103550" data-name="item">
            <div className="-translate-x-1/2 absolute flex h-[159.276px] items-center justify-center left-1/2 top-[12.36px] w-[150.759px]" data-node-id="123450:103551">
              <div className="-rotate-3 flex-none">
                <div className="h-[152px] relative w-[143px]" data-name="Item box">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[152px] left-1/2 top-1/2 w-[143px]" data-node-id="123450:103552" data-name="tail box">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[118px] left-[calc(50%+0.5px)] overflow-clip rounded-[6px] top-[calc(50%+11px)] w-[100px]" data-node-id="123450:103553" data-name="_tail">
                      <div className="absolute flex inset-[-11.23%_-23.47%_-28.18%_-23.47%] items-center justify-center" data-node-id="123450:103554" style={{ containerType: "size" }}>
                        <div className="-rotate-150 -scale-x-100 flex-none h-[hypot(46.9572cqw,-72.6463cqh)] w-[hypot(53.0428cqw,27.3537cqh)]">
                          <div className="relative size-full" data-name="tail image">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" height="138" src={imgTailImage2} width="90" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Package className="-translate-x-1/2 -translate-y-1/2 absolute h-[152px] left-1/2 top-1/2 w-[143px]" type="Collection" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[184px] min-w-px overflow-clip relative rounded-[32px]" data-node-id="123450:103556" data-name="item">
            <div className="-translate-x-1/2 absolute flex h-[156.898px] items-center justify-center left-1/2 top-[13.55px] w-[148.218px]" data-node-id="123450:103557">
              <div className="flex-none rotate-2">
                <div className="h-[152px] relative w-[143px]" data-name="Item box">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[152px] left-1/2 top-1/2 w-[143px]" data-node-id="123450:103558" data-name="tail box">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[118px] left-[calc(50%+0.5px)] overflow-clip rounded-[6px] top-[calc(50%+11px)] w-[100px]" data-node-id="123450:103559" data-name="_tail">
                      <div className="absolute flex inset-[-11.23%_-23.47%_-28.18%_-23.47%] items-center justify-center" data-node-id="123450:103560" style={{ containerType: "size" }}>
                        <div className="-rotate-150 -scale-x-100 flex-none h-[hypot(46.9572cqw,-72.6463cqh)] w-[hypot(53.0428cqw,27.3537cqh)]">
                          <div className="relative size-full" data-name="tail image">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" height="138" src={imgTailImage2} width="90" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Package className="-translate-x-1/2 -translate-y-1/2 absolute h-[152px] left-1/2 top-1/2 w-[143px]" type="Collection" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-[844px] left-0 pointer-events-none top-0" data-node-id="123450:103563">
        <div className="bg-gradient-to-b from-[79.808%] from-black h-[156px] overflow-clip pointer-events-auto sticky to-[rgba(0,0,0,0)] top-0 w-[390px]" data-name="Background">
          <div className="absolute bottom-0 h-[156px] left-1/2 pointer-events-none top-0" data-node-id="123450:103564">
            <div className="-translate-x-1/2 bg-gradient-to-b from-[60.959%] from-black h-[156px] pointer-events-auto sticky to-[rgba(0,0,0,0)] top-0 w-[390px]" data-name="background">
              <div className="absolute left-[77px] size-[634px] top-[-576px]" data-node-id="123450:103565" data-name="Animation / Glow PA">
                <div className="absolute inset-[-3.52%_-4.37%_-9.79%_-10.98%]">
                  <img alt="" className="block max-w-none size-full" src={imgAnimationGlowPa} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[34px] content-stretch flex flex-col items-center left-0 w-[390px]" data-node-id="123450:103566" data-name="tab_bar + button_group">
        <div className="backdrop-blur-[5px] bg-[rgba(0,0,0,0.86)] border border-[rgba(255,255,255,0.15)] border-solid content-stretch flex gap-[10px] items-center pl-[12px] pr-[10px] py-[2px] relative rounded-[40px] shrink-0" data-node-id="I123450:103566;118790:29518" data-name="tab bar">
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[10px] pt-[8px] relative shrink-0 w-[48px]" data-node-id="I123450:103566;118790:29518;107036:15665" data-name="Tab 1">
            <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[100px]" data-node-id="I123450:103566;118790:29518;107036:15666" data-name="Selection" />
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I123450:103566;118790:29518;107036:15667" data-name="glyph">
              <div className="-translate-y-1/2 absolute h-[24px] left-0 overflow-clip right-0 top-1/2" data-node-id="I123450:103566;118790:29518;107036:15667;110:35735" data-name="glyph_location_24">
                <div className="absolute h-[21px] left-[4.5px] top-[1.5px] w-[15.001px]" data-node-id="I123450:103566;118790:29518;107036:15667;110:35736" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold'] leading-[normal] lowercase min-w-full not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center tracking-[-0.24px] w-[min-content]" data-node-id="I123450:103566;118790:29518;107036:15668">
              карта
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[10px] pt-[8px] relative shrink-0 w-[48px]" data-node-id="I123450:103566;118790:29518;107036:15669" data-name="Tab 2">
            <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[100px]" data-node-id="I123450:103566;118790:29518;107036:15670" data-name="Selection" />
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I123450:103566;118790:29518;107036:15671" data-name="glyph/nav friends/24">
              <div className="absolute left-0 size-[24px] top-0" data-node-id="I123450:103566;118790:29518;107036:15671;15719:323796" data-name="glyph_nav_friends_24">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphNavFriends24} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold'] leading-[normal] lowercase min-w-full not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center tracking-[-0.24px] w-[min-content]" data-node-id="I123450:103566;118790:29518;107036:15672">
              друзья
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[10px] pt-[8px] relative shrink-0 w-[48px]" data-node-id="I123450:103566;118790:29518;107036:15673" data-name="Tab 3">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I123450:103566;118790:29518;107036:15674" data-name="glyph/message/24">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphMessage24} />
            </div>
            <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[100px]" data-node-id="I123450:103566;118790:29518;107036:15675" data-name="Selection" />
            <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold'] leading-[normal] lowercase min-w-full not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center tracking-[-0.24px] w-[min-content]" data-node-id="I123450:103566;118790:29518;107036:15676">
              чаты
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[10px] pt-[8px] relative shrink-0 w-[48px]" data-node-id="I123450:103566;118790:29518;107036:15677" data-name="Tab 4">
            <div className="relative shrink-0 size-[24px]" data-node-id="I123450:103566;118790:29518;107036:15679" data-name="glyph/market/24">
              <div className="absolute left-0 size-[24px] top-0" data-node-id="I123450:103566;118790:29518;107036:15679;115927:23904" data-name="glyph_market_24">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphMarket24} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold'] leading-[normal] lowercase min-w-full not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] w-[min-content]" data-node-id="I123450:103566;118790:29518;107036:15680">
              маркет
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[10px] pt-[8px] relative shrink-0 w-[48px]" data-node-id="I123450:103566;118790:29518;107036:15681" data-name="Tab 5">
            <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[100px]" data-node-id="I123450:103566;118790:29518;107036:15682" data-name="Selection" />
            <div className="relative shrink-0 size-[24px]" data-node-id="I123450:103566;118790:29518;107036:15683">
              <div className="absolute left-0 size-[24px] top-0" data-node-id="I123450:103566;118790:29518;107036:15684">
                <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgEllipse395} width="24" />
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold'] leading-[normal] lowercase min-w-full not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center tracking-[-0.24px] w-[min-content]" data-node-id="I123450:103566;118790:29518;107036:15685">
              ты
            </p>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[390px]" data-node-id="123450:103567" data-name="Store top nav">
        <div className="backdrop-blur-[0px] content-stretch flex items-start justify-between pt-[62px] px-[16px] relative shrink-0 w-full" data-node-id="I123450:103567;83018:34910" data-name="Nav">
          <div className="flex-[1_0_0] h-[40px] min-w-px relative" data-node-id="I123450:103567;83018:34912" data-name="title">
            <p className="[word-break:break-word] absolute font-['Montserrat:SemiBold'] font-semibold leading-[1.05] left-0 lowercase text-[36px] text-white top-[calc(50%-19px)] tracking-[-0.72px] whitespace-nowrap" data-node-id="I123450:103567;84540:21210">
              маркет
            </p>
          </div>
          <div className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[16px] items-center justify-end pl-[6px] pr-[4px] py-[4px] relative rounded-[16px] shrink-0" data-node-id="I123450:103567;84073:127983" data-name="Coin balance">
            <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-node-id="I123450:103567;84073:127983;84073:127839" data-name="value">
              <Icon className="relative shrink-0 size-[28px]" />
              <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[1.119] lowercase relative shrink-0 text-[20px] text-right text-white whitespace-nowrap" data-node-id="I123450:103567;84073:127983;84073:127841">
                55 000
              </p>
            </div>
            <div className="bg-white content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[12px] shrink-0" data-node-id="I123450:103567;84073:127983;84073:127842" data-name="Button">
              <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="I123450:103567;84073:127983;84073:127842;3520:72446" data-name="glyph/plus/16">
                <div className="absolute left-0 size-[16px] top-0" data-node-id="I123450:103567;84073:127983;84073:127842;3520:72446;3250:57783" data-name="glyph_plus_16">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphPlus16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[var(--tab-group\/item-gap-\(with-counter\),20px)] h-[54px] items-center left-0 overflow-x-auto overflow-y-clip px-[16px] py-[8px] top-[102px] w-[390px]" data-node-id="123450:103568" data-name="tab group">
        <div className="content-stretch flex h-[38px] items-center py-[8px] relative rounded-[4px] shrink-0" data-node-id="I123450:103568;111326:115245" data-name="item 1">
          <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold'] font-semibold justify-center leading-[0] lowercase relative shrink-0 text-[20px] text-white whitespace-nowrap" data-node-id="I123450:103568;111326:115245;85999:176935">
            <p className="leading-[1.119]">хвосты</p>
          </div>
        </div>
        <div className="content-stretch flex h-[38px] items-center py-[8px] relative rounded-[4px] shrink-0" data-node-id="I123450:103568;111326:115246" data-name="item 2">
          <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold'] font-semibold justify-center leading-[0] lowercase relative shrink-0 text-[20px] text-[rgba(255,255,255,0.5)] whitespace-nowrap" data-node-id="I123450:103568;111326:115246;85999:176931">
            <p className="leading-[1.119]">стикеры</p>
          </div>
        </div>
      </div>
      <div className="absolute h-[844px] left-0 overflow-clip top-0 w-[390px]" data-node-id="123450:103569" data-name="1.1 : stars background">
        <div className="absolute h-[518px] left-[-19px] top-0 w-[428px]" data-node-id="123450:103570" data-name="space.svg">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSpaceSvg} />
        </div>
        <div className="absolute flex h-[572.997px] items-center justify-center left-[-19px] top-[513px] w-[422px]" data-node-id="123450:103613">
          <div className="flex-none rotate-180">
            <div className="h-[572.997px] relative w-[422px]" data-name="space.svg">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSpaceSvg1} />
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[47px] left-1/2 overflow-clip top-0 w-[390px]" data-node-id="123450:103656" data-name="StatusBar">
        <div className="absolute contents left-[27px] top-[14px]" data-node-id="I123450:103656;2604:14897" data-name="Left Side">
          <div className="absolute h-[21px] left-[27px] rounded-[24px] top-[14px] w-[54px]" data-node-id="I123450:103656;2604:14898" data-name="_StatusBar-time">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro_Text:Semibold'] h-[20px] leading-[22px] left-[27px] not-italic text-[17px] text-center text-white top-px tracking-[-0.408px] w-[54px]" data-node-id="I123450:103656;2604:14898;839:7100" style={{ fontFeatureSettings: '"case" 1' }}>
              4:20
            </p>
          </div>
        </div>
        <div className="absolute h-[13px] right-[26.6px] top-[19px] w-[77.401px]" data-node-id="I123450:103656;2604:14899" data-name="Right Side">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRightSide} />
        </div>
      </div>
      <HomeIndicator className="-translate-x-1/2 absolute bottom-0 h-[34px] left-1/2 w-[390px]" />
    </div>
  );
}

export {Tail,Package};
