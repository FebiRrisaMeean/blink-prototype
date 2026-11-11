const assetPathPrefix = "https://www.figma.com/api/mcp/asset/ceb30748-7e2e-4761-93e1-2df52fe9b0fb";
const imgLogo = `${assetPathPrefix}/f548a.svg`;
const imgIconBlinkcoin28 = `${assetPathPrefix}/d8eee.svg`;
const imgIconBlinkcoin20 = `${assetPathPrefix}/f8243.svg`;
const imgMapSurface = `${assetPathPrefix}/dedab.png`;
const imgMapImage = `${assetPathPrefix}/a858b.png`;
const imgNewBadgeNew = `${assetPathPrefix}/7b4a5.png`;
const imgEllipse395 = `${assetPathPrefix}/dc87c.png`;
const imgAnimationGlowPa = `${assetPathPrefix}/9e94f.svg`;
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
  type?: "paid";
};

function PriceTag({ className, type = "paid" }: PriceTagProps) {
  return (
    <div className={className || "bg-[#121213] border border-[#2b2b2b] border-solid content-stretch flex gap-[8px] items-center justify-center pl-[4px] pr-[8px] py-[4px] relative rounded-[24px]"} data-node-id="82542:113434">
      <Icon className="relative shrink-0 size-[20px]" size="20" />
      <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[15px] text-right text-white whitespace-nowrap" data-node-id="82534:31726">
        300
      </p>
    </div>
  );
}

type MapStyleProps = {
  className?: string;
  property1?: "Product card";
  property2?: "Small";
  property3?: "Default" | "left";
  showNewBadge?: boolean;
  showPrice?: boolean;
  title?: string;
};

