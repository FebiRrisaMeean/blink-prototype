const assetPathPrefix = "https://www.figma.com/api/mcp/asset/cfd1bdc6-f86b-45c4-a9ef-ea084683d262";
const imgLogo = `${assetPathPrefix}/f548a.svg`;
const imgGlyphSettings20 = `${assetPathPrefix}/64678.svg`;
const imgVector = `${assetPathPrefix}/a896a.svg`;
const imgVector1 = `${assetPathPrefix}/c43cf.svg`;
const imgCheckinImagePlace = `${assetPathPrefix}/4a467.png`;
const imgCheckinImagePlace1 = `${assetPathPrefix}/f5ce4.png`;
const imgCheckinImagePlace2 = `${assetPathPrefix}/f4188.png`;
const imgAvatarLarge = `${assetPathPrefix}/94bbe.png`;
const imgAvatarLarge1 = `${assetPathPrefix}/0867a.png`;
const imgAvatarLarge2 = `${assetPathPrefix}/8b5b1.png`;
const imgAvatarLarge3 = `${assetPathPrefix}/d8597.png`;
const imgGlyphPinLocation16 = `${assetPathPrefix}/ae5b1.svg`;
const imgGlyphShare20 = `${assetPathPrefix}/fd24f.svg`;
const imgHeartPink = `${assetPathPrefix}/bbd8b.png`;
const img17689168301 = `${assetPathPrefix}/dd69b.png`;
const img0E3A1340ColorCorrection2 = `${assetPathPrefix}/839b9.png`;
const imgImage499 = `${assetPathPrefix}/4d65e.png`;
const imgAvatarXxLarge = `${assetPathPrefix}/f4834.png`;
const imgImage496 = `${assetPathPrefix}/ff8f8.png`;
const imgImage497 = `${assetPathPrefix}/1fe87.png`;
const imgImageEyesSticker = `${assetPathPrefix}/18153.png`;
const imgImageStarsProfile = `${assetPathPrefix}/e4157.png`;
const imgEllipse395 = `${assetPathPrefix}/16575.png`;
const img0E3A1340ColorCorrection1 = `${assetPathPrefix}/86c7f.svg`;
const imgImageStarsProfileLight = `${assetPathPrefix}/55ae8.svg`;
const imgVector2 = `${assetPathPrefix}/dc27b.svg`;
const imgRightSide = `${assetPathPrefix}/1ccd4.svg`;
const imgVector3 = `${assetPathPrefix}/1ec6a.svg`;
const imgGlyphNavFriends24 = `${assetPathPrefix}/7ec30.svg`;
const imgGlyphMessage24 = `${assetPathPrefix}/abe54.svg`;
const imgGlyphMarket24 = `${assetPathPrefix}/c0ac6.svg`;

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

type SquareBtn40Props = {
  className?: string;
  set?: "Customize" | "Edit" | "Settings";
};

