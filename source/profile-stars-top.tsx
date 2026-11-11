const imgGlyphClose20 = "./profile-assets/af22e.svg";
const imgGlyphQuestion20 = "./profile-assets/1c334.svg";
const imgBackground = "./profile-assets/ca39e.png";
const imgBody = "./profile-assets/f93ed.svg";
const imgLogo = "./profile-assets/f548a.svg";
const imgGlyphLocationCursor20 = "./profile-assets/e5fc5.svg";
const imgProperty1DefaultProperty256 = "./profile-assets/08911.svg";
const imgLiveAvatarMedia1 = "./profile-assets/a5119.png";
const imgImageFrame = "./profile-assets/b87e1.svg";
const imgLiveAvatarMedia = "./profile-assets/83778.svg";
const imgSpace = "./profile-assets/779e0.png";
const imgBackground1 = "./profile-assets/446ac.png";
const imgBackground2 = "./profile-assets/dcca5.png";
const imgGradientBottom = "./profile-assets/b3405.svg";
const imgGlyphMessage20 = "./profile-assets/865fc.svg";
const imgRightSide = "./profile-assets/8cd4d.svg";

type SquareButtonProps = {
  className?: string;
  color?: "Outline Light";
  icon?: "Close" | "Question";
};

function SquareButton({ className, color = "Outline Light", icon = "Close" }: SquareButtonProps) {
  const isQuestionAndOutlineLight = icon === "Question" && color === "Outline Light";
  return (
    <div className={className || "border-2 border-[rgba(255,255,255,0.5)] border-solid content-stretch flex items-center justify-center relative rounded-[12px] size-[46px]"} id={isQuestionAndOutlineLight ? "node-9949_173980" : "node-6008_104564"}>
      {icon === "Close" && color === "Outline Light" && (
        <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="6008:104565" data-name="glyph/close/20">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphClose20} />
        </div>
      )}
      {isQuestionAndOutlineLight && (
        <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="14386:141518" data-name="glyph/question/20">
          <div className="absolute left-0 size-[20px] top-0" data-node-id="I14386:141518;14386:34813" data-name="glyph_question_20">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphQuestion20} />
          </div>
        </div>
      )}
    </div>
  );
}

