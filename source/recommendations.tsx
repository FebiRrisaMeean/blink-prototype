const assetPathPrefix = "https://www.figma.com/api/mcp/asset/438031ed-c179-499c-9104-b42ce579a35e";
const imgStateBlackStroke = `${assetPathPrefix}/8b5b1.png`;
const imgAvatarMedium = `${assetPathPrefix}/d8597.png`;
const imgAvatarXxSmall = `${assetPathPrefix}/ba0ff.png`;
const imgAvatarXxSmall1 = `${assetPathPrefix}/2207c.png`;
const imgAvatarMedium1 = `${assetPathPrefix}/c9a63.png`;
const imgUserCell1 = `${assetPathPrefix}/3a965.png`;
const imgImageEyesSticker = `${assetPathPrefix}/18153.png`;
const imgGlyphLargeChevronRight12 = `${assetPathPrefix}/5f88d.svg`;
const imgBackgroundPattern = `${assetPathPrefix}/5f04c.svg`;
const imgFadeCircle = `${assetPathPrefix}/3d5bc.svg`;
const imgBackgroundPattern1 = `${assetPathPrefix}/9756d.svg`;
const imgUserCell = `${assetPathPrefix}/99bae.svg`;
const imgBackgroundPattern2 = `${assetPathPrefix}/50e20.svg`;
const imgGlyphCheck16 = `${assetPathPrefix}/3931f.svg`;
const imgUnion = `${assetPathPrefix}/39aae.svg`;
const imgEllipse155 = `${assetPathPrefix}/31503.svg`;

type AvatarXxSmallProps = {
  className?: string;
  state?: "Black Stroke";
};

function AvatarXxSmall({ className, state = "Black Stroke" }: AvatarXxSmallProps) {
  return (
    <div className={className || "border-[1.5px] border-black border-solid overflow-clip relative rounded-[8px] size-[20px]"} data-node-id="44788:183620">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgStateBlackStroke} />
    </div>
  );
}

type AvatarProps = {
  className?: string;
  size?: "Medium" | "XXSmall";
};

function Avatar({ className, size = "Medium" }: AvatarProps) {
  const isXxSmall = size === "XXSmall";
  return (
    <div className={className || `relative ${isXxSmall ? "overflow-clip size-[20px]" : "size-[46px]"}`} id={isXxSmall ? "node-44099_135071" : "node-3951_109582"}>
      {size === "Medium" && (
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[16px] size-[46.001px] top-1/2" data-node-id="3951:109567" data-name="_AvatarMedium">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarMedium} />
        </div>
      )}
      {isXxSmall && <AvatarXxSmall className="absolute border-[1.5px] border-black border-solid left-0 rounded-[8px] size-[20px] top-0" />}
    </div>
  );
}

