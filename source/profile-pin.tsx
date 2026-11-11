const assetPathPrefix = "https://www.figma.com/api/mcp/asset/8ecee616-1534-4a7b-bd80-4d225782479d";
const imgLogo = `${assetPathPrefix}/f548a.svg`;
const imgRightSide = `${assetPathPrefix}/1ccd4.svg`;

const imgMap1 = "./profile-assets/72502.png";
const imgImage356 = "./profile-assets/8d0ab.png";
const imgImage357 = "./profile-assets/879c1.png";
const imgTrail = `${assetPathPrefix}/3e052.png`;
const imgFrame1321314681 = "./profile-assets/b3d36.png";
const imgDementor191 = `${assetPathPrefix}/0f67e.png`;




const imgMap = "./profile-assets/8e08f.svg";
const imgPin = "./profile-assets/8183b.svg";
const imgForm = "./profile-assets/69f0f.svg";
const imgForm1 = "./profile-assets/41e94.svg";
const imgGlyphStickerLock16 = "./profile-assets/c4c27.svg";

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

export default function ProfilePin({value,onChoose,onClose,avatar}: {value:string,onChoose:(v:string)=>void,onClose:()=>void,avatar:string}) {
  return (
    <div className="bg-white relative size-full" data-node-id="89016:30809" data-profile-pin data-selected={value} data-name="profile / edit / bday">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[844px] left-1/2 opacity-90 top-1/2 w-[390px]" data-node-id="89016:30857" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%), url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 390 844' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(33.85 89.05 -30.843 11.724 3.7886e-14 0)'><stop stop-color='rgba(211,119,255,1)' offset='0.34082'/><stop stop-color='rgba(165,171,255,1)' offset='0.67041'/><stop stop-color='rgba(119,222,255,1)' offset='1'/></radialGradient></defs></svg>\")" }} data-name="image_bg_colored" />
      <div className="absolute bg-black content-stretch flex flex-col h-[788px] items-center left-0 px-[16px] rounded-tl-[40px] rounded-tr-[40px] top-[56px] w-[390px]" data-node-id="89016:30858" data-name="Modal sheet">
        <div className="content-stretch flex flex-col h-[12px] items-center justify-end pt-[8px] relative shrink-0 w-full" data-node-id="I89016:30858;3277:68117" data-name="Slider">
          <div className="bg-[#808080] h-[4px] relative rounded-[20px] shrink-0 w-[33px]" data-node-id="I89016:30858;3277:68117;2702:17814" data-name="Vector" />
        </div>
      </div>
      <div className="absolute contents left-[16px] top-[149px]" data-node-id="89016:30859" data-name="Map">
        <div className="absolute contents left-[16px] top-[149px]" data-node-id="89016:30860" data-name="Map Image">
          <div className="absolute h-[775.189px] left-[16px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_209px] mask-size-[358px_220px] rounded-[20px] top-[-60px] w-[358px]" data-node-id="89016:30862" style={{ maskImage: `url("${imgMap}")` }} data-name="Map">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgMap1} />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[350px] left-[calc(50%-0.5px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[116px_65px] mask-size-[358px_220px] top-[calc(50%-163px)] w-[589px]" data-node-id="89016:30863" style={{ maskImage: `url("${imgMap}")` }} data-name="image 356">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage356} />
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage357} />
            </div>
          </div>
        </div>
        <div className="absolute flex h-[83px] items-center justify-center left-[193px] top-[219px] w-[122px]" data-node-id="89016:30864">
          <div className="-rotate-90 flex-none">
            <div className="h-[122px] relative w-[83px]" data-name="Trail">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTrail} />
            </div>
          </div>
        </div>
        <div className="absolute border-3 border-solid border-white h-[220px] left-[16px] rounded-[20px] top-[149px] w-[358px]" data-node-id="89016:30865" data-name="Stroke" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[79px] left-1/2 top-[calc(50%-162.5px)] w-[72px]" data-node-id="89016:30866" data-name="Pin">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPin} />
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-0 top-[385px]" data-node-id="89016:30867" data-name="List">
        <div className="content-stretch flex gap-[12px] items-start px-[16px] relative shrink-0 w-[390px]" data-node-id="89016:30868" data-name="Row">
          <div className="bg-[#1c1c1c] border-3 border-solid border-white flex-[1_0_0] h-[142px] min-w-px relative rounded-[20px]" data-node-id="89016:30869" role="button" tabIndex={0} aria-label="стандарт" aria-pressed={value==="стандарт"} onClick={()=>onChoose("стандарт")} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();onChoose("стандарт");}}} data-name="PinStyle">
            <div className="absolute flex h-[51px] items-center justify-center left-[77px] top-[27px] w-[75px]" data-node-id="89016:30870">
              <div className="-rotate-90 flex-none">
                <div className="h-[75px] relative w-[51px]" data-name="Trail">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTrail} />
                </div>
              </div>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Montserrat:Bold'] font-bold justify-center leading-[0] left-1/2 text-[13px] text-center text-white top-[calc(50%+33px)] uppercase whitespace-nowrap" data-node-id="89016:30871">
              <p className="leading-[normal]">стандарт</p>
            </div>
            <div className="-translate-x-1/2 absolute left-[calc(50%+0.5px)] size-[60px] top-[21px]" data-node-id="89016:30872" data-name="icon">
              <div className="absolute left-0 overflow-clip size-[60px] top-0" data-node-id="89016:30873" data-name="icon_pin_trail_60">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 top-1/2" data-node-id="89016:30874">
                  <div className="absolute inset-[0_3.33%]" data-node-id="89016:30875" data-name="Form">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgForm} />
                  </div>
                  <div className="absolute inset-[6.67%_10%_13.33%_10%] rounded-[20px]" data-node-id="89016:30879" style={{ backgroundImage: "linear-gradient(167.93347750344384deg, rgb(94, 92, 113) 6.6092%, rgb(27, 27, 27) 100%)" }} data-name="Image" />
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[40px] top-[calc(50%-2.36px)]" data-node-id="89016:30880">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[32px] top-1/2" data-node-id="89016:30881">
                      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgFrame1321314681} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#1c1c1c] border border-[#2b2b2b] border-solid flex-[1_0_0] h-[142px] min-w-px relative rounded-[20px]" data-node-id="89016:30882" role="button" tabIndex={0} aria-label="трях фест" aria-pressed={value==="трях фест"} onClick={()=>onChoose("трях фест")} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();onChoose("трях фест");}}} data-name="PinStyle">
            <div className="absolute flex h-[51px] items-center justify-center left-[79px] top-[29px] w-[75px]" data-node-id="89016:30883">
              <div className="-rotate-90 flex-none">
                <div className="h-[75px] relative w-[51px]" data-name="Trail">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTrail} />
                </div>
              </div>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Montserrat:Bold'] font-bold justify-center leading-[0] left-1/2 text-[13px] text-center text-white top-[calc(50%+33px)] uppercase whitespace-nowrap" data-node-id="89016:30884">
              <p className="leading-[normal]">трях фест</p>
            </div>
            <div className="-translate-x-1/2 absolute left-[calc(50%+0.5px)] size-[60px] top-[23px]" data-node-id="89016:30885" data-name="icon">
              <div className="absolute left-0 overflow-clip size-[60px] top-0" data-node-id="89016:30886" data-name="icon_pin_trail_60">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 top-1/2" data-node-id="89016:30887">
                  <div className="absolute inset-[0_3.33%]" data-node-id="89016:30888" data-name="Form">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgForm} />
                  </div>
                  <div className="absolute inset-[6.67%_10%_13.33%_10%] rounded-[20px]" data-node-id="89016:30892" style={{ backgroundImage: "linear-gradient(167.93347750344384deg, rgb(94, 92, 113) 6.6092%, rgb(27, 27, 27) 100%)" }} data-name="Image" />
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[40px] top-[calc(50%-2.36px)]" data-node-id="89016:30893">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[32px] top-1/2" data-node-id="89016:30894" data-name="image_star_blue_reflecs">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame1321314681} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-start px-[16px] relative shrink-0 w-[390px]" data-node-id="89016:30895" data-name="Row">
          <div className="bg-[#1c1c1c] border border-[#2b2b2b] border-solid h-[142px] relative rounded-[20px] shrink-0 w-[175px]" data-node-id="89016:30896" aria-label="Дементор, недоступен: 7 из 10 друзей" aria-disabled="true" data-name="PinStyle">
            <div className="absolute flex h-[44px] items-center justify-center left-[93px] top-[30px] w-[68px]" data-node-id="89016:30898">
              <div className="-rotate-90 flex-none">
                <div className="h-[68px] relative w-[44px]" data-name="dementor_19 1">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDementor191} />
                </div>
              </div>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute bg-clip-text flex flex-col font-['Montserrat:Bold'] font-bold justify-center leading-[0] left-[calc(50%-0.5px)] text-[13px] text-[transparent] text-center top-[calc(50%+33px)] uppercase whitespace-nowrap" data-node-id="89016:30899" style={{ backgroundImage: "linear-gradient(190.52056264311665deg, rgb(170, 148, 237) 12.734%, rgb(102, 250, 255) 92.437%)" }}>
              <p className="leading-[normal]">7/10 друзей</p>
            </div>
            <div className="-translate-x-1/2 absolute left-[calc(50%+0.5px)] size-[60px] top-[23px]" data-node-id="89016:30900" data-name="icon">
              <div className="absolute left-0 overflow-clip size-[60px] top-0" data-node-id="I89016:30900;29967:535903" data-name="icon_pin_trail_locked_60">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 top-1/2" data-node-id="I89016:30900;29967:535924">
                  <div className="absolute inset-[0_3.33%]" data-node-id="I89016:30900;29967:535917" data-name="Form">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgForm1} />
                  </div>
                  <div className="absolute bg-black inset-[6.67%_10%_13.33%_10%] rounded-[20px]" data-node-id="I89016:30900;29967:535920" data-name="Image" />
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] overflow-clip size-[32px] top-[calc(50%-2px)]" data-node-id="I89016:30900;29967:535921" data-name="glyph/sticker lock/16">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphStickerLock16} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-center justify-end left-0 pt-[28px] px-[16px] top-[56px] w-[390px]" data-node-id="89016:30901" data-name="HeaderView">
        <div className="content-stretch flex gap-[32px] h-[56px] items-center relative shrink-0 w-full" data-node-id="I89016:30901;3962:106385" data-name="Title">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Montserrat:Bold'] font-bold leading-[34px] lowercase min-w-px relative text-[28px] text-white" data-node-id="I89016:30901;3962:106387">
            стиль пина
          </p>
        </div>
      </div>
      <button type="button" onClick={onClose} className={'profile-pin-return'} aria-label="Вернуться к редактированию профиля" /><HomeIndicator className="absolute h-[34px] left-0 top-[810px] w-[390px]" />
      <StatusBar className="-translate-x-1/2 absolute h-[47px] left-1/2 overflow-clip top-0 w-[390px]" />
    </div>
  );
}
