const assetPathPrefix = "https://www.figma.com/api/mcp/asset/5ad2d11f-5337-4587-b853-13b11811844a";
const imgLogo = `${assetPathPrefix}/f548a.svg`;
const imgRightSide = `${assetPathPrefix}/d00ef.svg`;
const imgGlyphCreateChat24 = `${assetPathPrefix}/a3386.svg`;
const imgIconChatWhaddupReplyGray16 = `${assetPathPrefix}/78fde.svg`;
const imgVector = `${assetPathPrefix}/c01af.svg`;
const imgIconReplyGray16 = `${assetPathPrefix}/7ef55.svg`;
const imgIconCheckinGray16 = `${assetPathPrefix}/bca05.svg`;
const imgVector1 = `${assetPathPrefix}/353eb.svg`;
const imgGlyphPagerSmall8 = `${assetPathPrefix}/acd1d.svg`;
const imgGlyphFolder20 = `${assetPathPrefix}/b48fe.svg`;
const imgAvatarMedium = `${assetPathPrefix}/2207c.png`;
const imgImage2 = `${assetPathPrefix}/8c68c.png`;
const imgAvatarMedium1 = `${assetPathPrefix}/3ce4a.png`;
const imgAvatarMedium2 = `${assetPathPrefix}/02ae6.png`;
const imgAvatarMedium3 = `${assetPathPrefix}/be74c.png`;
const imgAvatarMedium4 = `${assetPathPrefix}/8b5b1.png`;
const imgAvatarMedium5 = `${assetPathPrefix}/94bbe.png`;
const imgShowHideImage = `${assetPathPrefix}/4a467.png`;
const imgAvatarMedium6 = `${assetPathPrefix}/d8597.png`;
const imgEllipse395 = `${assetPathPrefix}/dc87c.png`;
const imgGlyphClose16 = `${assetPathPrefix}/13d6f.svg`;
const imgOnlineStatus = `${assetPathPrefix}/03699.svg`;
const imgSubtract = `${assetPathPrefix}/88c3a.svg`;
const imgGlyphPin24 = `${assetPathPrefix}/53ee2.svg`;
const imgIconSticker16 = `${assetPathPrefix}/e7c0e.svg`;
const imgStar1 = `${assetPathPrefix}/d4deb.svg`;
const imgItem = `${assetPathPrefix}/72ccc.svg`;
const imgAnimationGlowPa = `${assetPathPrefix}/003e6.svg`;
const imgAnimationGlowPa1 = `${assetPathPrefix}/ba172.svg`;
const imgGlyphSearch20 = `${assetPathPrefix}/42b45.svg`;
const imgVector2 = `${assetPathPrefix}/1ec6a.svg`;
const imgGlyphNavFriends24 = `${assetPathPrefix}/7ec30.svg`;
const imgGlyphMessage24 = `${assetPathPrefix}/953f7.svg`;
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

type StatusBarProps = {
  className?: string;
  darkMode?: "true";
  type?: "New";
};

function StatusBar({ className, darkMode = "true", type = "New" }: StatusBarProps) {
  return (
    <div className={className || "h-[47px] overflow-clip relative w-[390px]"} data-node-id="2604:15070">
      <div className="absolute contents left-[27px] top-[14px]" data-node-id="2604:15044" data-name="Left Side">
        <div className="absolute h-[21px] left-[27px] rounded-[24px] top-[14px] w-[54px]" data-node-id="2604:15045" data-name="_StatusBar-time">
          <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro_Text:Semibold'] h-[20px] leading-[22px] left-[27px] not-italic text-[17px] text-center text-white top-px tracking-[-0.408px] w-[54px]" data-node-id="I2604:15045;839:7100" style={{ fontFeatureSettings: '"case" 1' }}>
            4:20
          </p>
        </div>
      </div>
      <div className="absolute h-[13px] right-[26.6px] top-[19px] w-[77.401px]" data-node-id="2604:15046" data-name="Right Side">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRightSide} />
      </div>
      <LogoNotch className="-translate-x-1/2 absolute content-stretch flex items-center left-[calc(50%-0.14px)] px-[8px] py-[5px] rounded-[100px] top-[11px] w-[81.718px]" />
    </div>
  );
}

function GlyphCreateChat24({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-node-id="6894:133550" data-name="glyph/create chat/24">
      <div className="absolute left-0 size-[24px] top-0" data-node-id="6894:133551" data-name="glyph_create_chat_24">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphCreateChat24} />
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
  icon?: "chat: whaddup reply gray" | "amb status";
  size?: "16";
};

