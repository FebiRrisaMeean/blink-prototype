const assetPathPrefix = "https://www.figma.com/api/mcp/asset/2ad1f476-cea6-494c-915e-e4a1ebf3842f";
const imgLogo = `${assetPathPrefix}/f548a.svg`;
const imgVector = `${assetPathPrefix}/c01af.svg`;
const imgIconBlinkcoin28 = `${assetPathPrefix}/d8eee.svg`;
const imgGlyphTime20 = `${assetPathPrefix}/c1f60.svg`;
const imgNewBadgeLimited = `${assetPathPrefix}/6a4cf.png`;
const imgZombie = `${assetPathPrefix}/952aa.png`;
const imgBat = `${assetPathPrefix}/510d6.png`;
const imgGhost = `${assetPathPrefix}/00566.png`;
const imgPumpkin = `${assetPathPrefix}/c5116.png`;
const imgGlyphClose20 = `${assetPathPrefix}/4b7b2.svg`;
const imgGlyphClose21 = `${assetPathPrefix}/2d8ec.svg`;
const imgAvatarSmall = `${assetPathPrefix}/2207c.png`;
const imgAvatarSmall1 = `${assetPathPrefix}/8b5b1.png`;
const imgAvatarSmall2 = `${assetPathPrefix}/d8597.png`;
const imgAvatarMedium = `${assetPathPrefix}/5f54e.png`;
const imgAvatarMedium1 = `${assetPathPrefix}/02ae6.png`;
const imgAvatarMedium2 = `${assetPathPrefix}/8df7c.png`;
const imgPatternFill = `${assetPathPrefix}/822b1.svg`;
const imgGlyph = `${assetPathPrefix}/a3dfa.svg`;
const imgGlyph1 = `${assetPathPrefix}/62c78.svg`;
const imgRightSide = `${assetPathPrefix}/328fe.svg`;

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

type MarketCtaProps = {
  className?: string;
  type?: "Sale (hours)";
};

