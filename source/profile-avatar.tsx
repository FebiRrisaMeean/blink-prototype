const assetPathPrefix = "./profile-assets";
const imgIconContactSize16 = `${assetPathPrefix}/c32e8.svg`;
const imgIconShareSize20 = `${assetPathPrefix}/f7d43.svg`;
const imgGlyph = `${assetPathPrefix}/106e7.svg`;
const imgVector = `${assetPathPrefix}/a9a28.svg`;
const imgVector1 = `${assetPathPrefix}/0eeed.svg`;
const imgCheckinImagePlace = `${assetPathPrefix}/4a467.png`;
const imgCheckinImagePlace1 = `${assetPathPrefix}/f5ce4.png`;
const imgCheckinImagePlace2 = `${assetPathPrefix}/f4188.png`;
const imgGlyphPinLocation16 = `${assetPathPrefix}/313d9.svg`;
const imgAvatarLarge = `${assetPathPrefix}/94bbe.png`;
const imgAvatarLarge1 = `${assetPathPrefix}/0867a.png`;
const imgAvatarLarge2 = `${assetPathPrefix}/779fb.png`;
const imgAvatarLarge3 = `${assetPathPrefix}/d8597.png`;
const imgImageEyesSticker = `${assetPathPrefix}/18153.png`;
const imgImageStarsProfile = `${assetPathPrefix}/e4157.png`;
const imgAvatarXxLarge = `${assetPathPrefix}/f4834.png`;
const imgShape = `${assetPathPrefix}/668a2.svg`;
const imgImageStarsProfileLight = `${assetPathPrefix}/55ae8.svg`;
const imgVector2 = `${assetPathPrefix}/39d76.svg`;
const imgGlyph1 = `${assetPathPrefix}/04995.svg`;
const imgRightSide = `${assetPathPrefix}/f1ffd.svg`;
const imgLogo = `${assetPathPrefix}/10608.svg`;

type GlyphProps = {
  className?: string;
  icon?: "contact" | "share";
  size?: "16" | "20";
};

function Glyph({ className, icon = "contact", size = "16" }: GlyphProps) {
  const isShareAnd20 = icon === "share" && size === "20";
  return (
    <div className={className || `overflow-clip relative ${isShareAnd20 ? "size-[20px]" : "size-[16px]"}`} id={isShareAnd20 ? "node-59228_549354" : "node-59228_548784"}>
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={isShareAnd20 ? imgIconShareSize20 : imgIconContactSize16} />
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
    <div className={className || "backdrop-blur-[10px] bg-[rgba(0,0,0,0.25)] relative rounded-[12px] size-[40px]"} id={isCustomize ? "node-59228_552155" : isEdit ? "node-59228_552153" : "node-59228_552147"}>
      <div className={`absolute overflow-clip ${isCustomize ? "inset-1/4" : "left-[10px] size-[20px] top-[10px]"}`} id={isCustomize ? "node-59228_552156" : isEdit ? "node-59228_552154" : "node-59228_552148"} data-name="glyph">
        {set === "Settings" && <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyph} />}
        {isEdit && (
          <div className="absolute inset-0 overflow-clip" data-node-id="I59228:552154;7046:162928" data-name="glyph_edit_20">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-0.04px)] size-[17.913px] top-[calc(50%+0.29px)]" data-node-id="I59228:552154;7046:162930">
              <div className="-rotate-45 flex-none">
                <div className="h-[6px] relative w-[19.333px]" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
                </div>
              </div>
            </div>
          </div>
        )}
        {isCustomize && (
          <div className="-translate-y-1/2 absolute content-stretch flex h-[20px] items-center justify-center left-0 overflow-clip right-0 top-1/2" data-node-id="I59228:552156;43997:83429" data-name="glyph_customize_20">
            <div className="h-[15.08px] relative shrink-0 w-[20px]" data-node-id="I59228:552156;43997:83433" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

type ProfileCheckinsContentProps = {
  className?: string;
  checkins?: "3+";
};

function ProfileCheckinsContent({ className, checkins = "3+" }: ProfileCheckinsContentProps) {
  return (
    <div className={className || "h-[134px] relative w-[144px]"} data-node-id="59228:553698">
      <div className="absolute flex h-[113.319px] items-center justify-center left-[68.69px] top-[16.87px] w-[74.168px]" data-node-id="59228:553699">
        <div className="flex-none rotate-8">
          <div className="border-3 border-solid border-white h-[106px] relative rounded-[10px] w-[60px]" data-name="CheckinImagePlace">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgCheckinImagePlace} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[108.029px] items-center justify-center left-[41.83px] top-[24.52px] w-[63.663px]" data-node-id="59228:553700">
        <div className="flex-none rotate-2">
          <div className="border-3 border-solid border-white h-[106px] relative rounded-[10px] w-[60px]" data-name="CheckinImagePlace">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgCheckinImagePlace1} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[109.927px] items-center justify-center left-0 top-[20.56px] w-[67.248px]" data-node-id="59228:553701">
        <div className="-rotate-4 flex-none">
          <div className="border-3 border-solid border-white h-[106px] relative rounded-[10px] w-[60px]" data-name="CheckinImagePlace">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgCheckinImagePlace2} />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[36.479px] items-center justify-center left-[70.63px] top-[18.6px] w-[53.684px]" data-node-id="59228:553702">
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
    <div className={className || "h-[168px] relative w-[144px]"} data-node-id="59228:553715" data-name="ProfileCheckinsDefault">
      <div className="absolute h-[28px] left-0 top-[140px] w-[143px]" data-node-id="59228:553716" data-name="Text">
        <div className="-translate-x-1/2 absolute flex h-[27.806px] items-center justify-center left-[calc(50%+5.38px)] top-[0.02px] w-[85.33px]" data-node-id="59228:553717">
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
    <div className={className || "h-[168px] relative w-[144px]"} data-node-id="59228:553744">
      <ProfileCheckinsDefault className="absolute h-[168px] left-0 top-0 w-[144px]" />
    </div>
  );
}

