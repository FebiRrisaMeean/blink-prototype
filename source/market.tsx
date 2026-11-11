const assetPathPrefix = "https://www.figma.com/api/mcp/asset/53cd6e3a-e9f0-40fa-b58a-b2a7bacd1dae";
const imgLogo = `${assetPathPrefix}/f548a.svg`;
const imgIconBlinkcoin28 = `${assetPathPrefix}/d8eee.svg`;
const imgIconBlinkcoin20 = `${assetPathPrefix}/f8243.svg`;
const imgNewBadgeSale = `${assetPathPrefix}/50419.png`;
const imgNewBadgeNew = `${assetPathPrefix}/7b4a5.png`;
const imgNewBadgeLimited = `${assetPathPrefix}/6a4cf.png`;
const img05 = `${assetPathPrefix}/a858b.png`;
const imgPackageTop1 = `${assetPathPrefix}/aa4ea.svg`;
const imgRectangle240651321 = `${assetPathPrefix}/f575e.svg`;
const imgTypeBat = `${assetPathPrefix}/510d6.png`;
const imgGhost = `${assetPathPrefix}/00566.png`;
const imgZombie = `${assetPathPrefix}/952aa.png`;
const imgPumpkin = `${assetPathPrefix}/c5116.png`;
const imgFrame20873305282 = `${assetPathPrefix}/156a9.png`;
const imgEllipse395 = `${assetPathPrefix}/dc87c.png`;
const imgPackageTop2 = `${assetPathPrefix}/e35b3.svg`;
const imgRectangle240651322 = `${assetPathPrefix}/4667c.svg`;
const imgPackageTop3 = `${assetPathPrefix}/30d1c.svg`;
const imgSubtract = `${assetPathPrefix}/34804.svg`;
const imgGlyphCheck12 = `${assetPathPrefix}/a84f8.svg`;
const imgAnimationGlowPa = `${assetPathPrefix}/9e94f.svg`;
const imgStar1 = `${assetPathPrefix}/fe022.svg`;
const imgGlyphPlus16 = `${assetPathPrefix}/3312e.svg`;
const imgAnimationGlowPa1 = `${assetPathPrefix}/003e6.svg`;
const imgAnimationGlowPa2 = `${assetPathPrefix}/ba172.svg`;
const imgRightSide = `${assetPathPrefix}/1ccd4.svg`;
const imgVector = `${assetPathPrefix}/1ec6a.svg`;
const imgGlyphNavFriends24 = `${assetPathPrefix}/7ec30.svg`;
const imgGlyphMessage24 = `${assetPathPrefix}/abe54.svg`;
const imgGlyphMarket24 = `${assetPathPrefix}/39d2e.svg`;

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

type ItemBadgeProps = {
  className?: string;
  type?: "limited" | "new" | "sale";
};

