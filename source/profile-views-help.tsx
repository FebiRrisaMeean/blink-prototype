const assetPathPrefix = "./profile-assets";
const imgImageEyesSticker = `${assetPathPrefix}/18153.png`;

export default function ActionWindow() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[32px] px-[36px] relative size-full" data-node-id="49457:379093" data-name="ActionWindow">
      <div className="bg-black content-stretch flex flex-col gap-[20px] items-center p-[20px] relative rounded-[30px] shrink-0 w-full" data-node-id="49457:379094" data-name="Sheet">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="49457:379095" data-name="Show/Hide Image">
          <div className="col-1 h-[127px] ml-0 mt-0 relative row-1 w-[131px]" data-node-id="49457:379096" data-name="ProfileViews">
            <div className="absolute flex h-[124.797px] items-center justify-center left-[7.15px] top-[-3.4px] w-[115.707px]" data-node-id="I49457:379096;44788:188585">
              <div className="-rotate-5 flex-none">
                <div className="h-[116px] relative w-[106px]" data-name="Content">
                  <div className="absolute border border-[rgba(255,255,255,0.5)] border-solid left-0 rounded-[28px] size-[106px] top-[10px]" data-node-id="I49457:379096;44788:188582" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 106 106' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(5.565 7.897 -5.6499 0.56324 24.91 18.55)'><stop stop-color='rgba(195,67,255,1)' offset='0.34082'/><stop stop-color='rgba(157,111,255,1)' offset='0.67041'/><stop stop-color='rgba(119,155,255,1)' offset='1'/></radialGradient></defs></svg>\")" }} data-name="bg" />
                  <div className="-translate-x-1/2 -translate-y-full [word-break:break-word] absolute flex flex-col font-['Montserrat:ExtraBold'] font-extrabold justify-end leading-[0] left-1/2 text-[28px] text-black text-center top-[100px] tracking-[-1.4px] w-[98px]" data-node-id="I49457:379096;44788:188583">
                    <p className="leading-[32px]">87</p>
                  </div>
                  <div className="-translate-x-1/2 absolute left-1/2 size-[84px] top-[-13px]" data-node-id="I49457:379096;44788:188584" data-name="image_eyes_sticker">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageEyesSticker} />
                  </div>
                </div>
              </div>
            </div>
            <div className="-translate-x-1/2 absolute flex h-[26.314px] items-center justify-center left-[68.45px] top-[118.7px] w-[124.692px]" data-node-id="I49457:379096;117678:75877">
              <div className="-rotate-2 flex-none">
                <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[1.119] lowercase relative text-[20px] text-center text-white whitespace-nowrap">просмотры</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-node-id="49457:379097" data-name="Text">
          <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-node-id="49457:379098" data-name="Top">
            <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[1.119] lowercase relative shrink-0 text-[20px] text-center text-white w-full" data-node-id="49457:379101">
              просмотры профиля
            </p>
          </div>
          <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] lowercase min-w-full relative shrink-0 text-[#808080] text-[15px] text-center w-[min-content]" data-node-id="49457:379102" style={{ fontVariationSettings: '"wdth" 100' }}>
            смотри, сколько раз заходили
            <br aria-hidden />
            на твой профиль! в самом профиле показываем просмотры
            <br aria-hidden />
            за последние 7 дней, а здесь —<br aria-hidden />
            полную статистику
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-node-id="49457:379117" data-name="Btns">
          <div className="bg-white content-stretch flex gap-[8px] h-[56px] items-center justify-center py-[18px] relative rounded-[20px] shrink-0 w-full" data-node-id="49457:379118" data-name="Button">
            <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[15px] text-black text-center uppercase whitespace-nowrap" data-node-id="I49457:379118;2731:17430">
              Понятно
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