function ImageStarFriend88({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex flex-col items-center justify-center overflow-clip relative size-[88px]"} data-node-id="8525:161879" data-name="image_star_friend_88">
      <div className="h-[82.713px] relative shrink-0 w-[86.999px]" data-node-id="8525:161829" data-name="body">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBody} />
      </div>
      <div className="absolute content-stretch flex flex-col h-[43.236px] items-center justify-center left-[21px] top-[23.74px] w-[45.999px]" data-node-id="8525:161830" data-name="AvatarMedium">
        <div className="absolute left-0 size-[46px] top-0" data-node-id="8525:161831" data-name="Background">
          <img alt="" className="absolute block inset-0 max-w-none size-full" height="46" src={imgBackground} width="46" />
        </div>
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

function GlyphLocationCursor20({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[20px]"} data-node-id="111326:80675" data-name="glyph/location_cursor/20">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphLocationCursor20} />
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

type LineProps = {
  className?: string;
  property1?: "Default";
  property2?: "56";
};

function Line({ className, property1 = "Default", property2 = "56" }: LineProps) {
  return (
    <div className={className || "h-[6px] relative w-[56px]"} data-node-id="118740:126356">
      <div className="absolute inset-[0_0_0_-0.28%]">
        <img alt="" className="block max-w-none size-full" src={imgProperty1DefaultProperty256} />
      </div>
    </div>
  );
}

type Avatar56Props = {
  className?: string;
  type?: "live";
};

function Avatar56({ className, type = "live" }: Avatar56Props) {
  return (
    <div className={className || "overflow-clip relative size-[56px]"} data-node-id="118740:126295">
      <div className="absolute h-[56px] left-[5px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[56px_56px] top-[5px] w-[46px]" data-node-id="118740:126282" style={{ maskImage: `url("${imgImageFrame}")` }} data-name="image frame">
        <div className="absolute inset-[-8.93%_-10.87%_8.93%_-10.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1px_-1px] mask-size-[58px_68px]" data-node-id="120258:266523" style={{ maskImage: `url("${imgLiveAvatarMedia}")` }} data-name="live avatar media">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-[-110.97%] max-w-none size-[300.27%] top-[-35.74%]" src={imgLiveAvatarMedia1} />
          </div>
        </div>
      </div>
      <Line className="-translate-x-1/2 absolute bottom-0 h-[6px] left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-50px] mask-size-[56px_56px] w-[56px]" />
    </div>
  );
}

export default function Component3StarsMyStars() {
  return (
    <div className="bg-gradient-to-b from-[#0d0e1a] relative size-full to-[#3b3150]" data-node-id="9987:193380" data-name="3 stars / my stars">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-size-[1530.3269062042236px_832.0000197887421px] bg-top-left h-[31035px] left-1/2 opacity-30 top-[calc(50%+0.5px)] w-[6208px]" data-node-id="9987:193381" style={{ backgroundImage: `url("${imgSpace}")` }} data-name="Space" />
      <div className="absolute h-[844px] left-0 top-0 w-[390px]" data-node-id="9987:193382" data-name="Gradient">
        <div className="absolute flex inset-[52.84%_0_0_0] items-center justify-center" data-node-id="I9987:193382;3214:50429" style={{ containerType: "size" }}>
          <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
            <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-446px] mask-size-[390px_844px] relative size-full" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 390 398' preserveAspectRatio='none'><g transform='matrix(4.4989e-7 10.307 -23.144 8.0446e-7 195 -10.709)'><foreignObject x='-387.19' y='-387.19' width='774.37' height='774.37'><div xmlns='http://www.w3.org/1999/xhtml' style='background-image: conic-gradient(from 90deg, rgb(255, 67, 168) 0%, rgb(202, 69, 211) 5.4688%, rgb(149, 70, 255) 10.938%, rgb(120, 96, 255) 13.151%, rgb(92, 122, 255) 15.365%, rgb(64, 147, 255) 17.578%, rgb(35, 173, 255) 19.792%, rgb(63, 214, 240) 25.781%, rgb(90, 255, 225) 31.771%, rgb(127, 212, 233) 34.766%, rgb(163, 169, 240) 37.76%, rgb(200, 127, 248) 40.755%, rgb(236, 84, 255) 43.75%, rgb(189, 127, 252) 47.005%, rgb(141, 169, 250) 50.26%, rgb(94, 212, 247) 53.516%, rgb(70, 234, 245) 55.143%, rgb(47, 255, 244) 56.771%, rgb(53, 255, 203) 62.76%, rgb(60, 255, 161) 68.75%, rgb(108, 240, 140) 72.005%, rgb(157, 225, 119) 75.26%, rgb(206, 210, 98) 78.516%, rgb(255, 195, 78) 81.771%, rgb(250, 173, 122) 84.115%, rgb(246, 152, 166) 86.458%, rgb(241, 130, 211) 88.802%, rgb(237, 108, 255) 91.146%, rgb(246, 88, 212) 95.052%, rgb(255, 67, 168) 98.958%, rgb(255, 67, 168) 100%); opacity:1; height: 100%; width: 100%;'></div></foreignObject></g></svg>\")", maskImage: `url("${imgGradientBottom}")` }} data-name="gradient bottom" />
          </div>
        </div>
        <div className="absolute inset-[0_0_47.16%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[390px_844px]" data-node-id="I9987:193382;3214:50427" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 390 446' preserveAspectRatio='none'><g transform='matrix(4.4989e-7 11.55 -23.144 9.0148e-7 195 -12)'><foreignObject x='-387.19' y='-387.19' width='774.37' height='774.37'><div xmlns='http://www.w3.org/1999/xhtml' style='background-image: conic-gradient(from 90deg, rgb(108, 220, 255) 0%, rgb(88, 170, 255) 5.4688%, rgb(68, 120, 255) 10.938%, rgb(116, 97, 255) 15.365%, rgb(164, 73, 255) 19.792%, rgb(164, 73, 255) 31.771%, rgb(236, 84, 255) 43.75%, rgb(189, 127, 252) 47.005%, rgb(141, 169, 250) 50.26%, rgb(94, 212, 247) 53.516%, rgb(70, 234, 245) 55.143%, rgb(47, 255, 244) 56.771%, rgb(53, 255, 203) 62.76%, rgb(60, 255, 161) 68.75%, rgb(78, 255, 234) 81.771%, rgb(108, 220, 255) 91.146%, rgb(67, 210, 255) 98.958%, rgb(108, 220, 255) 100%); opacity:1; height: 100%; width: 100%;'></div></foreignObject></g></svg>\")", maskImage: `url("${imgGradientBottom}")` }} data-name="gradient top" />
      </div>
      <p className="-translate-x-1/2 [word-break:break-word] absolute bg-clip-text bg-gradient-to-l font-['SF_Pro_Rounded:Heavy'] from-[#cf92ff] from-[18.193%] leading-[normal] left-[calc(50%+0.5px)] not-italic opacity-20 text-[319.518px] text-[transparent] text-center to-[#66faff] top-[183px] tracking-[4.7928px] whitespace-nowrap" data-node-id="9987:193383">
        03
      </p>
      <div className="absolute h-[278px] left-0 top-[566px] w-[390px]" data-node-id="9987:193384" data-name="Party">
        <div className="absolute bg-black content-stretch flex flex-col h-[278px] items-center left-0 px-[16px] rounded-tl-[40px] rounded-tr-[40px] top-0 w-[390px]" data-node-id="9987:193385" data-name="Modal sheet">
          <div className="content-stretch flex flex-col h-[12px] items-center justify-end pt-[8px] relative shrink-0 w-full" data-node-id="I9987:193385;3277:68117" data-name="Slider">
            <div className="bg-[#808080] h-[4px] relative rounded-[20px] shrink-0 w-[33px]" data-node-id="I9987:193385;3277:68117;2702:17814" data-name="Vector" />
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col items-start left-0 top-[96px]" data-node-id="9987:193387" data-name="FriendList">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[390px]" data-node-id="9987:193388" data-name="ContactCard">
            <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="I9987:193388;6656:135465" data-name="ContactCard / Base">
              <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="I9987:193388;6656:135465;6651:127145" data-name="ContentLeft">
                <div className="relative shrink-0 size-[56px]" data-node-id="I9987:193388;6656:135465;6651:127146" data-name="Show/Hide Avatar">
                  <Avatar56 className="absolute left-0 overflow-clip size-[56px] top-0" />
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="I9987:193388;6656:135465;6651:127148" data-name="ContactCard / Title">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I9987:193388;6656:135465;6651:127148;13893:187677" data-name="Title">
                    <UserName className="content-stretch flex items-center justify-center relative shrink-0" />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0" data-node-id="I9987:193388;6656:135465;6651:127178" data-name="ContentRight">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I9987:193388;6656:135465;6651:127183" data-name="Show/Hide ContentRight">
                  <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I9987:193388;6656:135465;6651:127175" data-name="ContactCard User / Content Right">
                    <p className="[word-break:break-word] bg-clip-text bg-gradient-to-l font-['Montserrat:SemiBold'] font-semibold from-[#cf92ff] from-[18.193%] leading-[normal] lowercase relative shrink-0 text-[15px] text-[transparent] to-[#66faff] whitespace-nowrap" data-node-id="I9987:193388;6656:135465;6651:127175;6651:127137">
                      2
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[390px]" data-node-id="9987:193389" data-name="ContactCard">
            <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="I9987:193389;6656:135465" data-name="ContactCard / Base">
              <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="I9987:193389;6656:135465;6651:127145" data-name="ContentLeft">
                <div className="relative shrink-0 size-[56px]" data-node-id="I9987:193389;6656:135465;6651:127146" data-name="Show/Hide Avatar">
                  <Avatar56 className="absolute left-0 overflow-clip size-[56px] top-0" />
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="I9987:193389;6656:135465;6651:127148" data-name="ContactCard / Title">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I9987:193389;6656:135465;6651:127148;13893:187677" data-name="Title">
                    <UserName className="content-stretch flex items-center justify-center relative shrink-0" />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0" data-node-id="I9987:193389;6656:135465;6651:127178" data-name="ContentRight">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I9987:193389;6656:135465;6651:127183" data-name="Show/Hide ContentRight">
                  <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I9987:193389;6656:135465;6651:127175" data-name="ContactCard User / Content Right">
                    <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] lowercase relative shrink-0 text-[#808080] text-[15px] whitespace-nowrap" data-node-id="I9987:193389;6656:135465;6651:127175;6651:127137">
                      1
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[390px]" data-node-id="9987:193390" data-name="ContactCard">
            <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="I9987:193390;6656:135465" data-name="ContactCard / Base">
              <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="I9987:193390;6656:135465;6651:127145" data-name="ContentLeft">
                <div className="relative shrink-0 size-[56px]" data-node-id="I9987:193390;6656:135465;6651:127146" data-name="Show/Hide Avatar">
                  <Avatar56 className="absolute left-0 overflow-clip size-[56px] top-0" />
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="I9987:193390;6656:135465;6651:127148" data-name="ContactCard / Title">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I9987:193390;6656:135465;6651:127148;13893:187677" data-name="Title">
                    <UserName className="content-stretch flex items-center justify-center relative shrink-0" />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0" data-node-id="I9987:193390;6656:135465;6651:127178" data-name="ContentRight">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I9987:193390;6656:135465;6651:127183" data-name="Show/Hide ContentRight">
                  <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I9987:193390;6656:135465;6651:127175" data-name="ContactCard User / Content Right">
                    <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] lowercase relative shrink-0 text-[#808080] text-[15px] whitespace-nowrap" data-node-id="I9987:193390;6656:135465;6651:127175;6651:127137">
                      0
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[390px]" data-node-id="9987:193391" data-name="ContactCard">
            <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="I9987:193391;6656:135465" data-name="ContactCard / Base">
              <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="I9987:193391;6656:135465;6651:127145" data-name="ContentLeft">
                <div className="relative shrink-0 size-[56px]" data-node-id="I9987:193391;6656:135465;6651:127146" data-name="Show/Hide Avatar">
                  <Avatar56 className="absolute left-0 overflow-clip size-[56px] top-0" />
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="I9987:193391;6656:135465;6651:127148" data-name="ContactCard / Title">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I9987:193391;6656:135465;6651:127148;13893:187677" data-name="Title">
                    <UserName className="content-stretch flex items-center justify-center relative shrink-0" />
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I9987:193391;6656:135465;6651:127148;6638:126608" data-name="Show/Hide SubTitle">
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I9987:193391;6656:135465;6651:127148;6638:126626" data-name="ContactCard / Subtitle">
                      <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I9987:193391;6656:135465;6651:127148;6638:126626;6656:130265" data-name="Text">
                        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I9987:193391;6656:135465;6651:127148;6638:126626;6699:135282" data-name="ContactCard / Subtitle / Text">
                          <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] lowercase relative shrink-0 text-[#808080] text-[15px] whitespace-nowrap" data-node-id="I9987:193391;6656:135465;6651:127148;6638:126626;6699:135282;6699:135269" style={{ fontVariationSettings: '"wdth" 100' }}>
                            2.3 км
                          </p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-[33px]" data-node-id="I9987:193391;6656:135465;6651:127148;6638:126626;6671:145702" data-name="Show/Hide Date" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0" data-node-id="I9987:193391;6656:135465;6651:127178" data-name="ContentRight">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I9987:193391;6656:135465;6651:127183" data-name="Show/Hide ContentRight">
                  <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-node-id="I9987:193391;6656:135465;6651:127175" data-name="ContactCard User / Content Right">
                    <div className="bg-[#1a1a1a] h-[36px] relative rounded-[12px] shrink-0 w-[48px]" data-node-id="I9987:193391;6656:135465;6651:127175;117699:267767" data-name="SendButton">
                      <div className="absolute left-[14px] size-[20px] top-[8px]" data-node-id="I9987:193391;6656:135465;6651:127175;117699:267768" data-name="glyph/message/20">
                        <div className="absolute left-0 size-[20px] top-0" data-node-id="I9987:193391;6656:135465;6651:127175;117699:267768;53879:109184" data-name="glyph_message_20">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphMessage20} />
                        </div>
                      </div>
                    </div>
                    <div className="border border-[#494949] border-solid h-[36px] relative rounded-[12px] shrink-0 w-[48px]" data-node-id="I9987:193391;6656:135465;6651:127175;5916:107548" data-name="GeoButton">
                      <GlyphLocationCursor20 className="absolute left-[12px] opacity-50 overflow-clip size-[20px] top-[8px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#242424] h-[48px] left-[16px] rounded-[10px] top-[32px] w-[358px]" data-node-id="10074:131619" data-name="Tabs">
          <div className="absolute bg-gradient-to-b from-[#aa94ed] inset-[8.33%_66.48%_8.33%_1.12%] rounded-[8px] to-[#66faff]" data-node-id="I10074:131619;2702:17721" data-name="selected" />
          <div className="[word-break:break-word] absolute flex flex-col font-['Montserrat:Bold'] font-bold inset-[33.33%_77.37%_33.33%_13.13%] justify-center leading-[0] text-[13px] text-black text-center uppercase whitespace-nowrap" data-node-id="I10074:131619;2702:17722">
            <p className="leading-[normal]">Топ</p>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Montserrat:Bold'] font-bold justify-center leading-[0] left-[77.37%] right-[13.13%] text-[#808080] text-[13px] text-center top-1/2 uppercase whitespace-nowrap" data-node-id="I10074:131619;2702:17723">
            <p className="leading-[normal]">Хочу еще</p>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Montserrat:Bold'] font-bold justify-center leading-[0] left-[45.25%] right-[45.25%] text-[#808080] text-[13px] text-center top-1/2 uppercase whitespace-nowrap" data-node-id="I10074:131619;2702:17724">
            <p className="leading-[normal]">Мои</p>
          </div>
        </div>
      </div>
      <SquareButton className="absolute border-2 border-[rgba(255,255,255,0.5)] border-solid content-stretch flex items-center justify-center left-[328px] rounded-[12px] size-[46px] top-[64px]" />
      <HomeIndicator className="absolute h-[34px] left-[-1px] top-[811px] w-[390px]" />
      <div className="absolute h-[47px] left-0 overflow-clip top-0 w-[390px]" data-node-id="9987:193394" data-name="StatusBar">
        <div className="absolute contents left-[27px] top-[14px]" data-node-id="I9987:193394;2604:15044" data-name="Left Side">
          <div className="absolute h-[21px] left-[27px] rounded-[24px] top-[14px] w-[54px]" data-node-id="I9987:193394;2604:15045" data-name="_StatusBar-time">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro_Text:Semibold'] h-[20px] leading-[22px] left-[27px] not-italic text-[17px] text-center text-white top-px tracking-[-0.408px] w-[54px]" data-node-id="I9987:193394;2604:15045;839:7100" style={{ fontFeatureSettings: '"case" 1' }}>
              4:20
            </p>
          </div>
        </div>
        <div className="absolute h-[13px] right-[26.6px] top-[19px] w-[77.401px]" data-node-id="I9987:193394;2604:15046" data-name="Right Side">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRightSide} />
        </div>
        <LogoNotch className="-translate-x-1/2 absolute content-stretch flex items-center left-[calc(50%-0.14px)] px-[8px] py-[5px] rounded-[100px] top-[11px] w-[81.718px]" />
      </div>
      <ImageStarFriend88 className="absolute flex items-center justify-center left-[144px] size-[110.886px] top-[463px]" />
      <div className="absolute flex items-center justify-center left-[8px] size-[110.886px] top-[463px]" data-node-id="9987:193396">
        <div className="-rotate-18 flex-none">
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative size-[88px]" data-name="image_star_friend_88">
            <div className="h-[82.713px] relative shrink-0 w-[86.999px]" data-node-id="I9987:193396;8525:161829" data-name="body">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBody} />
            </div>
            <div className="absolute content-stretch flex flex-col h-[43.236px] items-center justify-center left-[21px] top-[23.74px] w-[45.999px]" data-node-id="I9987:193396;8525:161830" data-name="AvatarMedium">
              <div className="absolute left-0 size-[46px] top-0" data-node-id="I9987:193396;8525:161831" data-name="Background">
                <img alt="" className="absolute block inset-0 max-w-none size-full" height="46" src={imgBackground1} width="46" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[247px] size-[110.886px] top-[403px]" data-node-id="9987:193397">
        <div className="-rotate-18 flex-none">
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative size-[88px]" data-name="image_star_friend_88">
            <div className="h-[82.713px] relative shrink-0 w-[86.999px]" data-node-id="I9987:193397;8525:161829" data-name="body">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBody} />
            </div>
            <div className="absolute content-stretch flex flex-col h-[43.236px] items-center justify-center left-[21px] top-[23.74px] w-[45.999px]" data-node-id="I9987:193397;8525:161830" data-name="AvatarMedium">
              <div className="absolute left-0 size-[46px] top-0" data-node-id="I9987:193397;8525:161831" data-name="Background">
                <img alt="" className="absolute block inset-0 max-w-none size-full" height="46" src={imgBackground2} width="46" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SquareButton className="absolute border-2 border-[rgba(255,255,255,0.5)] border-solid content-stretch flex items-center justify-center left-[16px] rounded-[12px] size-[46px] top-[64px]" icon="Question" />
    </div>
  );
}
