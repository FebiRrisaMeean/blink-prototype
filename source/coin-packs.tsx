const assetPathPrefix = "https://www.figma.com/api/mcp/asset/c56bce82-0316-4a98-881e-0355d0c40ac5";
const imgCoin = `${assetPathPrefix}/4cb9e.png`;
const imgGroup1321314027 = `${assetPathPrefix}/68eab.svg`;
const imgGlyphClose20 = `${assetPathPrefix}/2d8ec.svg`;
const imgRightSide = `${assetPathPrefix}/d00ef.svg`;
const imgSpaceSvg = `${assetPathPrefix}/98b28.svg`;
const imgSpaceSvg1 = `${assetPathPrefix}/a95fe.svg`;

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

type CoinPackIllustrationsProps = {
  className?: string;
  asset?: "100";
};

function CoinPackIllustrations({ className, asset = "100" }: CoinPackIllustrationsProps) {
  return (
    <div className={className || "relative size-[80px]"} data-node-id="85903:24990">
      <div className="-translate-y-1/2 absolute left-0 size-[80px] top-1/2" data-node-id="85903:24982" data-name="coin">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.01%] left-[0.01%] max-w-none top-[-0.01%] w-[99.99%]" src={imgCoin} />
        </div>
      </div>
    </div>
  );
}