export default function PossibleFriendsSection() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full" data-node-id="118790:104952" data-name="possible-friends.section">
      <div className="content-stretch flex h-[40px] items-center justify-between pb-[12px] px-[16px] relative shrink-0 w-full" data-node-id="118790:104953" data-name="title">
        <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="118790:104954" data-name="Title">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Montserrat:Bold'] font-bold leading-[normal] lowercase min-w-px relative text-[24px] text-white" data-node-id="118790:104955">
            возможные
          </p>
        </div>
        <div className="content-stretch flex gap-[8px] items-center pt-[7px] relative shrink-0" data-node-id="118790:104957" data-name="Btn">
          <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[#a7a7a7] text-[13px] text-right tracking-[1.04px] uppercase whitespace-nowrap" data-node-id="118790:104958">
            ещё
          </p>
          <div className="overflow-clip relative shrink-0 size-[12px]" data-node-id="118790:104959" data-name="glyph/large chevron right/12">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[12px] top-1/2" data-node-id="I118790:104959;15657:80984" data-name="glyph_large_chevron_right_12">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphLargeChevronRight12} />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-center justify-end px-[16px] relative shrink-0 w-full" data-node-id="118790:104960" tabIndex={0} aria-label="Возможные друзья">
        <div className="border border-[rgba(255,255,255,0)] border-solid content-stretch flex flex-col items-center overflow-clip p-[2px] relative shrink-0 w-[114px]" data-node-id="118790:104961">
          <div className="bg-black border-2 border-[rgba(255,255,255,0.15)] border-solid h-[164px] overflow-clip relative rounded-[16px] shrink-0 w-[110px]" data-node-id="118790:104962" data-name="possbile-friend.card">
            <div className="absolute h-[152px] left-0 top-0 w-[110px]" data-node-id="118790:104963" data-name="background.pattern">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBackgroundPattern} />
            </div>
            <div className="absolute inset-[21px_0]" data-node-id="118790:105003" data-name="fade.circle">
              <div className="absolute inset-[-45.9%_-50.91%]">
                <img alt="" className="block max-w-none size-full" src={imgFadeCircle} />
              </div>
            </div>
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Heavy_Italic'] leading-none left-[8px] not-italic overflow-hidden right-[8px] text-[14px] text-center text-ellipsis text-white top-[8px]" data-node-id="118790:105004">
              егорский
            </p>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[88px] top-1/2" data-node-id="118790:105005" data-name="mask">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[68px] top-1/2" data-node-id="118790:105006" data-name="_Avatar">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#242424] border-[6.556px] border-black border-solid content-stretch flex flex-col items-center justify-center left-1/2 rounded-[23.652px] size-[68.001px] top-1/2" data-node-id="I118790:105006;3951:109567" data-name="_AvatarMedium">
                  <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[normal] lowercase relative shrink-0 text-[13.3px] text-white whitespace-nowrap" data-node-id="I118790:105006;3951:109567;2830:25730" style={{ fontVariationSettings: '"wdth" 100' }}>
                    maxkli...
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute bg-white bottom-[4px] content-stretch flex flex-col h-[32px] items-center justify-center left-[4px] px-[12px] py-[8px] right-[4px] rounded-[12px]" data-node-id="118790:105007" data-name="Button">
              <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[12px] text-black uppercase whitespace-nowrap" data-node-id="I118790:105007;2239:11203">
                Добавить
              </p>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-center justify-center pt-[8px] relative shrink-0 w-full" data-node-id="118790:105008">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="118790:105009" data-name="Avatars">
              <Avatar className="mr-[-6px] overflow-clip relative shrink-0 size-[20px]" size="XXSmall" />
              <div className="mr-[-6px] overflow-clip relative shrink-0 size-[20px]" data-node-id="118790:105011" data-name="_Avatar">
                <div className="absolute border-[1.5px] border-black border-solid left-0 rounded-[8px] size-[20px] top-0" data-node-id="I118790:105011;44788:184358" data-name="_AvatarXXSmall">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgAvatarXxSmall} />
                </div>
              </div>
              <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="118790:105012" data-name="_Avatar">
                <div className="absolute border-[1.5px] border-black border-solid left-0 rounded-[8px] size-[20px] top-0" data-node-id="I118790:105012;44788:184358" data-name="_AvatarXXSmall">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgAvatarXxSmall1} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro_Text:Medium'] leading-[1.2] not-italic opacity-60 relative shrink-0 text-[12px] text-center text-white tracking-[-0.408px] whitespace-nowrap" data-node-id="118790:105013">
              7 общих
            </p>
          </div>
        </div>
        <div className="border border-[rgba(255,255,255,0)] border-solid content-stretch flex flex-col items-center overflow-clip p-[2px] relative shrink-0 w-[114px]" data-node-id="118790:105014">
          <div className="bg-black border-2 border-[rgba(255,255,255,0.15)] border-solid h-[164px] overflow-clip relative rounded-[16px] shrink-0 w-[110px]" data-node-id="118790:105015" data-name="possbile-friend.card">
            <div className="absolute h-[152px] left-0 top-0 w-[110px]" data-node-id="118790:105016" data-name="background.pattern">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBackgroundPattern1} />
            </div>
            <div className="absolute inset-[21px_0]" data-node-id="118790:105056" data-name="fade.circle">
              <div className="absolute inset-[-45.9%_-50.91%]">
                <img alt="" className="block max-w-none size-full" src={imgFadeCircle} />
              </div>
            </div>
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Heavy_Italic'] leading-none left-[8px] not-italic overflow-hidden right-[8px] text-[14px] text-center text-ellipsis text-white top-[8px]" data-node-id="118790:105057">
              егорский
            </p>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[88px] top-1/2" data-node-id="118790:105058" data-name="mask">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[68px] top-1/2" data-node-id="118790:105059" data-name="_Avatar">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute border-[6.556px] border-black border-solid left-1/2 rounded-[23.652px] size-[68.001px] top-1/2" data-node-id="I118790:105059;3951:109567" data-name="_AvatarMedium">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[23.652px]">
                    <img alt="" className="absolute h-[125.37%] left-0 max-w-none top-0 w-full" src={imgAvatarMedium1} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white bottom-[4px] content-stretch flex flex-col h-[32px] items-center justify-center left-[4px] px-[12px] py-[8px] right-[4px] rounded-[12px]" data-node-id="118790:105060" data-name="Button">
              <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[12px] text-black uppercase whitespace-nowrap" data-node-id="I118790:105060;2239:11203">
                Добавить
              </p>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-center justify-center pt-[8px] relative shrink-0 w-full" data-node-id="118790:105061">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="118790:105062" data-name="Avatars">
              <Avatar className="mr-[-6px] overflow-clip relative shrink-0 size-[20px]" size="XXSmall" />
              <div className="mr-[-6px] overflow-clip relative shrink-0 size-[20px]" data-node-id="118790:105064" data-name="_Avatar">
                <div className="absolute border-[1.5px] border-black border-solid left-0 rounded-[8px] size-[20px] top-0" data-node-id="I118790:105064;44788:184358" data-name="_AvatarXXSmall">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgAvatarXxSmall} />
                </div>
              </div>
              <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="118790:105065" data-name="_Avatar">
                <div className="absolute border-[1.5px] border-black border-solid left-0 rounded-[8px] size-[20px] top-0" data-node-id="I118790:105065;44788:184358" data-name="_AvatarXXSmall">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgAvatarXxSmall1} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro_Text:Medium'] leading-[1.2] not-italic opacity-60 relative shrink-0 text-[12px] text-center text-white tracking-[-0.408px] whitespace-nowrap" data-node-id="118790:105066">
              7 общих
            </p>
          </div>
        </div>
        <div className="border border-[rgba(255,255,255,0)] border-solid content-stretch flex flex-col items-center overflow-clip p-[2px] relative shrink-0 w-[114px]" data-node-id="118790:105067">
          <div className="bg-black border-2 border-[rgba(255,255,255,0.15)] border-solid h-[164px] overflow-clip relative rounded-[16px] shrink-0 w-[110px]" data-node-id="118790:105068" data-name="possbile-friend.card">
            <div className="absolute h-[152px] left-0 top-0 w-[110px]" data-node-id="118790:105069" data-name="background.pattern">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBackgroundPattern} />
            </div>
            <div className="absolute inset-[21px_0]" data-node-id="118790:105109" data-name="fade.circle">
              <div className="absolute inset-[-45.9%_-50.91%]">
                <img alt="" className="block max-w-none size-full" src={imgFadeCircle} />
              </div>
            </div>
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Heavy_Italic'] leading-none left-[8px] not-italic overflow-hidden right-[8px] text-[14px] text-center text-ellipsis text-white top-[8px]" data-node-id="118790:105110">
              егорский
            </p>
            <div className="absolute bg-white bottom-[4px] content-stretch flex flex-col h-[32px] items-center justify-center left-[4px] px-[12px] py-[8px] right-[4px] rounded-[12px]" data-node-id="118790:105111" data-name="Button">
              <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[12px] text-black uppercase whitespace-nowrap" data-node-id="I118790:105111;2239:11203">
                Добавить
              </p>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip rounded-tl-[3.841px] rounded-tr-[3.841px] size-[88px] top-1/2" data-node-id="118790:105112" data-name="avatar">
              <div className="absolute left-[4.26px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.473px_-0.634px] mask-size-[86.429px_86.429px] size-[92.258px] top-[1.42px]" data-node-id="118790:105114" style={{ maskImage: `url("${imgUserCell}")` }} data-name="UserCell">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[117.96%] left-0 max-w-none top-[-15.29%] w-[97.33%]" src={imgUserCell1} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-center justify-center pt-[8px] relative shrink-0 w-full" data-node-id="118790:105115">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="118790:105116" data-name="Avatars">
              <Avatar className="mr-[-6px] overflow-clip relative shrink-0 size-[20px]" size="XXSmall" />
              <div className="mr-[-6px] overflow-clip relative shrink-0 size-[20px]" data-node-id="118790:105118" data-name="_Avatar">
                <div className="absolute border-[1.5px] border-black border-solid left-0 rounded-[8px] size-[20px] top-0" data-node-id="I118790:105118;44788:184358" data-name="_AvatarXXSmall">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgAvatarXxSmall} />
                </div>
              </div>
              <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="118790:105119" data-name="_Avatar">
                <div className="absolute border-[1.5px] border-black border-solid left-0 rounded-[8px] size-[20px] top-0" data-node-id="I118790:105119;44788:184358" data-name="_AvatarXXSmall">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgAvatarXxSmall1} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro_Text:Medium'] leading-[1.2] not-italic opacity-60 relative shrink-0 text-[12px] text-center text-white tracking-[-0.408px] whitespace-nowrap" data-node-id="118790:105120">
              7 общих
            </p>
          </div>
        </div>
        <div className="border border-[rgba(255,255,255,0)] border-solid content-stretch flex flex-col items-center overflow-clip p-[2px] relative shrink-0 w-[114px]" data-node-id="118790:105121">
          <div className="bg-black border-2 border-[rgba(255,255,255,0.15)] border-solid h-[164px] overflow-clip relative rounded-[16px] shrink-0 w-[110px]" data-node-id="118790:105122" data-name="possbile-friend.card">
            <div className="absolute h-[152px] left-0 top-0 w-[110px]" data-node-id="118790:105123" data-name="background.pattern">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBackgroundPattern2} />
            </div>
            <div className="absolute inset-[21px_0]" data-node-id="118790:105163" data-name="fade.circle">
              <div className="absolute inset-[-45.9%_-50.91%]">
                <img alt="" className="block max-w-none size-full" src={imgFadeCircle} />
              </div>
            </div>
            <div className="[word-break:break-word] absolute font-['SF_Pro_Display:Heavy_Italic'] leading-[0] left-[8px] not-italic overflow-hidden right-[8px] text-[14px] text-center text-ellipsis text-white top-[8px]" data-node-id="118790:105164">
              <p className="leading-none mb-0">кристина</p>
              <p className="leading-none">самая сытаяя</p>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[88px] top-1/2" data-node-id="118790:105165" data-name="mask">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[68px] top-1/2" data-node-id="118790:105166" data-name="_Avatar">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#242424] border-[6.556px] border-black border-solid content-stretch flex flex-col items-center justify-center left-1/2 rounded-[23.652px] size-[68.001px] top-1/2" data-node-id="I118790:105166;3951:109567" data-name="_AvatarMedium">
                  <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[normal] lowercase relative shrink-0 text-[13.3px] text-white whitespace-nowrap" data-node-id="I118790:105166;3951:109567;2830:25730" style={{ fontVariationSettings: '"wdth" 100' }}>
                    maxkli...
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute bg-white bottom-[4px] content-stretch flex flex-col h-[32px] items-center justify-center left-[4px] px-[12px] py-[8px] right-[4px] rounded-[12px]" data-node-id="118790:105167" data-name="Button">
              <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[12px] text-black uppercase whitespace-nowrap" data-node-id="I118790:105167;2239:11203">
                Добавить
              </p>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-center justify-center pt-[8px] relative shrink-0 w-full" data-node-id="118790:105168">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="118790:105169" data-name="Avatars">
              <Avatar className="mr-[-6px] overflow-clip relative shrink-0 size-[20px]" size="XXSmall" />
              <div className="mr-[-6px] overflow-clip relative shrink-0 size-[20px]" data-node-id="118790:105171" data-name="_Avatar">
                <div className="absolute border-[1.5px] border-black border-solid left-0 rounded-[8px] size-[20px] top-0" data-node-id="I118790:105171;44788:184358" data-name="_AvatarXXSmall">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgAvatarXxSmall} />
                </div>
              </div>
              <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="118790:105172" data-name="_Avatar">
                <div className="absolute border-[1.5px] border-black border-solid left-0 rounded-[8px] size-[20px] top-0" data-node-id="I118790:105172;44788:184358" data-name="_AvatarXXSmall">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgAvatarXxSmall1} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro_Text:Medium'] leading-[1.2] not-italic opacity-60 relative shrink-0 text-[12px] text-center text-white tracking-[-0.408px] whitespace-nowrap" data-node-id="118790:105173">
              7 общих
            </p>
          </div>
        </div>
        <div className="border border-[rgba(255,255,255,0)] border-solid content-stretch flex flex-col items-center overflow-clip p-[2px] relative shrink-0 w-[114px]" data-node-id="118790:105174">
          <div className="bg-black border-2 border-[rgba(255,255,255,0.15)] border-solid h-[164px] overflow-clip relative rounded-[16px] shrink-0 w-[110px]" data-node-id="118790:105175" data-name="possbile-friend.card">
            <div className="absolute h-[152px] left-0 top-0 w-[110px]" data-node-id="118790:105176" data-name="background.pattern">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBackgroundPattern} />
            </div>
            <div className="absolute inset-[21px_0]" data-node-id="118790:105216" data-name="fade.circle">
              <div className="absolute inset-[-45.9%_-50.91%]">
                <img alt="" className="block max-w-none size-full" src={imgFadeCircle} />
              </div>
            </div>
            <div className="[word-break:break-word] absolute font-['SF_Pro_Display:Heavy_Italic'] leading-[0] left-[8px] not-italic overflow-hidden right-[8px] text-[14px] text-center text-ellipsis text-white top-[8px]" data-node-id="118790:105217">
              <p className="leading-none mb-0">кристина</p>
              <p className="leading-none">самая сытаяя</p>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[88px] top-1/2" data-node-id="118790:105218" data-name="mask">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[68px] top-1/2" data-node-id="118790:105219" data-name="_Avatar">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute border-[6.556px] border-black border-solid left-1/2 rounded-[23.652px] size-[68.001px] top-1/2" data-node-id="I118790:105219;3951:109567" data-name="_AvatarMedium">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[23.652px]">
                    <img alt="" className="absolute h-[125.37%] left-0 max-w-none top-0 w-full" src={imgAvatarMedium1} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white bottom-[4px] content-stretch flex flex-col h-[32px] items-center justify-center left-[4px] px-[12px] py-[8px] right-[4px] rounded-[12px]" data-node-id="118790:105220" data-name="Button">
              <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[12px] text-black uppercase whitespace-nowrap" data-node-id="I118790:105220;2239:11203">
                Добавить
              </p>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-center justify-center pt-[8px] relative shrink-0 w-full" data-node-id="118790:105221">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="118790:105222" data-name="Avatars">
              <Avatar className="mr-[-6px] overflow-clip relative shrink-0 size-[20px]" size="XXSmall" />
              <div className="mr-[-6px] overflow-clip relative shrink-0 size-[20px]" data-node-id="118790:105224" data-name="_Avatar">
                <div className="absolute border-[1.5px] border-black border-solid left-0 rounded-[8px] size-[20px] top-0" data-node-id="I118790:105224;44788:184358" data-name="_AvatarXXSmall">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgAvatarXxSmall} />
                </div>
              </div>
              <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="118790:105225" data-name="_Avatar">
                <div className="absolute border-[1.5px] border-black border-solid left-0 rounded-[8px] size-[20px] top-0" data-node-id="I118790:105225;44788:184358" data-name="_AvatarXXSmall">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgAvatarXxSmall1} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro_Text:Medium'] leading-[1.2] not-italic opacity-60 relative shrink-0 text-[12px] text-center text-white tracking-[-0.408px] whitespace-nowrap" data-node-id="118790:105226">
              7 общих
            </p>
          </div>
        </div>
        <div className="border border-[rgba(255,255,255,0)] border-solid content-stretch flex flex-col items-center overflow-clip p-[2px] relative shrink-0 w-[114px]" data-node-id="118790:105227">
          <div className="bg-black border-2 border-[rgba(255,255,255,0.15)] border-solid h-[164px] overflow-clip relative rounded-[16px] shrink-0 w-[110px]" data-node-id="118790:105228" data-name="possbile-friend.card">
            <div className="absolute h-[152px] left-0 top-0 w-[110px]" data-node-id="118790:105229" data-name="background.pattern">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBackgroundPattern2} />
            </div>
            <div className="absolute inset-[21px_0]" data-node-id="118790:105269" data-name="fade.circle">
              <div className="absolute inset-[-45.9%_-50.91%]">
                <img alt="" className="block max-w-none size-full" src={imgFadeCircle} />
              </div>
            </div>
            <div className="[word-break:break-word] absolute font-['SF_Pro_Display:Heavy_Italic'] leading-[0] left-[8px] not-italic overflow-hidden right-[8px] text-[14px] text-center text-ellipsis text-white top-[8px]" data-node-id="118790:105270">
              <p className="leading-none mb-0">кристина</p>
              <p className="leading-none">самая сытаяя</p>
            </div>
            <div className="absolute bg-white bottom-[4px] content-stretch flex flex-col h-[32px] items-center justify-center left-[4px] px-[12px] py-[8px] right-[4px] rounded-[12px]" data-node-id="118790:105271" data-name="Button">
              <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[12px] text-black uppercase whitespace-nowrap" data-node-id="I118790:105271;2239:11203">
                Добавить
              </p>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip rounded-tl-[3.841px] rounded-tr-[3.841px] size-[88px] top-1/2" data-node-id="118790:105272" data-name="avatar">
              <div className="absolute left-[4.26px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.473px_-0.634px] mask-size-[86.429px_86.429px] size-[92.258px] top-[1.42px]" data-node-id="118790:105274" style={{ maskImage: `url("${imgUserCell}")` }} data-name="UserCell">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[117.96%] left-0 max-w-none top-[-15.29%] w-[97.33%]" src={imgUserCell1} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-center justify-center pt-[8px] relative shrink-0 w-full" data-node-id="118790:105275">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="118790:105276" data-name="Avatars">
              <Avatar className="mr-[-6px] overflow-clip relative shrink-0 size-[20px]" size="XXSmall" />
              <div className="mr-[-6px] overflow-clip relative shrink-0 size-[20px]" data-node-id="118790:105278" data-name="_Avatar">
                <div className="absolute border-[1.5px] border-black border-solid left-0 rounded-[8px] size-[20px] top-0" data-node-id="I118790:105278;44788:184358" data-name="_AvatarXXSmall">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgAvatarXxSmall} />
                </div>
              </div>
              <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="118790:105279" data-name="_Avatar">
                <div className="absolute border-[1.5px] border-black border-solid left-0 rounded-[8px] size-[20px] top-0" data-node-id="I118790:105279;44788:184358" data-name="_AvatarXXSmall">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgAvatarXxSmall1} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro_Text:Medium'] leading-[1.2] not-italic opacity-60 relative shrink-0 text-[12px] text-center text-white tracking-[-0.408px] whitespace-nowrap" data-node-id="118790:105280">
              7 общих
            </p>
          </div>
        </div>
        <div className="border border-[rgba(255,255,255,0)] border-solid content-stretch flex flex-col items-center overflow-clip p-[2px] relative shrink-0 w-[114px]" data-node-id="118790:105281">
          <div className="bg-black border-2 border-[rgba(255,255,255,0.15)] border-solid h-[164px] overflow-clip relative rounded-[16px] shrink-0 w-[110px]" data-node-id="118790:105282" data-name="possbile-friend.card">
            <div className="absolute h-[152px] left-0 top-0 w-[110px]" data-node-id="118790:105283" data-name="background.pattern">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBackgroundPattern2} />
            </div>
            <div className="absolute inset-[21px_0]" data-node-id="118790:105323" data-name="fade.circle">
              <div className="absolute inset-[-45.9%_-50.91%]">
                <img alt="" className="block max-w-none size-full" src={imgFadeCircle} />
              </div>
            </div>
            <div className="[word-break:break-word] absolute font-['SF_Pro_Display:Heavy_Italic'] leading-[0] left-[8px] not-italic overflow-hidden right-[8px] text-[14px] text-center text-ellipsis text-white top-[8px]" data-node-id="118790:105324">
              <p className="leading-none mb-0">кристина</p>
              <p className="leading-none">сытая</p>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[88px] top-1/2" data-node-id="118790:105325" data-name="mask">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[68px] top-1/2" data-node-id="118790:105326" data-name="_Avatar">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#242424] border-[6.556px] border-black border-solid content-stretch flex flex-col items-center justify-center left-1/2 rounded-[23.652px] size-[68.001px] top-1/2" data-node-id="I118790:105326;3951:109567" data-name="_AvatarMedium">
                  <p className="[word-break:break-word] font-['Roboto:Bold'] font-bold leading-[normal] lowercase relative shrink-0 text-[13.3px] text-white whitespace-nowrap" data-node-id="I118790:105326;3951:109567;2830:25730" style={{ fontVariationSettings: '"wdth" 100' }}>
                    maxkli...
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute bg-[#242424] bottom-[4px] content-stretch flex gap-[8px] h-[32px] items-center justify-center left-[4px] px-[12px] py-[8px] right-[4px] rounded-[12px]" data-node-id="118790:105327" data-name="Button">
              <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="I118790:105327;3520:72449" data-name="glyph/check/16">
                <div className="absolute left-0 size-[16px] top-0" data-node-id="I118790:105327;3520:72449;3250:58030" data-name="glyph_check_16">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphCheck16} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-center justify-center pt-[8px] relative shrink-0 w-full" data-node-id="118790:105328">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="118790:105329" data-name="Avatars">
              <Avatar className="mr-[-6px] overflow-clip relative shrink-0 size-[20px]" size="XXSmall" />
              <div className="mr-[-6px] overflow-clip relative shrink-0 size-[20px]" data-node-id="118790:105331" data-name="_Avatar">
                <div className="absolute border-[1.5px] border-black border-solid left-0 rounded-[8px] size-[20px] top-0" data-node-id="I118790:105331;44788:184358" data-name="_AvatarXXSmall">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgAvatarXxSmall} />
                </div>
              </div>
              <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="118790:105332" data-name="_Avatar">
                <div className="absolute border-[1.5px] border-black border-solid left-0 rounded-[8px] size-[20px] top-0" data-node-id="I118790:105332;44788:184358" data-name="_AvatarXXSmall">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgAvatarXxSmall1} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro_Text:Medium'] leading-[1.2] not-italic opacity-60 relative shrink-0 text-[12px] text-center text-white tracking-[-0.408px] whitespace-nowrap" data-node-id="118790:105333">
              7 общих
            </p>
          </div>
        </div>
        <div className="border border-[rgba(255,255,255,0)] border-solid content-stretch flex flex-col items-center overflow-clip pb-[30px] pt-[2px] px-[2px] relative shrink-0 w-[114px]" data-node-id="118790:105334">
          <div className="bg-black border-2 border-[rgba(255,255,255,0.15)] border-solid h-[163px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-node-id="118790:105335">
            <div className="absolute inset-[-19.08%_-42.92%_-7.32%_-65.31%]" data-node-id="118790:105336" data-name="Union">
              <div className="absolute inset-[-0.97%_-0.87%]">
                <img alt="" className="block max-w-none size-full" src={imgUnion} />
              </div>
            </div>
            <div className="absolute h-[152px] left-0 top-0 w-[98px]" data-node-id="118790:105375" />
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[110px] top-[calc(50%+0.5px)]" data-node-id="118790:105376">
              <div className="absolute inset-[-50.91%]">
                <img alt="" className="block max-w-none size-full" src={imgEllipse155} />
              </div>
            </div>
            <p className="[word-break:break-word] absolute font-['Montserrat:Bold'] font-bold leading-[normal] left-[6px] right-[6px] text-[12px] text-center text-white top-[126px]" data-node-id="118790:105377">
              посмотреть всех
            </p>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[64px] top-[calc(50%+0.5px)]" data-node-id="118790:105378" data-name="image_eyes_sticker">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageEyesSticker} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