function MarketCta({ className, type = "Sale (hours)" }: MarketCtaProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-center pb-[56px] pt-[8px] px-[8px] relative w-[358px]"} data-node-id="85107:41261">
      <div className="bg-white content-stretch flex h-[56px] items-center justify-between px-[16px] py-[18px] relative rounded-[20px] shrink-0 w-full" data-node-id="84057:127742" data-name="Button">
        <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[15px] text-black text-center uppercase whitespace-nowrap" data-node-id="84057:127743">
          купить
        </p>
        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="84057:127744">
          <Icon className="relative shrink-0 size-[28px]" icon="blinkcoin" size="28" />
          <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[15px] text-black text-center uppercase whitespace-nowrap" data-node-id="84057:127746">
            1500
          </p>
          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Montserrat:Bold'] font-bold leading-[normal] line-through relative shrink-0 text-[#808080] text-[15px] text-center uppercase whitespace-nowrap" data-node-id="84057:127758">
            2500
          </p>
        </div>
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center py-[8px] relative shrink-0 w-full" data-node-id="84145:18408">
        <div className="relative shrink-0 size-[20px]" data-node-id="84145:18409" data-name="glyph/time/20">
          <div className="absolute left-0 size-[20px] top-0" data-node-id="I84145:18409;44671:176058" data-name="glyph_time_20">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphTime20} />
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex font-['Montserrat:SemiBold'] font-semibold gap-[4px] items-center leading-[0] lowercase relative shrink-0 text-[#ff3b30] text-[13px] text-center whitespace-nowrap" data-node-id="84145:18410" data-name="row">
          <div className="flex flex-col justify-center relative shrink-0" data-node-id="84145:18411">
            <p className="leading-[normal]">47ч 23м</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0" data-node-id="84145:18412">
            <p className="leading-[normal]">до конца распродажи</p>
          </div>
        </div>
      </div>
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

function StickerSlider({ className, position = "1" }: StickerSliderProps) {
  return (
    <div className={className || "h-[292px] relative w-[342px]"} data-node-id="83941:151196">
      <div className="-translate-y-1/2 absolute content-stretch flex gap-[8px] items-center left-[63px] top-[calc(50%-14px)]" data-node-id="83938:151106" data-name="row">
        <div className="relative shrink-0 size-[216px]" data-node-id="83941:151129" data-name="zombie">
          <div className="absolute flex inset-[-7.87%_-8.2%_-7.98%_-7.64%] items-center justify-center" data-node-id="83938:151088" style={{ containerType: "size" }}>
            <div className="flex-none h-[hypot(-14.9896cqw,85.0104cqh)] rotate-10 w-[hypot(85.0104cqw,14.9896cqh)]">
              <div className="relative size-full" data-name="zombie">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgZombie} />
              </div>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 size-[76px]" data-node-id="83941:151131" data-name="bat">
          <div className="absolute inset-0 opacity-50" data-node-id="83938:151094" data-name="bat">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBat} />
          </div>
        </div>
        <div className="relative shrink-0 size-[76px]" data-node-id="83941:151133" data-name="ghost">
          <div className="absolute inset-0 opacity-50" data-node-id="83938:151091" data-name="ghost">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGhost} />
          </div>
        </div>
        <div className="relative shrink-0 size-[76px]" data-node-id="83941:151134" data-name="pumpkin">
          <div className="absolute inset-0 opacity-50 shadow-[0px_4px_5px_0px_rgba(0,0,0,0.65)]" data-node-id="83938:151092" data-name="pumpkin">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPumpkin} />
          </div>
        </div>
      </div>
      <div className="absolute bottom-[16px] h-[24px] left-0 overflow-clip right-0" data-node-id="86540:28341" data-name="Pagination / 4-1">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[10px] items-center left-1/2 top-1/2" data-node-id="86540:28342" data-name="row">
          <div className="h-[8px] relative shrink-0 w-[32px]" data-node-id="86540:28343" data-name="Pagination / Item">
            <div className="absolute bg-white border-[0.5px] border-[rgba(255,255,255,0.25)] border-solid inset-0 rounded-[24px]" data-node-id="I86540:28343;3768:89558" data-name="Body" />
          </div>
          <div className="relative shrink-0 size-[8px]" data-node-id="86540:28344" data-name="Pagination / Item">
            <div className="absolute bg-[rgba(255,255,255,0.15)] border-[0.5px] border-[rgba(255,255,255,0.25)] border-solid inset-0 rounded-[24px]" data-node-id="I86540:28344;3768:89556" data-name="Body" />
          </div>
          <div className="relative shrink-0 size-[8px]" data-node-id="86540:28345" data-name="Pagination / Item">
            <div className="absolute bg-[rgba(255,255,255,0.15)] border-[0.5px] border-[rgba(255,255,255,0.25)] border-solid inset-0 rounded-[24px]" data-node-id="I86540:28345;3768:89556" data-name="Body" />
          </div>
          <div className="relative shrink-0 size-[8px]" data-node-id="86540:28346" data-name="Pagination / Item">
            <div className="absolute bg-[rgba(255,255,255,0.15)] border-[0.5px] border-[rgba(255,255,255,0.25)] border-solid inset-0 rounded-[24px]" data-node-id="I86540:28346;3768:89556" data-name="Body" />
          </div>
        </div>
      </div>
    </div>
  );
}

type SquareButtonProps = {
  className?: string;
  color?: "Outline Dark" | "Light Skeuo";
  icon?: "Close";
};