type ProfileCityProps = {
  className?: string;
  loading?: "No";
};

function ProfileCity({ className, loading = "No" }: ProfileCityProps) {
  return (
    <div className={className || "content-stretch flex gap-[6px] items-center justify-center relative rounded-[8px]"} data-node-id="59228:553284">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="59228:553285" data-name="glyph">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-node-id="I59228:553285;17513:201013" data-name="glyph_pin_location_16">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphPinLocation16} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] lowercase relative shrink-0 text-[15px] text-[rgba(255,255,255,0.5)] whitespace-nowrap" data-node-id="59228:553286">
        санкт-петербург
      </p>
    </div>
  );
}

function ImageYourProfileBg({ className }: { className?: string }) {
  return (
    <div className={className || "h-[844px] relative w-[390px]"} data-node-id="59228:548313" data-name="image_your_profile_bg">
      <div className="absolute inset-0" data-node-id="59228:548314" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 390 844' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-3.3811e-14 75.055 -68.008 2.9257e-15 195 0)'><stop stop-color='rgba(0,0,0,0)' offset='0.28267'/><stop stop-color='rgba(0,0,0,1)' offset='0.56364'/></radialGradient></defs></svg>\")" }} data-name="image_your_profile_bg" />
    </div>
  );
}

function ImageYourProfileCover({ className }: { className?: string }) {
  return <button className={className || "block cursor-pointer h-[844px] relative w-[390px]"} data-node-id="59228:548312" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 390 844' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(17.25 25.45 -26.598 18.028 60 38.5)'><stop stop-color='rgba(255,112,233,1)' offset='0'/><stop stop-color='rgba(212,85,244,1)' offset='0.1925'/><stop stop-color='rgba(169,57,255,1)' offset='0.385'/><stop stop-color='rgba(191,97,211,1)' offset='0.53875'/><stop stop-color='rgba(212,137,166,1)' offset='0.6925'/><stop stop-color='rgba(234,176,122,1)' offset='0.84625'/><stop stop-color='rgba(255,216,77,1)' offset='1'/></radialGradient></defs></svg>\")" }} data-name="image_your_profile_cover" />;
}