export function ModalSheet({ className }: { className?: string }) {
  return (
    <div className={className || "bg-black content-stretch flex flex-col gap-[24px] items-center overflow-clip px-[16px] relative rounded-tl-[40px] rounded-tr-[40px] w-[390px]"} data-node-id="85381:48887" data-name="Modal sheet">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center justify-center pb-[16px] pt-[28px] px-[8px] relative shrink-0 w-full" data-node-id="84475:17035" data-name="HeaderView">
        <p className="font-['Montserrat:Bold'] font-bold leading-[34px] lowercase relative shrink-0 text-[28px] text-white w-full whitespace-pre-wrap" data-node-id="I84475:17035;59851:144743">
          {`купить `}
          <br aria-hidden />
          блинкоины
        </p>
        <p className="font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#808080] text-[15px] w-full" data-node-id="I84475:17035;59851:144744">
          монеты для покупки предметов
        </p>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[342px]" data-node-id="84475:16950" data-name="col">
        <div className="bg-[#121213] h-[80px] overflow-clip relative rounded-[28px] shrink-0 w-[342px]" data-node-id="85907:26567" data-name="_coin-cell">
          <CoinPackIllustrations className="-translate-y-1/2 absolute left-[8px] size-[80px] top-1/2" />
          <div className="-translate-y-1/2 absolute content-stretch drop-shadow-[0px_6px_4px_rgba(0,0,0,0.25)] flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[8px] right-[22px] rounded-[12px] top-1/2 w-[106px]" data-node-id="I85907:26567;85903:24983" style={{ backgroundImage: "linear-gradient(199.1312916433713deg, rgb(170, 148, 237) 12.734%, rgb(102, 250, 255) 92.437%)" }} data-name="Button">
            <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[15px] text-black uppercase whitespace-nowrap" data-node-id="I85907:26567;85903:24983;2596:38123">
              100 ₽
            </p>
          </div>
          <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[4px] items-start justify-center left-[100px] top-[calc(50%-0.5px)] w-[72px]" data-node-id="I85907:26567;85903:24984" data-name="col">
            <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[1.119] lowercase relative shrink-0 text-[20px] text-white whitespace-nowrap" data-node-id="I85907:26567;85903:24985">
              10
            </p>
          </div>
        </div>
        <div className="bg-[#121213] h-[80px] overflow-clip relative rounded-[28px] shrink-0 w-[342px]" data-node-id="85907:26568" data-name="_coin-cell">
          <CoinPackIllustrations className="-translate-y-1/2 absolute left-[8px] size-[80px] top-1/2" />
          <div className="-translate-y-1/2 absolute content-stretch drop-shadow-[0px_6px_4px_rgba(0,0,0,0.25)] flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[8px] right-[22px] rounded-[12px] top-1/2 w-[106px]" data-node-id="I85907:26568;85903:24983" style={{ backgroundImage: "linear-gradient(199.1312916433713deg, rgb(170, 148, 237) 12.734%, rgb(102, 250, 255) 92.437%)" }} data-name="Button">
            <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[15px] text-black uppercase whitespace-nowrap" data-node-id="I85907:26568;85903:24983;2596:38123">
              285 ₽
            </p>
          </div>
          <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[4px] items-start justify-center left-[100px] top-[calc(50%-0.5px)] w-[72px]" data-node-id="I85907:26568;85903:24984" data-name="col">
            <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[1.119] lowercase relative shrink-0 text-[20px] text-white whitespace-nowrap" data-node-id="I85907:26568;85903:24985">
              30
            </p>
          </div>
        </div>
        <div className="bg-[#121213] h-[80px] overflow-clip relative rounded-[28px] shrink-0 w-[342px]" data-node-id="85907:26569" data-name="_coin-cell">
          <CoinPackIllustrations className="-translate-y-1/2 absolute left-[8px] size-[80px] top-1/2" />
          <div className="-translate-y-1/2 absolute content-stretch drop-shadow-[0px_6px_4px_rgba(0,0,0,0.25)] flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[8px] right-[22px] rounded-[12px] top-1/2 w-[106px]" data-node-id="I85907:26569;85903:24983" style={{ backgroundImage: "linear-gradient(199.1312916433713deg, rgb(170, 148, 237) 12.734%, rgb(102, 250, 255) 92.437%)" }} data-name="Button">
            <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[15px] text-black uppercase whitespace-nowrap" data-node-id="I85907:26569;85903:24983;2596:38123">
              450 ₽
            </p>
          </div>
          <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[4px] items-start justify-center left-[100px] top-[calc(50%-0.5px)] w-[72px]" data-node-id="I85907:26569;85903:24984" data-name="col">
            <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[1.119] lowercase relative shrink-0 text-[20px] text-white whitespace-nowrap" data-node-id="I85907:26569;85903:24985">
              50
            </p>
          </div>
        </div>
        <div className="bg-[#121213] h-[80px] overflow-clip relative rounded-[28px] shrink-0 w-[342px]" data-node-id="85907:26570" data-name="_coin-cell">
          <CoinPackIllustrations className="-translate-y-1/2 absolute left-[8px] size-[80px] top-1/2" />
          <div className="-translate-y-1/2 absolute content-stretch drop-shadow-[0px_6px_4px_rgba(0,0,0,0.25)] flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[8px] right-[22px] rounded-[12px] top-1/2 w-[106px]" data-node-id="I85907:26570;85903:24983" style={{ backgroundImage: "linear-gradient(199.1312916433713deg, rgb(170, 148, 237) 12.734%, rgb(102, 250, 255) 92.437%)" }} data-name="Button">
            <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[15px] text-black uppercase whitespace-nowrap" data-node-id="I85907:26570;85903:24983;2596:38123">
              850 ₽
            </p>
          </div>
          <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[4px] items-start justify-center left-[100px] top-[calc(50%-0.5px)] w-[72px]" data-node-id="I85907:26570;85903:24984" data-name="col">
            <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[1.119] lowercase relative shrink-0 text-[20px] text-white whitespace-nowrap" data-node-id="I85907:26570;85903:24985">
              100
            </p>
          </div>
        </div>
        <div className="bg-[#121213] h-[80px] overflow-clip relative rounded-[28px] shrink-0 w-[342px]" data-node-id="85907:26571" data-name="_coin-cell">
          <CoinPackIllustrations className="-translate-y-1/2 absolute left-[8px] size-[80px] top-1/2" />
          <div className="-translate-y-1/2 absolute content-stretch drop-shadow-[0px_6px_4px_rgba(0,0,0,0.25)] flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[8px] right-[22px] rounded-[12px] top-1/2 w-[106px]" data-node-id="I85907:26571;85903:24983" style={{ backgroundImage: "linear-gradient(199.1312916433713deg, rgb(170, 148, 237) 12.734%, rgb(102, 250, 255) 92.437%)" }} data-name="Button">
            <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[15px] text-black uppercase whitespace-nowrap" data-node-id="I85907:26571;85903:24983;2596:38123">
              2 400 ₽
            </p>
          </div>
          <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[4px] items-start justify-center left-[100px] top-[calc(50%-0.5px)] w-[72px]" data-node-id="I85907:26571;85903:24984" data-name="col">
            <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[1.119] lowercase relative shrink-0 text-[20px] text-white whitespace-nowrap" data-node-id="I85907:26571;85903:24985">
              300
            </p>
          </div>
        </div>
        <div className="bg-[#121213] h-[80px] overflow-clip relative rounded-[28px] shrink-0 w-[342px]" data-node-id="85907:26572" data-name="_coin-cell">
          <CoinPackIllustrations className="-translate-y-1/2 absolute left-[8px] size-[80px] top-1/2" />
          <div className="-translate-y-1/2 absolute content-stretch drop-shadow-[0px_6px_4px_rgba(0,0,0,0.25)] flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[8px] right-[22px] rounded-[12px] top-1/2 w-[106px]" data-node-id="I85907:26572;85903:24983" style={{ backgroundImage: "linear-gradient(199.1312916433713deg, rgb(170, 148, 237) 12.734%, rgb(102, 250, 255) 92.437%)" }} data-name="Button">
            <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[15px] text-black uppercase whitespace-nowrap" data-node-id="I85907:26572;85903:24983;2596:38123">
              3 750 ₽
            </p>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[4px] items-start justify-center left-[100px] lowercase top-[calc(50%-0.5px)] w-[72px] whitespace-nowrap" data-node-id="I85907:26572;85903:24984" data-name="col">
            <p className="font-['Montserrat:SemiBold'] font-semibold leading-[1.119] relative shrink-0 text-[20px] text-white" data-node-id="I85907:26572;85903:24985">
              500
            </p>
            <div className="flex flex-col font-['SF_Pro_Text:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.5)]" data-node-id="I85907:26572;85903:24986">
              <p className="leading-none">25% бонус</p>
            </div>
          </div>
        </div>
        <div className="bg-[#121213] h-[80px] overflow-clip relative rounded-[28px] shrink-0 w-[342px]" data-node-id="85907:26573" data-name="_coin-cell">
          <CoinPackIllustrations className="-translate-y-1/2 absolute left-[8px] size-[80px] top-1/2" />
          <div className="-translate-y-1/2 absolute content-stretch drop-shadow-[0px_6px_4px_rgba(0,0,0,0.25)] flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[8px] right-[22px] rounded-[12px] top-1/2 w-[106px]" data-node-id="I85907:26573;85903:24983" style={{ backgroundImage: "linear-gradient(199.1312916433713deg, rgb(170, 148, 237) 12.734%, rgb(102, 250, 255) 92.437%)" }} data-name="Button">
            <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[15px] text-black uppercase whitespace-nowrap" data-node-id="I85907:26573;85903:24983;2596:38123">
              7 000 ₽
            </p>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[4px] items-start justify-center left-[100px] lowercase top-[calc(50%-0.5px)] w-[72px] whitespace-nowrap" data-node-id="I85907:26573;85903:24984" data-name="col">
            <p className="font-['Montserrat:SemiBold'] font-semibold leading-[1.119] relative shrink-0 text-[20px] text-white" data-node-id="I85907:26573;85903:24985">
              1 000
            </p>
            <div className="flex flex-col font-['SF_Pro_Text:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.5)]" data-node-id="I85907:26573;85903:24986">
              <p className="leading-none">30% бонус</p>
            </div>
          </div>
        </div>
        <div className="bg-black content-stretch flex h-[56px] items-center justify-center py-[18px] relative rounded-[20px] shrink-0 w-full" data-node-id="85130:75514" data-name="Button">
          <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[15px] text-center text-white uppercase whitespace-nowrap" data-node-id="I85130:75514;2239:11060">
            восстановить покупки
          </p>
        </div>
      </div>
      <div className="absolute left-[calc(83.33%+9px)] overflow-clip size-[32px] top-[32px]" data-node-id="85130:157853" data-name="glyph/about/32">
        <div className="absolute left-0 overflow-clip size-[32px] top-0" data-node-id="I85130:157853;25201:91681" data-name="glyph_about_32">
          <div className="absolute contents inset-0" data-node-id="I85130:157853;25201:91682" data-name="Vector">
            <div className="absolute contents inset-0" data-node-id="I85130:157853;25201:91683">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1321314027} />
              <p className="[word-break:break-word] absolute font-['SF_Pro_Rounded:Bold'] inset-[12.5%_32.29%_12.5%_33.33%] leading-[normal] lowercase not-italic text-[20px] text-white whitespace-nowrap" data-node-id="I85130:157853;25201:91685">
                ?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col h-[12px] items-center left-[16px] pt-[8px] top-0 w-[358px]" data-node-id="84475:17036" data-name="Indicator">
        <div className="bg-[#808080] h-[4px] relative rounded-[20px] shrink-0 w-[33px]" data-node-id="I84475:17036;2702:17814" data-name="Vector" />
      </div>
    </div>
  );
}

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