function ItemBadge({ className, type = "sale" }: ItemBadgeProps) {
  const isLimited = type === "limited";
  const isNew = type === "new";
  return (
    <div className={className || `h-[40px] relative ${isLimited ? "w-[112px]" : isNew ? "w-[74px]" : "w-[75px]"}`} id={isLimited ? "node-84466_16272" : isNew ? "node-84466_16271" : "node-84466_16270"}>
      <div className={`absolute flex items-center justify-center ${isLimited ? "inset-[-11.95%_-1.37%]" : isNew ? "inset-[-7.75%_-2.2%]" : "bottom-[-7.9%] left-[-1.62px] top-[-7.9%] w-[78.234px]"}`} id={isLimited ? "node-84466_16260" : isNew ? "node-84466_16269" : "node-84466_16268"} style={{ containerType: "size" }}>
        <div className={`flex-none ${isLimited ? "h-[hypot(3.04499cqw,80.4041cqh)] rotate-[-4.97deg] skew-x-[0.05deg] w-[hypot(96.955cqw,-19.5959cqh)]" : isNew ? "h-[hypot(4.58316cqw,86.2549cqh)] rotate-[-4.92deg] skew-x-[0.15deg] w-[hypot(95.4168cqw,-13.7451cqh)]" : "h-[hypot(4.49898cqw,86.0231cqh)] rotate-[-4.95deg] skew-x-[0.1deg] w-[hypot(95.501cqw,-13.9769cqh)]"}`}>
          {type === "sale" && (
            <div className="relative size-full" data-name="new_badge _ sale">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[118.83%] left-[-23.08%] max-w-none top-[-9.42%] w-[135.58%]" src={imgNewBadgeSale} />
              </div>
            </div>
          )}
          {isNew && (
            <div className="relative size-full" data-name="new_badge _ new">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[118.83%] left-[-25.49%] max-w-none top-[-9.42%] w-[138.24%]" src={imgNewBadgeNew} />
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
  type?: "Bag (vector)";
};

function Package({ className, type = "Bag (vector)" }: PackageProps) {
  return (
    <div className={className || "h-[152px] relative w-[143px]"} data-node-id="84613:21416">
      <div className="absolute inset-[0.66%_9.79%_0_9.79%]" data-node-id="84854:18908" data-name="Asset">
        <div className="absolute border-5 border-[#2b2b2b] border-dashed inset-[13.91%_0_0_0] overflow-clip rounded-bl-[14.51px] rounded-br-[14.51px]" data-node-id="84613:21444" data-name="image">
          <div className="absolute h-[216px] left-[-32px] top-[-28.93px] w-[211px]" data-node-id="84613:21445" data-name="05">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img05} />
          </div>
        </div>
        <div className="absolute border-5 border-black border-solid inset-[13.91%_0_0_0] rounded-bl-[14.51px] rounded-br-[14.51px]" data-node-id="84613:21446" data-name="stroke" />
        <div className="absolute border-5 border-[#2b2b2b] border-dashed inset-[13.91%_0_0_0] rounded-bl-[14.51px] rounded-br-[14.51px]" data-node-id="84613:21447" data-name="stroke" />
        <div className="absolute inset-[0_0_81.46%_0]" data-node-id="84613:21448" data-name="_package / top 1">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPackageTop1} />
          <div className="absolute inset-[13.33%_4.16%_16.01%_4.34%]" data-node-id="I84613:21448;77930:189662">
            <div className="absolute inset-[-17.98%_-3.38%_-13.49%_-3.38%]">
              <img alt="" className="block max-w-none size-full" src={imgRectangle240651321} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type StickerProps = {
  className?: string;
  type?: "bat" | "ghost";
};

function Sticker({ className, type = "bat" }: StickerProps) {
  const isGhost = type === "ghost";
  return (
    <div className={className || "relative size-[84px]"} id={isGhost ? "node-84854_19035" : "node-84854_19028"}>
      {type === "bat" && <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTypeBat} />}
      {isGhost && (
        <div className="absolute inset-[-2.35%]" data-node-id="84854:19032" data-name="ghost">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGhost} />
        </div>
      )}
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-black overflow-clip relative rounded-[40px] size-full" data-node-id="122634:86146" data-name="маркет">
      <div className="absolute content-stretch flex flex-col gap-[36px] items-center pb-[16px] pt-[36px] px-[16px] right-0 top-[179px] w-[390px]" data-node-id="122634:86147" data-name="col (stickers)">
        <div className="content-stretch flex items-center justify-center relative shrink-0 w-[358px]" data-node-id="122634:86148" data-name="row">
          <div className="flex-[1_0_0] h-[228px] min-w-px overflow-clip relative rounded-[32px]" data-node-id="122634:86149" data-name="item box">
            <div className="-translate-x-1/2 absolute flex h-[202.711px] items-center justify-center left-[calc(50%-0.5px)] top-[0.64px] w-[192.712px]" data-node-id="122634:86150">
              <div className="-rotate-5 flex-none">
                <div className="h-[188px] relative w-[177px]" data-name="item L">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[188px] left-1/2 top-1/2 w-[177px]" data-node-id="122634:86151" data-name="1 sticker">
                    <div className="absolute left-[25.99px] size-[126.252px] top-[42.02px]" data-node-id="122634:86152" data-name="box">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[126.252px] top-1/2" data-node-id="122634:86153" data-name="_sticker">
                        <div className="absolute inset-[-5.74%]" data-node-id="I122634:86153;84854:19038" data-name="zombie">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgZombie} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[188px] left-1/2 top-1/2 w-[177px]" data-node-id="122634:86154" data-name="_package">
                    <div className="absolute inset-[0.66%_9.79%_0_9.79%]" data-node-id="I122634:86154;84854:18908" data-name="Asset">
                      <div className="absolute border-[#2b2b2b] border-[6.189px] border-dashed inset-[13.91%_0_0_0] overflow-clip rounded-bl-[17.96px] rounded-br-[17.96px]" data-node-id="I122634:86154;84613:21444" data-name="image">
                        <div className="absolute h-[267.357px] left-[-39.61px] top-[-35.8px] w-[261.168px]" data-node-id="I122634:86154;84613:21445" data-name="05">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img05} />
                        </div>
                      </div>
                      <div className="absolute border-[6.189px] border-black border-solid inset-[13.91%_0_0_0] rounded-bl-[17.96px] rounded-br-[17.96px]" data-node-id="I122634:86154;84613:21446" data-name="stroke" />
                      <div className="absolute border-[#2b2b2b] border-[6.189px] border-dashed inset-[13.91%_0_0_0] rounded-bl-[17.96px] rounded-br-[17.96px]" data-node-id="I122634:86154;84613:21447" data-name="stroke" />
                      <div className="absolute inset-[0_0_81.46%_0]" data-node-id="I122634:86154;84613:21448" data-name="_package / top 1">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPackageTop2} />
                        <div className="absolute inset-[13.33%_4.16%_16.01%_4.34%]" data-node-id="I122634:86154;84613:21448;77930:189662">
                          <div className="absolute inset-[-18%_-3.38%_-13.5%_-3.38%]">
                            <img alt="" className="block max-w-none size-full" src={imgRectangle240651322} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ItemBadge className="-translate-x-1/2 -translate-y-1/2 absolute h-[40px] left-[calc(50%-27.5px)] top-[calc(50%-58px)] w-[74px]" type="new" />
                </div>
              </div>
            </div>
            <PriceTag className="-translate-x-1/2 absolute bg-[#121213] border border-[#2b2b2b] border-solid bottom-0 content-stretch flex gap-[8px] items-center justify-center left-[calc(50%+0.5px)] pl-[4px] pr-[8px] py-[4px] rounded-[24px]" />
          </div>
        </div>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-[358px]" data-node-id="122634:86157" data-name="row">
          <div className="flex-[1_0_0] h-[192px] min-w-px overflow-clip relative rounded-[32px]" data-node-id="122634:86158" data-name="item box">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[159.276px] items-center justify-center left-1/2 top-[calc(50%-12px)] w-[150.759px]" data-node-id="122634:86159">
              <div className="-rotate-3 flex-none">
                <div className="h-[152px] relative w-[143px]" data-name="Item (small)">
                  <div className="absolute h-[152px] left-0 top-0 w-[143px]" data-node-id="122634:86160" data-name="sticker box">
                    <Sticker className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-0.47px)] size-[88.281px] top-[calc(50%+10.97px)]" />
                  </div>
                  <div className="absolute inset-[0.66%_9.79%_0_9.79%]" data-node-id="I122634:86162;84854:18908" data-name="Asset">
                    <div className="absolute border-5 border-[#2b2b2b] border-dashed inset-[13.91%_0_0_0] overflow-clip rounded-bl-[14.51px] rounded-br-[14.51px]" data-node-id="I122634:86162;84613:21444" data-name="image">
                      <div className="absolute h-[216px] left-[-32px] top-[-28.93px] w-[211px]" data-node-id="I122634:86162;84613:21445" data-name="05">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img05} />
                      </div>
                    </div>
                    <div className="absolute border-5 border-black border-solid inset-[13.91%_0_0_0] rounded-bl-[14.51px] rounded-br-[14.51px]" data-node-id="I122634:86162;84613:21446" data-name="stroke" />
                    <div className="absolute border-5 border-[#2b2b2b] border-dashed inset-[13.91%_0_0_0] rounded-bl-[14.51px] rounded-br-[14.51px]" data-node-id="I122634:86162;84613:21447" data-name="stroke" />
                    <div className="absolute inset-[0_0_81.46%_0]" data-node-id="I122634:86162;84613:21448" data-name="_package / top 1">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPackageTop3} />
                      <div className="absolute inset-[13.33%_4.16%_16.01%_4.34%]" data-node-id="I122634:86162;84613:21448;77930:189662">
                        <div className="absolute inset-[-17.98%_-3.38%_-13.49%_-3.38%]">
                          <img alt="" className="block max-w-none size-full" src={imgRectangle240651321} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <ItemBadge className="absolute h-[40px] left-[16px] top-[8px] w-[75px]" />
                </div>
              </div>
            </div>
            <PriceTag className="-translate-x-1/2 absolute bg-[#121213] border border-[#2b2b2b] border-solid bottom-0 content-stretch flex gap-[8px] items-center justify-center left-1/2 pl-[4px] pr-[8px] py-[4px] rounded-[24px]" />
          </div>
          <div className="flex-[1_0_0] h-[192px] min-w-px overflow-clip relative rounded-[32px]" data-node-id="122634:86165" data-name="item box">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[156.898px] items-center justify-center left-1/2 top-[calc(50%-12px)] w-[148.218px]" data-node-id="122634:86166">
              <div className="flex-none rotate-2">
                <div className="h-[152px] relative w-[143px]" data-name="Item (small)">
                  <div className="absolute h-[152px] left-0 top-0 w-[143px]" data-node-id="122634:86167" data-name="sticker box">
                    <Sticker className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-0.47px)] size-[88.281px] top-[calc(50%+10.97px)]" type="ghost" />
                  </div>
                  <div className="absolute inset-[0.66%_9.79%_0_9.79%]" data-node-id="I122634:86169;84854:18908" data-name="Asset">
                    <div className="absolute border-5 border-[#2b2b2b] border-dashed inset-[13.91%_0_0_0] overflow-clip rounded-bl-[14.51px] rounded-br-[14.51px]" data-node-id="I122634:86169;84613:21444" data-name="image">
                      <div className="absolute h-[216px] left-[-32px] top-[-28.93px] w-[211px]" data-node-id="I122634:86169;84613:21445" data-name="05">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img05} />
                      </div>
                    </div>
                    <div className="absolute border-5 border-black border-solid inset-[13.91%_0_0_0] rounded-bl-[14.51px] rounded-br-[14.51px]" data-node-id="I122634:86169;84613:21446" data-name="stroke" />
                    <div className="absolute border-5 border-[#2b2b2b] border-dashed inset-[13.91%_0_0_0] rounded-bl-[14.51px] rounded-br-[14.51px]" data-node-id="I122634:86169;84613:21447" data-name="stroke" />
                    <div className="absolute inset-[0_0_81.46%_0]" data-node-id="I122634:86169;84613:21448" data-name="_package / top 1">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPackageTop3} />
                      <div className="absolute inset-[13.33%_4.16%_16.01%_4.34%]" data-node-id="I122634:86169;84613:21448;77930:189662">
                        <div className="absolute inset-[-17.98%_-3.38%_-13.49%_-3.38%]">
                          <img alt="" className="block max-w-none size-full" src={imgRectangle240651321} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <ItemBadge className="absolute h-[40px] left-[16px] top-[8px] w-[74px]" type="new" />
                </div>
              </div>
            </div>
            <PriceTag className="-translate-x-1/2 absolute bg-[#121213] border border-[#2b2b2b] border-solid bottom-0 content-stretch flex gap-[8px] items-center justify-center left-1/2 pl-[4px] pr-[8px] py-[4px] rounded-[24px]" />
          </div>
        </div>
        <div className="content-stretch flex items-center justify-center relative shrink-0 w-[358px]" data-node-id="122634:86172" data-name="row">
          <div className="flex-[1_0_0] h-[236px] min-w-px overflow-clip relative rounded-[32px]" data-node-id="122634:86173" data-name="item box">
            <div className="absolute flex h-[202.781px] items-center justify-center left-[74.29px] top-[1.29px] w-[192.718px]" data-node-id="122634:86174">
              <div className="-rotate-5 flex-none">
                <div className="h-[188.07px] relative w-[177px]" data-name="item L">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[188px] left-1/2 top-[calc(50%-0.04px)] w-[177px]" data-node-id="122634:86175" data-name="4 stickers">
                    <div className="absolute left-[19.8px] size-[79.217px] top-[94px]" data-node-id="122634:86176" data-name="box">
                      <div className="-translate-y-1/2 absolute flex items-center justify-center right-[-2.02px] size-[83.254px] top-1/2" data-node-id="122634:86177">
                        <div className="flex-none rotate-3">
                          <div className="relative size-[79.217px]" data-name="_sticker">
                            <div className="absolute inset-[-2.35%]" data-node-id="I122634:86177;84854:19034" data-name="pumpkin">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPumpkin} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-[73.03px] size-[79.217px] top-[103.9px]" data-node-id="122634:86178" data-name="box">
                      <div className="-translate-y-1/2 absolute flex items-center justify-center right-[-3.3px] size-[85.82px] top-1/2" data-node-id="122634:86179">
                        <div className="-rotate-5 flex-none">
                          <div className="relative size-[79.217px]" data-name="_sticker">
                            <div className="absolute inset-[-5.74%]" data-node-id="I122634:86179;84854:19038" data-name="zombie">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgZombie} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-[34.66px] size-[79.217px] top-[49.44px]" data-node-id="122634:86180" data-name="box">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[79.217px] top-1/2" data-node-id="122634:86181" data-name="_sticker">
                        <div className="absolute inset-[-2.35%]" data-node-id="I122634:86181;84854:19032" data-name="ghost">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGhost} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-[73.03px] size-[79.217px] top-[54.39px]" data-node-id="122634:86182" data-name="box">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-1/2 size-[81.933px] top-1/2" data-node-id="122634:86183">
                        <div className="-rotate-2 flex-none">
                          <div className="relative size-[79.217px]" data-name="_sticker">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTypeBat} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[188px] left-1/2 top-[calc(50%+0.04px)] w-[177px]" data-node-id="122634:86184" data-name="_package">
                    <div className="absolute inset-[0.66%_9.79%_0_9.79%]" data-node-id="I122634:86184;84854:18908" data-name="Asset">
                      <div className="absolute border-[#2b2b2b] border-[6.189px] border-dashed inset-[13.91%_0_0_0] overflow-clip rounded-bl-[17.96px] rounded-br-[17.96px]" data-node-id="I122634:86184;84613:21444" data-name="image">
                        <div className="absolute h-[267.357px] left-[-39.61px] top-[-35.8px] w-[261.168px]" data-node-id="I122634:86184;84613:21445" data-name="05">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img05} />
                        </div>
                      </div>
                      <div className="absolute border-[6.189px] border-black border-solid inset-[13.91%_0_0_0] rounded-bl-[17.96px] rounded-br-[17.96px]" data-node-id="I122634:86184;84613:21446" data-name="stroke" />
                      <div className="absolute border-[#2b2b2b] border-[6.189px] border-dashed inset-[13.91%_0_0_0] rounded-bl-[17.96px] rounded-br-[17.96px]" data-node-id="I122634:86184;84613:21447" data-name="stroke" />
                      <div className="absolute inset-[0_0_81.46%_0]" data-node-id="I122634:86184;84613:21448" data-name="_package / top 1">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPackageTop2} />
                        <div className="absolute inset-[13.33%_4.16%_16.01%_4.34%]" data-node-id="I122634:86184;84613:21448;77930:189662">
                          <div className="absolute inset-[-18%_-3.38%_-13.5%_-3.38%]">
                            <img alt="" className="block max-w-none size-full" src={imgRectangle240651322} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ItemBadge className="-translate-x-1/2 -translate-y-1/2 absolute h-[40px] left-[calc(50%-8.5px)] top-[calc(50%-57.97px)] w-[112px]" type="limited" />
                </div>
              </div>
            </div>
            <PriceTag className="-translate-x-1/2 absolute bg-[#121213] border border-[#2b2b2b] border-solid bottom-0 content-stretch flex gap-[8px] items-center justify-center left-[calc(50%+0.5px)] px-[8px] py-[5px] rounded-[24px]" type="free" />
          </div>
        </div>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-[358px]" data-node-id="122634:86187" data-name="row">
          <div className="flex-[1_0_0] h-[192px] min-w-px overflow-clip relative rounded-[32px]" data-node-id="122634:86188" data-name="item box">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[159.276px] items-center justify-center left-1/2 top-[calc(50%-12px)] w-[150.759px]" data-node-id="122634:86189">
              <div className="-rotate-3 flex-none">
                <div className="h-[152px] relative w-[143px]" data-name="item S">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[152px] left-1/2 top-1/2 w-[143px]" data-node-id="122634:86190" data-name="4 stickers">
                    <div className="absolute left-[16px] size-[64px] top-[76px]" data-node-id="122634:86191" data-name="box">
                      <div className="-translate-y-1/2 absolute flex items-center justify-center right-[-1.63px] size-[67.262px] top-1/2" data-node-id="122634:86192">
                        <div className="flex-none rotate-3">
                          <div className="relative size-[64px]" data-name="_sticker">
                            <div className="absolute inset-[-2.35%]" data-node-id="I122634:86192;84854:19034" data-name="pumpkin">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPumpkin} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-[59px] size-[64px] top-[84px]" data-node-id="122634:86193" data-name="box">
                      <div className="-translate-y-1/2 absolute flex items-center justify-center right-[-2.67px] size-[69.334px] top-1/2" data-node-id="122634:86194">
                        <div className="-rotate-5 flex-none">
                          <div className="relative size-[64px]" data-name="_sticker">
                            <div className="absolute inset-[-5.74%]" data-node-id="I122634:86194;84854:19038" data-name="zombie">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgZombie} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-[28px] size-[64px] top-[40px]" data-node-id="122634:86195" data-name="box">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[64px] top-1/2" data-node-id="122634:86196" data-name="_sticker">
                        <div className="absolute inset-[-2.35%]" data-node-id="I122634:86196;84854:19032" data-name="ghost">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGhost} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-[59px] size-[64px] top-[44px]" data-node-id="122634:86197" data-name="box">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-1/2 size-[66.195px] top-1/2" data-node-id="122634:86198">
                        <div className="-rotate-2 flex-none">
                          <div className="relative size-[64px]" data-name="_sticker">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTypeBat} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[152px] left-1/2 top-1/2 w-[143px]" data-node-id="122634:86199" data-name="_package">
                    <div className="absolute inset-[0.66%_9.79%_0_9.79%]" data-node-id="I122634:86199;84854:18908" data-name="Asset">
                      <div className="absolute border-5 border-[#2b2b2b] border-dashed inset-[13.91%_0_0_0] overflow-clip rounded-bl-[14.51px] rounded-br-[14.51px]" data-node-id="I122634:86199;84613:21444" data-name="image">
                        <div className="absolute h-[216px] left-[-32px] top-[-28.93px] w-[211px]" data-node-id="I122634:86199;84613:21445" data-name="05">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img05} />
                        </div>
                      </div>
                      <div className="absolute border-5 border-black border-solid inset-[13.91%_0_0_0] rounded-bl-[14.51px] rounded-br-[14.51px]" data-node-id="I122634:86199;84613:21446" data-name="stroke" />
                      <div className="absolute border-5 border-[#2b2b2b] border-dashed inset-[13.91%_0_0_0] rounded-bl-[14.51px] rounded-br-[14.51px]" data-node-id="I122634:86199;84613:21447" data-name="stroke" />
                      <div className="absolute inset-[0_0_81.46%_0]" data-node-id="I122634:86199;84613:21448" data-name="_package / top 1">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPackageTop3} />
                        <div className="absolute inset-[13.33%_4.16%_16.01%_4.34%]" data-node-id="I122634:86199;84613:21448;77930:189662">
                          <div className="absolute inset-[-17.98%_-3.38%_-13.49%_-3.38%]">
                            <img alt="" className="block max-w-none size-full" src={imgRectangle240651321} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ItemBadge className="-translate-x-1/2 -translate-y-1/2 absolute h-[40px] left-[calc(50%+0.5px)] top-[calc(50%-48px)] w-[112px]" type="limited" />
                </div>
              </div>
            </div>
            <PriceTag className="-translate-x-1/2 absolute bg-[#121213] border border-[#2b2b2b] border-solid bottom-0 content-stretch flex gap-[8px] items-center justify-center left-1/2 pl-[4px] pr-[8px] py-[4px] rounded-[24px]" />
          </div>
          <div className="flex-[1_0_0] h-[192px] min-w-px overflow-clip relative rounded-[32px]" data-node-id="122634:86202" data-name="item box">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[156.898px] items-center justify-center left-1/2 top-[calc(50%-12px)] w-[148.218px]" data-node-id="122634:86203">
              <div className="flex-none rotate-2">
                <div className="h-[152px] relative w-[143px]" data-name="item S">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[152px] left-1/2 top-1/2 w-[143px]" data-node-id="122634:86204" data-name="2 stickers">
                    <div className="absolute left-[16px] size-[88px] top-[64px]" data-node-id="122634:86205" data-name="box">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-1/2 size-[92.485px] top-1/2" data-node-id="122634:86206">
                        <div className="flex-none rotate-3">
                          <div className="relative size-[88px]" data-name="_sticker">
                            <div className="absolute inset-[-2.35%]" data-node-id="I122634:86206;84854:19032" data-name="ghost">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGhost} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-[39px] size-[88px] top-[30px]" data-node-id="122634:86207" data-name="box">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-1/2 size-[91.018px] top-1/2" data-node-id="122634:86208">
                        <div className="-rotate-2 flex-none">
                          <div className="relative size-[88px]" data-name="_sticker">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTypeBat} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[152px] left-1/2 top-1/2 w-[143px]" data-node-id="122634:86209" data-name="_package">
                    <div className="absolute inset-[0.66%_9.79%_0_9.79%]" data-node-id="I122634:86209;84854:18908" data-name="Asset">
                      <div className="absolute border-5 border-[#2b2b2b] border-dashed inset-[13.91%_0_0_0] overflow-clip rounded-bl-[14.51px] rounded-br-[14.51px]" data-node-id="I122634:86209;84613:21444" data-name="image">
                        <div className="absolute h-[216px] left-[-32px] top-[-28.93px] w-[211px]" data-node-id="I122634:86209;84613:21445" data-name="05">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img05} />
                        </div>
                      </div>
                      <div className="absolute border-5 border-black border-solid inset-[13.91%_0_0_0] rounded-bl-[14.51px] rounded-br-[14.51px]" data-node-id="I122634:86209;84613:21446" data-name="stroke" />
                      <div className="absolute border-5 border-[#2b2b2b] border-dashed inset-[13.91%_0_0_0] rounded-bl-[14.51px] rounded-br-[14.51px]" data-node-id="I122634:86209;84613:21447" data-name="stroke" />
                      <div className="absolute inset-[0_0_81.46%_0]" data-node-id="I122634:86209;84613:21448" data-name="_package / top 1">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPackageTop3} />
                        <div className="absolute inset-[13.33%_4.16%_16.01%_4.34%]" data-node-id="I122634:86209;84613:21448;77930:189662">
                          <div className="absolute inset-[-17.98%_-3.38%_-13.49%_-3.38%]">
                            <img alt="" className="block max-w-none size-full" src={imgRectangle240651321} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ItemBadge className="-translate-x-1/2 -translate-y-1/2 absolute h-[40px] left-[calc(50%-18.5px)] top-[calc(50%-48px)] w-[74px]" type="new" />
                </div>
              </div>
            </div>
            <PriceTag className="-translate-x-1/2 absolute bg-[#121213] border border-[#2b2b2b] border-solid bottom-0 content-stretch flex gap-[8px] items-center justify-center left-1/2 pl-[4px] pr-[8px] py-[4px] rounded-[24px]" />
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip pt-[36px] relative shrink-0 w-[358px]" data-node-id="122634:86212">
          <div className="h-[55px] relative shrink-0 w-full" data-node-id="122634:86213">
            <div className="-translate-x-1/2 absolute flex h-[64.599px] items-center justify-center left-[calc(50%-0.12px)] top-[-4.8px] w-[277.751px]" data-node-id="122634:86214">
              <div className="-rotate-2 flex-none">
                <div className="[word-break:break-word] content-stretch flex flex-col font-['Montserrat:SemiBold'] font-semibold gap-[8px] items-center leading-[normal] relative text-center w-[276px]">
                  <p className="lowercase relative shrink-0 text-[24px] text-white w-full" data-node-id="122634:86215">
                    уже у тебя
                  </p>
                  <p className="relative shrink-0 text-[#808080] text-[15px] w-full" data-node-id="122634:86216">
                    стикеры в коллекции
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-[358px]" data-node-id="122634:86217" data-name="S-size">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px overflow-clip pt-[8px] relative rounded-[32px]" data-node-id="122634:86218" data-name="item box">
            <div className="flex h-[159.276px] items-center justify-center relative shrink-0 w-[150.759px]" data-node-id="122634:86219">
              <div className="-rotate-3 flex-none">
                <div className="h-[152px] relative w-[143px]" data-name="item S">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[152px] left-1/2 top-1/2 w-[143px]" data-node-id="122634:86220" data-name="1 sticker">
                    <div className="absolute left-[21px] size-[102px] top-[34px]" data-node-id="122634:86221" data-name="box">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[102px] top-1/2" data-node-id="122634:86222" data-name="_sticker">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTypeBat} />
                      </div>
                    </div>
                  </div>
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[152px] left-1/2 top-1/2 w-[143px]" data-node-id="122634:86223" data-name="_package">
                    <div className="absolute inset-[7.89%_8.39%_0_11.19%]" data-node-id="I122634:86223;87925:57126" data-name="Subtract">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSubtract} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col h-[198.898px] items-center justify-between min-w-px overflow-clip pt-[8px] relative rounded-[32px]" data-node-id="122634:86229" data-name="item box">
            <div className="flex h-[156.898px] items-center justify-center relative shrink-0 w-[148.218px]" data-node-id="122634:86230">
              <div className="flex-none rotate-2">
                <div className="h-[152px] relative w-[143px]" data-name="item S">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[152px] left-1/2 top-1/2 w-[143px]" data-node-id="122634:86231" data-name="2 stickers">
                    <div className="absolute left-[16px] size-[88px] top-[64px]" data-node-id="122634:86232" data-name="box">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-1/2 size-[92.485px] top-1/2" data-node-id="122634:86233">
                        <div className="flex-none rotate-3">
                          <div className="relative size-[88px]" data-name="_sticker">
                            <div className="absolute inset-[-2.35%]" data-node-id="I122634:86233;84854:19032" data-name="ghost">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGhost} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-[39px] size-[88px] top-[30px]" data-node-id="122634:86234" data-name="box">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-1/2 size-[91.018px] top-1/2" data-node-id="122634:86235">
                        <div className="-rotate-2 flex-none">
                          <div className="relative size-[88px]" data-name="_sticker">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTypeBat} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[152px] left-1/2 top-1/2 w-[143px]" data-node-id="122634:86236" data-name="_package">
                    <div className="absolute inset-[7.89%_8.39%_0_11.19%]" data-node-id="I122634:86236;87925:57126" data-name="Subtract">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSubtract} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-[358px]" data-node-id="122634:86242" data-name="S-size">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px overflow-clip pt-[8px] relative rounded-[32px]" data-node-id="122634:86243" data-name="item box">
            <div className="flex h-[156.898px] items-center justify-center relative shrink-0 w-[148.218px]" data-node-id="122634:86244">
              <div className="flex-none rotate-2">
                <div className="h-[152px] relative w-[143px]" data-name="item S">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[152px] left-1/2 top-1/2 w-[143px]" data-node-id="122634:86245" data-name="3 stickers">
                    <div className="absolute left-[47px] size-[72px] top-[76px]" data-node-id="122634:86246" data-name="box">
                      <div className="-translate-y-1/2 absolute flex items-center justify-center right-[-3px] size-[78.001px] top-1/2" data-node-id="122634:86247">
                        <div className="-rotate-5 flex-none">
                          <div className="relative size-[72px]" data-name="_sticker">
                            <div className="absolute inset-[-2.35%]" data-node-id="I122634:86247;84854:19034" data-name="pumpkin">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPumpkin} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-[20px] size-[72px] top-[48px]" data-node-id="122634:86248" data-name="box">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-1/2 size-[75.67px] top-1/2" data-node-id="122634:86249">
                        <div className="flex-none rotate-3">
                          <div className="relative size-[72px]" data-name="_sticker">
                            <div className="absolute inset-[-2.35%]" data-node-id="I122634:86249;84854:19032" data-name="ghost">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGhost} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-[51px] size-[72px] top-[28px]" data-node-id="122634:86250" data-name="box">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-1/2 size-[74.469px] top-1/2" data-node-id="122634:86251">
                        <div className="-rotate-2 flex-none">
                          <div className="relative size-[72px]" data-name="_sticker">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTypeBat} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[152px] left-1/2 top-1/2 w-[143px]" data-node-id="122634:86252" data-name="_package">
                    <div className="absolute inset-[7.89%_8.39%_0_11.19%]" data-node-id="I122634:86252;87925:57126" data-name="Subtract">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSubtract} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px overflow-clip pt-[8px] relative rounded-[32px]" data-node-id="122634:86258" data-name="item box">
            <div className="flex h-[163.885px] items-center justify-center relative shrink-0 w-[155.704px]" data-node-id="122634:86259">
              <div className="-rotate-5 flex-none">
                <div className="h-[152px] relative w-[143px]" data-name="item S">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[152px] left-1/2 top-1/2 w-[143px]" data-node-id="122634:86260" data-name="4 stickers">
                    <div className="absolute left-[16px] size-[64px] top-[76px]" data-node-id="122634:86261" data-name="box">
                      <div className="-translate-y-1/2 absolute flex items-center justify-center right-[-1.63px] size-[67.262px] top-1/2" data-node-id="122634:86262">
                        <div className="flex-none rotate-3">
                          <div className="relative size-[64px]" data-name="_sticker">
                            <div className="absolute inset-[-2.35%]" data-node-id="I122634:86262;84854:19034" data-name="pumpkin">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPumpkin} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-[59px] size-[64px] top-[84px]" data-node-id="122634:86263" data-name="box">
                      <div className="-translate-y-1/2 absolute flex items-center justify-center right-[-2.67px] size-[69.334px] top-1/2" data-node-id="122634:86264">
                        <div className="-rotate-5 flex-none">
                          <div className="relative size-[64px]" data-name="_sticker">
                            <div className="absolute inset-[-5.74%]" data-node-id="I122634:86264;84854:19038" data-name="zombie">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgZombie} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-[28px] size-[64px] top-[40px]" data-node-id="122634:86265" data-name="box">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[64px] top-1/2" data-node-id="122634:86266" data-name="_sticker">
                        <div className="absolute inset-[-2.35%]" data-node-id="I122634:86266;84854:19032" data-name="ghost">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGhost} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-[59px] size-[64px] top-[44px]" data-node-id="122634:86267" data-name="box">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-1/2 size-[66.195px] top-1/2" data-node-id="122634:86268">
                        <div className="-rotate-2 flex-none">
                          <div className="relative size-[64px]" data-name="_sticker">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTypeBat} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[152px] left-1/2 top-1/2 w-[143px]" data-node-id="122634:86269" data-name="_package">
                    <div className="absolute inset-[7.89%_8.39%_0_11.19%]" data-node-id="I122634:86269;87925:57126" data-name="Subtract">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSubtract} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-[390px]" data-node-id="122634:86275">
          <div className="h-[164px] relative shrink-0 w-[496px]" data-node-id="122634:86276" data-name="Frame 2087330528 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame20873305282} />
          </div>
          <div className="h-[100px] relative shrink-0 w-[390px]" data-node-id="122634:86277">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[82.588px] items-center justify-center left-[calc(50%+0.19px)] top-[calc(50%+1.5px)] w-[278.38px]" data-node-id="122634:86278">
              <div className="-rotate-2 flex-none">
                <div className="[word-break:break-word] content-stretch flex flex-col font-['Montserrat:SemiBold'] font-semibold gap-[8px] items-center leading-[normal] relative text-center w-[276px]">
                  <p className="lowercase relative shrink-0 text-[24px] text-white w-full" data-node-id="122634:86279">
                    архив
                  </p>
                  <p className="relative shrink-0 text-[#808080] text-[15px] w-full" data-node-id="122634:86280">{`лимитированные стикеры, которые остались в истории `}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-[358px]" data-node-id="122634:86281" data-name="S-size">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-w-px overflow-clip pt-[8px] px-[107px] relative rounded-[32px]" data-node-id="122634:86282" data-name="item box">
            <div className="flex h-[156.898px] items-center justify-center relative shrink-0 w-[148.218px]" data-node-id="122634:86283">
              <div className="flex-none rotate-2">
                <div className="h-[152px] relative w-[143px]" data-name="item S">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[152px] left-1/2 top-1/2 w-[143px]" data-node-id="122634:86284" data-name="3 stickers">
                    <div className="absolute left-[47px] size-[72px] top-[76px]" data-node-id="122634:86285" data-name="box">
                      <div className="-translate-y-1/2 absolute flex items-center justify-center right-[-3px] size-[78.001px] top-1/2" data-node-id="122634:86286">
                        <div className="-rotate-5 flex-none">
                          <div className="relative size-[72px]" data-name="_sticker">
                            <div className="absolute inset-[-2.35%]" data-node-id="I122634:86286;84854:19034" data-name="pumpkin">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPumpkin} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-[20px] size-[72px] top-[48px]" data-node-id="122634:86287" data-name="box">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-1/2 size-[75.67px] top-1/2" data-node-id="122634:86288">
                        <div className="flex-none rotate-3">
                          <div className="relative size-[72px]" data-name="_sticker">
                            <div className="absolute inset-[-2.35%]" data-node-id="I122634:86288;84854:19032" data-name="ghost">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGhost} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-[51px] size-[72px] top-[28px]" data-node-id="122634:86289" data-name="box">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-1/2 size-[74.469px] top-1/2" data-node-id="122634:86290">
                        <div className="-rotate-2 flex-none">
                          <div className="relative size-[72px]" data-name="_sticker">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTypeBat} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[152px] left-1/2 top-1/2 w-[143px]" data-node-id="122634:86291" data-name="_package">
                    <div className="absolute inset-[7.89%_8.39%_0_11.19%]" data-node-id="I122634:86291;87925:57126" data-name="Subtract">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSubtract} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-w-px overflow-clip pt-[8px] px-[107px] relative rounded-[32px]" data-node-id="122634:86292" data-name="item box">
            <div className="flex h-[163.885px] items-center justify-center relative shrink-0 w-[155.704px]" data-node-id="122634:86293">
              <div className="-rotate-5 flex-none">
                <div className="h-[152px] relative w-[143px]" data-name="item S">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[152px] left-1/2 top-1/2 w-[143px]" data-node-id="122634:86294" data-name="4 stickers">
                    <div className="absolute left-[16px] size-[64px] top-[76px]" data-node-id="122634:86295" data-name="box">
                      <div className="-translate-y-1/2 absolute flex items-center justify-center right-[-1.63px] size-[67.262px] top-1/2" data-node-id="122634:86296">
                        <div className="flex-none rotate-3">
                          <div className="relative size-[64px]" data-name="_sticker">
                            <div className="absolute inset-[-2.35%]" data-node-id="I122634:86296;84854:19034" data-name="pumpkin">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPumpkin} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-[59px] size-[64px] top-[84px]" data-node-id="122634:86297" data-name="box">
                      <div className="-translate-y-1/2 absolute flex items-center justify-center right-[-2.67px] size-[69.334px] top-1/2" data-node-id="122634:86298">
                        <div className="-rotate-5 flex-none">
                          <div className="relative size-[64px]" data-name="_sticker">
                            <div className="absolute inset-[-5.74%]" data-node-id="I122634:86298;84854:19038" data-name="zombie">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgZombie} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-[28px] size-[64px] top-[40px]" data-node-id="122634:86299" data-name="box">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[64px] top-1/2" data-node-id="122634:86300" data-name="_sticker">
                        <div className="absolute inset-[-2.35%]" data-node-id="I122634:86300;84854:19032" data-name="ghost">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGhost} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-[59px] size-[64px] top-[44px]" data-node-id="122634:86301" data-name="box">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-1/2 size-[66.195px] top-1/2" data-node-id="122634:86302">
                        <div className="-rotate-2 flex-none">
                          <div className="relative size-[64px]" data-name="_sticker">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTypeBat} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[152px] left-1/2 top-1/2 w-[143px]" data-node-id="122634:86303" data-name="_package">
                    <div className="absolute inset-[7.89%_8.39%_0_11.19%]" data-node-id="I122634:86303;87925:57126" data-name="Subtract">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSubtract} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-[844px] left-0 pointer-events-none top-0" data-node-id="122634:86304">
        <div className="h-[156px] overflow-clip pointer-events-auto sticky top-0 w-[390px]" data-name="gradik">
          <div className="absolute bottom-0 h-[156px] left-1/2 pointer-events-none top-0" data-node-id="122634:86305">
            <div className="-translate-x-1/2 h-[156px] pointer-events-auto sticky top-0 w-[390px]" data-name="background">
              <div className="absolute left-[77px] size-[634px] top-[-576px]" data-node-id="122634:86306" data-name="Animation / Glow PA">
                <div className="absolute inset-[-3.52%_-4.37%_-9.79%_-10.98%]">
                  <img alt="" className="block max-w-none size-full" src={imgAnimationGlowPa} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[var(--tab-group\/item-gap-\(with-counter\),20px)] h-[54px] items-center left-0 overflow-x-auto overflow-y-clip px-[16px] py-[8px] top-[125px] w-[390px]" data-node-id="122634:86657" data-name="tab group">
        <div className="content-stretch flex h-[38px] items-center py-[8px] relative rounded-[4px] shrink-0" data-node-id="I122634:86657;111326:116136" data-name="1">
          <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold'] font-semibold justify-center leading-[0] lowercase relative shrink-0 text-[20px] text-white whitespace-nowrap" data-node-id="I122634:86657;111326:116136;85999:176935">
            <p className="leading-[1.119]">стикеры</p>
          </div>
        </div>
        <div className="content-stretch flex h-[38px] items-center py-[8px] relative rounded-[4px] shrink-0" data-node-id="I122634:86657;111326:116137" data-name="2">
          <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold'] font-semibold justify-center leading-[0] lowercase relative shrink-0 text-[20px] text-[rgba(255,255,255,0.5)] whitespace-nowrap" data-node-id="I122634:86657;111326:116137;85999:176931">
            <p className="leading-[1.119]">хвосты</p>
          </div>
        </div>
        <div className="content-stretch flex gap-[4px] h-[38px] items-center py-[8px] relative rounded-[4px] shrink-0" data-node-id="I122634:86657;111326:116138" data-name="3">
          <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold'] font-semibold justify-center leading-[0] lowercase relative shrink-0 text-[20px] text-[rgba(255,255,255,0.5)] whitespace-nowrap" data-node-id="I122634:86657;111326:116138;84305:256283">
            <p className="leading-[1.119]">карты</p>
          </div>
          <div className="relative shrink-0 size-[38px]" data-node-id="I122634:86657;111326:116138;84305:256290" data-name="Counter">
            <div className="absolute left-0 size-[38px] top-0" data-node-id="I122634:86657;111326:116138;84305:256290;1744:166943">
              <div className="absolute inset-[4.42%_6.39%]">
                <img alt="" className="block max-w-none size-full" src={imgStar1} />
              </div>
            </div>
            <div className="-translate-x-1/2 absolute flex h-[21.85px] items-center justify-center left-[19.5px] top-[7.08px] w-[14.918px]" data-node-id="I122634:86657;111326:116138;84305:256290;1744:166944">
              <div className="flex-none rotate-12">
                <p className="[word-break:break-word] font-['SF_Pro_Text:Bold'] leading-[normal] not-italic relative text-[17px] text-black text-center whitespace-nowrap">1</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex h-[38px] items-center py-[8px] relative rounded-[4px] shrink-0" data-node-id="I122634:86657;111326:116139" data-name="4">
          <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold'] font-semibold justify-center leading-[0] lowercase relative shrink-0 text-[20px] text-[rgba(255,255,255,0.5)] whitespace-nowrap" data-node-id="I122634:86657;111326:116139;85999:176931">
            <p className="leading-[1.119]">подарки</p>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex h-[78px] items-center justify-between left-0 px-[16px] py-[20px] right-0 top-[47px]" data-node-id="122634:86308" data-name="Header">
        <div className="content-stretch flex gap-[4px] items-end relative shrink-0" data-node-id="I122634:86308;107323:110996" data-name="Text">
          <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[1.05] lowercase relative shrink-0 text-[36px] text-white tracking-[-0.72px] whitespace-nowrap" data-node-id="I122634:86308;107323:110997">
            маркет
          </p>
        </div>
        <div className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[16px] items-center justify-end pl-[6px] pr-[4px] py-[4px] relative rounded-[16px] shrink-0" data-node-id="I122634:86308;118790:105624" data-name="Coin balance">
          <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-node-id="I122634:86308;118790:105624;84073:127839" data-name="value">
            <Icon className="relative shrink-0 size-[28px]" />
            <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[1.119] lowercase relative shrink-0 text-[20px] text-right text-white whitespace-nowrap" data-node-id="I122634:86308;118790:105624;84073:127841">
              55 000
            </p>
          </div>
          <div className="bg-white content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[12px] shrink-0" data-node-id="I122634:86308;118790:105624;84073:127842" data-name="Button">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="I122634:86308;118790:105624;84073:127842;3520:72446" data-name="glyph/plus/16">
              <div className="absolute left-0 size-[16px] top-0" data-node-id="I122634:86308;118790:105624;84073:127842;3520:72446;3250:57783" data-name="glyph_plus_16">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphPlus16} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[-1px] flex h-[209px] items-center justify-center left-0 right-0" data-node-id="122634:86309" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="bg-gradient-to-b from-[30.412%] from-[rgba(0,0,0,0.8)] overflow-clip relative size-full to-[64.304%] to-[rgba(0,0,0,0)]" data-name="gradik">
            <div className="absolute bottom-0 h-[209px] left-1/2 pointer-events-none top-0" data-node-id="122634:86310">
              <div className="-translate-x-1/2 h-[194px] pointer-events-auto sticky top-0 w-[390px]">
                <div className="absolute left-[-91px] size-[778px] top-[-700px]" data-node-id="122634:86311" data-name="Animation / Glow PA">
                  <div className="absolute inset-[-2.39%_-3.24%_-8.66%_-9.84%]">
                    <img alt="" className="block max-w-none size-full" src={imgAnimationGlowPa1} />
                  </div>
                </div>
                <div className="absolute flex items-center justify-center left-[-138px] size-[445px] top-[-381px]" data-node-id="122634:86312">
                  <div className="flex-none rotate-180">
                    <div className="relative size-[445px]" data-name="Animation / Glow PA">
                      <div className="absolute inset-[-25.9%_-26.75%_-32.17%_-33.36%]">
                        <img alt="" className="block max-w-none size-full" src={imgAnimationGlowPa2} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex h-[220px] items-center justify-center left-0 top-0 w-[390px]" data-node-id="122634:86313">
              <div className="-scale-y-100 flex-none">
                <div className="h-[220px] overflow-clip relative w-[390px]" data-name="Background" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[47px] left-0 overflow-clip right-0 top-0" data-node-id="122634:86316" data-name="StatusBar">
        <div className="absolute contents left-[27px] top-[14px]" data-node-id="I122634:86316;2604:14897" data-name="Left Side">
          <div className="absolute h-[21px] left-[27px] rounded-[24px] top-[14px] w-[54px]" data-node-id="I122634:86316;2604:14898" data-name="_StatusBar-time">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro_Text:Semibold'] h-[20px] leading-[22px] left-[27px] not-italic text-[17px] text-center text-white top-px tracking-[-0.408px] w-[54px]" data-node-id="I122634:86316;2604:14898;839:7100" style={{ fontFeatureSettings: '"case" 1' }}>
              4:20
            </p>
          </div>
        </div>
        <div className="absolute h-[13px] right-[26.6px] top-[19px] w-[77.401px]" data-node-id="I122634:86316;2604:14899" data-name="Right Side">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRightSide} />
        </div>
        <LogoNotch className="-translate-x-1/2 absolute content-stretch flex items-center left-[calc(50%-0.14px)] px-[8px] py-[5px] rounded-[100px] top-[11px] w-[81.718px]" />
      </div>
      <div className="absolute bottom-[34px] content-stretch flex items-start justify-center left-0 px-[36px] right-0" data-node-id="122634:86317" data-name="tabbar">
        <div className="backdrop-blur-[5px] bg-[rgba(0,0,0,0.86)] border border-[rgba(255,255,255,0.15)] border-solid content-stretch flex gap-[10px] items-center pl-[12px] pr-[10px] py-[2px] relative rounded-[40px] shrink-0" data-node-id="122634:86318" data-name="tab bar">
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[10px] pt-[8px] relative shrink-0 w-[48px]" data-node-id="I122634:86318;107036:15665" data-name="Tab 1">
            <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[100px]" data-node-id="I122634:86318;107036:15666" data-name="Selection" />
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I122634:86318;107036:15667" data-name="glyph">
              <div className="-translate-y-1/2 absolute h-[24px] left-0 overflow-clip right-0 top-1/2" data-node-id="I122634:86318;107036:15667;110:35735" data-name="glyph_location_24">
                <div className="absolute h-[21px] left-[4.5px] top-[1.5px] w-[15.001px]" data-node-id="I122634:86318;107036:15667;110:35736" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold'] leading-[normal] lowercase min-w-full not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center tracking-[-0.24px] w-[min-content]" data-node-id="I122634:86318;107036:15668">
              карта
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[10px] pt-[8px] relative shrink-0 w-[48px]" data-node-id="I122634:86318;107036:15669" data-name="Tab 2">
            <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[100px]" data-node-id="I122634:86318;107036:15670" data-name="Selection" />
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I122634:86318;107036:15671" data-name="glyph/nav friends/24">
              <div className="absolute left-0 size-[24px] top-0" data-node-id="I122634:86318;107036:15671;15719:323796" data-name="glyph_nav_friends_24">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphNavFriends24} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold'] leading-[normal] lowercase min-w-full not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center tracking-[-0.24px] w-[min-content]" data-node-id="I122634:86318;107036:15672">
              друзья
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[10px] pt-[8px] relative shrink-0 w-[48px]" data-node-id="I122634:86318;107036:15673" data-name="Tab 3">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I122634:86318;107036:15674" data-name="glyph/message/24">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphMessage24} />
            </div>
            <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[100px]" data-node-id="I122634:86318;107036:15675" data-name="Selection" />
            <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold'] leading-[normal] lowercase min-w-full not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center tracking-[-0.24px] w-[min-content]" data-node-id="I122634:86318;107036:15676">
              чаты
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[10px] pt-[8px] relative shrink-0 w-[48px]" data-node-id="I122634:86318;107036:15677" data-name="Tab 4">
            <div className="relative shrink-0 size-[24px]" data-node-id="I122634:86318;107036:15679" data-name="glyph/market/24">
              <div className="absolute left-0 size-[24px] top-0" data-node-id="I122634:86318;107036:15679;115927:23904" data-name="glyph_market_24">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphMarket24} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold'] leading-[normal] lowercase min-w-full not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] w-[min-content]" data-node-id="I122634:86318;107036:15680">
              маркет
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[10px] pt-[8px] relative shrink-0 w-[48px]" data-node-id="I122634:86318;107036:15681" data-name="Tab 5">
            <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[100px]" data-node-id="I122634:86318;107036:15682" data-name="Selection" />
            <div className="relative shrink-0 size-[24px]" data-node-id="I122634:86318;107036:15683">
              <div className="absolute left-0 size-[24px] top-0" data-node-id="I122634:86318;107036:15684">
                <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgEllipse395} width="24" />
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold'] leading-[normal] lowercase min-w-full not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center tracking-[-0.24px] w-[min-content]" data-node-id="I122634:86318;107036:15685">
              ты
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-[34px] left-0 right-0" data-node-id="122634:86319" data-name="HomeIndicator">
        <div className="-translate-x-1/2 absolute bg-white bottom-[8px] h-[5px] left-1/2 rounded-[100px] w-[134px]" data-node-id="I122634:86319;1525:11081" data-name="Home Indicator" />
      </div>
    </div>
  );
}

export {Package};