export default function Profile() {
  return (
    <div className="bg-black relative size-full" data-node-id="59228:562006" data-name="profile">
      <ImageYourProfileCover className="absolute h-[844px] left-0 right-0 top-0" />
      <ImageYourProfileBg className="absolute h-[844px] left-0 right-0 top-0" />
      <div className="absolute h-[844px] left-0 right-0 top-0" data-node-id="59228:562009" data-name="Scroll">
        <div className="absolute content-stretch flex flex-col h-[844px] items-center left-0 px-[16px] right-0 top-0" data-node-id="59228:562010" data-name="Content & Paddings">
          <div className="content-stretch flex flex-col gap-[28px] items-start pt-[266px] relative shrink-0 w-full" data-node-id="59228:562011" data-name="ProfileBase">
            <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-node-id="59228:562012" data-name="ProfileInfo">
              <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-node-id="59228:562013" data-name="Info">
                <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-node-id="59228:562014" data-name="Name">
                  <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] lowercase min-w-full relative shrink-0 text-[24px] text-center text-white w-[min-content]" data-node-id="59228:562015">
                    андрей зиновьев
                  </p>
                </div>
                <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="59228:562018" data-name="ProfileBio">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.2] min-w-px not-italic relative text-[17px] text-center text-white" data-node-id="I59228:562018;45833:105844">{` дизайнер из санкт-петербурга. мне 23 года, люблю собак. квадробер 🐶 вы смотрели 2 girls 1 cup? `}</p>
                </div>
                <ProfileCity className="content-stretch flex gap-[6px] items-center justify-center relative rounded-[8px] shrink-0 w-full" />
              </div>
            </div>
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-node-id="59228:562024" data-name="ProfileContent">
              <div className="content-stretch flex gap-[40px] items-center justify-center relative shrink-0 w-full" data-node-id="I59228:562024;45833:104763" data-name="Row1">
                <div className="flex flex-row items-center self-stretch" data-node-id="I59228:562024;45833:104764">
                  <div className="content-stretch flex h-full items-center justify-center relative shrink-0" data-name="Left">
                    <div className="h-[146px] relative shrink-0 w-[140px]" data-node-id="I59228:562024;45833:104765" data-name="ProfileFriends">
                      <div className="absolute content-stretch flex flex-col h-[146px] items-start justify-between left-0 top-0 w-[140px]" data-node-id="I59228:562024;45833:104765;45833:99671" data-name="ProfileFriendsDefault">
                        <div className="h-[106px] relative shrink-0 w-full" data-node-id="I59228:562024;45833:104765;45833:99671;44788:187856" data-name="ProfileFriendsContent">
                          <div className="absolute flex items-center justify-center left-[3px] size-[70.346px] top-[42.45px]" data-node-id="I59228:562024;45833:104765;45833:99671;44788:187856;44788:187758">
                            <div className="flex-none rotate-11">
                              <div className="relative size-[60px]" data-name="Avatar">
                                <div className="-translate-x-1/2 -translate-y-1/2 absolute border-3 border-solid border-white left-1/2 rounded-[16px] size-[60.001px] top-1/2" data-node-id="I59228:562024;45833:104765;45833:99671;44788:187856;44788:187758;5924:103853" data-name="AvatarLarge">
                                  <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[16px]">
                                    <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgAvatarLarge} />
                                    <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgAvatarLarge1} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute flex items-center justify-center left-[40.19px] size-[65.943px] top-[38.65px]" data-node-id="I59228:562024;45833:104765;45833:99671;44788:187856;44788:187759">
                            <div className="-rotate-6 flex-none">
                              <div className="relative size-[60px]" data-name="Avatar">
                                <div className="-translate-x-1/2 -translate-y-1/2 absolute border-3 border-solid border-white left-1/2 rounded-[16px] size-[60.001px] top-1/2" data-node-id="I59228:562024;45833:104765;45833:99671;44788:187856;44788:187759;5924:103853" data-name="AvatarLarge">
                                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarLarge2} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute flex items-center justify-center left-[72.14px] size-[62.057px] top-[52.59px]" data-node-id="I59228:562024;45833:104765;45833:99671;44788:187856;44788:187760">
                            <div className="-rotate-2 flex-none">
                              <div className="relative size-[60px]" data-name="Avatar">
                                <div className="-translate-x-1/2 -translate-y-1/2 absolute border-3 border-solid border-white left-1/2 rounded-[16px] size-[60.001px] top-1/2" data-node-id="I59228:562024;45833:104765;45833:99671;44788:187856;44788:187760;5924:103853" data-name="AvatarLarge">
                                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarLarge3} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[36.201px] items-center justify-center left-[37.5px] top-[39.95px] w-[37.92px]" data-node-id="I59228:562024;45833:104765;45833:99671;44788:187856;44788:187761">
                            <div className="flex-none rotate-[-7.57deg]">
                              <div className="[word-break:break-word] flex flex-col font-['Montserrat:ExtraBold'] font-extrabold justify-center leading-[0] relative text-[28px] text-black text-center tracking-[-1.4px] whitespace-nowrap">
                                <p className="leading-[32px]">27</p>
                              </div>
                            </div>
                          </div>
                          <div className="absolute flex h-[62.237px] items-center justify-center left-[76.2px] top-[10px] w-[59.927px]" data-node-id="I59228:562024;45833:104765;45833:99671;44788:187856;44788:187762">
                            <div className="flex-none rotate-12">
                              <div className="h-[53px] relative w-[50px]" data-name="BeautifulProfileCounter">
                                <div className="absolute left-[-3.85px] size-[57.527px] top-[-1.85px]" data-node-id="I59228:562024;45833:104765;45833:99671;44788:187856;44788:187762;43958:82146" data-name="Shape">
                                  <div className="absolute inset-[4.78%_6.71%]">
                                    <img alt="" className="block max-w-none size-full" src={imgShape} />
                                  </div>
                                </div>
                                <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Montserrat:Bold'] font-bold justify-center leading-[0] left-[calc(50%-1.84px)] lowercase text-[20px] text-black text-center top-[28.28px] whitespace-nowrap" data-node-id="I59228:562024;45833:104765;45833:99671;44788:187856;44788:187762;43958:88152">
                                  <p className="leading-[1.119]">+37</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="h-[28px] relative shrink-0 w-full" data-node-id="I59228:562024;45833:104765;45833:99671;44788:187870" data-name="Title">
                          <div className="-translate-x-1/2 absolute flex h-[27.178px] items-center justify-center left-[65.44px] top-[0.3px] w-[76.352px]" data-node-id="I59228:562024;45833:104765;45833:99671;44763:88011">
                            <div className="flex-none rotate-4">
                              <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[1.119] lowercase relative text-[20px] text-center text-white whitespace-nowrap">друзья</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch" data-node-id="I59228:562024;45833:104766">
                  <div className="content-stretch flex flex-col h-full items-center relative shrink-0" data-name="Right">
                    <div className="h-[127px] relative shrink-0 w-[131px]" data-node-id="I59228:562024;45833:104767" data-name="ProfileViews">
                      <div className="absolute flex h-[124.797px] items-center justify-center left-[7.15px] top-[-3.4px] w-[115.707px]" data-node-id="I59228:562024;45833:104767;44788:188585">
                        <div className="-rotate-5 flex-none">
                          <div className="h-[116px] relative w-[106px]" data-name="Content">
                            <div className="absolute border border-[rgba(255,255,255,0.5)] border-solid left-0 rounded-[28px] size-[106px] top-[10px]" data-node-id="I59228:562024;45833:104767;44788:188582" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 106 106' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(5.565 7.897 -5.6499 0.56324 24.91 18.55)'><stop stop-color='rgba(195,67,255,1)' offset='0.34082'/><stop stop-color='rgba(157,111,255,1)' offset='0.67041'/><stop stop-color='rgba(119,155,255,1)' offset='1'/></radialGradient></defs></svg>\")" }} data-name="bg" />
                            <div className="-translate-x-1/2 -translate-y-full [word-break:break-word] absolute flex flex-col font-['Montserrat:ExtraBold'] font-extrabold justify-end leading-[0] left-1/2 text-[28px] text-black text-center top-[100px] tracking-[-1.4px] w-[98px]" data-node-id="I59228:562024;45833:104767;44788:188583">
                              <p className="leading-[32px]">87</p>
                            </div>
                            <div className="-translate-x-1/2 absolute left-1/2 size-[84px] top-[-13px]" data-node-id="I59228:562024;45833:104767;44788:188584" data-name="image_eyes_sticker">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageEyesSticker} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0 w-full" data-node-id="I59228:562024;45833:104768" data-name="Row2">
                <div className="flex flex-row items-center self-stretch" data-node-id="I59228:562024;45833:104769">
                  <div className="content-stretch flex h-full items-center justify-center relative shrink-0" data-name="Left">
                    <div className="h-[154px] relative shrink-0 w-[150px]" data-node-id="I59228:562024;45833:104770" data-name="ProfileStars">
                      <div className="absolute h-[135px] left-[5px] top-[19px] w-[132px]" data-node-id="I59228:562024;45833:104770;44788:188665" data-name="image_stars_profile_light">
                        <div className="absolute inset-[-15.11%_-15.45%]">
                          <img alt="" className="block max-w-none size-full" src={imgImageStarsProfileLight} />
                        </div>
                      </div>
                      <div className="absolute flex items-center justify-center left-[-0.63px] size-[148.95px] top-0" data-node-id="I59228:562024;45833:104770;44788:188666">
                        <div className="flex-none rotate-[30.08deg]">
                          <div className="relative size-[109px]" data-name="image_stars_profile">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageStarsProfile} />
                          </div>
                        </div>
                      </div>
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[33.187px] items-center justify-center left-[106.75px] top-[106.12px] w-[15.673px]" data-node-id="I59228:562024;45833:104770;44788:188667">
                        <div className="flex-none rotate-[6.74deg]">
                          <div className="[word-break:break-word] flex flex-col font-['Montserrat:ExtraBold'] font-extrabold justify-center leading-[0] relative text-[28px] text-black text-center tracking-[-1.4px] whitespace-nowrap">
                            <p className="leading-[32px]">36</p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute flex h-[62.237px] items-center justify-center left-[2px] top-[19px] w-[59.927px]" data-node-id="I59228:562024;45833:104770;44788:188668">
                        <div className="-rotate-12 flex-none">
                          <div className="h-[53px] relative w-[50px]" data-name="BeautifulProfileCounter">
                            <div className="absolute left-[-3.85px] size-[57.527px] top-[-1.85px]" data-node-id="I59228:562024;45833:104770;44788:188668;43958:82146" data-name="Shape">
                              <div className="absolute inset-[4.78%_6.71%]">
                                <img alt="" className="block max-w-none size-full" src={imgShape} />
                              </div>
                            </div>
                            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Montserrat:Bold'] font-bold justify-center leading-[0] left-[calc(50%-1.84px)] lowercase text-[20px] text-black text-center top-[28.28px] whitespace-nowrap" data-node-id="I59228:562024;45833:104770;44788:188668;43958:88152">
                              <p className="leading-[1.119]">+2</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-start justify-center relative shrink-0" data-node-id="I59228:562024;45833:104771" data-name="Right">
                  <ProfileCheckins className="h-[168px] relative shrink-0 w-[144px]" />
                </div>
              </div>
              <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="I59228:562024;45944:138079" data-name="Row2">
                <div className="relative shrink-0 size-[128px]" data-node-id="I59228:562024;45944:139681" data-name="Days Since">
                  <div className="-translate-x-1/2 absolute bottom-[36.93%] left-1/2 top-[22.66%] w-[60.003px]" data-node-id="I59228:562024;45944:141069" data-name="Vector">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
                  </div>
                  <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Montserrat:SemiBold'] font-semibold leading-[normal] left-1/2 lowercase text-[#494949] text-[15px] text-center top-[92px] whitespace-nowrap" data-node-id="I59228:562024;45944:140916">
                    в блинке с 8 марта 2023.
                    <br aria-hidden />
                    уже 604 дня вместе ☻
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex h-[96px] items-end justify-between left-0 pt-[56px] px-[16px] right-0 top-0" data-node-id="59228:562025" data-name="NavProfile">
        <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-node-id="I59228:562025;43997:305483" data-name="ContentLeft">
          <SquareBtn40 className="backdrop-blur-[10px] bg-[rgba(0,0,0,0.25)] relative rounded-[12px] shrink-0 size-[40px]" set="Customize" />
          <SquareBtn40 className="backdrop-blur-[10px] bg-[rgba(0,0,0,0.25)] relative rounded-[12px] shrink-0 size-[40px]" />
        </div>
        <SquareBtn40 className="backdrop-blur-[10px] bg-[rgba(0,0,0,0.25)] relative rounded-[12px] shrink-0 size-[40px]" set="Settings" />
      </div>
      <div className="absolute backdrop-blur-[30px] bg-[rgba(0,0,0,0.8)] h-[844px] left-0 top-0 w-[390px]" data-node-id="59228:562026" data-name="Dark Bg" />
      <div className="-translate-x-1/2 absolute left-1/2 size-[328px] top-[224px]" data-node-id="59228:562027" data-name="Avatar">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[56px] size-[328px] top-1/2" data-node-id="59228:562028" data-name="AvatarXXLarge">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[56px] size-full" src={imgAvatarXxLarge} />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bg-gradient-to-b border border-[#e4e4e4] border-solid content-stretch flex from-[#ebebeb] from-[26.061%] gap-[8px] h-[36px] items-center justify-end left-1/2 pl-px pr-[8px] rounded-[12px] to-[#b2b2b2] top-[584px]" data-node-id="59228:562029" data-name="Nickname">
        <div className="bg-gradient-to-b border border-[#494949] border-solid from-[#666] relative rounded-[11px] shrink-0 size-[34px] to-black" data-node-id="59228:562030" data-name="Icon">
          <Glyph className="absolute left-[6px] overflow-clip size-[20px] top-[6px]" icon="share" size="20" />
        </div>
        <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] lowercase opacity-90 relative shrink-0 text-[15px] text-black text-shadow-[0px_0.5px_0px_white] whitespace-nowrap" data-node-id="59228:562032">
          designerblink
        </p>
      </div>
      <div className="absolute bottom-0 h-[128px] left-0 right-0" data-node-id="59228:562033" data-name="CloseWindowBottom">
        <div className="absolute bottom-0 flex h-[128px] items-center justify-center left-0 right-0" data-node-id="I59228:562033;43958:82136" style={{ containerType: "size" }}>
          <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
            <div className="bg-gradient-to-b from-black relative size-full to-[rgba(0,0,0,0)]" data-name="Gradient Black" />
          </div>
        </div>
        <button className="-translate-x-1/2 absolute backdrop-blur-[10px] bg-gradient-to-b border border-[#e4e4e4] border-solid content-stretch cursor-pointer flex from-[#ebebeb] from-[26.061%] items-center justify-center left-1/2 rounded-[12px] size-[46px] to-[#b2b2b2] top-[17px]" data-node-id="I59228:562033;43997:352998" data-name="SquareButton">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="I59228:562033;43997:352998;43997:352985" data-name="glyph">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyph1} />
          </div>
        </button>
      </div>
      <div className="absolute bottom-0 h-[34px] left-0 right-0" data-node-id="59228:562034" data-name="HomeIndicator">
        <div className="-translate-x-1/2 absolute bg-white bottom-[8px] h-[5px] left-1/2 rounded-[100px] w-[134px]" data-node-id="I59228:562034;1525:11083" data-name="Home Indicator" />
      </div>
      <div className="absolute h-[47px] left-0 overflow-clip right-0 top-0" data-node-id="59228:562035" data-name="StatusBar">
        <div className="absolute contents left-[27px] top-[14px]" data-node-id="I59228:562035;2604:15044" data-name="Left Side">
          <div className="absolute h-[21px] left-[27px] rounded-[24px] top-[14px] w-[54px]" data-node-id="I59228:562035;2604:15045" data-name="_StatusBar-time">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro_Text:Semibold'] h-[20px] leading-[22px] left-[27px] not-italic text-[17px] text-center text-white top-px tracking-[-0.408px] w-[54px]" data-node-id="I59228:562035;2604:15045;839:7100" style={{ fontFeatureSettings: '"case" 1' }}>
              4:20
            </p>
          </div>
        </div>
        <div className="absolute h-[13px] right-[26.6px] top-[19px] w-[77.401px]" data-node-id="I59228:562035;2604:15046" data-name="Right Side">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRightSide} />
        </div>
        <div className="-translate-x-1/2 absolute h-[26px] left-1/2 top-[11px] w-[78.027px]" data-node-id="I59228:562035;43997:372556" data-name="Logo">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogo} />
        </div>
      </div>
    </div>
  );
}