export default function Component() {
  return (
    <div className="bg-black overflow-clip relative rounded-[40px] size-full" data-node-id="95388:108766" data-name="выбор пака койнов">
      <div className="absolute bottom-[278px] h-[128px] left-0 right-0" data-node-id="95388:108767" data-name="Close window bottom">
        <div className="absolute bottom-0 flex h-[128px] items-center justify-center left-0 right-0" data-node-id="I95388:108767;43958:82136" style={{ containerType: "size" }}>
          <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
            <div className="bg-gradient-to-b from-black relative size-full to-[rgba(0,0,0,0)]" data-name="Gradient Black" />
          </div>
        </div>
        <SquareButton className="-translate-x-1/2 absolute backdrop-blur-[10px] bg-gradient-to-b border border-[#e4e4e4] border-solid content-stretch flex from-[#ebebeb] from-[26.061%] items-center justify-center left-1/2 rounded-[12px] size-[46px] to-[#b2b2b2] top-[18px]" />
      </div>
      <div className="-translate-x-1/2 absolute bottom-[278px] h-[844px] left-1/2 opacity-90 w-[390px]" data-node-id="95388:108768" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%), url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 390 844' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(33.85 89.05 -30.843 11.724 3.7886e-14 0)'><stop stop-color='rgba(211,119,255,1)' offset='0.34082'/><stop stop-color='rgba(165,171,255,1)' offset='0.67041'/><stop stop-color='rgba(119,222,255,1)' offset='1'/></radialGradient></defs></svg>\")" }} data-name="image_bg_colored" />
      <div className="-translate-x-1/2 absolute h-[47px] left-1/2 overflow-clip top-0 w-[390px]" data-node-id="95388:108769" data-name="StatusBar">
        <div className="absolute contents left-[27px] top-[14px]" data-node-id="I95388:108769;2604:14897" data-name="Left Side">
          <div className="absolute h-[21px] left-[27px] rounded-[24px] top-[14px] w-[54px]" data-node-id="I95388:108769;2604:14898" data-name="_StatusBar-time">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro_Text:Semibold'] h-[20px] leading-[22px] left-[27px] not-italic text-[17px] text-center text-white top-px tracking-[-0.408px] w-[54px]" data-node-id="I95388:108769;2604:14898;839:7100" style={{ fontFeatureSettings: '"case" 1' }}>
              4:20
            </p>
          </div>
        </div>
        <div className="absolute h-[13px] right-[26.6px] top-[19px] w-[77.401px]" data-node-id="I95388:108769;2604:14899" data-name="Right Side">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRightSide} />
        </div>
      </div>
      <div className="absolute h-[844px] left-0 overflow-clip top-[74px] w-[390px]" data-node-id="95388:108770" data-name="1.1 : stars background">
        <div className="absolute h-[518px] left-[-19px] top-0 w-[428px]" data-node-id="95388:108771" data-name="space.svg">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSpaceSvg} />
        </div>
        <div className="absolute flex h-[572.997px] items-center justify-center left-[-19px] top-[513px] w-[422px]" data-node-id="95388:108814">
          <div className="flex-none rotate-180">
            <div className="h-[572.997px] relative w-[422px]" data-name="space.svg">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSpaceSvg1} />
            </div>
          </div>
        </div>
      </div>
      <ModalSheet className="absolute bg-black content-stretch flex flex-col gap-[24px] items-center left-0 overflow-x-clip overflow-y-auto px-[16px] rounded-tl-[40px] rounded-tr-[40px] top-[74px] w-[390px]" />
      <HomeIndicator className="-translate-x-1/2 absolute bottom-0 h-[34px] left-1/2 w-[390px]" />
    </div>
  );
}
