const assetPathPrefix = "https://www.figma.com/api/mcp/asset/10971d36-78cb-4786-a815-9df64e1181e9";
const imgLogo = `${assetPathPrefix}/f548a.svg`;
const imgRightSide = `${assetPathPrefix}/1ccd4.svg`;
const imgCheckinImageLarge = "./profile-assets/a888e.png";
const imgCheckinImageLarge1 = "./profile-assets/9ae98.png";
const imgCheckinImageLarge2 = "./profile-assets/c1204.png";
const imgCheckinImageLarge3 = "./profile-assets/5448d.png";
const imgCheckinImageLarge4 = "./profile-assets/23539.png";
const imgCheckinImageLarge5 = "./profile-assets/83cef.png";
const imgCheckinImageLarge6 = `${assetPathPrefix}/f4188.png`;
const imgCheckinImageLarge7 = "./profile-assets/4a2f5.png";
const imgCheckinImageLarge8 = "./profile-assets/01aab.png";
const imgCheckinImageLarge9 = `${assetPathPrefix}/f5ce4.png`;
const imgAvatarXSmall = `${assetPathPrefix}/8b5b1.png`;
const imgCheckinImageLarge10 = "./profile-assets/1da21.png";
const imgCheckinImageLarge11 = "./profile-assets/fe3a4.png";

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
  darkMode?: "false";
  type?: "New";
};

