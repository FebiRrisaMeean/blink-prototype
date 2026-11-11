const assetPathPrefix = "https://www.figma.com/api/mcp/asset/3312a9f1-31a7-4d7e-b2be-cb14734732c7";
const imgStar1 = `${assetPathPrefix}/b2204.svg`;

export default function TitleMain() {
  return (
    <div className="bg-black content-stretch flex items-start px-[16px] relative size-full" data-node-id="118790:105379" data-name="Title.main">
      <div className="content-stretch flex flex-[1_0_0] h-[78px] items-center justify-between min-w-px py-[20px] relative" data-node-id="I118790:105379;110942:115202" data-name="Header">
        <div className="content-stretch flex gap-[4px] items-end relative shrink-0" data-node-id="I118790:105379;110942:115203" data-name="Text">
          <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[1.05] lowercase relative shrink-0 text-[36px] text-white tracking-[-0.72px] whitespace-nowrap" data-node-id="I118790:105379;110942:115204">
            друзья
          </p>
        </div>
        <div className="content-stretch flex items-start justify-end pt-[6px] relative shrink-0" data-node-id="I118790:105379;110942:115214">
          <div className="bg-[#ff75e1] content-stretch flex gap-[8px] items-center justify-center pl-[12px] pr-[4px] py-[4px] relative rounded-[16px] shrink-0" data-node-id="I118790:105379;110942:115215" data-name="Button">
            <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[12px] text-black uppercase whitespace-nowrap" data-node-id="I118790:105379;110942:115216">
              заявки
            </p>
            <div className="relative shrink-0 size-[38px]" data-node-id="I118790:105379;110942:115217" data-name="Counter">
              <div className="absolute left-0 size-[38px] top-0" data-node-id="I118790:105379;110942:115217;1744:166943">
                <div className="absolute inset-[4.42%_6.39%]">
                  <img alt="" className="block max-w-none size-full" src={imgStar1} />
                </div>
              </div>
              <div className="-translate-x-1/2 absolute flex h-[21.85px] items-center justify-center left-[19.5px] top-[7.08px] w-[14.918px]" data-node-id="I118790:105379;110942:115217;1744:166944">
                <div className="flex-none rotate-12">
                  <p className="[word-break:break-word] font-['SF_Pro_Text:Bold'] leading-[normal] not-italic relative text-[17px] text-center text-white whitespace-nowrap">2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