function SquareButton({ className, color = "Outline Dark", icon = "Close" }: SquareButtonProps) {
  const isCloseAndLightSkeuo = icon === "Close" && color === "Light Skeuo";
  return (
    <div className={className || `border-solid content-stretch flex items-center justify-center relative rounded-[12px] size-[46px] ${isCloseAndLightSkeuo ? "backdrop-blur-[10px] bg-gradient-to-b border border-[#e4e4e4] from-[#ebebeb] from-[26.061%] to-[#b2b2b2]" : "bg-black border-2 border-[#242424]"}`} id={isCloseAndLightSkeuo ? "node-43997_352984" : "node-6008_103723"}>
      <div className="overflow-clip relative shrink-0 size-[20px]" id={isCloseAndLightSkeuo ? "node-43997_352985" : "node-6008_103724"} data-name="glyph/close/20">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={isCloseAndLightSkeuo ? imgGlyphClose21 : imgGlyphClose20} />
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-black overflow-clip relative rounded-[40px] size-full" data-node-id="104843:376015" data-name="выбор получателя">
      <div className="absolute bottom-0 h-[128px] left-0 right-0" data-node-id="104843:376016" data-name="Close window bottom">
        <div className="absolute bottom-0 flex h-[128px] items-center justify-center left-0 right-0" data-node-id="I104843:376016;43958:82136" style={{ containerType: "size" }}>
          <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
            <div className="bg-gradient-to-b from-black relative size-full to-[rgba(0,0,0,0)]" data-name="Gradient Black" />
          </div>
        </div>
        <SquareButton className="-translate-x-1/2 absolute backdrop-blur-[10px] bg-gradient-to-b border border-[#e4e4e4] border-solid content-stretch flex from-[#ebebeb] from-[26.061%] items-center justify-center left-1/2 rounded-[12px] size-[46px] to-[#b2b2b2] top-[18px]" color="Light Skeuo" />
      </div>
      <div className="-translate-x-1/2 absolute bottom-0 h-[844px] left-1/2 opacity-90 w-[390px]" data-node-id="104843:376017" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%), url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 390 844' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(33.85 89.05 -30.843 11.724 3.7886e-14 0)'><stop stop-color='rgba(211,119,255,1)' offset='0.34082'/><stop stop-color='rgba(165,171,255,1)' offset='0.67041'/><stop stop-color='rgba(119,222,255,1)' offset='1'/></radialGradient></defs></svg>\")" }} data-name="image_bg_colored" />
      <div className="absolute bg-black bottom-0 content-stretch flex flex-col h-[788px] items-center justify-between left-0 px-[16px] rounded-tl-[40px] rounded-tr-[40px] w-[390px]" data-node-id="104843:376018" data-name="Modal sheet">
        <div className="content-stretch flex flex-col items-center mb-[-12px] relative shrink-0" data-node-id="104843:376019" data-name="top">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center justify-center pb-[20px] pt-[28px] px-[8px] relative shrink-0 w-[358px]" data-node-id="104843:376020" data-name="HeaderView">
            <p className="font-['Montserrat:Bold'] font-bold leading-[34px] lowercase relative shrink-0 text-[28px] text-white w-full" data-node-id="I104843:376020;59851:144743">
              хэллоуин пак
            </p>
            <p className="font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#808080] text-[15px] w-full" data-node-id="I104843:376020;59851:144744">
              +10 к жути. Активируется в хэллоуинских чатах: Тыквы, призраки и плохие идеи после полуночи
            </p>
          </div>
          <div className="bg-black border-2 border-[#1c1c1c] border-solid h-[292px] overflow-clip relative rounded-[32px] shrink-0 w-[342px]" data-node-id="104843:376021" data-name="item section">
            <div className="absolute h-[292px] inset-[-2px] pointer-events-none" data-node-id="I104843:376021;84208:23754">
              <div className="pointer-events-auto sticky top-0" data-name="Pattern fill">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPatternFill} />
              </div>
            </div>
            <StickerSlider className="absolute inset-[-2px]" />
            <ItemBadge className="absolute h-[40px] left-[10px] top-[6px] w-[112px]" />
          </div>
          <div className="border-0 border-[rgba(255,255,255,0.15)] border-solid content-stretch flex gap-[12px] items-center pb-[8px] pt-[16px] px-[8px] relative shrink-0 w-[358px]" data-node-id="104843:376022" data-name="social section">
            <div className="content-stretch flex items-start relative shrink-0" data-node-id="I104843:376022;84232:24880" data-name="Avatars">
              <div className="mr-[-16px] overflow-clip relative shrink-0 size-[40px]" data-node-id="I104843:376022;84232:24881" data-name="_Avatar">
                <div className="absolute border-3 border-black border-solid left-0 rounded-[16px] size-[40px] top-0" data-node-id="I104843:376022;84232:24881;3951:109581" data-name="_AvatarSmall">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarSmall} />
                </div>
              </div>
              <div className="mr-[-16px] overflow-clip relative shrink-0 size-[40px]" data-node-id="I104843:376022;84232:24882" data-name="_Avatar">
                <div className="absolute border-3 border-black border-solid left-0 rounded-[16px] size-[40px] top-0" data-node-id="I104843:376022;84232:24882;3951:109581" data-name="_AvatarSmall">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarSmall1} />
                </div>
              </div>
              <div className="mr-[-16px] overflow-clip relative shrink-0 size-[40px]" data-node-id="I104843:376022;84232:24883" data-name="_Avatar">
                <div className="absolute border-3 border-black border-solid left-0 rounded-[16px] size-[40px] top-0" data-node-id="I104843:376022;84232:24883;3951:109581" data-name="_AvatarSmall">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarSmall2} />
                </div>
              </div>
              <div className="overflow-clip relative shrink-0 size-[40px]" data-node-id="I104843:376022;84232:24884" data-name="_Avatar">
                <div className="absolute bg-[#242424] border-3 border-black border-solid left-0 overflow-clip rounded-[16px] size-[40px] top-0" data-node-id="I104843:376022;84232:24884;3951:109581" data-name="_AvatarSmall">
                  <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Montserrat:Bold'] font-bold justify-center leading-[0] left-1/2 text-[13px] text-center text-white top-1/2 uppercase whitespace-nowrap" data-node-id="I104843:376022;84232:24884;3951:109581;3951:109577">
                    <p className="leading-[normal]">+2</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] lowercase relative shrink-0 text-[15px] text-[rgba(255,255,255,0.5)] text-center whitespace-nowrap" data-node-id="I104843:376022;84232:24885">
              есть у 5 друзей
            </p>
          </div>
        </div>
        <MarketCta className="content-stretch flex flex-col items-center pb-[56px] pt-[8px] px-[8px] relative shrink-0 w-[358px]" />
        <div className="absolute content-stretch flex flex-col h-[12px] items-center left-[16px] pt-[8px] top-0 w-[358px]" data-node-id="104843:376024" data-name="Indicator">
          <div className="bg-[#808080] h-[4px] relative rounded-[20px] shrink-0 w-[33px]" data-node-id="I104843:376024;2702:17814" data-name="Vector" />
        </div>
      </div>
      <div className="absolute h-[844px] left-0 top-0 w-[390px]" data-node-id="104843:376025" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%), url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 390 844' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(33.85 89.05 -30.843 11.724 3.7886e-14 0)'><stop stop-color='rgba(211,119,255,1)' offset='0.34082'/><stop stop-color='rgba(165,171,255,1)' offset='0.67041'/><stop stop-color='rgba(119,222,255,1)' offset='1'/></radialGradient></defs></svg>\")" }} data-name="image_bg_colored" />
      <div className="absolute contents left-0 top-[56px]" data-node-id="104843:376026" data-name="choose friend">
        <div className="absolute bg-black content-stretch flex flex-col h-[788px] items-center left-0 px-[16px] rounded-tl-[40px] rounded-tr-[40px] top-[56px] w-[390px]" data-node-id="104843:376027" data-name="Modal sheet">
          <div className="content-stretch flex flex-col h-[12px] items-center justify-end pt-[8px] relative shrink-0 w-full" data-node-id="I104843:376027;3277:68117" data-name="Slider">
            <div className="bg-[#808080] h-[4px] relative rounded-[20px] shrink-0 w-[33px]" data-node-id="I104843:376027;3277:68117;2702:17814" data-name="Vector" />
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col items-start left-0 top-[138px]" data-node-id="104843:376028" data-name="FriendList">
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-node-id="104843:376029">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="104843:376030" data-name="FriendList">
              <div className="[word-break:break-word] content-stretch flex font-['Montserrat:Bold'] font-bold gap-[6px] items-start leading-[normal] px-[16px] py-[12px] relative shrink-0 text-[13px] tracking-[1.04px] uppercase w-[390px]" data-node-id="104843:376031" data-name="Title">
                <p className="bg-clip-text bg-gradient-to-l from-[#cf92ff] from-[18.193%] relative shrink-0 text-[transparent] to-[#66faff] whitespace-nowrap" data-node-id="I104843:376031;4119:101245">
                  лучшие друзья
                </p>
                <p className="flex-[1_0_0] min-w-px relative text-white" data-node-id="I104843:376031;4119:101246">
                  4
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[390px]" data-node-id="104843:376032" data-name="ContactCard">
                <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="104843:376033" data-name="ContactCard / Base">
                  <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-node-id="104843:376035" data-name="ContentLeft">
                    <div className="relative shrink-0 size-[46px]" data-node-id="104843:376040" data-name="Show/Hide Avatar">
                      <div className="absolute left-0 size-[46px] top-0" data-node-id="104843:376041" data-name="_Avatar">
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[16px] size-[46.001px] top-1/2" data-node-id="I104843:376041;3951:109567" data-name="_AvatarMedium">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarSmall1} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="104843:376042" data-name="ContactCard / Title">
                      <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376042;13893:187677" data-name="Title">
                        <UserName className="content-stretch flex items-center justify-center relative shrink-0" />
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I104843:376042;6638:126608" data-name="Show/Hide SubTitle">
                        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376042;6638:126626" data-name="ContactCard / Subtitle">
                          <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376042;6638:126626;6656:130265" data-name="Text">
                            <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376042;6638:126626;6699:135282" data-name="ContactCard / Subtitle / Text">
                              <p className="[word-break:break-word] bg-clip-text bg-gradient-to-l font-['Roboto:Regular'] font-normal from-[#cf92ff] from-[18.193%] leading-[20px] lowercase relative shrink-0 text-[15px] text-[transparent] to-[#66faff] whitespace-nowrap" data-node-id="I104843:376042;6638:126626;6699:135282;6699:135271" style={{ fontVariationSettings: '"wdth" 100' }}>
                                в сети
                              </p>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-[33px]" data-node-id="I104843:376042;6638:126626;6671:145702" data-name="Show/Hide Date" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[390px]" data-node-id="104843:376043" data-name="ContactCard">
                <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="104843:376044" data-name="ContactCard / Base">
                  <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-node-id="104843:376046" data-name="ContentLeft">
                    <div className="relative shrink-0 size-[46px]" data-node-id="104843:376051" data-name="Show/Hide Avatar">
                      <div className="absolute left-0 size-[46px] top-0" data-node-id="104843:376052" data-name="_Avatar">
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[16px] size-[46.001px] top-1/2" data-node-id="I104843:376052;3951:109567" data-name="_AvatarMedium">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarMedium} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="104843:376053" data-name="ContactCard / Title">
                      <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376053;13893:187677" data-name="Title">
                        <UserName className="content-stretch flex items-center justify-center relative shrink-0" />
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I104843:376053;6638:126608" data-name="Show/Hide SubTitle">
                        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376053;6638:126626" data-name="ContactCard / Subtitle">
                          <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376053;6638:126626;6656:130265" data-name="Text">
                            <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376053;6638:126626;6699:135282" data-name="ContactCard / Subtitle / Text">
                              <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] lowercase relative shrink-0 text-[#808080] text-[15px] whitespace-nowrap" data-node-id="I104843:376053;6638:126626;6699:135282;6699:135271" style={{ fontVariationSettings: '"wdth" 100' }}>
                                36 мин назад
                              </p>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-[33px]" data-node-id="I104843:376053;6638:126626;6671:145702" data-name="Show/Hide Date" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[390px]" data-node-id="104843:376054" data-name="ContactCard">
                <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="104843:376055" data-name="ContactCard / Base">
                  <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-node-id="104843:376057" data-name="ContentLeft">
                    <div className="relative shrink-0 size-[46px]" data-node-id="104843:376062" data-name="Show/Hide Avatar">
                      <div className="absolute left-0 size-[46px] top-0" data-node-id="104843:376063" data-name="_Avatar">
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[16px] size-[46.001px] top-1/2" data-node-id="I104843:376063;3951:109567" data-name="_AvatarMedium">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarMedium1} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="104843:376064" data-name="ContactCard / Title">
                      <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376064;13893:187677" data-name="Title">
                        <UserName className="content-stretch flex items-center justify-center relative shrink-0" />
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I104843:376064;6638:126608" data-name="Show/Hide SubTitle">
                        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376064;6638:126626" data-name="ContactCard / Subtitle">
                          <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376064;6638:126626;6656:130265" data-name="Text">
                            <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376064;6638:126626;6699:135282" data-name="ContactCard / Subtitle / Text">
                              <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] lowercase relative shrink-0 text-[#808080] text-[15px] whitespace-nowrap" data-node-id="I104843:376064;6638:126626;6699:135282;6699:135271" style={{ fontVariationSettings: '"wdth" 100' }}>
                                2 часа назад
                              </p>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-[33px]" data-node-id="I104843:376064;6638:126626;6671:145702" data-name="Show/Hide Date" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[390px]" data-node-id="104843:376065" data-name="ContactCard">
                <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="104843:376066" data-name="ContactCard / Base">
                  <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-node-id="104843:376068" data-name="ContentLeft">
                    <div className="relative shrink-0 size-[46px]" data-node-id="104843:376073" data-name="Show/Hide Avatar">
                      <div className="absolute left-0 size-[46px] top-0" data-node-id="104843:376074" data-name="_Avatar">
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[16px] size-[46.001px] top-1/2" data-node-id="I104843:376074;3951:109567" data-name="_AvatarMedium">
                          <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none rounded-[16px] size-full" src={imgAvatarMedium2} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="104843:376075" data-name="ContactCard / Title">
                      <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376075;13893:187677" data-name="Title">
                        <UserName className="content-stretch flex items-center justify-center relative shrink-0" />
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I104843:376075;6638:126608" data-name="Show/Hide SubTitle">
                        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376075;6638:126626" data-name="ContactCard / Subtitle">
                          <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376075;6638:126626;6656:130265" data-name="Text">
                            <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376075;6638:126626;6699:135282" data-name="ContactCard / Subtitle / Text">
                              <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] lowercase relative shrink-0 text-[15px] text-[rgba(255,255,255,0.5)] whitespace-nowrap" data-node-id="I104843:376075;6638:126626;6699:135282;6699:135271" style={{ fontVariationSettings: '"wdth" 100' }}>
                                1 день назад
                              </p>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-[33px]" data-node-id="I104843:376075;6638:126626;6671:145702" data-name="Show/Hide Date" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="104843:376076">
              <div className="[word-break:break-word] content-stretch flex font-['Montserrat:Bold'] font-bold gap-[6px] items-start leading-[normal] px-[16px] py-[12px] relative shrink-0 text-[13px] tracking-[1.04px] uppercase w-[390px]" data-node-id="104843:376077" data-name="Title">
                <p className="relative shrink-0 text-[#808080] whitespace-nowrap" data-node-id="I104843:376077;4119:101245">
                  Все друзья
                </p>
                <p className="flex-[1_0_0] min-w-px relative text-white" data-node-id="I104843:376077;4119:101246">
                  4
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="104843:376078" data-name="FriendList">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[390px]" data-node-id="104843:376079" data-name="ContactCard">
                  <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="104843:376080" data-name="ContactCard / Base">
                    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-node-id="104843:376082" data-name="ContentLeft">
                      <div className="relative shrink-0 size-[46px]" data-node-id="104843:376087" data-name="Show/Hide Avatar">
                        <div className="absolute left-0 size-[46px] top-0" data-node-id="104843:376088" data-name="_Avatar">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[16px] size-[46.001px] top-1/2" data-node-id="I104843:376088;3951:109567" data-name="_AvatarMedium">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarSmall1} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="104843:376089" data-name="ContactCard / Title">
                        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376089;13893:187677" data-name="Title">
                          <UserName className="content-stretch flex items-center justify-center relative shrink-0" />
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I104843:376089;6638:126608" data-name="Show/Hide SubTitle">
                          <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376089;6638:126626" data-name="ContactCard / Subtitle">
                            <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376089;6638:126626;6656:130265" data-name="Text">
                              <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376089;6638:126626;6699:135282" data-name="ContactCard / Subtitle / Text">
                                <p className="[word-break:break-word] bg-clip-text bg-gradient-to-l font-['Roboto:Regular'] font-normal from-[#cf92ff] from-[18.193%] leading-[20px] lowercase relative shrink-0 text-[15px] text-[transparent] to-[#66faff] whitespace-nowrap" data-node-id="I104843:376089;6638:126626;6699:135282;6699:135271" style={{ fontVariationSettings: '"wdth" 100' }}>
                                  в сети
                                </p>
                              </div>
                            </div>
                            <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-[33px]" data-node-id="I104843:376089;6638:126626;6671:145702" data-name="Show/Hide Date" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[390px]" data-node-id="104843:376090" data-name="ContactCard">
                  <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="104843:376091" data-name="ContactCard / Base">
                    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-node-id="104843:376093" data-name="ContentLeft">
                      <div className="relative shrink-0 size-[46px]" data-node-id="104843:376098" data-name="Show/Hide Avatar">
                        <div className="absolute left-0 size-[46px] top-0" data-node-id="104843:376099" data-name="_Avatar">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[16px] size-[46.001px] top-1/2" data-node-id="I104843:376099;3951:109567" data-name="_AvatarMedium">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarMedium1} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="104843:376100" data-name="ContactCard / Title">
                        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376100;13893:187677" data-name="Title">
                          <UserName className="content-stretch flex items-center justify-center relative shrink-0" />
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I104843:376100;6638:126608" data-name="Show/Hide SubTitle">
                          <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376100;6638:126626" data-name="ContactCard / Subtitle">
                            <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376100;6638:126626;6656:130265" data-name="Text">
                              <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376100;6638:126626;6699:135282" data-name="ContactCard / Subtitle / Text">
                                <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] lowercase relative shrink-0 text-[#808080] text-[15px] whitespace-nowrap" data-node-id="I104843:376100;6638:126626;6699:135282;6699:135271" style={{ fontVariationSettings: '"wdth" 100' }}>
                                  2 часа назад
                                </p>
                              </div>
                            </div>
                            <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-[33px]" data-node-id="I104843:376100;6638:126626;6671:145702" data-name="Show/Hide Date" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[390px]" data-node-id="104843:376101" data-name="ContactCard">
                  <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="104843:376102" data-name="ContactCard / Base">
                    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-node-id="104843:376104" data-name="ContentLeft">
                      <div className="relative shrink-0 size-[46px]" data-node-id="104843:376109" data-name="Show/Hide Avatar">
                        <div className="absolute left-0 size-[46px] top-0" data-node-id="104843:376110" data-name="_Avatar">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[16px] size-[46.001px] top-1/2" data-node-id="I104843:376110;3951:109567" data-name="_AvatarMedium">
                            <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none rounded-[16px] size-full" src={imgAvatarMedium2} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="104843:376111" data-name="ContactCard / Title">
                        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376111;13893:187677" data-name="Title">
                          <UserName className="content-stretch flex items-center justify-center relative shrink-0" />
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I104843:376111;6638:126608" data-name="Show/Hide SubTitle">
                          <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376111;6638:126626" data-name="ContactCard / Subtitle">
                            <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376111;6638:126626;6656:130265" data-name="Text">
                              <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376111;6638:126626;6699:135282" data-name="ContactCard / Subtitle / Text">
                                <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] lowercase relative shrink-0 text-[15px] text-[rgba(255,255,255,0.5)] whitespace-nowrap" data-node-id="I104843:376111;6638:126626;6699:135282;6699:135271" style={{ fontVariationSettings: '"wdth" 100' }}>
                                  1 день назад
                                </p>
                              </div>
                            </div>
                            <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-[33px]" data-node-id="I104843:376111;6638:126626;6671:145702" data-name="Show/Hide Date" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[390px]" data-node-id="104843:376112" data-name="ContactCard">
                  <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="104843:376113" data-name="ContactCard / Base">
                    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-node-id="104843:376115" data-name="ContentLeft">
                      <div className="relative shrink-0 size-[46px]" data-node-id="104843:376120" data-name="Show/Hide Avatar">
                        <div className="absolute left-0 size-[46px] top-0" data-node-id="104843:376121" data-name="_Avatar">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[16px] size-[46.001px] top-1/2" data-node-id="I104843:376121;3951:109567" data-name="_AvatarMedium">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarMedium1} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="104843:376122" data-name="ContactCard / Title">
                        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376122;13893:187677" data-name="Title">
                          <UserName className="content-stretch flex items-center justify-center relative shrink-0" />
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I104843:376122;6638:126608" data-name="Show/Hide SubTitle">
                          <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376122;6638:126626" data-name="ContactCard / Subtitle">
                            <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376122;6638:126626;6656:130265" data-name="Text">
                              <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376122;6638:126626;6699:135282" data-name="ContactCard / Subtitle / Text">
                                <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] lowercase relative shrink-0 text-[#808080] text-[15px] whitespace-nowrap" data-node-id="I104843:376122;6638:126626;6699:135282;6699:135271" style={{ fontVariationSettings: '"wdth" 100' }}>
                                  2 часа назад
                                </p>
                              </div>
                            </div>
                            <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-[33px]" data-node-id="I104843:376122;6638:126626;6671:145702" data-name="Show/Hide Date" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[390px]" data-node-id="104843:376123" data-name="ContactCard">
                  <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="104843:376124" data-name="ContactCard / Base">
                    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-node-id="104843:376126" data-name="ContentLeft">
                      <div className="relative shrink-0 size-[46px]" data-node-id="104843:376131" data-name="Show/Hide Avatar">
                        <div className="absolute left-0 size-[46px] top-0" data-node-id="104843:376132" data-name="_Avatar">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[16px] size-[46.001px] top-1/2" data-node-id="I104843:376132;3951:109567" data-name="_AvatarMedium">
                            <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none rounded-[16px] size-full" src={imgAvatarMedium2} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="104843:376133" data-name="ContactCard / Title">
                        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376133;13893:187677" data-name="Title">
                          <UserName className="content-stretch flex items-center justify-center relative shrink-0" />
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I104843:376133;6638:126608" data-name="Show/Hide SubTitle">
                          <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376133;6638:126626" data-name="ContactCard / Subtitle">
                            <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376133;6638:126626;6656:130265" data-name="Text">
                              <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I104843:376133;6638:126626;6699:135282" data-name="ContactCard / Subtitle / Text">
                                <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] lowercase relative shrink-0 text-[15px] text-[rgba(255,255,255,0.5)] whitespace-nowrap" data-node-id="I104843:376133;6638:126626;6699:135282;6699:135271" style={{ fontVariationSettings: '"wdth" 100' }}>
                                  не в сети
                                </p>
                              </div>
                            </div>
                            <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-[33px]" data-node-id="I104843:376133;6638:126626;6671:145702" data-name="Show/Hide Date" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 pb-[20px] pt-[28px] top-[56px] w-[358px]" data-node-id="104843:376134" data-name="HeaderView">
          <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[34px] lowercase relative shrink-0 text-[28px] text-white w-full" data-node-id="I104843:376134;59851:144743">
            кому подаришь?
          </p>
        </div>
        <div className="-translate-x-1/2 absolute bg-gradient-to-t content-stretch flex flex-col from-[71.248%] from-black items-start left-1/2 pb-[52px] pt-[38px] px-[16px] to-[rgba(0,0,0,0)] top-[708px] w-[390px]" data-node-id="104843:376135" data-name="Search">
          <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-[358px]" data-node-id="104843:376136" data-name="SearchField">
            <div className="backdrop-blur-[15px] bg-[rgba(255,255,255,0.15)] border-2 border-[rgba(255,255,255,0)] border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-[46px] items-center min-w-px pl-[16px] pr-[8px] py-[8px] relative rounded-[14px]" data-node-id="I104843:376136;1778:167738" data-name="Input">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="I104843:376136;1778:167739" data-name="glyph">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyph} />
              </div>
              <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-node-id="I104843:376136;1789:188507" data-name="placeholder + cursor">
                <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[1.119] lowercase opacity-80 overflow-hidden relative shrink-0 text-[20px] text-[rgba(255,255,255,0.5)] text-ellipsis whitespace-nowrap" data-node-id="I104843:376136;1778:167740">
                  anу
                </p>
              </div>
            </div>
            <div className="backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] border-2 border-[rgba(255,255,255,0.15)] border-solid content-stretch flex items-center justify-center relative rounded-[14px] shrink-0 size-[47px]" data-node-id="I104843:376136;1778:167748" data-name="SquareButton">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="I104843:376136;1778:167749" data-name="glyph">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyph1} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[47px] left-1/2 overflow-clip top-0 w-[390px]" data-node-id="104843:376137" data-name="StatusBar">
        <div className="absolute contents left-[27px] top-[14px]" data-node-id="I104843:376137;2604:14897" data-name="Left Side">
          <div className="absolute h-[21px] left-[27px] rounded-[24px] top-[14px] w-[54px]" data-node-id="I104843:376137;2604:14898" data-name="_StatusBar-time">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro_Text:Semibold'] h-[20px] leading-[22px] left-[27px] not-italic text-[17px] text-black text-center top-px tracking-[-0.408px] w-[54px]" data-node-id="I104843:376137;2604:14898;839:7100" style={{ fontFeatureSettings: '"case" 1' }}>
              4:20
            </p>
          </div>
        </div>
        <div className="absolute h-[13px] right-[26.6px] top-[19px] w-[77.401px]" data-node-id="I104843:376137;2604:14899" data-name="Right Side">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRightSide} />
        </div>
        <LogoNotch className="-translate-x-1/2 absolute content-stretch flex items-center left-[calc(50%-0.14px)] px-[8px] py-[5px] rounded-[100px] top-[11px] w-[81.718px]" />
      </div>
      <HomeIndicator className="-translate-x-1/2 absolute bottom-0 h-[34px] left-1/2 w-[390px]" />
    </div>
  );
}