function StatusBar({ className, darkMode = "false", type = "New" }: StatusBarProps) {
  return (
    <div className={className || "h-[47px] overflow-clip relative w-[390px]"} data-node-id="2604:15068">
      <div className="absolute contents left-[27px] top-[14px]" data-node-id="2604:14897" data-name="Left Side">
        <div className="absolute h-[21px] left-[27px] rounded-[24px] top-[14px] w-[54px]" data-node-id="2604:14898" data-name="_StatusBar-time">
          <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro_Text:Semibold'] h-[20px] leading-[22px] left-[27px] not-italic text-[17px] text-black text-center top-px tracking-[-0.408px] w-[54px]" data-node-id="I2604:14898;839:7100" style={{ fontFeatureSettings: '"case" 1' }}>
            4:20
          </p>
        </div>
      </div>
      <div className="absolute h-[13px] right-[26.6px] top-[19px] w-[77.401px]" data-node-id="2604:14899" data-name="Right Side">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRightSide} />
      </div>
      <LogoNotch className="-translate-x-1/2 absolute content-stretch flex items-center left-[calc(50%-0.14px)] px-[8px] py-[5px] rounded-[100px] top-[11px] w-[81.718px]" />
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

export default function ProfileMyCheckins({onClose,count=455}: {onClose:()=>void,count?:number}) {
  return (
    <div className="bg-white relative size-full" data-node-id="43230:264118" data-name="profile / my checkins">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[844px] left-1/2 opacity-90 top-1/2 w-[390px]" data-node-id="43478:154060" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%), url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 390 844' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(33.85 89.05 -30.843 11.724 3.7886e-14 0)'><stop stop-color='rgba(211,119,255,1)' offset='0.34082'/><stop stop-color='rgba(165,171,255,1)' offset='0.67041'/><stop stop-color='rgba(119,222,255,1)' offset='1'/></radialGradient></defs></svg>\")" }} data-name="image_bg_colored" />
      <div className="absolute bg-black content-stretch flex flex-col h-[788px] items-center left-0 px-[16px] rounded-tl-[40px] rounded-tr-[40px] top-[56px] w-[390px]" data-node-id="43230:264123" data-name="Modal sheet">
        <div className="content-stretch flex flex-col h-[12px] items-center justify-end pt-[8px] relative shrink-0 w-full" data-node-id="I43230:264123;3277:68117" data-name="Slider">
          <div className="bg-[#808080] h-[4px] relative rounded-[20px] shrink-0 w-[33px]" data-node-id="I43230:264123;3277:68117;2702:17814" data-name="Vector" />
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col h-[69px] items-center justify-end left-0 px-[16px] top-[56px] w-[390px]" data-node-id="43230:264124" data-name="HeaderView">
        <div className="content-stretch flex gap-[32px] h-[34px] items-start relative shrink-0 w-full" data-node-id="43230:264125" data-name="Title">
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Montserrat:Bold'] font-bold gap-[9px] h-[33px] items-center leading-[34px] lowercase min-w-px relative text-[28px] text-center whitespace-nowrap" data-node-id="43230:264126" data-name="Title">
            <p className="relative shrink-0 text-white" data-node-id="43230:264127">
              мои чекины
            </p>
            <p className="relative shrink-0 text-[#808080]" data-node-id="43230:264128">
              {count}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[5px] items-start left-[16px] top-[149px]" data-node-id="43230:264135" tabIndex={0} role="region" aria-label="Фотографии моих чекинов" data-name="CheckinGallery">
        <div className="content-stretch flex gap-[5px] items-start relative shrink-0" data-node-id="43230:264136" data-name="Row">
          <div className="h-[206px] overflow-clip relative rounded-[12px] shrink-0 w-[116px]" data-node-id="43230:264137" data-name="CheckinImageLarge">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgCheckinImageLarge} />
            <div className="-translate-x-1/2 absolute left-1/2 size-[32px] top-[162px]" data-node-id="I43230:264137;27568:104897" data-name="_Avatar" />
          </div>
          <div className="h-[206px] overflow-clip relative rounded-[12px] shrink-0 w-[116px]" data-node-id="43230:264138" data-name="CheckinImageLarge">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgCheckinImageLarge1} />
            <div className="-translate-x-1/2 absolute left-1/2 size-[32px] top-[162px]" data-node-id="I43230:264138;27568:104897" data-name="_Avatar" />
          </div>
          <div className="h-[206px] overflow-clip relative rounded-[12px] shrink-0 w-[116px]" data-node-id="43230:264139" data-name="CheckinImageLarge">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgCheckinImageLarge2} />
            <div className="-translate-x-1/2 absolute left-1/2 size-[32px] top-[162px]" data-node-id="I43230:264139;27568:104897" data-name="_Avatar" />
          </div>
        </div>
        <div className="content-stretch flex gap-[5px] items-start relative shrink-0" data-node-id="43230:264140" data-name="Row">
          <div className="h-[206px] overflow-clip relative rounded-[12px] shrink-0 w-[116px]" data-node-id="43230:264141" data-name="CheckinImageLarge">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgCheckinImageLarge3} />
            <div className="-translate-x-1/2 absolute left-1/2 size-[32px] top-[162px]" data-node-id="I43230:264141;27568:104897" data-name="_Avatar" />
          </div>
          <div className="h-[206px] overflow-clip relative rounded-[12px] shrink-0 w-[116px]" data-node-id="43230:264142" data-name="CheckinImageLarge">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgCheckinImageLarge4} />
            <div className="-translate-x-1/2 absolute left-1/2 size-[32px] top-[162px]" data-node-id="I43230:264142;27568:104897" data-name="_Avatar" />
          </div>
          <div className="h-[206px] overflow-clip relative rounded-[12px] shrink-0 w-[116px]" data-node-id="43230:264143" data-name="CheckinImageLarge">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgCheckinImageLarge5} />
            <div className="-translate-x-1/2 absolute left-1/2 size-[32px] top-[162px]" data-node-id="I43230:264143;27568:104897" data-name="_Avatar" />
          </div>
        </div>
        <div className="content-stretch flex gap-[5px] items-start relative shrink-0" data-node-id="43230:264144" data-name="Row">
          <div className="h-[206px] overflow-clip relative rounded-[12px] shrink-0 w-[116px]" data-node-id="43230:264145" data-name="CheckinImageLarge">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgCheckinImageLarge6} />
          </div>
          <div className="h-[206px] overflow-clip relative rounded-[12px] shrink-0 w-[116px]" data-node-id="43230:264146" data-name="CheckinImageLarge">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgCheckinImageLarge7} />
            <div className="-translate-x-1/2 absolute left-1/2 size-[32px] top-[162px]" data-node-id="I43230:264146;27568:104897" data-name="_Avatar" />
          </div>
          <div className="h-[206px] overflow-clip relative rounded-[12px] shrink-0 w-[116px]" data-node-id="43230:264147" data-name="CheckinImageLarge">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgCheckinImageLarge8} />
          </div>
        </div>
        <div className="content-stretch flex gap-[5px] items-start relative shrink-0" data-node-id="43230:264148" data-name="Row">
          <div className="h-[206px] overflow-clip relative rounded-[12px] shrink-0 w-[116px]" data-node-id="43230:264149" data-name="CheckinImageLarge">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgCheckinImageLarge9} />
            <div className="absolute flex h-[56px] items-center justify-center left-0 top-[150px] w-[116px]" data-node-id="I43230:264149;27568:104899">
              <div className="-scale-y-100 flex-none">
                <div className="bg-gradient-to-b from-black h-[56px] opacity-40 relative rounded-tl-[12px] rounded-tr-[12px] to-[rgba(0,0,0,0)] w-[116px]" data-name="Gradient" />
              </div>
            </div>
            <div className="-translate-x-1/2 absolute left-1/2 size-[32px] top-[162px]" data-node-id="I43230:264149;27568:104897" data-name="_Avatar">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute border-2 border-solid border-white left-1/2 rounded-[12px] size-[32px] top-1/2" data-node-id="I43230:264149;27568:104897;26755:183440" data-name="_AvatarXSmall">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgAvatarXSmall} />
              </div>
            </div>
          </div>
          <div className="h-[206px] overflow-clip relative rounded-[12px] shrink-0 w-[116px]" data-node-id="43230:264150" data-name="CheckinImageLarge">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgCheckinImageLarge10} />
            <div className="absolute flex h-[56px] items-center justify-center left-0 top-[150px] w-[116px]" data-node-id="I43230:264150;27568:104899">
              <div className="-scale-y-100 flex-none">
                <div className="bg-gradient-to-b from-black h-[56px] opacity-40 relative rounded-tl-[12px] rounded-tr-[12px] to-[rgba(0,0,0,0)] w-[116px]" data-name="Gradient" />
              </div>
            </div>
            <div className="-translate-x-1/2 absolute left-1/2 size-[32px] top-[162px]" data-node-id="I43230:264150;27568:104897" data-name="_Avatar">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute border-2 border-solid border-white left-1/2 rounded-[12px] size-[32px] top-1/2" data-node-id="I43230:264150;27568:104897;26755:183440" data-name="_AvatarXSmall">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgAvatarXSmall} />
              </div>
            </div>
          </div>
          <div className="h-[206px] overflow-clip relative rounded-[12px] shrink-0 w-[116px]" data-node-id="43230:264151" data-name="CheckinImageLarge">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgCheckinImageLarge11} />
            <div className="absolute flex h-[56px] items-center justify-center left-0 top-[150px] w-[116px]" data-node-id="I43230:264151;27568:104899">
              <div className="-scale-y-100 flex-none">
                <div className="bg-gradient-to-b from-black h-[56px] opacity-40 relative rounded-tl-[12px] rounded-tr-[12px] to-[rgba(0,0,0,0)] w-[116px]" data-name="Gradient" />
              </div>
            </div>
            <div className="-translate-x-1/2 absolute left-1/2 size-[32px] top-[162px]" data-node-id="I43230:264151;27568:104897" data-name="_Avatar">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute border-2 border-solid border-white left-1/2 rounded-[12px] size-[32px] top-1/2" data-node-id="I43230:264151;27568:104897;26755:183440" data-name="_AvatarXSmall">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgAvatarXSmall} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className={'profile-checkins-return'} onClick={onClose} aria-label="Вернуться к профилю" />
      <HomeIndicator className="-translate-x-1/2 absolute bottom-0 h-[34px] left-1/2 w-[390px]" />
      <StatusBar className="-translate-x-1/2 absolute h-[47px] left-1/2 overflow-clip top-0 w-[390px]" />
    </div>
  );
}
