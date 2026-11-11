const assetPathPrefix = "https://www.figma.com/api/mcp/asset/6be7e541-ec10-4b7f-bf70-0825a9a06299";
const imgGlyph = `${assetPathPrefix}/42b45.svg`;

export default function Search() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pb-[8px] pt-[38px] px-[16px] relative size-full" data-node-id="118790:105380" data-name="Search">
      <div className="content-stretch flex gap-[10px] h-[46px] items-start relative shrink-0 w-[358px]" data-node-id="118790:105381" data-name="SearchField">
        <div className="backdrop-blur-[15px] bg-[rgba(255,255,255,0.15)] border-2 border-[rgba(255,255,255,0)] border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-[46px] items-center min-w-px pl-[16px] pr-[8px] py-[8px] relative rounded-[14px]" data-node-id="I118790:105381;1778:167738" data-name="Input">
          <div className="opacity-80 overflow-clip relative shrink-0 size-[20px]" data-node-id="I118790:105381;1778:167739" data-name="glyph">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyph} />
          </div>
          <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-node-id="I118790:105381;1789:188507" data-name="placeholder + cursor">
            <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[1.119] lowercase opacity-80 overflow-hidden relative shrink-0 text-[20px] text-[rgba(255,255,255,0.5)] text-ellipsis w-[241px] whitespace-nowrap" data-node-id="I118790:105381;1778:167740">
              имя или ник
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