function MapStyle({ className, property1 = "Product card", property2 = "Small", property3 = "Default", showNewBadge = true, showPrice = true, title = "потрачено" }: MapStyleProps) {
  const isProductCardAndSmallAndLeft = property1 === "Product card" && property2 === "Small" && property3 === "left";
  return (
    <div className={className || "content-stretch flex flex-col h-[192px] items-center justify-center relative w-[179px]"} id={isProductCardAndSmallAndLeft ? "node-122941_63470" : "node-122947_56480"}>
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[179px]" id={isProductCardAndSmallAndLeft ? "node-122941_63471" : "node-122941_63381"} data-name="Artwork area">
        <div className="h-[125.538px] relative shrink-0 w-full" id={isProductCardAndSmallAndLeft ? "node-122941_63472" : "node-122941_63382"} data-name="Artwork container">
          <div className={`-translate-x-1/2 absolute flex items-center justify-center left-[calc(50%+0.45px)] ${isProductCardAndSmallAndLeft ? "h-[118.464px] top-[3.54px] w-[149.887px]" : "h-[116.033px] top-[4.75px] w-[148.06px]"}`} id={isProductCardAndSmallAndLeft ? "node-122941_63473" : "node-122941_63383"}>
            <div className={`flex-none ${isProductCardAndSmallAndLeft ? "-rotate-3" : "rotate-2"}`}>
              <div className="h-[111.066px] relative w-[144.272px]" data-name="Map preview">
                <div className="absolute border-[#2b2b2b] border-[4.793px] border-solid h-[110.246px] left-[0.05px] rounded-[14.38px] top-[0.4px] w-[143.799px]" id={isProductCardAndSmallAndLeft ? "node-122941_63474" : "node-122941_63384"} data-name="Map surface">
                  <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[14.38px]">
                    <div className="absolute inset-0 overflow-hidden rounded-[14.38px]">
                      <img alt="" className="absolute h-[115.92%] left-[-2.23%] max-w-none top-[-1.68%] w-[104.47%]" src={imgMapSurface} />
                    </div>
                    <div className="absolute bg-[rgba(0,0,0,0.26)] inset-0 rounded-[14.38px]" />
                  </div>
                </div>
                <div className="absolute border-[4.944px] border-black border-solid inset-[0_0.33%_0.74%_0] rounded-[14.38px]" id={isProductCardAndSmallAndLeft ? "node-122941_63475" : "node-122941_63385"} data-name="Map border" />
                <div className="absolute border-[#2b2b2b] border-[4.944px] border-dashed inset-0 overflow-clip rounded-[14.38px]" id={isProductCardAndSmallAndLeft ? "node-122941_63476" : "node-122941_63386"} data-name="Map image container">
                  <div className="absolute h-[213.587px] left-[-31.64px] top-[-28.6px] w-[208.642px]" id={isProductCardAndSmallAndLeft ? "node-122941_63477" : "node-122941_63387"} data-name="Map image">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMapImage} />
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col inset-[0_0.27px_1.07px_0] items-center justify-end overflow-clip px-[12px] py-[16px]" id={isProductCardAndSmallAndLeft ? "node-122941_63478" : "node-122947_56477"} data-name="Title overlay">
                  <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" id={isProductCardAndSmallAndLeft ? "node-122941_63479" : "node-122947_56478"} data-name="Title container">
                    <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold'] font-semibold justify-center leading-[0] lowercase relative shrink-0 text-[15px] text-center text-white w-full" data-node-id="122947:56479">
                      <p className="leading-[18px]">{title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {showNewBadge && (
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[33.999px] items-center justify-center left-[calc(50%-38.86px)] top-[calc(50%-38.09px)] w-[60.197px]" data-node-id="122941:63388">
              <div className="flex-none rotate-2">
                <div className="h-[31.955px] relative w-[59.117px]" data-name="New badge">
                  <div className="absolute flex inset-[-7.75%_-2.2%] items-center justify-center" data-node-id="I122941:63388;84466:16269" style={{ containerType: "size" }}>
                    <div className="flex-none h-[hypot(4.58316cqw,86.2549cqh)] rotate-[-4.92deg] skew-x-[0.15deg] w-[hypot(95.4168cqw,-13.7451cqh)]">
                      <div className="relative size-full" data-name="new_badge _ new">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img alt="" className="absolute h-[118.83%] left-[-25.49%] max-w-none top-[-9.42%] w-[138.24%]" src={imgNewBadgeNew} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {showPrice && <PriceTag className="bg-[#121213] border border-[#2b2b2b] border-solid content-stretch flex gap-[8px] items-center justify-center pl-[4px] pr-[8px] py-[4px] relative rounded-[24px] shrink-0" />}
    </div>
  );
}

type ItemBadgeProps = {
  className?: string;
  type?: "new";
};

function ItemBadge({ className, type = "new" }: ItemBadgeProps) {
  return (
    <div className={className || "h-[40px] relative w-[74px]"} data-node-id="84466:16271">
      <div className="absolute flex inset-[-7.75%_-2.2%] items-center justify-center" data-node-id="84466:16269" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(4.58316cqw,86.2549cqh)] rotate-[-4.92deg] skew-x-[0.15deg] w-[hypot(95.4168cqw,-13.7451cqh)]">
          <div className="relative size-full" data-name="new_badge _ new">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[118.83%] left-[-25.49%] max-w-none top-[-9.42%] w-[138.24%]" src={imgNewBadgeNew} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type MapStyleProductCardLargeProps = {
  className?: string;
  showNewBadge?: boolean;
};

function MapStyleProductCardLarge({ className, showNewBadge = true }: MapStyleProductCardLargeProps) {
  return (
    <div className={className || "content-stretch flex items-center justify-center relative w-[358px]"} data-node-id="122886:55334" data-name="Map style / Product card / Large">
      <div className="flex-[1_0_0] h-[228px] min-w-px overflow-clip relative rounded-[32px]" data-node-id="122710:229106" data-name="Card container">
        <div className="absolute content-stretch flex flex-col h-[186px] items-center left-[82px] top-[42px] w-[194px]" data-node-id="122710:229151" data-name="Card content">
          <div className="h-[157.142px] relative shrink-0 w-full" data-node-id="122710:229150" data-name="Artwork">
            <div className="-translate-x-1/2 absolute flex h-[154.237px] items-center justify-center left-[calc(50%+0.07px)] top-[1.45px] w-[192.022px]" data-node-id="122710:229144">
              <div className="-rotate-5 flex-none">
                <div className="h-[139.026px] relative w-[180.592px]" data-name="Map preview">
                  <div className="absolute border-6 border-[#2b2b2b] border-solid h-[138px] left-[0.05px] rounded-[18px] top-[0.5px] w-[180px]" data-node-id="122710:229145" data-name="Map surface">
                    <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[18px]">
                      <div className="absolute inset-0 overflow-hidden rounded-[18px]">
                        <img alt="" className="absolute h-[115.92%] left-[-2.23%] max-w-none top-[-1.68%] w-[104.47%]" src={imgMapSurface} />
                      </div>
                      <div className="absolute bg-[rgba(0,0,0,0.1)] inset-0 rounded-[18px]" />
                    </div>
                  </div>
                  <div className="absolute border-[6.189px] border-black border-solid inset-[0_0.33%_0.74%_0] rounded-[18px]" data-node-id="122710:229146" data-name="Map border" />
                  <div className="-translate-x-1/2 absolute content-stretch flex flex-col h-[139px] items-center justify-end left-[calc(50%-0.06px)] px-[12px] py-[16px] top-[-0.06px] w-[180px]" data-node-id="122881:60934" data-name="Map preview">
                    <div className="absolute border-[6.189px] border-black border-solid h-[139px] left-0 rounded-[18px] top-0 w-[180px]" data-node-id="122881:60936" data-name="Map border" />
                    <div className="absolute border-[#2b2b2b] border-[6.189px] border-dashed h-[139px] left-0 overflow-clip rounded-[18px] top-0 w-[180px]" data-node-id="122881:60937" data-name="Map image container">
                      <div className="absolute h-[267.357px] left-[-39.61px] top-[-35.8px] w-[261.168px]" data-node-id="122881:60938" data-name="Map image">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMapImage} />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-node-id="122881:60939" data-name="Title container">
                      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold'] font-semibold justify-center leading-[0] lowercase relative shrink-0 text-[15px] text-center text-white w-full" data-node-id="122881:60940">
                        <p className="leading-[18px]">потрачено</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {showNewBadge && <ItemBadge className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[46.297px] items-center justify-center left-[calc(50%-50.4px)] top-[calc(50%-41.42px)] w-[77.205px]" />}
          </div>
          <PriceTag className="bg-[#121213] border border-[#2b2b2b] border-solid content-stretch flex gap-[8px] items-center justify-center pl-[4px] pr-[8px] py-[4px] relative rounded-[24px] shrink-0" />
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-black overflow-clip relative rounded-[40px] size-full" data-node-id="122710:229344" data-name="сетка карт">
      <div className="absolute content-stretch flex flex-col gap-[36px] items-center left-0 px-[16px] top-[179px] w-[390px]" data-node-id="122710:229519" data-name="col (maps)">
        <MapStyleProductCardLarge className="content-stretch flex items-center justify-center relative shrink-0 w-[358px]" />
        <div className="content-stretch flex h-[192px] items-center justify-between overflow-clip relative shrink-0 w-[358px]" data-node-id="122712:55139" data-name="Map cards / Small / 2 columns">
          <MapStyle className="content-stretch flex flex-col h-[192px] items-center justify-center relative shrink-0 w-[179px]" property3="left" />
          <MapStyle className="content-stretch flex flex-col h-[192px] items-center justify-center relative shrink-0 w-[179px]" />
        </div>
      </div>
      <div className="absolute bottom-0 h-[844px] left-0 pointer-events-none top-0" data-node-id="122710:229356">
        <div className="h-[156px] overflow-clip pointer-events-auto sticky top-0 w-[390px]" data-name="gradik">
          <div className="absolute bottom-0 h-[156px] left-1/2 pointer-events-none top-0" data-node-id="122710:229357">
            <div className="-translate-x-1/2 h-[156px] pointer-events-auto sticky top-0 w-[390px]" data-name="background">
              <div className="absolute left-[77px] size-[634px] top-[-576px]" data-node-id="122710:229358" data-name="Animation / Glow PA">
                <div className="absolute inset-[-3.52%_-4.37%_-9.79%_-10.98%]">
                  <img alt="" className="block max-w-none size-full" src={imgAnimationGlowPa} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[var(--tab-group\/item-gap-\(with-counter\),20px)] h-[54px] items-center left-0 overflow-x-auto overflow-y-clip px-[16px] py-[8px] top-[125px] w-[390px]" data-node-id="122710:229359" data-name="tab group">
        <div className="content-stretch flex h-[38px] items-center py-[8px] relative rounded-[4px] shrink-0" data-node-id="I122710:229359;111326:116136" data-name="1">
          <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold'] font-semibold justify-center leading-[0] lowercase relative shrink-0 text-[20px] text-[rgba(255,255,255,0.5)] whitespace-nowrap" data-node-id="I122710:229359;111326:116136;85999:176931">
            <p className="leading-[1.119]">стикеры</p>
          </div>
        </div>
        <div className="content-stretch flex h-[38px] items-center py-[8px] relative rounded-[4px] shrink-0" data-node-id="I122710:229359;111326:116137" data-name="2">
          <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold'] font-semibold justify-center leading-[0] lowercase relative shrink-0 text-[20px] text-[rgba(255,255,255,0.5)] whitespace-nowrap" data-node-id="I122710:229359;111326:116137;85999:176931">
            <p className="leading-[1.119]">хвосты</p>
          </div>
        </div>
        <div className="content-stretch flex h-[38px] items-center py-[8px] relative rounded-[4px] shrink-0" data-node-id="I122710:229359;111326:116138" data-name="3">
          <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold'] font-semibold justify-center leading-[0] lowercase relative shrink-0 text-[20px] text-white whitespace-nowrap" data-node-id="I122710:229359;111326:116138;85999:176935">
            <p className="leading-[1.119]">карты</p>
          </div>
        </div>
        <div className="content-stretch flex h-[38px] items-center py-[8px] relative rounded-[4px] shrink-0" data-node-id="I122710:229359;111326:116139" data-name="4">
          <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold'] font-semibold justify-center leading-[0] lowercase relative shrink-0 text-[20px] text-[rgba(255,255,255,0.5)] whitespace-nowrap" data-node-id="I122710:229359;111326:116139;85999:176931">
            <p className="leading-[1.119]">подарки</p>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex h-[78px] items-center justify-between left-0 px-[16px] py-[20px] right-0 top-[47px]" data-node-id="122710:229360" data-name="Header">
        <div className="content-stretch flex gap-[4px] items-end relative shrink-0" data-node-id="I122710:229360;107323:110996" data-name="Text">
          <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[1.05] lowercase relative shrink-0 text-[36px] text-white tracking-[-0.72px] whitespace-nowrap" data-node-id="I122710:229360;107323:110997">
            маркет
          </p>
        </div>
        <div className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[16px] items-center justify-end pl-[6px] pr-[4px] py-[4px] relative rounded-[16px] shrink-0" data-node-id="I122710:229360;118790:105624" data-name="Coin balance">
          <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-node-id="I122710:229360;118790:105624;84073:127839" data-name="value">
            <Icon className="relative shrink-0 size-[28px]" />
            <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[1.119] lowercase relative shrink-0 text-[20px] text-right text-white whitespace-nowrap" data-node-id="I122710:229360;118790:105624;84073:127841">
              55 000
            </p>
          </div>
          <div className="bg-white content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[12px] shrink-0" data-node-id="I122710:229360;118790:105624;84073:127842" data-name="Button">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="I122710:229360;118790:105624;84073:127842;3520:72446" data-name="glyph/plus/16">
              <div className="absolute left-0 size-[16px] top-0" data-node-id="I122710:229360;118790:105624;84073:127842;3520:72446;3250:57783" data-name="glyph_plus_16">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphPlus16} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[-1px] flex h-[209px] items-center justify-center left-0 right-0" data-node-id="122710:229361" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="bg-gradient-to-b from-[30.412%] from-[rgba(0,0,0,0.8)] overflow-clip relative size-full to-[64.304%] to-[rgba(0,0,0,0)]" data-name="gradik">
            <div className="absolute bottom-0 h-[209px] left-1/2 pointer-events-none top-0" data-node-id="122710:229362">
              <div className="-translate-x-1/2 h-[194px] pointer-events-auto sticky top-0 w-[390px]">
                <div className="absolute left-[-91px] size-[778px] top-[-700px]" data-node-id="122710:229363" data-name="Animation / Glow PA">
                  <div className="absolute inset-[-2.39%_-3.24%_-8.66%_-9.84%]">
                    <img alt="" className="block max-w-none size-full" src={imgAnimationGlowPa1} />
                  </div>
                </div>
                <div className="absolute flex items-center justify-center left-[-138px] size-[445px] top-[-381px]" data-node-id="122710:229364">
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
            <div className="absolute flex h-[220px] items-center justify-center left-0 top-0 w-[390px]" data-node-id="122710:229365">
              <div className="-scale-y-100 flex-none">
                <div className="h-[220px] overflow-clip relative w-[390px]" data-name="Background" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[47px] left-0 overflow-clip right-0 top-0" data-node-id="122710:229368" data-name="StatusBar">
        <div className="absolute contents left-[27px] top-[14px]" data-node-id="I122710:229368;2604:14897" data-name="Left Side">
          <div className="absolute h-[21px] left-[27px] rounded-[24px] top-[14px] w-[54px]" data-node-id="I122710:229368;2604:14898" data-name="_StatusBar-time">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro_Text:Semibold'] h-[20px] leading-[22px] left-[27px] not-italic text-[17px] text-center text-white top-px tracking-[-0.408px] w-[54px]" data-node-id="I122710:229368;2604:14898;839:7100" style={{ fontFeatureSettings: '"case" 1' }}>
              4:20
            </p>
          </div>
        </div>
        <div className="absolute h-[13px] right-[26.6px] top-[19px] w-[77.401px]" data-node-id="I122710:229368;2604:14899" data-name="Right Side">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRightSide} />
        </div>
        <LogoNotch className="-translate-x-1/2 absolute content-stretch flex items-center left-[calc(50%-0.14px)] px-[8px] py-[5px] rounded-[100px] top-[11px] w-[81.718px]" />
      </div>
      <div className="absolute bottom-[34px] content-stretch flex items-start justify-center left-0 px-[36px] right-0" data-node-id="122710:229369" data-name="tabbar">
        <div className="backdrop-blur-[5px] bg-[rgba(0,0,0,0.86)] border border-[rgba(255,255,255,0.15)] border-solid content-stretch flex gap-[10px] items-center pl-[12px] pr-[10px] py-[2px] relative rounded-[40px] shrink-0" data-node-id="122710:229370" data-name="tab bar">
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[10px] pt-[8px] relative shrink-0 w-[48px]" data-node-id="I122710:229370;107036:15665" data-name="Tab 1">
            <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[100px]" data-node-id="I122710:229370;107036:15666" data-name="Selection" />
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I122710:229370;107036:15667" data-name="glyph">
              <div className="-translate-y-1/2 absolute h-[24px] left-0 overflow-clip right-0 top-1/2" data-node-id="I122710:229370;107036:15667;110:35735" data-name="glyph_location_24">
                <div className="absolute h-[21px] left-[4.5px] top-[1.5px] w-[15.001px]" data-node-id="I122710:229370;107036:15667;110:35736" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold'] leading-[normal] lowercase min-w-full not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center tracking-[-0.24px] w-[min-content]" data-node-id="I122710:229370;107036:15668">
              карта
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[10px] pt-[8px] relative shrink-0 w-[48px]" data-node-id="I122710:229370;107036:15669" data-name="Tab 2">
            <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[100px]" data-node-id="I122710:229370;107036:15670" data-name="Selection" />
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I122710:229370;107036:15671" data-name="glyph/nav friends/24">
              <div className="absolute left-0 size-[24px] top-0" data-node-id="I122710:229370;107036:15671;15719:323796" data-name="glyph_nav_friends_24">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphNavFriends24} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold'] leading-[normal] lowercase min-w-full not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center tracking-[-0.24px] w-[min-content]" data-node-id="I122710:229370;107036:15672">
              друзья
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[10px] pt-[8px] relative shrink-0 w-[48px]" data-node-id="I122710:229370;107036:15673" data-name="Tab 3">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I122710:229370;107036:15674" data-name="glyph/message/24">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphMessage24} />
            </div>
            <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[100px]" data-node-id="I122710:229370;107036:15675" data-name="Selection" />
            <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold'] leading-[normal] lowercase min-w-full not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center tracking-[-0.24px] w-[min-content]" data-node-id="I122710:229370;107036:15676">
              чаты
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[10px] pt-[8px] relative shrink-0 w-[48px]" data-node-id="I122710:229370;107036:15677" data-name="Tab 4">
            <div className="relative shrink-0 size-[24px]" data-node-id="I122710:229370;107036:15679" data-name="glyph/market/24">
              <div className="absolute left-0 size-[24px] top-0" data-node-id="I122710:229370;107036:15679;115927:23904" data-name="glyph_market_24">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphMarket24} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold'] leading-[normal] lowercase min-w-full not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] w-[min-content]" data-node-id="I122710:229370;107036:15680">
              маркет
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[10px] pt-[8px] relative shrink-0 w-[48px]" data-node-id="I122710:229370;107036:15681" data-name="Tab 5">
            <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[100px]" data-node-id="I122710:229370;107036:15682" data-name="Selection" />
            <div className="relative shrink-0 size-[24px]" data-node-id="I122710:229370;107036:15683">
              <div className="absolute left-0 size-[24px] top-0" data-node-id="I122710:229370;107036:15684">
                <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgEllipse395} width="24" />
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold'] leading-[normal] lowercase min-w-full not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center tracking-[-0.24px] w-[min-content]" data-node-id="I122710:229370;107036:15685">
              ты
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-[34px] left-0 right-0" data-node-id="122710:229371" data-name="HomeIndicator">
        <div className="-translate-x-1/2 absolute bg-white bottom-[8px] h-[5px] left-1/2 rounded-[100px] w-[134px]" data-node-id="I122710:229371;1525:11081" data-name="Home Indicator" />
      </div>
    </div>
  );
}

export {MapStyle};