function SquareBtn40({ className, set = "Edit" }: SquareBtn40Props) {
  const isCustomize = set === "Customize";
  const isEdit = set === "Edit";
  return (
    <div className={className || "backdrop-blur-[10px] bg-[rgba(0,0,0,0.25)] relative rounded-[12px] size-[40px]"} id={isCustomize ? "node-43994_83404" : isEdit ? "node-43994_83403" : "node-43994_83405"}>
      {set === "Settings" && (
        <div className="absolute left-[10px] overflow-clip size-[20px] top-[10px]" data-node-id="43997:83409" data-name="glyph/settings/20">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphSettings20} />
        </div>
      )}
      {isEdit && (
        <div className="absolute left-[10px] overflow-clip size-[20px] top-[10px]" data-node-id="43997:83418" data-name="glyph/edit/20">
          <div className="absolute inset-0 overflow-clip" data-node-id="I43997:83418;7046:162928" data-name="glyph_edit_20">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-0.04px)] size-[17.913px] top-[calc(50%+0.29px)]" data-node-id="I43997:83418;7046:162930">
              <div className="-rotate-45 flex-none">
                <div className="h-[6px] relative w-[19.333px]" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isCustomize && (
        <div className="absolute inset-1/4 overflow-clip" data-node-id="43997:134306" data-name="glyph/customize/20">
          <div className="-translate-y-1/2 absolute content-stretch flex h-[20px] items-center justify-center left-0 overflow-clip right-0 top-1/2" data-node-id="I43997:134306;43997:83429" data-name="glyph_customize_20">
            <div className="h-[15.08px] relative shrink-0 w-[20px]" data-node-id="I43997:134306;43997:83433" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

type ProfileCheckinsContentProps = {
  className?: string;
  checkins?: "3+";
};

function ProfileCheckinsContent({ className, checkins = "3+" }: ProfileCheckinsContentProps) {
  return (
    <div className={className || "h-[134px] relative w-[144px]"} data-node-id="44788:188215">
      <div className="absolute flex h-[113.319px] items-center justify-center left-[68.69px] top-[18.87px] w-[74.168px]" data-node-id="44788:188202">
        <div className="flex-none rotate-8">
          <div className="border-3 border-solid border-white h-[106px] relative rounded-[10px] w-[60px]" data-name="CheckinImagePlace">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgCheckinImagePlace} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[108.029px] items-center justify-center left-[41.83px] top-[24.52px] w-[63.663px]" data-node-id="44788:188206">
        <div className="flex-none rotate-2">
          <div className="border-3 border-solid border-white h-[106px] relative rounded-[10px] w-[60px]" data-name="CheckinImagePlace">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgCheckinImagePlace1} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[109.927px] items-center justify-center left-0 top-[20.56px] w-[67.248px]" data-node-id="44788:188210">
        <div className="-rotate-4 flex-none">
          <div className="border-3 border-solid border-white h-[106px] relative rounded-[10px] w-[60px]" data-name="CheckinImagePlace">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgCheckinImagePlace2} />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[36.479px] items-center justify-center left-[70.63px] top-[21.6px] w-[53.684px]" data-node-id="44788:188214">
        <div className="flex-none rotate-[5.19deg]">
          <div className="[word-break:break-word] flex flex-col font-['Montserrat:ExtraBold'] font-extrabold justify-center leading-[0] relative text-[28px] text-black text-center tracking-[-1.4px] whitespace-nowrap">
            <p className="leading-[32px]">455</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileCheckinsDefault({ className }: { className?: string }) {
  return (
    <div className={className || "h-[168px] relative w-[144px]"} data-node-id="44788:188195" data-name="ProfileCheckinsDefault">
      <div className="absolute h-[28px] left-0 top-[140px] w-[143px]" data-node-id="44788:188199" data-name="Text">
        <div className="-translate-x-1/2 absolute flex h-[27.806px] items-center justify-center left-[calc(50%+5.38px)] top-[0.02px] w-[85.33px]" data-node-id="44788:188181">
          <div className="-rotate-4 flex-none">
            <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[1.119] lowercase relative text-[20px] text-center text-white whitespace-nowrap">чекины</p>
          </div>
        </div>
      </div>
      <ProfileCheckinsContent className="absolute h-[134px] left-0 top-0 w-[144px]" />
    </div>
  );
}

type ProfileCheckinsProps = {
  className?: string;
  state?: "Default";
};

function ProfileCheckins({ className, state = "Default" }: ProfileCheckinsProps) {
  return (
    <div className={className || "h-[168px] relative w-[144px]"} data-node-id="45833:99851">
      <ProfileCheckinsDefault className="absolute h-[168px] left-0 top-0 w-[144px]" />
    </div>
  );
}

type ProfileFriendsContentProps = {
  className?: string;
  friends?: "3+";
};

function ProfileFriendsContent({ className, friends = "3+" }: ProfileFriendsContentProps) {
  return (
    <div className={className || "h-[146px] relative w-[140px]"} data-node-id="44788:187770">
      <div className="absolute flex items-center justify-center left-[3px] size-[70.346px] top-[42.45px]" data-node-id="44788:187758">
        <div className="flex-none rotate-11">
          <div className="relative size-[60px]" data-name="_Avatar">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute border-3 border-solid border-white left-1/2 rounded-[16px] size-[60.001px] top-1/2" data-node-id="I44788:187758;5924:103853" data-name="_AvatarLarge">
              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[16px]">
                <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgAvatarLarge} />
                <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgAvatarLarge1} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[40.19px] size-[65.943px] top-[38.65px]" data-node-id="44788:187759">
        <div className="-rotate-6 flex-none">
          <div className="relative size-[60px]" data-name="_Avatar">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute border-3 border-solid border-white left-1/2 rounded-[16px] size-[60.001px] top-1/2" data-node-id="I44788:187759;5924:103853" data-name="_AvatarLarge">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarLarge2} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[72.14px] size-[62.057px] top-[52.59px]" data-node-id="44788:187760">
        <div className="-rotate-2 flex-none">
          <div className="relative size-[60px]" data-name="_Avatar">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute border-3 border-solid border-white left-1/2 rounded-[16px] size-[60.001px] top-1/2" data-node-id="I44788:187760;5924:103853" data-name="_AvatarLarge">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarLarge3} />
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[36.201px] items-center justify-center left-[37.5px] top-[39.95px] w-[37.92px]" data-node-id="44788:187761">
        <div className="flex-none rotate-[-7.57deg]">
          <div className="[word-break:break-word] flex flex-col font-['Montserrat:ExtraBold'] font-extrabold justify-center leading-[0] relative text-[28px] text-black text-center tracking-[-1.4px] whitespace-nowrap">
            <p className="leading-[32px]">27</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileFriendsDefault({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex flex-col h-[146px] items-start justify-between relative w-[140px]"} data-node-id="44763:88033" data-name="ProfileFriendsDefault">
      <ProfileFriendsContent className="h-[106px] relative shrink-0 w-full" />
      <div className="h-[28px] relative shrink-0 w-full" data-node-id="44788:187870" data-name="Title">
        <div className="-translate-x-1/2 absolute flex h-[27.178px] items-center justify-center left-[65.44px] top-[0.3px] w-[76.352px]" data-node-id="44763:88011">
          <div className="flex-none rotate-4">
            <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[1.119] lowercase relative text-[20px] text-center text-white whitespace-nowrap">друзья</p>
          </div>
        </div>
      </div>
    </div>
  );
}

type ProfileFriendsProps = {
  className?: string;
  state?: "Default";
};

function ProfileFriends({ className, state = "Default" }: ProfileFriendsProps) {
  return (
    <div className={className || "h-[146px] relative w-[140px]"} data-node-id="45833:99752">
      <ProfileFriendsDefault className="absolute content-stretch flex flex-col h-[146px] items-start justify-between left-0 top-0 w-[140px]" />
    </div>
  );
}

type ProfileCityProps = {
  className?: string;
  loading?: "No";
};

function ProfileCity({ className, loading = "No" }: ProfileCityProps) {
  return (
    <div className={className || "content-stretch flex gap-[6px] items-center justify-center relative rounded-[8px]"} data-node-id="45833:105873">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="45833:105865" data-name="glyph/pin location/16">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-node-id="I45833:105865;17513:201013" data-name="glyph_pin_location_16">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphPinLocation16} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] lowercase relative shrink-0 text-[15px] text-[rgba(255,255,255,0.5)] whitespace-nowrap" data-node-id="45833:105866">
        санкт-петербург
      </p>
    </div>
  );
}

