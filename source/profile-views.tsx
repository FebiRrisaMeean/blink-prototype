const assetPathPrefix = "./profile-assets";
const imgGlyphClose20 = `${assetPathPrefix}/2d8ec.svg`;
const imgLogo = `${assetPathPrefix}/f548a.svg`;
const imgRightSide = `${assetPathPrefix}/1ccd4.svg`;
const imgImageProfileViews = `${assetPathPrefix}/21e4c.png`;
const imgImageEyesSticker = `${assetPathPrefix}/18153.png`;
const imgGlyphQuestion20 = `${assetPathPrefix}/f326c.svg`;

type SquareButtonProps = {
  className?: string;
  color?: "Light Skeuo";
  icon?: "Close";
};

function SquareButton({ className, color = "Light Skeuo", icon = "Close" }: SquareButtonProps) {
  return (
    <div className={className || "backdrop-blur-[10px] bg-gradient-to-b border border-[#e4e4e4] border-solid content-stretch flex from-[#ebebeb] from-[26.061%] items-center justify-center relative rounded-[12px] size-[46px] to-[#b2b2b2]"} data-node-id="43997:352984">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="43997:352985" data-name="glyph/close/20">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphClose20} />
      </div>
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
  darkMode?: "False";
};

function HomeIndicator({ className, darkMode = "False" }: HomeIndicatorProps) {
  return (
    <div className={className || "h-[34px] relative w-[390px]"} data-node-id="1525:11080">
      <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] w-[134px]" data-node-id="1525:11081" data-name="Home Indicator" />
    </div>
  );
}

function ImageProfileViews({ className }: { className?: string }) {
  return (
    <div className={className || "h-[844px] overflow-clip relative w-[390px]"} data-node-id="45463:94058" data-name="image_profile_views">
      <div className="-translate-x-1/2 absolute flex items-center justify-center left-[calc(50%+47px)] size-[876px] top-0" data-node-id="45463:94056">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[876px]" data-name="image_profile_views">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageProfileViews} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Profile({week=87}: {week?:number}) {
  return (
    <div className="bg-white relative size-full" data-node-id="45225:93649" data-name="profile">
      <ImageProfileViews className="absolute h-[844px] left-0 overflow-clip top-0 w-[390px]" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Montserrat:SemiBold'] font-semibold leading-[1.119] left-[194.5px] lowercase text-[20px] text-black text-center top-[224px] w-[127px]" data-node-id="45225:93671">
        за 7 ДНЕЙ
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Montserrat:SemiBold'] font-semibold leading-[1.119] left-[194.5px] lowercase text-[20px] text-black text-center top-[365px] w-[177px]" data-node-id="45225:93672">
        за 30 ДНЕЙ
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Montserrat:SemiBold'] font-semibold leading-[1.119] left-[194.5px] lowercase text-[20px] text-black text-center top-[508px] w-[177px]" data-node-id="45225:93673">
        за ВСЁ ВРЕМЯ
      </p>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[78.005px] items-center justify-center left-[194.5px] top-[426px] w-[206.97px]" data-node-id="45225:93674">
        <div className="-rotate-4 flex-none">
          <div className="[word-break:break-word] flex flex-col font-['Montserrat:ExtraBold'] font-extrabold justify-center leading-[0] relative text-[0px] text-black text-center text-shadow-[0px_1px_2px_rgba(0,0,0,0.5)] tracking-[-3.2px] whitespace-nowrap">
            <p className="text-[64px]">
              <span className="[word-break:break-word] font-['Montserrat:ExtraBold'] font-extrabold leading-none text-black tracking-[-3.2px]">4</span>
              <span className="leading-[32px] tracking-[6.4px]">7</span>
              <span className="leading-[32px]">203</span>
            </p>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[71.744px] items-center justify-center left-[195.5px] top-[569px] w-[225.098px]" data-node-id="45225:93675">
        <div className="flex-none rotate-2">
          <div className="[word-break:break-word] flex flex-col font-['Montserrat:ExtraBold'] font-extrabold justify-center leading-[0] relative text-[0px] text-black text-center text-shadow-[0px_1px_2px_rgba(0,0,0,0.5)] tracking-[-3.2px] whitespace-nowrap">
            <p className="text-[64px]">
              <span className="[word-break:break-word] font-['Montserrat:ExtraBold'] font-extrabold leading-none text-black tracking-[-3.2px]">85</span>
              <span className="leading-[32px] tracking-[6.4px]">3</span>
              <span className="leading-[32px]">051</span>
            </p>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[78.224px] items-center justify-center left-[194.23px] top-[286.04px] w-[170.946px]" data-node-id="45225:93676">
        <div className="flex-none rotate-5">
          <div className="[word-break:break-word] flex flex-col font-['Montserrat:ExtraBold'] font-extrabold justify-center leading-[0] relative text-[0px] text-black text-center text-shadow-[0px_1px_2px_rgba(0,0,0,0.5)] tracking-[-3.2px] whitespace-nowrap">
            <p className="text-[64px]">{week}</p>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex items-center justify-center left-[calc(50%-143.54px)] size-[74.912px] top-[49px]" data-node-id="49457:378998">
        <div className="-rotate-7 flex-none">
          <div className="relative size-[67.221px]" data-name="image_eyes_sticker">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageEyesSticker} />
          </div>
        </div>
      </div>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Montserrat:SemiBold'] font-semibold leading-[normal] left-1/2 lowercase text-[24px] text-black text-center top-[61px] whitespace-nowrap" data-node-id="49457:379003">
        просмотры
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Montserrat:SemiBold'] font-semibold leading-[normal] left-1/2 lowercase text-[15px] text-[rgba(0,0,0,0.6)] text-center top-[94px] whitespace-nowrap" data-node-id="49457:379008">
        от 1 ноября 2024
      </p>
      <div className="-translate-x-1/2 absolute border-2 border-black border-solid content-stretch flex items-center justify-center left-[calc(50%+156px)] rounded-[12px] size-[46px] top-[64px]" data-node-id="49457:379013" data-name="SquareButton">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="I49457:379013;24678:345771" data-name="glyph/question/20">
          <div className="absolute left-0 size-[20px] top-0" data-node-id="I49457:379013;24678:345771;14386:34813" data-name="glyph_question_20">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphQuestion20} />
          </div>
        </div>
      </div>
      <HomeIndicator className="-translate-x-1/2 absolute bottom-0 h-[34px] left-1/2 w-[390px]" />
      <StatusBar className="-translate-x-1/2 absolute h-[47px] left-1/2 overflow-clip top-0 w-[390px]" />
      <div className="absolute bottom-0 h-[128px] left-0 right-0" data-node-id="49457:379038" data-name="CloseWindowBottom">
        <SquareButton className="-translate-x-1/2 absolute backdrop-blur-[10px] bg-gradient-to-b border border-[#e4e4e4] border-solid content-stretch flex from-[#ebebeb] from-[26.061%] items-center justify-center left-1/2 rounded-[12px] size-[46px] to-[#b2b2b2] top-[18px]" />
      </div>
    </div>
  );
}
