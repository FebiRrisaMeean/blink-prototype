const assetPathPrefix = "https://www.figma.com/api/mcp/asset/15ae4571-5647-4b93-a748-2ed26d86282c";
const imgIconBump24 = `${assetPathPrefix}/63d45.svg`;
const imgGlyphPhone24 = `${assetPathPrefix}/54d1e.svg`;
const imgVectorStroke = `${assetPathPrefix}/95b18.svg`;
const imgGlyphContact24 = `${assetPathPrefix}/3f480.svg`;

export default function AddFriends() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-node-id="118790:104559" data-name="add friends">
      <div className="content-stretch flex gap-[6px] items-start px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="118790:104560" data-name="Title">
        <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[#808080] text-[13px] tracking-[1.04px] uppercase whitespace-nowrap" data-node-id="I118790:104560;4119:101245">
          добавить с помощью
        </p>
      </div>
      <div className="content-stretch flex gap-[6px] items-center px-[16px] relative shrink-0 w-full" data-node-id="118790:104561" data-name="row">
        <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center min-w-px px-[8px] py-[6px] relative rounded-[20px]" data-node-id="118790:104562" data-name="option">
          <div className="relative shrink-0 size-[24px]" data-node-id="118790:104563" data-name="icon">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[26.25px] top-1/2" data-node-id="I118790:104563;20281:66751" data-name="icon_bump_24">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconBump24} />
            </div>
          </div>
          <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold'] leading-[normal] lowercase not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="118790:104564">
            трях
          </p>
        </div>
        <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center min-w-px px-[8px] py-[6px] relative rounded-[20px]" data-node-id="118790:104565" data-name="option">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="118790:104566" data-name="glyph/phone/24">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphPhone24} />
          </div>
          <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold'] leading-[normal] lowercase not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="118790:104567">
            номер
          </p>
        </div>
        <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center min-w-px px-[8px] py-[6px] relative rounded-[20px]" data-node-id="118790:104568" data-name="option">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="118790:104569" data-name="glyph/link/24">
            <div className="absolute inset-0 overflow-clip" data-node-id="I118790:104569;3250:56507" data-name="glyph_link_24">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-node-id="I118790:104569;107533:191993" data-name="Vector (Stroke)">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVectorStroke} />
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold'] leading-[normal] lowercase not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="118790:104570">
            ссылка
          </p>
        </div>
        <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center min-w-px px-[8px] py-[6px] relative rounded-[20px]" data-node-id="118790:104571" data-name="option">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="118790:104572" data-name="glyph/contact/24">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphContact24} />
          </div>
          <p className="[word-break:break-word] font-['SF_Pro_Text:Semibold'] leading-[normal] lowercase not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="118790:104573">
            тел книга
          </p>
        </div>
      </div>
    </div>
  );
}