function GlyphShare20({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[20px]"} data-node-id="20420:303672" data-name="glyph/share/20">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphShare20} />
    </div>
  );
}

type GiftProfileProps = {
  className?: string;
  type?: "1" | "5";
};

function GiftProfile({ className, type = "1" }: GiftProfileProps) {
  const is1 = type === "1";
  const is5 = type === "5";
  return (
    <div className={className || "relative size-[56px]"} data-name="_gift-profile" id={is1 ? "node-95795_216467" : "node-95795_216468"}>
      <div className="absolute inset-[5.36%]" id={is1 ? "node-95954_232878" : "node-95954_232800"} data-name="image 50x50">
        {is5 && (
          <div className="absolute h-[40px] right-[2px] top-[5px] w-[45px]" data-node-id="95954:232807" data-name="heart_pink">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHeartPink} />
          </div>
        )}
        {is1 && (
          <div className="absolute flex h-[64.35px] items-center justify-center right-[0.84px] top-[-7.68px] w-[52.336px]" data-node-id="95954:232883">
            <div className="flex-none rotate-[-4.2deg]">
              <div className="h-[61px] relative w-[48px]" data-name="1768916830 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img17689168301} />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={`-translate-x-1/2 absolute bottom-[7.83px] flex items-center justify-center left-[12.47px] translate-y-1/2 ${is1 ? "h-[20.165px] w-[19.568px]" : "h-[24.27px] w-[30.844px]"}`} id={is1 ? "node-96014_53711" : "node-95795_216517"}>
        <div className="flex-none rotate-20">
          <div className="[word-break:break-word] flex flex-col font-['Montserrat:ExtraBold'] font-extrabold justify-center leading-[0] relative text-[12px] text-black text-center tracking-[-0.6px] whitespace-nowrap">
            <p className="leading-[16px]">{is5 ? "x16k" : "x2"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageYourProfileBg({ className }: { className?: string }) {
  return (
    <div className={className || "h-[844px] relative w-[390px]"} data-node-id="43997:363148" data-name="image_your_profile_bg">
      <div className="absolute inset-0" data-node-id="43997:363147" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 390 844' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-3.3811e-14 75.055 -68.008 2.9257e-15 195 0)'><stop stop-color='rgba(0,0,0,0)' offset='0.28267'/><stop stop-color='rgba(0,0,0,1)' offset='0.56364'/></radialGradient></defs></svg>\")" }} data-name="image_your_profile_bg" />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-black overflow-clip relative rounded-[40px] size-full" data-node-id="118790:104360" data-name="свой профиль">
      <button className="absolute block cursor-pointer h-[844px] left-0 right-0 top-0" data-node-id="118790:104361" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 390 844' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(17.25 25.45 -26.598 18.028 60 38.5)'><stop stop-color='rgba(240,255,81,1)' offset='0'/><stop stop-color='rgba(216,247,124,1)' offset='0.09625'/><stop stop-color='rgba(191,239,168,1)' offset='0.1925'/><stop stop-color='rgba(167,231,211,1)' offset='0.28875'/><stop stop-color='rgba(142,223,255,1)' offset='0.385'/><stop stop-color='rgba(119,152,255,1)' offset='0.6925'/><stop stop-color='rgba(108,117,255,1)' offset='0.84625'/><stop stop-color='rgba(96,82,255,1)' offset='1'/></radialGradient></defs></svg>\")" }} data-name="image_your_profile_cover" />
      <ImageYourProfileBg className="absolute h-[844px] left-0 right-0 top-0" />
      <div className="absolute h-[844px] left-0 right-0 top-0" data-node-id="118790:104363" data-name="Scroll">
        <div className="absolute content-stretch flex flex-col gap-[28px] items-start left-0 pt-[102px] right-0 top-0" data-node-id="118790:104364" data-name="ProfileBase">
          <div className="content-stretch flex flex-col gap-[32px] items-center pt-[24px] relative shrink-0 w-full" data-node-id="I118790:104364;45928:94338" data-name="ProfileInfo_new">
            <div className="relative shrink-0 size-[132px]" data-node-id="I118790:104364;45928:94338;95981:241309" data-name="Avatar">
              <div className="absolute left-0 rounded-[32px] size-[132px] top-0" data-node-id="I118790:104364;45928:94338;95981:241310" data-name="_Avatar" />
              <div className="absolute content-stretch flex items-start justify-center left-[-129px] right-[-129px] top-0" data-node-id="I118790:104364;45928:94338;95981:241466" data-name="390px">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px pb-[16px] relative" data-node-id="I118790:104364;45928:94338;95981:241467">
                  <div className="h-[44px] relative rounded-[8px] shrink-0 w-full" data-node-id="I118790:104364;45928:94338;95981:241468" data-name="L1">
                    <div className="-translate-y-1/2 absolute right-[12px] size-[56px] top-1/2" data-node-id="I118790:104364;45928:94338;95981:241469" data-name="_gift-profile">
                      <div className="absolute inset-[5.36%]" data-node-id="I118790:104364;45928:94338;95981:241469;95954:232878" data-name="image 50x50">
                        <div className="absolute flex h-[64.35px] items-center justify-center right-[0.84px] top-[-7.68px] w-[52.336px]" data-node-id="I118790:104364;45928:94338;95981:241469;95954:232883">
                          <div className="flex-none rotate-[-4.2deg]">
                            <div className="h-[61px] relative w-[48px]" data-name="1768916830 1">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img17689168301} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="-translate-x-1/2 absolute bottom-[7.83px] flex h-[20.165px] items-center justify-center left-[12.47px] translate-y-1/2 w-[19.568px]" data-node-id="I118790:104364;45928:94338;95981:241469;96014:53711">
                        <div className="flex-none rotate-20">
                          <div className="[word-break:break-word] flex flex-col font-['Montserrat:ExtraBold'] font-extrabold justify-center leading-[0] relative text-[12px] text-black text-center tracking-[-0.6px] whitespace-nowrap">
                            <p className="leading-[16px]">x2</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[44px] relative rounded-[8px] shrink-0 w-full" data-node-id="I118790:104364;45928:94338;95981:241470" data-name="L2">
                    <div className="-translate-y-1/2 absolute left-[8px] size-[56px] top-1/2" data-node-id="I118790:104364;45928:94338;95981:241471" data-name="_gift-profile">
                      <div className="absolute inset-[5.36%]" data-node-id="I118790:104364;45928:94338;95981:241471;95954:232837" data-name="image 50x50">
                        <div style={{position:'absolute',inset:0}} data-node-id="I118790:104364;45928:94338;95981:241471;95954:232849" data-name="kepka">
                          <div style={{position:'absolute',left:0,top:0,width:70.690773,height:106.023209,transformOrigin:'0 0',transform:'matrix(-0.965925753,0.258819133,0.258819133,0.965925753,44.921874457,-30.046875566)',maskImage:`url("${img0E3A1340ColorCorrection1}")`,maskRepeat:'no-repeat',maskSize:'39.668247px 45.467865px',maskPosition:'14.071px 27.371px'}} data-node-id="I118790:104364;45928:94338;95981:241471;95954:232851" data-name="0E3A1340_Color Correction 1">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img0E3A1340ColorCorrection2} />
                          </div>
                        </div>
                      </div>
                      <div className="-translate-x-1/2 absolute bottom-[7.83px] flex h-[24.954px] items-center justify-center left-[12.47px] translate-y-1/2 w-[32.723px]" data-node-id="I118790:104364;45928:94338;95981:241471;96014:53703">
                        <div className="flex-none rotate-20">
                          <div className="[word-break:break-word] flex flex-col font-['Montserrat:ExtraBold'] font-extrabold justify-center leading-[0] relative text-[12px] text-black text-center tracking-[-0.6px] whitespace-nowrap">
                            <p className="leading-[16px]">x2.1k</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[44px] relative rounded-[8px] shrink-0 w-full" data-node-id="I118790:104364;45928:94338;95981:241472" data-name="L3">
                    <div className="-translate-y-1/2 absolute left-[53px] size-[56px] top-1/2" data-node-id="I118790:104364;45928:94338;95981:241473" data-name="_gift-profile">
                      <div className="absolute inset-[5.36%]" data-node-id="I118790:104364;45928:94338;95981:241473;95954:232866" data-name="image 50x50">
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[46.149px] items-center justify-center left-[calc(50%-2.05px)] top-1/2 w-[40.668px]" data-node-id="I118790:104364;45928:94338;95981:241473;95954:232875">
                          <div className="flex-none rotate-[-3.34deg]">
                            <div className="h-[44px] relative w-[38.17px]" data-name="image 499">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage499} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="-translate-x-1/2 absolute bottom-[8.17px] flex h-[24.954px] items-center justify-center left-[12.47px] translate-y-1/2 w-[32.723px]" data-node-id="I118790:104364;45928:94338;95981:241473;96014:53719">
                        <div className="-rotate-20 flex-none">
                          <div className="[word-break:break-word] flex flex-col font-['Montserrat:ExtraBold'] font-extrabold justify-center leading-[0] relative text-[12px] text-black text-center tracking-[-0.6px] whitespace-nowrap">
                            <p className="leading-[16px]">x456</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-[40px] shrink-0 size-[132px]" data-node-id="I118790:104364;45928:94338;95981:241474" data-name="_AvatarXXLarge">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[40px] size-full" src={imgAvatarXxLarge} />
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col items-end justify-center min-w-px pb-[16px] relative" data-node-id="I118790:104364;45928:94338;95981:241475">
                  <div className="h-[44px] relative rounded-[8px] shrink-0 w-full" data-node-id="I118790:104364;45928:94338;95981:241476" data-name="R4">
                    <div className="-translate-y-1/2 absolute left-[12px] size-[56px] top-1/2" data-node-id="I118790:104364;45928:94338;95981:241477" data-name="_gift-profile">
                      <div className="absolute inset-[5.36%]" data-node-id="I118790:104364;45928:94338;95981:241477;95954:232821" data-name="image 50x50">
                        <div className="absolute flex items-center justify-center right-[-16.13px] size-[78.981px] top-[-13.7px]" data-node-id="I118790:104364;45928:94338;95981:241477;95954:232826">
                          <div className="-rotate-30 flex-none">
                            <div className="relative size-[57.818px]" data-name="image 496">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage496} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="-translate-x-1/2 absolute bottom-[7.87px] flex h-[18.554px] items-center justify-center left-[11.99px] translate-y-1/2 w-[31.28px]" data-node-id="I118790:104364;45928:94338;95981:241477;96014:53695">
                        <div className="-rotate-5 flex-none">
                          <div className="[word-break:break-word] flex flex-col font-['Montserrat:ExtraBold'] font-extrabold justify-center leading-[0] relative text-[12px] text-black text-center tracking-[-0.6px] whitespace-nowrap">
                            <p className="leading-[16px]">x4.5k</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[44px] relative rounded-[8px] shrink-0 w-full" data-node-id="I118790:104364;45928:94338;95981:241478" data-name="R5">
                    <GiftProfile className="-translate-y-1/2 absolute right-[8px] size-[56px] top-1/2" type="5" />
                  </div>
                  <div className="h-[44px] relative rounded-[8px] shrink-0 w-full" data-node-id="I118790:104364;45928:94338;95981:241480" data-name="R6">
                    <div className="-translate-y-1/2 absolute right-[53px] size-[56px] top-1/2" data-node-id="I118790:104364;45928:94338;95981:241481" data-name="_gift-profile">
                      <div className="absolute inset-[5.36%]" data-node-id="I118790:104364;45928:94338;95981:241481;95954:232793" data-name="image 50x50">
                        <div className="absolute left-[4px] size-[42px] top-[4px]" data-node-id="I118790:104364;45928:94338;95981:241481;95954:232795" data-name="image 496">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img alt="" className="absolute h-full left-[4.46%] max-w-none top-0 w-[92.14%]" src={imgImage497} />
                          </div>
                        </div>
                      </div>
                      <div className="-translate-x-1/2 absolute bottom-[8px] flex h-[20.966px] items-center justify-center left-[12px] translate-y-1/2 w-[32.323px]" data-node-id="I118790:104364;45928:94338;95981:241481;96014:53687">
                        <div className="-rotate-10 flex-none">
                          <div className="[word-break:break-word] flex flex-col font-['Montserrat:ExtraBold'] font-extrabold justify-center leading-[0] relative text-[12px] text-black text-center tracking-[-0.6px] whitespace-nowrap">
                            <p className="leading-[16px]">x200</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-translate-x-1/2 absolute flex h-[44.22px] items-center justify-center left-1/2 top-[110px] w-[159.668px]" data-node-id="I118790:104364;45928:94338;95981:241311">
                <div className="-rotate-3 flex-none">
                  <div className="bg-gradient-to-b border border-[#e4e4e4] border-solid content-stretch flex from-[#ebebeb] from-[26.061%] gap-[8px] h-[36px] items-center justify-end pl-px pr-[8px] relative rounded-[12px] to-[#b2b2b2]" data-name="Nickname">
                    <div className="bg-gradient-to-b border border-[#494949] border-solid from-[#666] relative rounded-[11px] shrink-0 size-[34px] to-black" data-node-id="I118790:104364;45928:94338;95981:241311;43997:352962" data-name="Icon">
                      <GlyphShare20 className="absolute left-[6px] overflow-clip size-[20px] top-[6px]" />
                    </div>
                    <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] lowercase opacity-90 relative shrink-0 text-[15px] text-black text-shadow-[0px_0.5px_0px_white] whitespace-nowrap" data-node-id="I118790:104364;45928:94338;95981:241311;43997:352964">
                      designerblink
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-node-id="I118790:104364;45928:94338;95981:241312" data-name="Info">
              <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-node-id="I118790:104364;45928:94338;95981:241313" data-name="Name">
                <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] lowercase min-w-full relative shrink-0 text-[24px] text-center text-white w-[min-content]" data-node-id="I118790:104364;45928:94338;95981:241314">
                  андрей зиновьев
                </p>
              </div>
              <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="I118790:104364;45928:94338;95981:241317" data-name="ProfileBio">
                <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro_Text:Regular'] leading-[1.2] min-w-px not-italic relative text-[17px] text-center text-white tracking-[-0.17px]" data-node-id="I118790:104364;45928:94338;95981:241317;45833:105844">
                  {` дизайнер из санкт-петербурга. мне`}
                  <br aria-hidden />
                  23 года, люблю собак. квадробер 🐶
                  <br aria-hidden />
                  {`вы смотрели 2 girls 1 cup? `}
                </p>
              </div>
              <ProfileCity className="content-stretch flex gap-[6px] items-center justify-center relative rounded-[8px] shrink-0 w-full" />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-node-id="I118790:104364;45874:84245" data-name="ProfileContent">
            <div className="content-stretch flex gap-[40px] items-center justify-center relative shrink-0 w-full" data-node-id="I118790:104364;45874:84245;45833:104763" data-name="Row1">
              <div className="flex flex-row items-center self-stretch" data-node-id="I118790:104364;45874:84245;45833:104764">
                <div className="content-stretch flex h-full items-center justify-center relative shrink-0" data-name="Left">
                  <ProfileFriends className="h-[146px] relative shrink-0 w-[140px]" />
                </div>
              </div>
              <div className="flex flex-row items-center self-stretch" data-node-id="I118790:104364;45874:84245;45833:104766">
                <div className="content-stretch flex flex-col h-full items-center relative shrink-0" data-name="Right">
                  <div className="h-[127px] relative shrink-0 w-[131px]" data-node-id="I118790:104364;45874:84245;45833:104767" data-name="ProfileViews">
                    <div className="absolute flex h-[124.797px] items-center justify-center left-[7.15px] top-[-3.4px] w-[115.707px]" data-node-id="I118790:104364;45874:84245;45833:104767;44788:188585">
                      <div className="-rotate-5 flex-none">
                        <div className="h-[116px] relative w-[106px]" data-name="Content">
                          <div className="absolute border border-[rgba(255,255,255,0.5)] border-solid left-0 rounded-[28px] size-[106px] top-[10px]" data-node-id="I118790:104364;45874:84245;45833:104767;44788:188582" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 106 106' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(5.565 7.897 -5.6499 0.56324 24.91 18.55)'><stop stop-color='rgba(195,67,255,1)' offset='0.34082'/><stop stop-color='rgba(157,111,255,1)' offset='0.67041'/><stop stop-color='rgba(119,155,255,1)' offset='1'/></radialGradient></defs></svg>\")" }} data-name="bg" />
                          <div className="-translate-x-1/2 -translate-y-full [word-break:break-word] absolute flex flex-col font-['Montserrat:ExtraBold'] font-extrabold justify-end leading-[0] left-1/2 text-[28px] text-black text-center top-[100px] tracking-[-1.4px] w-[98px]" data-node-id="I118790:104364;45874:84245;45833:104767;44788:188583">
                            <p className="leading-[32px]">87</p>
                          </div>
                          <div className="-translate-x-1/2 absolute left-1/2 size-[84px] top-[-13px]" data-node-id="I118790:104364;45874:84245;45833:104767;44788:188584" data-name="image_eyes_sticker">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageEyesSticker} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0 w-full" data-node-id="I118790:104364;45874:84245;45833:104768" data-name="Row2">
              <div className="flex flex-row items-center self-stretch" data-node-id="I118790:104364;45874:84245;45833:104769">
                <div className="content-stretch flex h-full items-center justify-center relative shrink-0" data-name="Left">
                  <div className="h-[154px] relative shrink-0 w-[150px]" data-node-id="I118790:104364;45874:84245;45833:104770" data-name="ProfileStars">
                    <div className="absolute h-[135px] left-[5px] top-[19px] w-[132px]" data-node-id="I118790:104364;45874:84245;45833:104770;44788:188665" data-name="image_stars_profile_light">
                      <div className="absolute inset-[-15.11%_-15.45%]">
                        <img alt="" className="block max-w-none size-full" src={imgImageStarsProfileLight} />
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center left-[-0.63px] size-[148.95px] top-0" data-node-id="I118790:104364;45874:84245;45833:104770;44788:188666">
                      <div className="flex-none rotate-[30.08deg]">
                        <div className="relative size-[109px]" data-name="image_stars_profile">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageStarsProfile} />
                        </div>
                      </div>
                    </div>
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[33.187px] items-center justify-center left-[106.75px] top-[106.12px] w-[15.673px]" data-node-id="I118790:104364;45874:84245;45833:104770;44788:188667">
                      <div className="flex-none rotate-[6.74deg]">
                        <div className="[word-break:break-word] flex flex-col font-['Montserrat:ExtraBold'] font-extrabold justify-center leading-[0] relative text-[28px] text-black text-center tracking-[-1.4px] whitespace-nowrap">
                          <p className="leading-[32px]">36</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-start justify-center relative shrink-0" data-node-id="I118790:104364;45874:84245;45833:104771" data-name="Right">
                <ProfileCheckins className="h-[168px] relative shrink-0 w-[144px]" />
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="I118790:104364;45874:84245;45944:138079" data-name="Row2">
              <div className="relative shrink-0 size-[128px]" data-node-id="I118790:104364;45874:84245;45944:139681" data-name="Days Since">
                <div className="-translate-x-1/2 absolute bottom-[36.93%] left-1/2 top-[22.66%] w-[60.003px]" data-node-id="I118790:104364;45874:84245;45944:141069" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
                </div>
                <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Montserrat:SemiBold'] font-semibold leading-[normal] left-1/2 lowercase text-[#494949] text-[15px] text-center top-[92px] whitespace-nowrap" data-node-id="I118790:104364;45874:84245;45944:140916">
                  в блинке с 8 марта 2023.
                  <br aria-hidden />
                  уже 604 дня вместе ☻
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex items-end justify-between left-0 pt-[56px] px-[16px] right-0 top-0" data-node-id="118790:104365" data-name="NavProfile">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-[358px]" data-node-id="118790:104366" data-name="ContentLeft">
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-node-id="118790:104367" data-name="button group">
            <SquareBtn40 className="backdrop-blur-[10px] bg-[rgba(0,0,0,0.25)] relative rounded-[12px] shrink-0 size-[40px]" set="Customize" />
            <SquareBtn40 className="backdrop-blur-[10px] bg-[rgba(0,0,0,0.25)] relative rounded-[12px] shrink-0 size-[40px]" />
          </div>
          <SquareBtn40 className="backdrop-blur-[10px] bg-[rgba(0,0,0,0.25)] relative rounded-[12px] shrink-0 size-[40px]" set="Settings" />
        </div>
      </div>
      <div className="absolute bottom-0 h-[34px] left-0 right-0" data-node-id="118790:104372" data-name="HomeIndicator">
        <div className="-translate-x-1/2 absolute bg-white bottom-[8px] h-[5px] left-1/2 rounded-[100px] w-[134px]" data-node-id="I118790:104372;1525:11083" data-name="Home Indicator" />
      </div>
      <div className="absolute h-[47px] left-0 overflow-clip right-0 top-0" data-node-id="118790:104373" data-name="StatusBar">
        <div className="absolute contents left-[27px] top-[14px]" data-node-id="I118790:104373;2604:14897" data-name="Left Side">
          <div className="absolute h-[21px] left-[27px] rounded-[24px] top-[14px] w-[54px]" data-node-id="I118790:104373;2604:14898" data-name="_StatusBar-time">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro_Text:Semibold'] h-[20px] leading-[22px] left-[27px] not-italic text-[17px] text-black text-center top-px tracking-[-0.408px] w-[54px]" data-node-id="I118790:104373;2604:14898;839:7100" style={{ fontFeatureSettings: '"case" 1' }}>
              4:20
            </p>
          </div>
        </div>
        <div className="absolute h-[13px] right-[26.6px] top-[19px] w-[77.401px]" data-node-id="I118790:104373;2604:14899" data-name="Right Side">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRightSide} />
        </div>
        <LogoNotch className="-translate-x-1/2 absolute content-stretch flex items-center left-[calc(50%-0.14px)] px-[8px] py-[5px] rounded-[100px] top-[11px] w-[81.718px]" />
      </div>
      <div className="absolute content-stretch flex items-start justify-center left-0 px-[36px] top-[744px] w-[390px]" data-node-id="118790:104374" data-name="tabbar">
        <div className="backdrop-blur-[5px] bg-[rgba(0,0,0,0.86)] border border-[rgba(255,255,255,0.15)] border-solid content-stretch flex gap-[10px] items-center pl-[12px] pr-[10px] py-[2px] relative rounded-[40px] shrink-0" data-node-id="118790:104375" data-name="tab bar">
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[10px] pt-[8px] relative shrink-0 w-[48px]" data-node-id="I118790:104375;107036:15665" data-name="Tab 1">
            <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[100px]" data-node-id="I118790:104375;107036:15666" data-name="Selection" />
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I118790:104375;107036:15667" data-name="glyph">
              <div className="-translate-y-1/2 absolute h-[24px] left-0 overflow-clip right-0 top-1/2" data-node-id="I118790:104375;107036:15667;110:35735" data-name="glyph_location_24">
                <div className="absolute h-[21px] left-[4.5px] top-[1.5px] w-[15.001px]" data-node-id="I118790:104375;107036:15667;110:35736" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold'] leading-[normal] lowercase min-w-full not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center tracking-[-0.24px] w-[min-content]" data-node-id="I118790:104375;107036:15668">
              карта
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[10px] pt-[8px] relative shrink-0 w-[48px]" data-node-id="I118790:104375;107036:15669" data-name="Tab 2">
            <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[100px]" data-node-id="I118790:104375;107036:15670" data-name="Selection" />
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I118790:104375;107036:15671" data-name="glyph/nav friends/24">
              <div className="absolute left-0 size-[24px] top-0" data-node-id="I118790:104375;107036:15671;15719:323796" data-name="glyph_nav_friends_24">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphNavFriends24} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold'] leading-[normal] lowercase min-w-full not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center tracking-[-0.24px] w-[min-content]" data-node-id="I118790:104375;107036:15672">
              друзья
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[10px] pt-[8px] relative shrink-0 w-[48px]" data-node-id="I118790:104375;107036:15673" data-name="Tab 3">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I118790:104375;107036:15674" data-name="glyph/message/24">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphMessage24} />
            </div>
            <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[100px]" data-node-id="I118790:104375;107036:15675" data-name="Selection" />
            <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold'] leading-[normal] lowercase min-w-full not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center tracking-[-0.24px] w-[min-content]" data-node-id="I118790:104375;107036:15676">
              чаты
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[10px] pt-[8px] relative shrink-0 w-[48px]" data-node-id="I118790:104375;107036:15677" data-name="Tab 4">
            <div className="relative shrink-0 size-[24px]" data-node-id="I118790:104375;107036:15679" data-name="glyph/market/24">
              <div className="absolute left-0 size-[24px] top-0" data-node-id="I118790:104375;107036:15679;115927:23904" data-name="glyph_market_24">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphMarket24} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold'] leading-[normal] lowercase min-w-full not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center tracking-[-0.24px] w-[min-content]" data-node-id="I118790:104375;107036:15680">
              маркет
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[10px] pt-[8px] relative shrink-0 w-[48px]" data-node-id="I118790:104375;107036:15681" data-name="Tab 5">
            <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[100px]" data-node-id="I118790:104375;107036:15682" data-name="Selection" />
            <div className="relative shrink-0 size-[24px]" data-node-id="I118790:104375;107036:15683">
              <div className="absolute left-0 size-[24px] top-0" data-node-id="I118790:104375;107036:15684">
                <div className="absolute inset-[-4.17%]">
                  <img alt="" className="block max-w-none size-full" height="26" src={imgEllipse395} width="26" />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold'] leading-[normal] lowercase min-w-full not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] w-[min-content]" data-node-id="I118790:104375;107036:15685">
              ты
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
