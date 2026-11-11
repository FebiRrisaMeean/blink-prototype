const assetPathPrefix = "https://www.figma.com/api/mcp/asset/e41c9ad6-bad6-409b-b067-a63c2b651055";
const imgNewBadgeLimited = `${assetPathPrefix}/6a4cf.png`;
const imgBlinkmapsBetaLight = `${assetPathPrefix}/854e6.svg`;
const imgGlyphClose20 = `${assetPathPrefix}/2d8ec.svg`;
const imgMapLine1 = `${assetPathPrefix}/f70c8.png`;
const imgMapLine = `${assetPathPrefix}/d7ad0.png`;
const img202510271326372 = `${assetPathPrefix}/eff0b.png`;
const imgAvatarSmall = `${assetPathPrefix}/2207c.png`;
const imgAvatarSmall1 = `${assetPathPrefix}/8b5b1.png`;
const imgAvatarSmall2 = `${assetPathPrefix}/d8597.png`;
const imgGlyph = `${assetPathPrefix}/1c467.svg`;
const imgRightSide = `${assetPathPrefix}/d00ef.svg`;
const imgUnion = `${assetPathPrefix}/71b76.svg`;
const imgPin = `${assetPathPrefix}/ca989.svg`;

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

function BlinkmapsBetaLight({ className }: { className?: string }) {
  return (
    <div className={className || "h-[17px] relative w-[122px]"} data-node-id="93316:128706" data-name="Blinkmaps_beta_light">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBlinkmapsBetaLight} />
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
    <div className="bg-black overflow-clip relative rounded-[40px] size-full" data-node-id="122634:89324" data-name="применить">
      <div className="absolute bottom-0 h-[501px] left-0 pointer-events-none top-[343px]" data-node-id="122634:89325">
        <div className="h-[777px] pointer-events-auto sticky top-0 w-[390px]">
          <div className="absolute content-stretch drop-shadow-[0px_-2px_7px_rgba(255,255,255,0.25)] flex flex-col gap-[40px] items-start left-0 overflow-x-clip overflow-y-auto pt-[16px] right-0 rounded-[40px] top-0" data-node-id="122634:89326">
            <div className="content-stretch flex flex-col items-center px-[16px] relative rounded-[40px] shrink-0 w-full" data-node-id="122634:89327">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[358px]" data-node-id="122634:89328">
                <div className="content-stretch flex items-center justify-center py-[16px] relative shrink-0 w-full" data-node-id="122634:89329">
                  <div className="content-stretch flex items-center relative shrink-0" data-node-id="122634:89330">
                    <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] lowercase relative shrink-0 text-[24px] text-right text-shadow-[0px_3px_2px_rgba(255,255,255,0.2)] text-white whitespace-nowrap" data-node-id="122634:89331">
                      иконки
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="122634:89332">
                  <div className="h-[134px] overflow-clip relative shrink-0 w-[114px]" data-node-id="122634:89333" data-name="item">
                    <div className="-translate-x-1/2 absolute left-1/2 pointer-events-none rounded-[19.617px] size-[76px] top-[16px]" data-node-id="122634:89334" data-name="_app icon">
                      <div aria-hidden className="absolute bg-[#2c2c2c] inset-0 rounded-[19.617px]" />
                      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_4px_44px_0px_rgba(0,0,0,0.25)]" />
                    </div>
                    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%+0.5px)] top-[104px]" data-node-id="122634:89335" data-name="glyph">
                      <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[15px] text-right text-white whitespace-nowrap" data-node-id="122634:89336">
                        бесплатно
                      </p>
                    </div>
                    <div className="-translate-x-full absolute flex h-[27.225px] items-center justify-center left-[111px] top-[63px] w-[57.282px]" data-node-id="122634:89337">
                      <div className="flex-none rotate-[-9.94deg]">
                        <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative text-[15px] text-right text-white whitespace-nowrap">limited</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-[134px] overflow-clip relative shrink-0 w-[114px]" data-node-id="122634:89338" data-name="item">
                    <div className="-translate-x-1/2 absolute left-1/2 pointer-events-none rounded-[19.617px] size-[76px] top-[16px]" data-node-id="122634:89339" data-name="_app icon">
                      <div aria-hidden className="absolute bg-[#2c2c2c] inset-0 rounded-[19.617px]" />
                      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_4px_44px_0px_rgba(0,0,0,0.25)]" />
                    </div>
                    <div className="-translate-x-1/2 absolute content-stretch flex gap-[8px] items-center justify-center left-[calc(50%+0.5px)] top-[104px]" data-node-id="122634:89340" data-name="glyph">
                      <div className="relative shrink-0 size-[16px]" data-node-id="122634:89341" data-name="glyph">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyph} />
                      </div>
                      <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[15px] text-right text-white whitespace-nowrap" data-node-id="122634:89345">
                        300
                      </p>
                    </div>
                  </div>
                  <div className="h-[134px] overflow-clip relative shrink-0 w-[114px]" data-node-id="122634:89346" data-name="item">
                    <div className="-translate-x-1/2 absolute left-1/2 pointer-events-none rounded-[19.617px] size-[76px] top-[16px]" data-node-id="122634:89347" data-name="_app icon">
                      <div aria-hidden className="absolute bg-[#2c2c2c] inset-0 rounded-[19.617px]" />
                      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_4px_44px_0px_rgba(0,0,0,0.25)]" />
                    </div>
                    <div className="-translate-x-1/2 absolute content-stretch flex gap-[8px] items-center justify-center left-[calc(50%+0.5px)] top-[104px]" data-node-id="122634:89348" data-name="glyph">
                      <div className="relative shrink-0 size-[16px]" data-node-id="122634:89349" data-name="glyph">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyph} />
                      </div>
                      <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[15px] text-right text-white whitespace-nowrap" data-node-id="122634:89353">
                        500
                      </p>
                    </div>
                    <div className="-translate-x-full absolute flex h-[24.636px] items-center justify-center left-[48.42px] top-[0.06px] w-[42.507px]" data-node-id="122634:89354">
                      <div className="flex-none rotate-[-9.94deg]">
                        <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative text-[15px] text-right text-white whitespace-nowrap">NEW</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="122634:89355">
                  <div className="h-[134px] overflow-clip relative shrink-0 w-[114px]" data-node-id="122634:89356" data-name="item">
                    <div className="-translate-x-1/2 absolute left-1/2 pointer-events-none rounded-[19.617px] size-[76px] top-[16px]" data-node-id="122634:89357" data-name="_app icon">
                      <div aria-hidden className="absolute bg-[#2c2c2c] inset-0 rounded-[19.617px]" />
                      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_4px_44px_0px_rgba(0,0,0,0.25)]" />
                    </div>
                    <div className="-translate-x-1/2 absolute content-stretch flex gap-[8px] items-center justify-center left-[calc(50%+0.5px)] top-[104px]" data-node-id="122634:89358" data-name="glyph">
                      <div className="relative shrink-0 size-[16px]" data-node-id="122634:89359" data-name="glyph">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyph} />
                      </div>
                      <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[15px] text-right text-white whitespace-nowrap" data-node-id="122634:89363">
                        1500
                      </p>
                    </div>
                    <div className="-translate-x-full absolute flex h-[27.225px] items-center justify-center left-[111px] top-[63px] w-[57.282px]" data-node-id="122634:89364">
                      <div className="flex-none rotate-[-9.94deg]">
                        <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative text-[15px] text-right text-white whitespace-nowrap">limited</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-[134px] overflow-clip relative shrink-0 w-[114px]" data-node-id="122634:89365" data-name="item">
                    <div className="-translate-x-1/2 absolute left-1/2 pointer-events-none rounded-[19.617px] size-[76px] top-[16px]" data-node-id="122634:89366" data-name="_app icon">
                      <div aria-hidden className="absolute bg-[#2c2c2c] inset-0 rounded-[19.617px]" />
                      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_4px_44px_0px_rgba(0,0,0,0.25)]" />
                    </div>
                    <div className="-translate-x-1/2 absolute content-stretch flex gap-[8px] items-center justify-center left-[calc(50%+0.5px)] top-[104px]" data-node-id="122634:89367" data-name="glyph">
                      <div className="relative shrink-0 size-[16px]" data-node-id="122634:89368" data-name="glyph">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyph} />
                      </div>
                      <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[15px] text-right text-white whitespace-nowrap" data-node-id="122634:89372">
                        200
                      </p>
                    </div>
                    <div className="-translate-x-full absolute flex h-[23.082px] items-center justify-center left-[54.48px] top-[5px] w-[33.642px]" data-node-id="122634:89373">
                      <div className="flex-none rotate-[-9.94deg]">
                        <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative text-[15px] text-right text-white whitespace-nowrap">sale</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-[134px] overflow-clip relative shrink-0 w-[114px]" data-node-id="122634:89374" data-name="item">
                    <div className="-translate-x-1/2 absolute left-1/2 pointer-events-none rounded-[19.617px] size-[76px] top-[16px]" data-node-id="122634:89375" data-name="_app icon">
                      <div aria-hidden className="absolute bg-[#2c2c2c] inset-0 rounded-[19.617px]" />
                      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_4px_44px_0px_rgba(0,0,0,0.25)]" />
                    </div>
                    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%+0.5px)] top-[104px]" data-node-id="122634:89376" data-name="glyph">
                      <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[15px] text-right text-white whitespace-nowrap" data-node-id="122634:89377">
                        бесплатно
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-center px-[16px] relative rounded-[40px] shrink-0 w-full" data-node-id="122634:89378">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[358px]" data-node-id="122634:89379">
                <div className="content-stretch flex items-center justify-center py-[16px] relative shrink-0 w-full" data-node-id="122634:89380">
                  <div className="content-stretch flex items-center relative shrink-0" data-node-id="122634:89381">
                    <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] lowercase relative shrink-0 text-[24px] text-right text-shadow-[0px_3px_2px_rgba(255,255,255,0.2)] text-white whitespace-nowrap" data-node-id="122634:89382">
                      хвосты
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="122634:89383">
                  <div className="h-[134px] overflow-clip relative shrink-0 w-[114px]" data-node-id="122634:89384" data-name="item">
                    <div className="-translate-x-1/2 absolute left-1/2 pointer-events-none rounded-[19.617px] size-[76px] top-[16px]" data-node-id="122634:89385" data-name="_app icon">
                      <div aria-hidden className="absolute bg-[#2c2c2c] inset-0 rounded-[19.617px]" />
                      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_4px_44px_0px_rgba(0,0,0,0.25)]" />
                    </div>
                    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%+0.5px)] top-[104px]" data-node-id="122634:89386" data-name="glyph">
                      <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[15px] text-right text-white whitespace-nowrap" data-node-id="122634:89387">
                        бесплатно
                      </p>
                    </div>
                    <div className="-translate-x-full absolute flex h-[27.225px] items-center justify-center left-[111px] top-[63px] w-[57.282px]" data-node-id="122634:89388">
                      <div className="flex-none rotate-[-9.94deg]">
                        <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative text-[15px] text-right text-white whitespace-nowrap">limited</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-[134px] overflow-clip relative shrink-0 w-[114px]" data-node-id="122634:89389" data-name="item">
                    <div className="-translate-x-1/2 absolute left-1/2 pointer-events-none rounded-[19.617px] size-[76px] top-[16px]" data-node-id="122634:89390" data-name="_app icon">
                      <div aria-hidden className="absolute bg-[#2c2c2c] inset-0 rounded-[19.617px]" />
                      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_4px_44px_0px_rgba(0,0,0,0.25)]" />
                    </div>
                    <div className="-translate-x-1/2 absolute content-stretch flex gap-[8px] items-center justify-center left-[calc(50%+0.5px)] top-[104px]" data-node-id="122634:89391" data-name="glyph">
                      <div className="relative shrink-0 size-[16px]" data-node-id="122634:89392" data-name="glyph">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyph} />
                      </div>
                      <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[15px] text-right text-white whitespace-nowrap" data-node-id="122634:89396">
                        300
                      </p>
                    </div>
                  </div>
                  <div className="h-[134px] overflow-clip relative shrink-0 w-[114px]" data-node-id="122634:89397" data-name="item">
                    <div className="-translate-x-1/2 absolute left-1/2 pointer-events-none rounded-[19.617px] size-[76px] top-[16px]" data-node-id="122634:89398" data-name="_app icon">
                      <div aria-hidden className="absolute bg-[#2c2c2c] inset-0 rounded-[19.617px]" />
                      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_4px_44px_0px_rgba(0,0,0,0.25)]" />
                    </div>
                    <div className="-translate-x-1/2 absolute content-stretch flex gap-[8px] items-center justify-center left-[calc(50%+0.5px)] top-[104px]" data-node-id="122634:89399" data-name="glyph">
                      <div className="relative shrink-0 size-[16px]" data-node-id="122634:89400" data-name="glyph">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyph} />
                      </div>
                      <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[15px] text-right text-white whitespace-nowrap" data-node-id="122634:89404">
                        500
                      </p>
                    </div>
                    <div className="-translate-x-full absolute flex h-[24.636px] items-center justify-center left-[48.42px] top-[0.06px] w-[42.507px]" data-node-id="122634:89405">
                      <div className="flex-none rotate-[-9.94deg]">
                        <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative text-[15px] text-right text-white whitespace-nowrap">NEW</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="122634:89406">
                  <div className="h-[134px] overflow-clip relative shrink-0 w-[114px]" data-node-id="122634:89407" data-name="item">
                    <div className="-translate-x-1/2 absolute left-1/2 pointer-events-none rounded-[19.617px] size-[76px] top-[16px]" data-node-id="122634:89408" data-name="_app icon">
                      <div aria-hidden className="absolute bg-[#2c2c2c] inset-0 rounded-[19.617px]" />
                      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_4px_44px_0px_rgba(0,0,0,0.25)]" />
                    </div>
                    <div className="-translate-x-1/2 absolute content-stretch flex gap-[8px] items-center justify-center left-[calc(50%+0.5px)] top-[104px]" data-node-id="122634:89409" data-name="glyph">
                      <div className="relative shrink-0 size-[16px]" data-node-id="122634:89410" data-name="glyph">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyph} />
                      </div>
                      <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[15px] text-right text-white whitespace-nowrap" data-node-id="122634:89414">
                        1500
                      </p>
                    </div>
                    <div className="-translate-x-full absolute flex h-[27.225px] items-center justify-center left-[111px] top-[63px] w-[57.282px]" data-node-id="122634:89415">
                      <div className="flex-none rotate-[-9.94deg]">
                        <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative text-[15px] text-right text-white whitespace-nowrap">limited</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-[134px] overflow-clip relative shrink-0 w-[114px]" data-node-id="122634:89416" data-name="item">
                    <div className="-translate-x-1/2 absolute left-1/2 pointer-events-none rounded-[19.617px] size-[76px] top-[16px]" data-node-id="122634:89417" data-name="_app icon">
                      <div aria-hidden className="absolute bg-[#2c2c2c] inset-0 rounded-[19.617px]" />
                      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_4px_44px_0px_rgba(0,0,0,0.25)]" />
                    </div>
                    <div className="-translate-x-1/2 absolute content-stretch flex gap-[8px] items-center justify-center left-[calc(50%+0.5px)] top-[104px]" data-node-id="122634:89418" data-name="glyph">
                      <div className="relative shrink-0 size-[16px]" data-node-id="122634:89419" data-name="glyph">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyph} />
                      </div>
                      <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[15px] text-right text-white whitespace-nowrap" data-node-id="122634:89423">
                        200
                      </p>
                    </div>
                    <div className="-translate-x-full absolute flex h-[23.082px] items-center justify-center left-[54.48px] top-[5px] w-[33.642px]" data-node-id="122634:89424">
                      <div className="flex-none rotate-[-9.94deg]">
                        <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative text-[15px] text-right text-white whitespace-nowrap">sale</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-[134px] overflow-clip relative shrink-0 w-[114px]" data-node-id="122634:89425" data-name="item">
                    <div className="-translate-x-1/2 absolute left-1/2 pointer-events-none rounded-[19.617px] size-[76px] top-[16px]" data-node-id="122634:89426" data-name="_app icon">
                      <div aria-hidden className="absolute bg-[#2c2c2c] inset-0 rounded-[19.617px]" />
                      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_4px_44px_0px_rgba(0,0,0,0.25)]" />
                    </div>
                    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%+0.5px)] top-[104px]" data-node-id="122634:89427" data-name="glyph">
                      <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[15px] text-right text-white whitespace-nowrap" data-node-id="122634:89428">
                        бесплатно
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-[128px] left-0 right-0" data-node-id="122634:89429" data-name="Close window bottom">
        <div className="absolute bottom-0 flex h-[128px] items-center justify-center left-0 right-0" data-node-id="I122634:89429;43958:82136" style={{ containerType: "size" }}>
          <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
            <div className="bg-gradient-to-b from-black relative size-full to-[rgba(0,0,0,0)]" data-name="Gradient Black" />
          </div>
        </div>
        <SquareButton className="-translate-x-1/2 absolute backdrop-blur-[10px] bg-gradient-to-b border border-[#e4e4e4] border-solid content-stretch flex from-[#ebebeb] from-[26.061%] items-center justify-center left-1/2 rounded-[12px] size-[46px] to-[#b2b2b2] top-[18px]" />
      </div>
      <div className="-translate-x-1/2 absolute bottom-0 h-[844px] left-1/2 opacity-90 w-[390px]" data-node-id="122634:89430" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%), url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 390 844' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(33.85 89.05 -30.843 11.724 3.7886e-14 0)'><stop stop-color='rgba(211,119,255,1)' offset='0.34082'/><stop stop-color='rgba(165,171,255,1)' offset='0.67041'/><stop stop-color='rgba(119,222,255,1)' offset='1'/></radialGradient></defs></svg>\")" }} data-name="image_bg_colored" />
      <div className="-translate-x-1/2 absolute h-[47px] left-1/2 overflow-clip top-0 w-[390px]" data-node-id="122634:89431" data-name="StatusBar">
        <div className="absolute contents left-[27px] top-[14px]" data-node-id="I122634:89431;2604:14897" data-name="Left Side">
          <div className="absolute h-[21px] left-[27px] rounded-[24px] top-[14px] w-[54px]" data-node-id="I122634:89431;2604:14898" data-name="_StatusBar-time">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro_Text:Semibold'] h-[20px] leading-[22px] left-[27px] not-italic text-[17px] text-center text-white top-px tracking-[-0.408px] w-[54px]" data-node-id="I122634:89431;2604:14898;839:7100" style={{ fontFeatureSettings: '"case" 1' }}>
              4:20
            </p>
          </div>
        </div>
        <div className="absolute h-[13px] right-[26.6px] top-[19px] w-[77.401px]" data-node-id="I122634:89431;2604:14899" data-name="Right Side">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRightSide} />
        </div>
      </div>
      <div className="absolute bg-black bottom-0 content-stretch flex flex-col h-[758px] items-center justify-between left-0 px-[16px] rounded-tl-[40px] rounded-tr-[40px] w-[390px]" data-node-id="122634:89432" data-name="Modal sheet">
        <div className="content-stretch flex flex-col items-center mb-[-12px] relative shrink-0" data-node-id="122634:89433" data-name="top">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center justify-center pb-[20px] pt-[28px] px-[8px] relative shrink-0 w-[358px]" data-node-id="122634:89434" data-name="HeaderView">
            <p className="font-['Montserrat:Bold'] font-bold leading-[34px] lowercase relative shrink-0 text-[28px] text-white w-full" data-node-id="I122634:89434;59851:144743">{`потрачено `}</p>
            <p className="font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#808080] text-[15px] w-full" data-node-id="I122634:89434;59851:144744">{`здесь прикольный и веселый текст описания предмета `}</p>
          </div>
          <div className="h-[292px] overflow-clip relative rounded-[24px] shrink-0 w-[342px]" data-node-id="122810:59476" data-name="item section">
            <div className="absolute inset-0 overflow-clip rounded-[24px]" data-node-id="I122810:59476;89503:89768" data-name="_map movement">
              <div className="absolute h-[292px] right-0 top-0 w-[725px]" data-node-id="I122810:59476;89503:89768;90336:24222" data-name="Map line 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMapLine1} />
              </div>
              <div className="absolute h-[292px] left-[-383px] overflow-clip top-0 w-[725px]" data-node-id="I122810:59476;89503:89768;91749:33559" data-name="Map line">
                <div className="absolute flex inset-[-362.78%_-162.98%_-442.08%_-131.39%] items-center justify-center" data-node-id="I122810:59476;89503:89768;91749:33560" style={{ containerType: "size" }}>
                  <div className="flex-none h-[hypot(-30.8699cqw,48.9512cqh)] rotate-[34.31deg] w-[hypot(69.1301cqw,51.0488cqh)]">
                    <div className="relative size-full" data-name="Map line">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMapLine} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute aspect-[3090/2022] bottom-[-32.88%] right-[-527px] top-[-114.73%]" data-node-id="I122810:59476;89503:89768;93309:49897" data-name="Снимок экрана 2025-10-27 в 13.26.37 2">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[175.29%] left-[10.52%] max-w-none top-[-13.37%] w-[52.82%]" src={img202510271326372} />
                </div>
              </div>
              <BlinkmapsBetaLight className="absolute bottom-[16px] h-[17px] left-[16px] w-[122px]" />
            </div>
            <ItemBadge className="absolute h-[40px] left-[12px] top-[8px] w-[112px]" />
            <div className="-translate-x-1/2 absolute content-stretch flex gap-[4px] items-center left-[calc(50%+96px)] px-[10px] py-[8px] rounded-[20px] top-[10px]" data-node-id="I122810:59476;122778:56416" data-name="Badge / Utility">
              <div aria-hidden className="absolute bg-white inset-0 pointer-events-none rounded-[20px]" />
              <div className="overflow-clip relative shrink-0 size-[12px]" data-node-id="I122810:59476;122778:56416;6027:169005" data-name="glyph/theme/12">
                <div className="-translate-y-1/2 absolute h-[12px] left-0 overflow-clip right-0 top-1/2" data-node-id="I122810:59476;122778:56416;6027:169005;122778:56109" data-name="glyph_theme_12">
                  <div className="absolute left-px size-[10px] top-px" data-node-id="I122810:59476;122778:56416;6027:169005;122778:56113" data-name="Union">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUnion} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Montserrat:Bold'] font-bold justify-center leading-[0] lowercase relative shrink-0 text-[12px] text-black tracking-[-0.12px] whitespace-nowrap" data-node-id="I122810:59476;122778:56416;6027:169006">
                <p className="leading-[1.2]">только тёмная</p>
              </div>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-1px_-2px_4px_0px_rgba(18,0,106,0.25)]" />
            </div>
            <div className="-translate-x-1/2 absolute h-[143px] left-1/2 top-[72px] w-[104px]" data-node-id="I122810:59476;89503:89889" data-name="Pin">
              <div className="-translate-x-1/2 absolute h-[143px] left-1/2 top-0 w-[114px]" data-node-id="I122810:59476;89503:90669" data-name="Advanced Pin">
                <div className="-translate-x-1/2 absolute h-[80px] left-1/2 top-[36px] w-[72px]" data-node-id="I122810:59476;89503:90672" data-name="Pin">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPin} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-0 border-[rgba(255,255,255,0.15)] border-solid content-stretch flex gap-[12px] items-center pb-[8px] pt-[16px] px-[8px] relative shrink-0 w-[358px]" data-node-id="122634:89436" data-name="social section">
            <div className="content-stretch flex items-start relative shrink-0" data-node-id="I122634:89436;84232:24880" data-name="Avatars">
              <div className="mr-[-16px] overflow-clip relative shrink-0 size-[40px]" data-node-id="I122634:89436;84232:24881" data-name="_Avatar">
                <div className="absolute border-3 border-black border-solid left-0 rounded-[16px] size-[40px] top-0" data-node-id="I122634:89436;84232:24881;3951:109581" data-name="_AvatarSmall">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarSmall} />
                </div>
              </div>
              <div className="mr-[-16px] overflow-clip relative shrink-0 size-[40px]" data-node-id="I122634:89436;84232:24882" data-name="_Avatar">
                <div className="absolute border-3 border-black border-solid left-0 rounded-[16px] size-[40px] top-0" data-node-id="I122634:89436;84232:24882;3951:109581" data-name="_AvatarSmall">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarSmall1} />
                </div>
              </div>
              <div className="mr-[-16px] overflow-clip relative shrink-0 size-[40px]" data-node-id="I122634:89436;84232:24883" data-name="_Avatar">
                <div className="absolute border-3 border-black border-solid left-0 rounded-[16px] size-[40px] top-0" data-node-id="I122634:89436;84232:24883;3951:109581" data-name="_AvatarSmall">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarSmall2} />
                </div>
              </div>
              <div className="overflow-clip relative shrink-0 size-[40px]" data-node-id="I122634:89436;84232:24884" data-name="_Avatar">
                <div className="absolute bg-[#242424] border-3 border-black border-solid left-0 overflow-clip rounded-[16px] size-[40px] top-0" data-node-id="I122634:89436;84232:24884;3951:109581" data-name="_AvatarSmall">
                  <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Montserrat:Bold'] font-bold justify-center leading-[0] left-1/2 text-[13px] text-center text-white top-1/2 uppercase whitespace-nowrap" data-node-id="I122634:89436;84232:24884;3951:109581;3951:109577">
                    <p className="leading-[normal]">+2</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] lowercase relative shrink-0 text-[15px] text-[rgba(255,255,255,0.5)] text-center whitespace-nowrap" data-node-id="I122634:89436;84232:24885">
              есть у 5 друзей
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-end pb-[56px] pt-[8px] px-[8px] relative shrink-0 w-[358px]" data-node-id="122634:89437" data-name="_market / CTA">
          <div className="bg-white content-stretch flex flex-col h-[56px] items-center justify-center py-[18px] relative rounded-[20px] shrink-0 w-full" data-node-id="I122634:89437;85107:41235" data-name="Button">
            <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[15px] text-black text-center uppercase whitespace-nowrap" data-node-id="I122634:89437;85107:41235;2239:10969">
              применить
            </p>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col h-[12px] items-center left-[16px] pt-[8px] top-0 w-[358px]" data-node-id="122634:89438" data-name="Indicator">
          <div className="bg-[#808080] h-[4px] relative rounded-[20px] shrink-0 w-[33px]" data-node-id="I122634:89438;2702:17814" data-name="Vector" />
        </div>
      </div>
      <HomeIndicator className="-translate-x-1/2 absolute bottom-0 h-[34px] left-1/2 w-[390px]" />
    </div>
  );
}