function Icon({ className, icon = "amb status", size = "16" }: IconProps) {
  const isAmbStatus = icon === "amb status";
  return (
    <div className={className || "relative size-[16px]"} id={isAmbStatus ? "node-38771_321895" : "node-36322_341583"}>
      {icon === "chat: whaddup reply gray" && (
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-node-id="36322:341584" data-name="icon_chat_whaddup_reply_gray_16">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChatWhaddupReplyGray16} />
        </div>
      )}
      {isAmbStatus && (
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
    </div>
  );
}

type Icon1Props = {
  className?: string;
  icon?: "chat: checkin gray" | "chat: reply gray" | "amb status";
  size?: "16";
};

function Icon1({ className, icon = "amb status", size = "16" }: Icon1Props) {
  const isAmbStatus = icon === "amb status";
  const isChatCheckinGray = icon === "chat: checkin gray";
  return (
    <div className={className || "relative size-[16px]"} id={isAmbStatus ? "node-111830_8368" : isChatCheckinGray ? "node-111830_8334" : "node-111830_8239"}>
      {icon === "chat: reply gray" && (
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-node-id="111830:8240" data-name="icon_reply_gray_16">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconReplyGray16} />
        </div>
      )}
      {isChatCheckinGray && (
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-node-id="111830:8335" data-name="icon_checkin_gray_16">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheckinGray16} />
        </div>
      )}
      {isAmbStatus && (
        <div className="-translate-x-1/2 absolute bottom-0 left-1/2 size-[16px]" data-node-id="111830:8369" data-name="icon_amb_status_16">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[16.551px] items-center justify-center left-[calc(50%-0.34px)] top-[calc(50%+0.28px)] w-[18.185px]" data-node-id="111830:8373">
            <div className="flex-none rotate-10">
              <div className="h-[13.985px] relative w-[16px]" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

type GlyphProps = {
  className?: string;
  icon?: "pager_small";
  size?: "8";
};

function Glyph({ className, icon = "pager_small", size = "8" }: GlyphProps) {
  return (
    <div className={className || "overflow-clip relative size-[8px]"} data-node-id="110818:16748">
      <div className="absolute left-0 size-[8px] top-0" data-node-id="110818:18336" data-name="glyph_pager_small_8">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphPagerSmall8} />
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

function GlyphFolder20({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[20px]"} data-node-id="110803:664869" data-name="glyph/folder/20">
      <div className="absolute left-0 size-[20px] top-0" data-node-id="110803:664882" data-name="glyph_folder_20">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphFolder20} />
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-black overflow-clip relative rounded-[40px] size-full" data-node-id="119163:20351" data-name="список чатов">
      <div className="absolute bg-black content-stretch flex flex-col items-center justify-center left-0 top-[125px]" data-node-id="119163:20388" data-name="messenger">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-node-id="119163:20389" data-name="Content">
          <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-node-id="119163:20390" data-name="Tabs+banner">
            <div className="bg-black content-stretch flex gap-[var(--tab-group\/item-gap-\(with-counter\),20px)] h-[54px] items-center overflow-x-auto overflow-y-clip px-[16px] py-[8px] relative shrink-0 w-[390px]" data-node-id="119163:20391" data-name="tab group">
              <div className="h-[54px] relative shrink-0 w-[20px]" data-node-id="I119163:20391;111326:131930" data-name="left.icon.spacer" />
              <div className="content-stretch flex gap-[4px] h-[38px] items-center py-[8px] relative rounded-[4px] shrink-0" data-node-id="I119163:20391;111326:116062" data-name="1">
                <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold'] font-semibold justify-center leading-[0] lowercase relative shrink-0 text-[20px] text-white whitespace-nowrap" data-node-id="I119163:20391;111326:116062;83036:34994">
                  <p className="leading-[1.119]">все чаты</p>
                </div>
                <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex h-[22px] items-center justify-center pt-px px-[8px] relative rounded-[16px] shrink-0" data-node-id="I119163:20391;111326:116062;84305:256294" data-name="counter">
                  <div className="[word-break:break-word] flex flex-col font-['SF_Pro_Text:Bold'] justify-center leading-[0] lowercase not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap" data-node-id="I119163:20391;111326:116062;84305:256295">
                    <p className="leading-[20px]">3</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex h-[38px] items-center py-[8px] relative rounded-[4px] shrink-0" data-node-id="I119163:20391;111326:116063" data-name="2">
                <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold'] font-semibold justify-center leading-[0] lowercase relative shrink-0 text-[20px] text-[rgba(255,255,255,0.5)] whitespace-nowrap" data-node-id="I119163:20391;111326:116063;85999:176931">
                  <p className="leading-[1.119]">даняколбасен</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[4px] h-[38px] items-center py-[8px] relative rounded-[4px] shrink-0" data-node-id="I119163:20391;111326:116064" data-name="3">
                <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold'] font-semibold justify-center leading-[0] lowercase relative shrink-0 text-[20px] text-[rgba(255,255,255,0.5)] whitespace-nowrap" data-node-id="I119163:20391;111326:116064;83036:34984">
                  <p className="leading-[1.119]">папка</p>
                </div>
                <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex h-[22px] items-center justify-center pt-px px-[8px] relative rounded-[16px] shrink-0" data-node-id="I119163:20391;111326:116064;83036:34985" data-name="counter">
                  <div className="[word-break:break-word] flex flex-col font-['SF_Pro_Text:Bold'] justify-center leading-[0] lowercase not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.5)] whitespace-nowrap" data-node-id="I119163:20391;111326:116064;83036:34986">
                    <p className="leading-[20px]">8</p>
                  </div>
                </div>
              </div>
              <div className="absolute h-[54px] left-[16px] top-0 w-[20px]" data-node-id="I119163:20391;111326:131600" data-name="LeftIcon.container">
                <div className="-translate-x-1/2 absolute bg-gradient-to-l from-[rgba(0,0,0,0)] h-[54px] left-[calc(50%+2px)] to-[35.072%] to-black top-0 w-[56px]" data-node-id="I119163:20391;111326:131601" data-name="Fade" />
                <GlyphFolder20 className="-translate-x-1/2 absolute left-1/2 overflow-clip size-[20px] top-[17px]" />
              </div>
            </div>
            <div className="backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] border-2 border-[#242424] border-solid content-stretch flex items-center justify-between overflow-clip pl-[16px] pr-[22px] py-[10px] relative rounded-[24px] shrink-0 w-[358px]" data-node-id="119163:20392" data-name="ChatListBanner">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="119163:20393" data-name="Content">
                <div className="relative shrink-0 size-[32px]" data-node-id="119163:20394" data-name="_Avatar">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[11.13px] size-[32px] top-1/2" data-node-id="I119163:20394;3951:109567" data-name="_AvatarMedium">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[11.13px] size-full" src={imgAvatarMedium} />
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start justify-center lowercase relative shrink-0 whitespace-nowrap" data-node-id="119163:20395" data-name="Text">
                  <p className="font-['Montserrat:SemiBold'] font-semibold leading-[1.119] relative shrink-0 text-[18px] text-white" data-node-id="119163:20396">
                    у maxklumchuk др!
                  </p>
                  <p className="font-['SF_Pro_Text:Regular'] leading-[1.2] not-italic relative shrink-0 text-[#808080] text-[16px] tracking-[-0.32px]" data-node-id="119163:20397">
                    отправь подарок
                  </p>
                </div>
                <div className="absolute flex items-center justify-center left-[2.58px] size-[43.389px] top-[-14.84px]" data-node-id="119163:20398">
                  <div className="flex-none rotate-[-61.51deg]">
                    <div className="relative size-[32px]" data-name="image 2">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center relative shrink-0" data-node-id="119163:20399">
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="overflow-clip relative size-[16px]" data-name="glyph/close/16">
                    <div className="absolute left-0 size-[16px] top-0" data-node-id="I119163:20399;5241:89003" data-name="glyph_close_16">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphClose16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black content-stretch flex flex-col items-start justify-center relative shrink-0" data-node-id="119163:20400" data-name="messenger">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="119163:20401" data-name="ChatList">
              <div className="content-stretch flex flex-col h-[62px] items-start justify-center py-[87px] relative shrink-0" data-node-id="119163:20402" data-name="ContactCard">
                <div className="content-stretch flex flex-col h-[70px] items-start justify-center relative shrink-0 w-[390px]" data-node-id="I119163:20402;1744:164274" data-name="ContactCard">
                  <div className="content-stretch flex gap-[16px] h-[62px] items-center px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="I119163:20402;1744:164274;6671:138820" data-name="ContactCard / Base">
                    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-node-id="I119163:20402;1744:164274;6671:138820;6651:127145" data-name="ContentLeft">
                      <div className="relative shrink-0 size-[46px]" data-node-id="I119163:20402;1744:164274;6671:138820;6651:127146" data-name="Show/Hide Avatar">
                        <div className="absolute left-0 size-[46px] top-0" data-node-id="I119163:20402;1744:164274;6671:138820;6651:127147" data-name="Avatar">
                          <div className="absolute left-0 size-[46px] top-0" data-node-id="I119163:20402;1744:164274;6671:138820;6651:127147;2001:61326" data-name="Avatar">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[16px] size-[46.001px] top-1/2" data-node-id="I119163:20402;1744:164274;6671:138820;6651:127147;2001:61326;3951:109567" data-name="_AvatarMedium">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarMedium1} />
                            </div>
                          </div>
                          <div className="absolute left-[32px] size-[18px] top-[32px]" data-node-id="I119163:20402;1744:164274;6671:138820;6651:127147;2001:61329" data-name="online_status">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgOnlineStatus} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="I119163:20402;1744:164274;6671:138820;6651:127148" data-name="ContactCard / Title">
                        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I119163:20402;1744:164274;6671:138820;6651:127148;13893:187677" data-name="Title">
                          <p className="[word-break:break-word] bg-clip-text font-['Montserrat:SemiBold'] font-semibold leading-[1.119] lowercase relative shrink-0 text-[16px] text-[transparent] whitespace-nowrap" data-node-id="I119163:20402;1744:164274;6671:138820;6651:127148;6567:124383" style={{ backgroundImage: "linear-gradient(-89.99999996533654deg, rgb(48, 229, 147) 31.674%, rgb(255, 106, 200) 82.81%)" }}>
                            маша
                          </p>
                          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I119163:20402;1744:164274;6671:138820;6651:127148;13893:208972" data-name="Show/Hide Ambassador Badge">
                            <Icon1 className="relative shrink-0 size-[16px]" />
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I119163:20402;1744:164274;6671:138820;6651:127148;6638:126608" data-name="Show/Hide SubTitle">
                          <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I119163:20402;1744:164274;6671:138820;6651:127148;6638:126626" data-name="ContactCard / Subtitle">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I119163:20402;1744:164274;6671:138820;6651:127148;6638:126626;6656:130265" data-name="Text">
                              <div className="relative shrink-0 size-[16px]" data-node-id="I119163:20402;1744:164274;6671:138820;6651:127148;6638:126626;6656:130464" data-name="Show/Hide ChatIcon">
                                <div className="absolute left-0 overflow-clip size-[16px] top-0" data-node-id="I119163:20402;1744:164274;6671:138820;6651:127148;6638:126626;6656:129898" data-name="ChatIcon">
                                  <div className="absolute left-[2px] size-[12px] top-[2px]" data-node-id="I119163:20402;1744:164274;6671:138820;6651:127148;6638:126626;6656:129898;6436:157219" data-name="Subtract">
                                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSubtract} />
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I119163:20402;1744:164274;6671:138820;6651:127148;6638:126626;6699:135282" data-name="ContactCard / Subtitle / Text">
                                <p className="[word-break:break-word] font-['SF_Pro_Text:Medium'] leading-[1.2] lowercase not-italic relative shrink-0 text-[#808080] text-[16px] whitespace-nowrap" data-node-id="I119163:20402;1744:164274;6671:138820;6651:127148;6638:126626;6699:135282;6699:135269">
                                  шар
                                </p>
                              </div>
                            </div>
                            <div className="[word-break:break-word] content-stretch flex font-['SF_Pro_Text:Regular'] gap-[4px] items-center leading-[1.2] lowercase not-italic relative shrink-0 text-[#808080] text-[16px] whitespace-nowrap" data-node-id="I119163:20402;1744:164274;6671:138820;6651:127148;6638:126626;6671:145702" data-name="Show/Hide Date">
                              <p className="relative shrink-0" data-node-id="I119163:20402;1744:164274;6671:138820;6651:127148;6638:126626;6671:141808">
                                •
                              </p>
                              <p className="relative shrink-0" data-node-id="I119163:20402;1744:164274;6671:138820;6651:127148;6638:126626;6638:126357">
                                вчера
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[10px] items-start px-[16px] relative shrink-0" data-node-id="I119163:20402;1744:164274;6671:138820;6651:127178" data-name="ContentRight">
                      <div className="content-stretch flex flex-col h-[36px] items-start relative shrink-0 w-[113px]" data-node-id="I119163:20402;1744:164274;6671:138820;6651:127183" data-name="Show/Hide ContentRight" />
                    </div>
                  </div>
                </div>
              <div className="-translate-y-1/2 absolute right-[16px] size-[24px] top-1/2" data-node-id="119163:20403">
                <div className="absolute left-0 size-[24px] top-0" data-node-id="I119163:20403;29460:12619" data-name="glyph_pin_24">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphPin24} />
                </div>
              </div>
              </div>

              <div className="content-stretch flex flex-col h-[62px] items-start justify-center py-[87px] relative shrink-0" data-node-id="119163:20404" data-name="ContactCard">
                <div className="content-stretch flex flex-col h-[70px] items-start justify-center relative shrink-0 w-[390px]" data-node-id="119163:20405" data-name="ContactCard">
                  <div className="content-stretch flex gap-[16px] h-[62px] items-center px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="119163:20406" data-name="ContactCard / Base">
                    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-node-id="119163:20408" data-name="ContentLeft">
                      <div className="relative shrink-0 size-[46px]" data-node-id="119163:20413" data-name="Show/Hide Avatar">
                        <div className="absolute left-0 size-[46px] top-0" data-node-id="119163:20414" data-name="_Avatar">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[16px] size-[46.001px] top-1/2" data-node-id="I119163:20414;3951:109567" data-name="_AvatarMedium">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarMedium2} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="119163:20415" data-name="ContactCard / Title">
                        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I119163:20415;13893:187677" data-name="Title">
                          <UserName className="content-stretch flex items-center justify-center relative shrink-0" />
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I119163:20415;6638:126608" data-name="Show/Hide SubTitle">
                          <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I119163:20415;6638:126626" data-name="ContactCard / Subtitle">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I119163:20415;6638:126626;6656:130265" data-name="Text">
                              <div className="relative shrink-0 size-[16px]" data-node-id="I119163:20415;6638:126626;6656:130464" data-name="Show/Hide ChatIcon">
                                <div className="absolute left-0 overflow-clip size-[16px] top-0" data-node-id="I119163:20415;6638:126626;6656:129898" data-name="ChatIcon">
                                  <div className="absolute left-0 size-[16px] top-0" data-node-id="I119163:20415;6638:126626;6656:129898;6671:146765" data-name="icon">
                                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-node-id="I119163:20415;6638:126626;6656:129898;6671:146765;6671:146754" data-name="icon_sticker_16">
                                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSticker16} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I119163:20415;6638:126626;6699:135282" data-name="ContactCard / Subtitle / Text">
                                <p className="[word-break:break-word] bg-clip-text font-['SF_Pro_Text:Medium'] leading-[1.2] lowercase not-italic relative shrink-0 text-[16px] text-[transparent] whitespace-nowrap" data-node-id="I119163:20415;6638:126626;6699:135282;6699:135269" style={{ backgroundImage: "linear-gradient(173.5806071433692deg, rgb(255, 117, 225) 32.545%, rgb(255, 91, 209) 100%)" }}>
                                  аудиостикер
                                </p>
                              </div>
                            </div>
                            <div className="[word-break:break-word] content-stretch flex font-['SF_Pro_Text:Regular'] gap-[4px] items-center leading-[1.2] lowercase not-italic relative shrink-0 text-[#808080] text-[16px] whitespace-nowrap" data-node-id="I119163:20415;6638:126626;6671:145702" data-name="Show/Hide Date">
                              <p className="relative shrink-0" data-node-id="I119163:20415;6638:126626;6671:141808">
                                •
                              </p>
                              <p className="relative shrink-0" data-node-id="I119163:20415;6638:126626;6638:126357">
                                27.06
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[10px] items-start px-[16px] relative shrink-0" data-node-id="119163:20416" data-name="ContentRight">
                      <div className="content-stretch flex flex-col h-[36px] items-start relative shrink-0 w-[113px]" data-node-id="119163:20417" data-name="Show/Hide ContentRight" />
                      <div className="relative shrink-0 size-[24px]" data-node-id="119163:20423" data-name="Show/Hide MessageCounter">
                        <div className="absolute left-0 size-[24px] top-0" data-node-id="119163:20424" data-name="Counter">
                          <div className="absolute left-0 size-[38px] top-0" data-node-id="I119163:20424;1780:164923">
                            <div className="absolute inset-[4.42%_6.39%]">
                              <img alt="" className="block max-w-none size-full" src={imgStar1} />
                            </div>
                          </div>
                          <div className="-translate-x-1/2 absolute flex h-[21.642px] items-center justify-center left-[19.01px] top-[8.28px] w-[13.94px]" data-node-id="I119163:20424;1780:164924">
                            <div className="-rotate-12 flex-none">
                              <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[normal] relative text-[17px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                1
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[62px] relative shrink-0 w-[390px]" data-node-id="119163:20429">
                <div className="absolute content-stretch flex flex-col h-[70px] items-start justify-center left-0 py-[87px] top-[-4px]" data-node-id="119163:20430" data-name="ContactCard">
                  <div className="content-stretch flex flex-col h-[70px] items-start justify-center relative shrink-0 w-[390px]" data-node-id="I119163:20430;1744:164274" data-name="ContactCard">
                    <div className="content-stretch flex gap-[16px] h-[62px] items-center px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="I119163:20430;1744:164274;6671:138820" data-name="ContactCard / Base">
                      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-node-id="I119163:20430;1744:164274;6671:138820;6651:127145" data-name="ContentLeft">
                        <div className="relative shrink-0 size-[46px]" data-node-id="I119163:20430;1744:164274;6671:138820;6651:127146" data-name="Show/Hide Avatar">
                          <div className="absolute left-0 size-[46px] top-0" data-node-id="I119163:20430;1744:164274;6671:138820;6651:127147" data-name="Avatar">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[16px] size-[46.001px] top-1/2" data-node-id="I119163:20430;1744:164274;6671:138820;6651:127147;3951:109567" data-name="_AvatarMedium">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarMedium} />
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="I119163:20430;1744:164274;6671:138820;6651:127148" data-name="ContactCard / Title">
                          <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I119163:20430;1744:164274;6671:138820;6651:127148;13893:187677" data-name="Title">
                            <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[1.119] lowercase relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="I119163:20430;1744:164274;6671:138820;6651:127148;6567:124383">
                              капибар
                            </p>
                          </div>
                          <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I119163:20430;1744:164274;6671:138820;6651:127148;6638:126608" data-name="Show/Hide SubTitle">
                            <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I119163:20430;1744:164274;6671:138820;6651:127148;6638:126626" data-name="ContactCard / Subtitle">
                              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I119163:20430;1744:164274;6671:138820;6651:127148;6638:126626;6656:130265" data-name="Text">
                                <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I119163:20430;1744:164274;6671:138820;6651:127148;6638:126626;6699:135282" data-name="ContactCard / Subtitle / Text">
                                  <p className="[word-break:break-word] font-['SF_Pro_Text:Regular'] leading-[0] lowercase not-italic relative shrink-0 text-[#808080] text-[0px] whitespace-nowrap" data-node-id="I119163:20430;1744:164274;6671:138820;6651:127148;6638:126626;6699:135282;6699:135269">
                                    <span className="leading-[1.2] text-[16px] text-white">ты:</span>
                                    <span className="leading-[1.2] text-[16px]">{` приветик`}</span>
                                  </p>
                                </div>
                              </div>
                              <div className="[word-break:break-word] content-stretch flex font-['SF_Pro_Text:Regular'] gap-[4px] items-center leading-[1.2] lowercase not-italic relative shrink-0 text-[#808080] text-[16px] whitespace-nowrap" data-node-id="I119163:20430;1744:164274;6671:138820;6651:127148;6638:126626;6671:145702" data-name="Show/Hide Date">
                                <p className="relative shrink-0" data-node-id="I119163:20430;1744:164274;6671:138820;6651:127148;6638:126626;6671:141808">
                                  •
                                </p>
                                <p className="relative shrink-0" data-node-id="I119163:20430;1744:164274;6671:138820;6651:127148;6638:126626;6638:126357">
                                  27.06
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[10px] items-center pl-[16px] pr-[12px] relative shrink-0" data-node-id="I119163:20430;1744:164274;6671:138820;6651:127178" data-name="ContentRight">
                        <div className="content-stretch flex flex-col h-[36px] items-start relative shrink-0 w-[113px]" data-node-id="I119163:20430;1744:164274;6671:138820;6651:127183" data-name="Show/Hide ContentRight" />
                        <div className="relative shrink-0 size-[16px]" data-node-id="I119163:20430;1744:164274;6671:138820;6656:132271" data-name="Show/Hide Sending">
                          <div className="absolute content-stretch flex items-center left-0 p-[4px] size-[16px] top-0" data-node-id="I119163:20430;1744:164274;6671:138820;6656:131802" data-name="icon_right">
                            <Glyph className="overflow-clip relative shrink-0 size-[8px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-[62px] items-start justify-center py-[87px] relative shrink-0" data-node-id="119163:20431" data-name="ContactCard">
                <div className="content-stretch flex flex-col h-[70px] items-start justify-center relative shrink-0 w-[390px]" data-node-id="I119163:20431;1744:164274" data-name="ContactCard">
                  <div className="content-stretch flex gap-[16px] h-[62px] items-center px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="I119163:20431;1744:164274;6671:138820" data-name="ContactCard / Base">
                    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-node-id="I119163:20431;1744:164274;6671:138820;6651:127145" data-name="ContentLeft">
                      <div className="relative shrink-0 size-[46px]" data-node-id="I119163:20431;1744:164274;6671:138820;6651:127146" data-name="Show/Hide Avatar">
                        <div className="absolute left-0 size-[46px] top-0" data-node-id="I119163:20431;1744:164274;6671:138820;6651:127147" data-name="Avatar">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[16px] size-[46.001px] top-1/2" data-node-id="I119163:20431;1744:164274;6671:138820;6651:127147;3951:109567" data-name="_AvatarMedium">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarMedium3} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="I119163:20431;1744:164274;6671:138820;6651:127148" data-name="ContactCard / Title">
                        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I119163:20431;1744:164274;6671:138820;6651:127148;13893:187677" data-name="Title">
                          <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[1.119] lowercase relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="I119163:20431;1744:164274;6671:138820;6651:127148;6567:124383">
                            тараканус
                          </p>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I119163:20431;1744:164274;6671:138820;6651:127148;6638:126608" data-name="Show/Hide SubTitle">
                          <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I119163:20431;1744:164274;6671:138820;6651:127148;6638:126626" data-name="ContactCard / Subtitle">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I119163:20431;1744:164274;6671:138820;6651:127148;6638:126626;6656:130265" data-name="Text">
                              <div className="relative shrink-0 size-[16px]" data-node-id="I119163:20431;1744:164274;6671:138820;6651:127148;6638:126626;6656:130464" data-name="Show/Hide ChatIcon">
                                <div className="absolute left-0 overflow-clip size-[16px] top-0" data-node-id="I119163:20431;1744:164274;6671:138820;6651:127148;6638:126626;6656:129898" data-name="ChatIcon">
                                  <Icon1 className="absolute left-0 size-[16px] top-0" icon="chat: checkin gray" />
                                </div>
                              </div>
                              <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I119163:20431;1744:164274;6671:138820;6651:127148;6638:126626;6699:135282" data-name="ContactCard / Subtitle / Text">
                                <p className="[word-break:break-word] font-['SF_Pro_Text:Regular'] leading-[1.2] lowercase not-italic relative shrink-0 text-[#808080] text-[16px] whitespace-nowrap" data-node-id="I119163:20431;1744:164274;6671:138820;6651:127148;6638:126626;6699:135282;6699:135269">
                                  ответ на чекин
                                </p>
                              </div>
                            </div>
                            <div className="[word-break:break-word] content-stretch flex font-['SF_Pro_Text:Regular'] gap-[4px] items-center leading-[1.2] lowercase not-italic relative shrink-0 text-[#808080] text-[16px] whitespace-nowrap" data-node-id="I119163:20431;1744:164274;6671:138820;6651:127148;6638:126626;6671:145702" data-name="Show/Hide Date">
                              <p className="relative shrink-0" data-node-id="I119163:20431;1744:164274;6671:138820;6651:127148;6638:126626;6671:141808">
                                •
                              </p>
                              <p className="relative shrink-0" data-node-id="I119163:20431;1744:164274;6671:138820;6651:127148;6638:126626;6638:126357">
                                27.06
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[10px] items-start px-[16px] relative shrink-0" data-node-id="I119163:20431;1744:164274;6671:138820;6651:127178" data-name="ContentRight">
                      <div className="content-stretch flex flex-col h-[36px] items-start relative shrink-0 w-[113px]" data-node-id="I119163:20431;1744:164274;6671:138820;6651:127183" data-name="Show/Hide ContentRight" />
                    </div>
                  </div>
                </div>
              <div className="-translate-y-1/2 absolute right-[16px] size-[24px] top-1/2" data-node-id="119163:20432">
                <div className="absolute left-0 size-[24px] top-0" data-node-id="I119163:20432;29460:12619" data-name="glyph_pin_24">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphPin24} />
                </div>
              </div>
              </div>

              <div className="content-stretch flex flex-col h-[62px] items-start justify-center py-[87px] relative shrink-0" data-node-id="119163:20433" data-name="ContactCard">
                <div className="content-stretch flex flex-col h-[70px] items-start justify-center relative shrink-0 w-[390px]" data-node-id="I119163:20433;1744:164274" data-name="ContactCard">
                  <div className="content-stretch flex gap-[16px] h-[62px] items-center px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="I119163:20433;1744:164274;6671:138820" data-name="ContactCard / Base">
                    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-node-id="I119163:20433;1744:164274;6671:138820;6651:127145" data-name="ContentLeft">
                      <div className="relative shrink-0 size-[46px]" data-node-id="I119163:20433;1744:164274;6671:138820;6651:127146" data-name="Show/Hide Avatar">
                        <div className="absolute left-0 size-[46px] top-0" data-node-id="I119163:20433;1744:164274;6671:138820;6651:127147" data-name="Avatar">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[16px] size-[46.001px] top-1/2" data-node-id="I119163:20433;1744:164274;6671:138820;6651:127147;3951:109567" data-name="_AvatarMedium">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarMedium4} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="I119163:20433;1744:164274;6671:138820;6651:127148" data-name="ContactCard / Title">
                        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I119163:20433;1744:164274;6671:138820;6651:127148;13893:187677" data-name="Title">
                          <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[1.119] lowercase relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="I119163:20433;1744:164274;6671:138820;6651:127148;6567:124383">
                            алеся
                          </p>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I119163:20433;1744:164274;6671:138820;6651:127148;6638:126608" data-name="Show/Hide SubTitle">
                          <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I119163:20433;1744:164274;6671:138820;6651:127148;6638:126626" data-name="ContactCard / Subtitle">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I119163:20433;1744:164274;6671:138820;6651:127148;6638:126626;6656:130265" data-name="Text">
                              <div className="relative shrink-0 size-[16px]" data-node-id="I119163:20433;1744:164274;6671:138820;6651:127148;6638:126626;6656:130464" data-name="Show/Hide ChatIcon">
                                <div className="absolute left-0 overflow-clip size-[16px] top-0" data-node-id="I119163:20433;1744:164274;6671:138820;6651:127148;6638:126626;6656:129898" data-name="ChatIcon">
                                  <Icon1 className="absolute left-0 size-[16px] top-0" icon="chat: reply gray" />
                                </div>
                              </div>
                              <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I119163:20433;1744:164274;6671:138820;6651:127148;6638:126626;6699:135282" data-name="ContactCard / Subtitle / Text">
                                <p className="[word-break:break-word] font-['SF_Pro_Text:Regular'] leading-[1.2] lowercase not-italic relative shrink-0 text-[#808080] text-[16px] whitespace-nowrap" data-node-id="I119163:20433;1744:164274;6671:138820;6651:127148;6638:126626;6699:135282;6699:135269">
                                  ответ на сообщение
                                </p>
                              </div>
                            </div>
                            <div className="[word-break:break-word] content-stretch flex font-['SF_Pro_Text:Regular'] gap-[4px] items-center leading-[1.2] lowercase not-italic relative shrink-0 text-[#808080] text-[16px] whitespace-nowrap" data-node-id="I119163:20433;1744:164274;6671:138820;6651:127148;6638:126626;6671:145702" data-name="Show/Hide Date">
                              <p className="relative shrink-0" data-node-id="I119163:20433;1744:164274;6671:138820;6651:127148;6638:126626;6671:141808">
                                •
                              </p>
                              <p className="relative shrink-0" data-node-id="I119163:20433;1744:164274;6671:138820;6651:127148;6638:126626;6638:126357">
                                7.05
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[10px] items-start px-[16px] relative shrink-0" data-node-id="I119163:20433;1744:164274;6671:138820;6651:127178" data-name="ContentRight">
                      <div className="content-stretch flex flex-col h-[36px] items-start relative shrink-0 w-[113px]" data-node-id="I119163:20433;1744:164274;6671:138820;6651:127183" data-name="Show/Hide ContentRight" />
                    </div>
                  </div>
                </div>
              <div className="-translate-y-1/2 absolute right-[16px] size-[24px] top-1/2" data-node-id="119163:20434">
                <div className="absolute left-0 size-[24px] top-0" data-node-id="I119163:20434;29460:12619" data-name="glyph_pin_24">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphPin24} />
                </div>
              </div>
              </div>

              <div className="h-[4px] relative shrink-0 w-[390px]" data-node-id="119163:20435" data-name="Item">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgItem} />
              </div>
              <div className="content-stretch flex flex-col h-[62px] items-start justify-center py-[87px] relative shrink-0" data-node-id="119163:20437" data-name="ContactCard">
                <div className="content-stretch flex flex-col h-[70px] items-start justify-center relative shrink-0 w-[390px]" data-node-id="I119163:20437;1744:164274" data-name="ContactCard">
                  <div className="content-stretch flex gap-[16px] h-[62px] items-center px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="I119163:20437;1744:164274;6671:138820" data-name="ContactCard / Base">
                    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-node-id="I119163:20437;1744:164274;6671:138820;6651:127145" data-name="ContentLeft">
                      <div className="relative shrink-0 size-[46px]" data-node-id="I119163:20437;1744:164274;6671:138820;6651:127146" data-name="Show/Hide Avatar">
                        <div className="absolute left-0 size-[46px] top-0" data-node-id="I119163:20437;1744:164274;6671:138820;6651:127147" data-name="Avatar">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[16px] size-[46.001px] top-1/2" data-node-id="I119163:20437;1744:164274;6671:138820;6651:127147;3951:109567" data-name="_AvatarMedium">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarMedium5} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="I119163:20437;1744:164274;6671:138820;6651:127148" data-name="ContactCard / Title">
                        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I119163:20437;1744:164274;6671:138820;6651:127148;13893:187677" data-name="Title">
                          <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[1.119] lowercase relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="I119163:20437;1744:164274;6671:138820;6651:127148;6567:124383">
                            кекова
                          </p>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I119163:20437;1744:164274;6671:138820;6651:127148;6638:126608" data-name="Show/Hide SubTitle">
                          <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I119163:20437;1744:164274;6671:138820;6651:127148;6638:126626" data-name="ContactCard / Subtitle">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I119163:20437;1744:164274;6671:138820;6651:127148;6638:126626;6656:130265" data-name="Text">
                              <div className="relative shrink-0 size-[16px]" data-node-id="I119163:20437;1744:164274;6671:138820;6651:127148;6638:126626;6656:130464" data-name="Show/Hide ChatIcon">
                                <div className="absolute left-0 rounded-[4px] size-[16px] top-0" data-node-id="I119163:20437;1744:164274;6671:138820;6651:127148;6638:126626;6699:130799" data-name="Show/Hide Image">
                                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgShowHideImage} />
                                </div>
                              </div>
                              <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I119163:20437;1744:164274;6671:138820;6651:127148;6638:126626;6699:135282" data-name="ContactCard / Subtitle / Text">
                                <p className="[word-break:break-word] bg-clip-text font-['SF_Pro_Text:Medium'] leading-[1.2] lowercase not-italic relative shrink-0 text-[16px] text-[transparent] whitespace-nowrap" data-node-id="I119163:20437;1744:164274;6671:138820;6651:127148;6638:126626;6699:135282;6699:135269" style={{ backgroundImage: "linear-gradient(173.5806071433692deg, rgb(255, 117, 225) 32.545%, rgb(255, 91, 209) 100%)" }}>
                                  фото
                                </p>
                              </div>
                            </div>
                            <div className="[word-break:break-word] content-stretch flex font-['SF_Pro_Text:Regular'] gap-[4px] items-center leading-[1.2] lowercase not-italic relative shrink-0 text-[#808080] text-[16px] whitespace-nowrap" data-node-id="I119163:20437;1744:164274;6671:138820;6651:127148;6638:126626;6671:145702" data-name="Show/Hide Date">
                              <p className="relative shrink-0" data-node-id="I119163:20437;1744:164274;6671:138820;6651:127148;6638:126626;6671:141808">
                                •
                              </p>
                              <p className="relative shrink-0" data-node-id="I119163:20437;1744:164274;6671:138820;6651:127148;6638:126626;6638:126357">
                                7.05
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[10px] items-start px-[16px] relative shrink-0" data-node-id="I119163:20437;1744:164274;6671:138820;6651:127178" data-name="ContentRight">
                      <div className="content-stretch flex flex-col h-[36px] items-start relative shrink-0 w-[113px]" data-node-id="I119163:20437;1744:164274;6671:138820;6651:127183" data-name="Show/Hide ContentRight" />
                      <div className="relative shrink-0 size-[24px]" data-node-id="I119163:20437;1744:164274;6671:138820;6655:128109" data-name="Show/Hide MessageCounter">
                        <div className="absolute left-0 size-[24px] top-0" data-node-id="I119163:20437;1744:164274;6671:138820;6655:127915" data-name="Counter">
                          <div className="absolute left-0 size-[38px] top-0" data-node-id="I119163:20437;1744:164274;6671:138820;6655:127915;1744:166943">
                            <div className="absolute inset-[4.42%_6.39%]">
                              <img alt="" className="block max-w-none size-full" src={imgStar1} />
                            </div>
                          </div>
                          <div className="-translate-x-1/2 absolute flex h-[21.642px] items-center justify-center left-[19.01px] top-[7.08px] w-[13.94px]" data-node-id="I119163:20437;1744:164274;6671:138820;6655:127915;1744:166944">
                            <div className="flex-none rotate-12">
                              <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[normal] relative text-[17px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                1
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-[62px] items-start justify-center py-[87px] relative shrink-0" data-node-id="119163:20438" data-name="ContactCard">
                <div className="content-stretch flex flex-col h-[70px] items-start justify-center relative shrink-0 w-[390px]" data-node-id="I119163:20438;1744:164274" data-name="ContactCard">
                  <div className="content-stretch flex gap-[16px] h-[62px] items-center px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="I119163:20438;1744:164274;6671:138820" data-name="ContactCard / Base">
                    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-node-id="I119163:20438;1744:164274;6671:138820;6651:127145" data-name="ContentLeft">
                      <div className="relative shrink-0 size-[46px]" data-node-id="I119163:20438;1744:164274;6671:138820;6651:127146" data-name="Show/Hide Avatar">
                        <div className="absolute left-0 size-[46px] top-0" data-node-id="I119163:20438;1744:164274;6671:138820;6651:127147" data-name="Avatar">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[16px] size-[46.001px] top-1/2" data-node-id="I119163:20438;1744:164274;6671:138820;6651:127147;3951:109567" data-name="_AvatarMedium">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarMedium3} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="I119163:20438;1744:164274;6671:138820;6651:127148" data-name="ContactCard / Title">
                        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I119163:20438;1744:164274;6671:138820;6651:127148;13893:187677" data-name="Title">
                          <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[1.119] lowercase relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="I119163:20438;1744:164274;6671:138820;6651:127148;6567:124383">
                            тараканус
                          </p>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I119163:20438;1744:164274;6671:138820;6651:127148;6638:126608" data-name="Show/Hide SubTitle">
                          <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I119163:20438;1744:164274;6671:138820;6651:127148;6638:126626" data-name="ContactCard / Subtitle">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I119163:20438;1744:164274;6671:138820;6651:127148;6638:126626;6656:130265" data-name="Text">
                              <div className="relative shrink-0 size-[16px]" data-node-id="I119163:20438;1744:164274;6671:138820;6651:127148;6638:126626;6656:130464" data-name="Show/Hide ChatIcon">
                                <div className="absolute left-0 overflow-clip size-[16px] top-0" data-node-id="I119163:20438;1744:164274;6671:138820;6651:127148;6638:126626;6656:129898" data-name="ChatIcon">
                                  <Icon1 className="absolute left-0 size-[16px] top-0" icon="chat: checkin gray" />
                                </div>
                              </div>
                              <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I119163:20438;1744:164274;6671:138820;6651:127148;6638:126626;6699:135282" data-name="ContactCard / Subtitle / Text">
                                <p className="[word-break:break-word] font-['SF_Pro_Text:Regular'] leading-[1.2] lowercase not-italic relative shrink-0 text-[#808080] text-[16px] whitespace-nowrap" data-node-id="I119163:20438;1744:164274;6671:138820;6651:127148;6638:126626;6699:135282;6699:135269">
                                  ответ на чекин
                                </p>
                              </div>
                            </div>
                            <div className="[word-break:break-word] content-stretch flex font-['SF_Pro_Text:Regular'] gap-[4px] items-center leading-[1.2] lowercase not-italic relative shrink-0 text-[#808080] text-[16px] whitespace-nowrap" data-node-id="I119163:20438;1744:164274;6671:138820;6651:127148;6638:126626;6671:145702" data-name="Show/Hide Date">
                              <p className="relative shrink-0" data-node-id="I119163:20438;1744:164274;6671:138820;6651:127148;6638:126626;6671:141808">
                                •
                              </p>
                              <p className="relative shrink-0" data-node-id="I119163:20438;1744:164274;6671:138820;6651:127148;6638:126626;6638:126357">
                                27.06
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[10px] items-start px-[16px] relative shrink-0" data-node-id="I119163:20438;1744:164274;6671:138820;6651:127178" data-name="ContentRight">
                      <div className="content-stretch flex flex-col h-[36px] items-start relative shrink-0 w-[113px]" data-node-id="I119163:20438;1744:164274;6671:138820;6651:127183" data-name="Show/Hide ContentRight" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-[62px] items-start justify-center py-[87px] relative shrink-0" data-node-id="119163:20439" data-name="ContactCard">
                <div className="content-stretch flex flex-col h-[70px] items-start justify-center relative shrink-0 w-[390px]" data-node-id="I119163:20439;1744:164274" data-name="ContactCard">
                  <div className="content-stretch flex gap-[16px] h-[62px] items-center px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="I119163:20439;1744:164274;6671:138820" data-name="ContactCard / Base">
                    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-node-id="I119163:20439;1744:164274;6671:138820;6651:127145" data-name="ContentLeft">
                      <div className="relative shrink-0 size-[46px]" data-node-id="I119163:20439;1744:164274;6671:138820;6651:127146" data-name="Show/Hide Avatar">
                        <div className="absolute left-0 size-[46px] top-0" data-node-id="I119163:20439;1744:164274;6671:138820;6651:127147" data-name="Avatar">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[16px] size-[46.001px] top-1/2" data-node-id="I119163:20439;1744:164274;6671:138820;6651:127147;3951:109567" data-name="_AvatarMedium">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarMedium} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="I119163:20439;1744:164274;6671:138820;6651:127148" data-name="ContactCard / Title">
                        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I119163:20439;1744:164274;6671:138820;6651:127148;13893:187677" data-name="Title">
                          <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[1.119] lowercase relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="I119163:20439;1744:164274;6671:138820;6651:127148;6567:124383">
                            капибар
                          </p>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I119163:20439;1744:164274;6671:138820;6651:127148;6638:126608" data-name="Show/Hide SubTitle">
                          <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I119163:20439;1744:164274;6671:138820;6651:127148;6638:126626" data-name="ContactCard / Subtitle">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I119163:20439;1744:164274;6671:138820;6651:127148;6638:126626;6656:130265" data-name="Text">
                              <div className="relative shrink-0 size-[16px]" data-node-id="I119163:20439;1744:164274;6671:138820;6651:127148;6638:126626;6656:130464" data-name="Show/Hide ChatIcon">
                                <div className="absolute left-0 overflow-clip size-[16px] top-0" data-node-id="I119163:20439;1744:164274;6671:138820;6651:127148;6638:126626;6656:129898" data-name="ChatIcon">
                                  <Icon className="absolute left-0 size-[16px] top-0" icon="chat: whaddup reply gray" />
                                </div>
                              </div>
                              <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I119163:20439;1744:164274;6671:138820;6651:127148;6638:126626;6699:135282" data-name="ContactCard / Subtitle / Text">
                                <p className="[word-break:break-word] font-['SF_Pro_Text:Regular'] leading-[1.2] lowercase not-italic relative shrink-0 text-[#808080] text-[16px] whitespace-nowrap" data-node-id="I119163:20439;1744:164274;6671:138820;6651:127148;6638:126626;6699:135282;6699:135269">
                                  ответ на чёкак
                                </p>
                              </div>
                            </div>
                            <div className="[word-break:break-word] content-stretch flex font-['SF_Pro_Text:Regular'] gap-[4px] items-center leading-[1.2] lowercase not-italic relative shrink-0 text-[#808080] text-[16px] whitespace-nowrap" data-node-id="I119163:20439;1744:164274;6671:138820;6651:127148;6638:126626;6671:145702" data-name="Show/Hide Date">
                              <p className="relative shrink-0" data-node-id="I119163:20439;1744:164274;6671:138820;6651:127148;6638:126626;6671:141808">
                                •
                              </p>
                              <p className="relative shrink-0" data-node-id="I119163:20439;1744:164274;6671:138820;6651:127148;6638:126626;6638:126357">
                                27.06
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[10px] items-start px-[16px] relative shrink-0" data-node-id="I119163:20439;1744:164274;6671:138820;6651:127178" data-name="ContentRight">
                      <div className="content-stretch flex flex-col h-[36px] items-start relative shrink-0 w-[113px]" data-node-id="I119163:20439;1744:164274;6671:138820;6651:127183" data-name="Show/Hide ContentRight" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-[70px] items-start justify-center py-[87px] relative shrink-0" data-node-id="119163:20440" data-name="ContactCard">
                <div className="content-stretch flex flex-col h-[70px] items-start justify-center relative shrink-0 w-[390px]" data-node-id="I119163:20440;1744:164274" data-name="ContactCard">
                  <div className="content-stretch flex gap-[16px] h-[62px] items-center px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="I119163:20440;1744:164274;6671:138820" data-name="ContactCard / Base">
                    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-node-id="I119163:20440;1744:164274;6671:138820;6651:127145" data-name="ContentLeft">
                      <div className="relative shrink-0 size-[46px]" data-node-id="I119163:20440;1744:164274;6671:138820;6651:127146" data-name="Show/Hide Avatar">
                        <div className="absolute left-0 size-[46px] top-0" data-node-id="I119163:20440;1744:164274;6671:138820;6651:127147" data-name="Avatar">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[16px] size-[46.001px] top-1/2" data-node-id="I119163:20440;1744:164274;6671:138820;6651:127147;3951:109567" data-name="_AvatarMedium">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarMedium5} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="I119163:20440;1744:164274;6671:138820;6651:127148" data-name="ContactCard / Title">
                        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I119163:20440;1744:164274;6671:138820;6651:127148;13893:187677" data-name="Title">
                          <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[1.119] lowercase relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="I119163:20440;1744:164274;6671:138820;6651:127148;6567:124383">
                            кекова
                          </p>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I119163:20440;1744:164274;6671:138820;6651:127148;6638:126608" data-name="Show/Hide SubTitle">
                          <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I119163:20440;1744:164274;6671:138820;6651:127148;6638:126626" data-name="ContactCard / Subtitle">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I119163:20440;1744:164274;6671:138820;6651:127148;6638:126626;6656:130265" data-name="Text">
                              <div className="relative shrink-0 size-[16px]" data-node-id="I119163:20440;1744:164274;6671:138820;6651:127148;6638:126626;6656:130464" data-name="Show/Hide ChatIcon">
                                <div className="absolute left-0 rounded-[4px] size-[16px] top-0" data-node-id="I119163:20440;1744:164274;6671:138820;6651:127148;6638:126626;6699:130799" data-name="Show/Hide Image">
                                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgShowHideImage} />
                                </div>
                              </div>
                              <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I119163:20440;1744:164274;6671:138820;6651:127148;6638:126626;6699:135282" data-name="ContactCard / Subtitle / Text">
                                <p className="[word-break:break-word] bg-clip-text font-['SF_Pro_Text:Medium'] leading-[1.2] lowercase not-italic relative shrink-0 text-[18px] text-[transparent] whitespace-nowrap" data-node-id="I119163:20440;1744:164274;6671:138820;6651:127148;6638:126626;6699:135282;6699:135269" style={{ backgroundImage: "linear-gradient(173.5806071433692deg, rgb(255, 117, 225) 32.545%, rgb(255, 91, 209) 100%)" }}>
                                  фото
                                </p>
                              </div>
                            </div>
                            <div className="[word-break:break-word] content-stretch flex font-['SF_Pro_Text:Regular'] gap-[4px] items-center leading-[1.2] lowercase not-italic relative shrink-0 text-[#808080] text-[16px] whitespace-nowrap" data-node-id="I119163:20440;1744:164274;6671:138820;6651:127148;6638:126626;6671:145702" data-name="Show/Hide Date">
                              <p className="relative shrink-0" data-node-id="I119163:20440;1744:164274;6671:138820;6651:127148;6638:126626;6671:141808">
                                •
                              </p>
                              <p className="relative shrink-0" data-node-id="I119163:20440;1744:164274;6671:138820;6651:127148;6638:126626;6638:126357">
                                7.05
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[10px] items-start px-[16px] relative shrink-0" data-node-id="I119163:20440;1744:164274;6671:138820;6651:127178" data-name="ContentRight">
                      <div className="content-stretch flex flex-col h-[36px] items-start relative shrink-0 w-[113px]" data-node-id="I119163:20440;1744:164274;6671:138820;6651:127183" data-name="Show/Hide ContentRight" />
                      <div className="relative shrink-0 size-[24px]" data-node-id="I119163:20440;1744:164274;6671:138820;6655:128109" data-name="Show/Hide MessageCounter">
                        <div className="absolute left-0 size-[24px] top-0" data-node-id="I119163:20440;1744:164274;6671:138820;6655:127915" data-name="Counter">
                          <div className="absolute left-0 size-[38px] top-0" data-node-id="I119163:20440;1744:164274;6671:138820;6655:127915;1744:166943">
                            <div className="absolute inset-[4.42%_6.39%]">
                              <img alt="" className="block max-w-none size-full" src={imgStar1} />
                            </div>
                          </div>
                          <div className="-translate-x-1/2 absolute flex h-[21.642px] items-center justify-center left-[19.01px] top-[7.08px] w-[13.94px]" data-node-id="I119163:20440;1744:164274;6671:138820;6655:127915;1744:166944">
                            <div className="flex-none rotate-12">
                              <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[normal] relative text-[17px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                                1
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-[174px] items-start justify-center py-[87px] relative shrink-0 w-[390px]" data-node-id="119163:20441" data-name="ContactCard" />
              <div className="content-stretch flex flex-col h-[70px] items-start justify-center py-[87px] relative shrink-0" data-node-id="119163:20442" data-name="ContactCard">
                <div className="content-stretch flex flex-col h-[70px] items-start justify-center relative shrink-0 w-[390px]" data-node-id="I119163:20442;1744:164274" data-name="ContactCard">
                  <div className="content-stretch flex gap-[16px] h-[62px] items-center px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="I119163:20442;1744:164274;6671:138820" data-name="ContactCard / Base">
                    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-node-id="I119163:20442;1744:164274;6671:138820;6651:127145" data-name="ContentLeft">
                      <div className="relative shrink-0 size-[46px]" data-node-id="I119163:20442;1744:164274;6671:138820;6651:127146" data-name="Show/Hide Avatar">
                        <div className="absolute left-0 size-[46px] top-0" data-node-id="I119163:20442;1744:164274;6671:138820;6651:127147" data-name="Avatar">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[16px] size-[46.001px] top-1/2" data-node-id="I119163:20442;1744:164274;6671:138820;6651:127147;3951:109567" data-name="_AvatarMedium">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarMedium6} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="I119163:20442;1744:164274;6671:138820;6651:127148" data-name="ContactCard / Title">
                        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I119163:20442;1744:164274;6671:138820;6651:127148;13893:187677" data-name="Title">
                          <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[1.119] lowercase relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="I119163:20442;1744:164274;6671:138820;6651:127148;6567:124383">
                            рита
                          </p>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I119163:20442;1744:164274;6671:138820;6651:127148;6638:126608" data-name="Show/Hide SubTitle">
                          <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I119163:20442;1744:164274;6671:138820;6651:127148;6638:126626" data-name="ContactCard / Subtitle">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I119163:20442;1744:164274;6671:138820;6651:127148;6638:126626;6656:130265" data-name="Text">
                              <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I119163:20442;1744:164274;6671:138820;6651:127148;6638:126626;6699:135282" data-name="ContactCard / Subtitle / Text">
                                <p className="[word-break:break-word] font-['SF_Pro_Text:Regular'] leading-[1.2] lowercase not-italic relative shrink-0 text-[#808080] text-[16px] tracking-[-0.32px] whitespace-nowrap" data-node-id="I119163:20442;1744:164274;6671:138820;6651:127148;6638:126626;6699:135282;6699:135269">
                                  привет
                                </p>
                              </div>
                            </div>
                            <div className="[word-break:break-word] content-stretch flex font-['SF_Pro_Text:Regular'] gap-[4px] items-center leading-[1.2] lowercase not-italic relative shrink-0 text-[#808080] text-[16px] whitespace-nowrap" data-node-id="I119163:20442;1744:164274;6671:138820;6651:127148;6638:126626;6671:145702" data-name="Show/Hide Date">
                              <p className="relative shrink-0" data-node-id="I119163:20442;1744:164274;6671:138820;6651:127148;6638:126626;6671:141808">
                                •
                              </p>
                              <p className="relative shrink-0" data-node-id="I119163:20442;1744:164274;6671:138820;6651:127148;6638:126626;6638:126357">
                                6.05
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[10px] items-start px-[16px] relative shrink-0" data-node-id="I119163:20442;1744:164274;6671:138820;6651:127178" data-name="ContentRight">
                      <div className="content-stretch flex flex-col h-[36px] items-start relative shrink-0 w-[113px]" data-node-id="I119163:20442;1744:164274;6671:138820;6651:127183" data-name="Show/Hide ContentRight" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-[70px] items-start justify-center py-[87px] relative shrink-0" data-node-id="119163:20443" data-name="ContactCard">
                <div className="content-stretch flex flex-col h-[70px] items-start justify-center relative shrink-0 w-[390px]" data-node-id="I119163:20443;1744:164274" data-name="ContactCard">
                  <div className="content-stretch flex gap-[16px] h-[62px] items-center px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="I119163:20443;1744:164274;6671:138820" data-name="ContactCard / Base">
                    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-node-id="I119163:20443;1744:164274;6671:138820;6651:127145" data-name="ContentLeft">
                      <div className="relative shrink-0 size-[46px]" data-node-id="I119163:20443;1744:164274;6671:138820;6651:127146" data-name="Show/Hide Avatar">
                        <div className="absolute left-0 size-[46px] top-0" data-node-id="I119163:20443;1744:164274;6671:138820;6651:127147" data-name="Avatar">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[16px] size-[46.001px] top-1/2" data-node-id="I119163:20443;1744:164274;6671:138820;6651:127147;3951:109567" data-name="_AvatarMedium">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarMedium4} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="I119163:20443;1744:164274;6671:138820;6651:127148" data-name="ContactCard / Title">
                        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I119163:20443;1744:164274;6671:138820;6651:127148;13893:187677" data-name="Title">
                          <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[1.119] lowercase relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="I119163:20443;1744:164274;6671:138820;6651:127148;6567:124383">
                            алеся
                          </p>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I119163:20443;1744:164274;6671:138820;6651:127148;6638:126608" data-name="Show/Hide SubTitle">
                          <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I119163:20443;1744:164274;6671:138820;6651:127148;6638:126626" data-name="ContactCard / Subtitle">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I119163:20443;1744:164274;6671:138820;6651:127148;6638:126626;6656:130265" data-name="Text">
                              <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I119163:20443;1744:164274;6671:138820;6651:127148;6638:126626;6699:135282" data-name="ContactCard / Subtitle / Text">
                                <p className="[word-break:break-word] font-['SF_Pro_Text:Regular'] leading-[1.2] lowercase not-italic relative shrink-0 text-[#808080] text-[16px] tracking-[-0.32px] whitespace-nowrap" data-node-id="I119163:20443;1744:164274;6671:138820;6651:127148;6638:126626;6699:135282;6699:135269">
                                  привет
                                </p>
                              </div>
                            </div>
                            <div className="[word-break:break-word] content-stretch flex font-['SF_Pro_Text:Regular'] gap-[4px] items-center leading-[1.2] lowercase not-italic relative shrink-0 text-[#808080] text-[16px] whitespace-nowrap" data-node-id="I119163:20443;1744:164274;6671:138820;6651:127148;6638:126626;6671:145702" data-name="Show/Hide Date">
                              <p className="relative shrink-0" data-node-id="I119163:20443;1744:164274;6671:138820;6651:127148;6638:126626;6671:141808">
                                •
                              </p>
                              <p className="relative shrink-0" data-node-id="I119163:20443;1744:164274;6671:138820;6651:127148;6638:126626;6638:126357">
                                6.05
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[10px] items-start px-[16px] relative shrink-0" data-node-id="I119163:20443;1744:164274;6671:138820;6651:127178" data-name="ContentRight">
                      <div className="content-stretch flex flex-col h-[36px] items-start relative shrink-0 w-[113px]" data-node-id="I119163:20443;1744:164274;6671:138820;6651:127183" data-name="Show/Hide ContentRight" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-[209px] left-0 pointer-events-none top-[635px]" data-node-id="119163:20927">
        <div className="flex h-[209px] items-center justify-center pointer-events-auto sticky top-0 w-[390px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-gradient-to-b from-[30.412%] from-[rgba(0,0,0,0.8)] h-[209px] overflow-clip pointer-events-auto relative to-[64.304%] to-[rgba(0,0,0,0)] top-0 w-[390px]" data-name="gradik">
              <div className="absolute bottom-0 h-[209px] left-1/2 pointer-events-none top-0" data-node-id="119163:20928">
                <div className="-translate-x-1/2 h-[194px] pointer-events-auto sticky top-0 w-[390px]">
                  <div className="absolute left-[-91px] size-[778px] top-[-700px]" data-node-id="119163:20929" data-name="Animation / Glow PA">
                    <div className="absolute inset-[-2.39%_-3.24%_-8.66%_-9.84%]">
                      <img alt="" className="block max-w-none size-full" src={imgAnimationGlowPa} />
                    </div>
                  </div>
                  <div className="absolute flex items-center justify-center left-[-138px] size-[445px] top-[-381px]" data-node-id="119163:20930">
                    <div className="flex-none rotate-180">
                      <div className="relative size-[445px]" data-name="Animation / Glow PA">
                        <div className="absolute inset-[-25.9%_-26.75%_-32.17%_-33.36%]">
                          <img alt="" className="block max-w-none size-full" src={imgAnimationGlowPa1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex h-[220px] items-center justify-center left-0 top-0 w-[390px]" data-node-id="119163:20931">
                <div className="-scale-y-100 flex-none">
                  <div className="h-[220px] overflow-clip relative w-[390px]" data-name="Background" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bottom-[99px] content-stretch flex flex-col h-[92px] items-start justify-center left-1/2 pb-[8px] pt-[38px] px-[16px] w-[390px]" data-node-id="119163:20934" data-name="Search">
        <div className="content-stretch flex gap-[10px] h-[46px] items-start relative shrink-0 w-[358px]" data-node-id="119163:20935" data-name="SearchField">
          <div className="backdrop-blur-[15px] bg-[rgba(255,255,255,0.15)] border-2 border-[rgba(255,255,255,0)] border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-[46px] items-center min-w-px pl-[16px] pr-[8px] py-[8px] relative rounded-[14px]" data-node-id="I119163:20935;1778:167738" data-name="Input">
            <div className="opacity-80 overflow-clip relative shrink-0 size-[20px]" data-node-id="I119163:20935;1778:167739" data-name="glyph/search/20">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphSearch20} />
            </div>
            <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-node-id="I119163:20935;1789:188507" data-name="placeholder + cursor">
              <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[1.119] lowercase opacity-80 overflow-hidden relative shrink-0 text-[20px] text-[rgba(255,255,255,0.5)] text-ellipsis w-[241px] whitespace-nowrap" data-node-id="I119163:20935;1778:167740">
                поиск по чатам
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex items-start justify-center left-0 px-[36px] top-[745px] w-[390px]" data-node-id="119163:20936" data-name="tabbar">
        <div className="backdrop-blur-[5px] bg-[rgba(0,0,0,0.86)] border border-[rgba(255,255,255,0.15)] border-solid content-stretch flex gap-[10px] items-center pl-[12px] pr-[10px] py-[2px] relative rounded-[40px] shrink-0" data-node-id="119163:20937" data-name="tab bar">
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[10px] pt-[8px] relative shrink-0 w-[48px]" data-node-id="I119163:20937;107036:15665" data-name="Tab 1">
            <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[100px]" data-node-id="I119163:20937;107036:15666" data-name="Selection" />
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I119163:20937;107036:15667" data-name="glyph">
              <div className="-translate-y-1/2 absolute h-[24px] left-0 overflow-clip right-0 top-1/2" data-node-id="I119163:20937;107036:15667;110:35735" data-name="glyph_location_24">
                <div className="absolute h-[21px] left-[4.5px] top-[1.5px] w-[15.001px]" data-node-id="I119163:20937;107036:15667;110:35736" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold'] leading-[normal] lowercase min-w-full not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center tracking-[-0.24px] w-[min-content]" data-node-id="I119163:20937;107036:15668">
              карта
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[10px] pt-[8px] relative shrink-0 w-[48px]" data-node-id="I119163:20937;107036:15669" data-name="Tab 2">
            <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[100px]" data-node-id="I119163:20937;107036:15670" data-name="Selection" />
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I119163:20937;107036:15671" data-name="glyph/nav friends/24">
              <div className="absolute left-0 size-[24px] top-0" data-node-id="I119163:20937;107036:15671;15719:323796" data-name="glyph_nav_friends_24">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphNavFriends24} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold'] leading-[normal] lowercase min-w-full not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center tracking-[-0.24px] w-[min-content]" data-node-id="I119163:20937;107036:15672">
              друзья
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[10px] pt-[8px] relative shrink-0 w-[48px]" data-node-id="I119163:20937;107036:15673" data-name="Tab 3">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I119163:20937;107036:15674" data-name="glyph/message/24">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphMessage24} />
            </div>
            <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[100px]" data-node-id="I119163:20937;107036:15675" data-name="Selection" />
            <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold'] leading-[normal] lowercase min-w-full not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] w-[min-content]" data-node-id="I119163:20937;107036:15676">
              чаты
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[10px] pt-[8px] relative shrink-0 w-[48px]" data-node-id="I119163:20937;107036:15677" data-name="Tab 4">
            <div className="relative shrink-0 size-[24px]" data-node-id="I119163:20937;107036:15679" data-name="glyph/market/24">
              <div className="absolute left-0 size-[24px] top-0" data-node-id="I119163:20937;107036:15679;115927:23904" data-name="glyph_market_24">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphMarket24} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold'] leading-[normal] lowercase min-w-full not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center tracking-[-0.24px] w-[min-content]" data-node-id="I119163:20937;107036:15680">
              маркет
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[10px] pt-[8px] relative shrink-0 w-[48px]" data-node-id="I119163:20937;107036:15681" data-name="Tab 5">
            <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[100px]" data-node-id="I119163:20937;107036:15682" data-name="Selection" />
            <div className="relative shrink-0 size-[24px]" data-node-id="I119163:20937;107036:15683">
              <div className="absolute left-0 size-[24px] top-0" data-node-id="I119163:20937;107036:15684">
                <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgEllipse395} width="24" />
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold'] leading-[normal] lowercase min-w-full not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center tracking-[-0.24px] w-[min-content]" data-node-id="I119163:20937;107036:15685">
              ты
            </p>
          </div>
        </div>
      </div>
      <HomeIndicator className="absolute h-[34px] left-0 top-[810px] w-[390px]" />
      <div className="absolute bg-black content-stretch flex items-start left-0 px-[16px] top-[47px] w-[390px]" data-node-id="119163:20352" data-name="Title.main">
        <div className="content-stretch flex flex-[1_0_0] h-[78px] items-center justify-between min-w-px py-[20px] relative" data-node-id="I119163:20352;110372:9456" data-name="Header">
          <div className="content-stretch flex gap-[4px] items-end relative shrink-0" data-node-id="I119163:20352;110372:9456;107323:110996" data-name="Text">
            <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[1.05] lowercase relative shrink-0 text-[36px] text-white tracking-[-0.72px] whitespace-nowrap" data-node-id="I119163:20352;110372:9456;107323:110997">
              чаты
            </p>
          </div>
          <div className="content-stretch flex items-center pt-[2px] relative shrink-0" data-node-id="I119163:20352;110372:9456;107323:111000" data-name="icon_right">
            <GlyphCreateChat24 className="overflow-clip relative shrink-0 size-[24px]" />
          </div>
        </div>
      </div>
      <StatusBar className="absolute h-[47px] left-0 overflow-clip top-0 w-[390px]" />
    </div>
  );
}
