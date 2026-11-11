const assetPathPrefix = "https://www.figma.com/api/mcp/asset/de5d0533-3d3e-4afa-ac35-502268a6e45d";
const imgGlyphLocationCursor20 = `${assetPathPrefix}/e5fc5.svg`;
const imgGlyphMessage20 = `${assetPathPrefix}/865fc.svg`;
const imgAvatarMedium = `${assetPathPrefix}/94bbe.png`;
const imgOnlineStatus = `${assetPathPrefix}/73b51.svg`;
const imgAvatarMedium1 = `${assetPathPrefix}/5fa49.png`;
const imgAvatarMedium2 = `${assetPathPrefix}/5f54e.png`;

function GlyphLocationCursor20({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[20px]"} data-node-id="111326:80675" data-name="glyph/location_cursor/20">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphLocationCursor20} />
    </div>
  );
}

type ContactCardUserContentRightProps = {
  className?: string;
  style?: "Invite" | "Friend";
};

function ContactCardUserContentRight({ className, style = "Invite" }: ContactCardUserContentRightProps) {
  const isFriend = style === "Friend";
  return (
    <div className={className || `content-stretch flex items-center relative ${isFriend ? "gap-[8px] justify-end" : "flex-col justify-center"}`} id={isFriend ? "node-5916_107542" : "node-5916_107532"}>
      {style === "Invite" && (
        <div className="bg-[#1c1c1c] content-stretch flex flex-col h-[36px] items-center justify-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-node-id="5916:107533" data-name="Button">
          <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap" data-node-id="I5916:107533;2239:11187">
            Пригласить
          </p>
        </div>
      )}
      {isFriend && (
        <>
          <div className="bg-[#1a1a1a] h-[36px] relative rounded-[12px] shrink-0 w-[48px]" data-node-id="117699:267767" data-name="SendButton">
            <div className="absolute left-[14px] size-[20px] top-[8px]" data-node-id="117699:267768" data-name="glyph/message/20">
              <div className="absolute left-0 size-[20px] top-0" data-node-id="I117699:267768;53879:109184" data-name="glyph_message_20">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphMessage20} />
              </div>
            </div>
          </div>
          <div className="border border-[#494949] border-solid h-[36px] relative rounded-[12px] shrink-0 w-[48px]" data-node-id="5916:107548" data-name="GeoButton">
            <GlyphLocationCursor20 className="absolute left-[12px] opacity-50 overflow-clip size-[20px] top-[8px]" />
          </div>
        </>
      )}
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

type AvatarOnlineProps = {
  className?: string;
  property1?: "Online 46";
};

function AvatarOnline({ className, property1 = "Online 46" }: AvatarOnlineProps) {
  return (
    <div className={className || "relative size-[46px]"} data-node-id="110829:112614">
      <div className="absolute left-0 size-[46px] top-0" data-node-id="110829:112615" data-name="Avatar">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[16px] size-[46.001px] top-1/2" data-node-id="I110829:112615;3951:109567" data-name="_AvatarMedium">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarMedium} />
        </div>
      </div>
      <div className="absolute left-[32px] size-[20px] top-[32px]" data-node-id="110829:112616" data-name="online status">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgOnlineStatus} />
      </div>
    </div>
  );
}

export default function MyFriends() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full" data-node-id="118790:104574" data-name="my friends">
      <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] relative shrink-0 w-full" data-node-id="118790:104575" data-name="title">
        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Montserrat:Bold'] font-bold gap-[8px] items-center leading-[normal] lowercase min-w-px relative text-[24px] text-white whitespace-nowrap" data-node-id="I118790:104575;44099:126495" data-name="Title">
          <p className="relative shrink-0" data-node-id="I118790:104575;44099:126484">
            мои друзья
          </p>
          <p className="opacity-50 relative shrink-0" data-node-id="I118790:104575;44099:126485">
            5
          </p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="118790:104576" data-name="col">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="118790:104577" data-name="ContactCard / Base">
          <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-node-id="118790:104579" data-name="ContentLeft">
            <AvatarOnline className="relative shrink-0 size-[46px]" />
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="118790:104585" data-name="ContactCard / Title">
              <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I118790:104585;13893:187677" data-name="Title">
                <UserName className="content-stretch flex items-center justify-center relative shrink-0" />
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I118790:104585;6638:126608" data-name="Show/Hide SubTitle">
                <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I118790:104585;6638:126626" data-name="ContactCard / Subtitle">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I118790:104585;6638:126626;6656:130265" data-name="Text">
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I118790:104585;6638:126626;6699:135282" data-name="ContactCard / Subtitle / Text">
                      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] lowercase relative shrink-0 text-[#808080] text-[15px] whitespace-nowrap" data-node-id="I118790:104585;6638:126626;6699:135282;6699:135269" style={{ fontVariationSettings: '"wdth" 100' }}>
                        2.3 км
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-[33px]" data-node-id="I118790:104585;6638:126626;6671:145702" data-name="Show/Hide Date" />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0" data-node-id="118790:104586" data-name="ContentRight">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="118790:104587" data-name="Show/Hide ContentRight">
              <ContactCardUserContentRight className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" style="Friend" />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="118790:104599" data-name="ContactCard">
          <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="I118790:104599;6656:135465" data-name="ContactCard / Base">
            <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-node-id="I118790:104599;6656:135465;6651:127145" data-name="ContentLeft">
              <div className="relative shrink-0 size-[46px]" data-node-id="I118790:104599;6656:135465;6651:127146" data-name="Show/Hide Avatar">
                <div className="absolute left-0 size-[46px] top-0" data-node-id="I118790:104599;6656:135465;6651:127147" data-name="_Avatar">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[16px] size-[46.001px] top-1/2" data-node-id="I118790:104599;6656:135465;6651:127147;3951:109567" data-name="_AvatarMedium">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarMedium1} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="I118790:104599;6656:135465;6651:127148" data-name="ContactCard / Title">
                <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I118790:104599;6656:135465;6651:127148;13893:187677" data-name="Title">
                  <UserName className="content-stretch flex items-center justify-center relative shrink-0" />
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I118790:104599;6656:135465;6651:127148;6638:126608" data-name="Show/Hide SubTitle">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I118790:104599;6656:135465;6651:127148;6638:126626" data-name="ContactCard / Subtitle">
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I118790:104599;6656:135465;6651:127148;6638:126626;6656:130265" data-name="Text">
                      <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I118790:104599;6656:135465;6651:127148;6638:126626;6699:135282" data-name="ContactCard / Subtitle / Text">
                        <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] lowercase relative shrink-0 text-[#808080] text-[15px] whitespace-nowrap" data-node-id="I118790:104599;6656:135465;6651:127148;6638:126626;6699:135282;6699:135269" style={{ fontVariationSettings: '"wdth" 100' }}>
                          2.3 км
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-[33px]" data-node-id="I118790:104599;6656:135465;6651:127148;6638:126626;6671:145702" data-name="Show/Hide Date" />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0" data-node-id="I118790:104599;6656:135465;6651:127178" data-name="ContentRight">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I118790:104599;6656:135465;6651:127183" data-name="Show/Hide ContentRight">
                <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-node-id="I118790:104599;6656:135465;6651:127175" data-name="ContactCard User / Content Right">
                  <div className="bg-[#1a1a1a] h-[36px] relative rounded-[12px] shrink-0 w-[48px]" data-node-id="I118790:104599;6656:135465;6651:127175;117699:267767" data-name="SendButton">
                    <div className="absolute left-[14px] size-[20px] top-[8px]" data-node-id="I118790:104599;6656:135465;6651:127175;117699:267768" data-name="glyph/message/20">
                      <div className="absolute left-0 size-[20px] top-0" data-node-id="I118790:104599;6656:135465;6651:127175;117699:267768;53879:109184" data-name="glyph_message_20">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyphMessage20} />
                      </div>
                    </div>
                  </div>
                  <div className="border border-[#494949] border-solid h-[36px] relative rounded-[12px] shrink-0 w-[48px]" data-node-id="I118790:104599;6656:135465;6651:127175;5916:107548" data-name="GeoButton">
                    <GlyphLocationCursor20 className="absolute left-[12px] opacity-50 overflow-clip size-[20px] top-[8px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="118790:104600" data-name="ContactCard">
          <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="118790:104601" data-name="ContactCard / Base">
            <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-node-id="118790:104603" data-name="ContentLeft">
              <div className="relative shrink-0 size-[46px]" data-node-id="118790:104608" data-name="Show/Hide Avatar">
                <div className="absolute left-0 size-[46px] top-0" data-node-id="118790:104609" data-name="_Avatar">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[16px] size-[46.001px] top-1/2" data-node-id="I118790:104609;3951:109567" data-name="_AvatarMedium">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarMedium1} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="118790:104610" data-name="ContactCard / Title">
                <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="118790:104611" data-name="Title">
                  <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] lowercase relative shrink-0 text-[15px] text-white whitespace-nowrap" data-node-id="118790:104612">
                    михаил крупин
                  </p>
                </div>
                <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="118790:104619" data-name="ContactCard / Subtitle">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="118790:104620" data-name="Text">
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="118790:104624" data-name="ContactCard / Subtitle / Text">
                      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] lowercase relative shrink-0 text-[#808080] text-[15px] whitespace-nowrap" data-node-id="118790:104631" style={{ fontVariationSettings: '"wdth" 100' }}>
                        2.3 км
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-[33px]" data-node-id="118790:104632" data-name="Show/Hide Date" />
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0" data-node-id="118790:104635" data-name="ContentRight">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="118790:104636" data-name="Show/Hide ContentRight">
                <ContactCardUserContentRight className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" style="Friend" />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="118790:104648" data-name="ContactCard">
          <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="118790:104649" data-name="ContactCard / Base">
            <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-node-id="118790:104651" data-name="ContentLeft">
              <div className="relative shrink-0 size-[46px]" data-node-id="118790:104714" data-name="Show/Hide Avatar">
                <div className="absolute left-0 size-[46px] top-0" data-node-id="118790:104715" data-name="Avatar">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[16px] size-[45.999px] top-1/2" data-node-id="118790:104716" data-name="AvatarMedium">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarMedium2} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="118790:104717" data-name="ContactCard / Title">
                <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="118790:104718" data-name="Title">
                  <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] lowercase relative shrink-0 text-[15px] text-white whitespace-nowrap" data-node-id="118790:104719">
                    Семён иванов
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="118790:104735" data-name="Show/Hide SubTitle">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="118790:104736" data-name="ContactCard / Subtitle">
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="118790:104738" data-name="Text">
                      <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="118790:104748" data-name="ContactCard / Subtitle / Text">
                        <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] lowercase relative shrink-0 text-[#808080] text-[15px] whitespace-nowrap" data-node-id="118790:104762" style={{ fontVariationSettings: '"wdth" 100' }}>
                          давно не видели
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-[34px]" data-node-id="118790:104763" data-name="Show/Hide Date" />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0" data-node-id="118790:104766" data-name="ContentRight">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="118790:104767" data-name="Show/Hide ContentRight">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[113px]" data-node-id="118790:104768" data-name="ContactCard User / Content Right">
                  <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] lowercase relative shrink-0 text-[#808080] text-[15px] whitespace-nowrap" data-node-id="118790:104769">
                    уже позвали
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative shrink-0 w-full" data-node-id="118790:104794" data-name="ContactCard / Base">
          <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-node-id="118790:104796" data-name="ContentLeft">
            <div className="relative shrink-0 size-[46px]" data-node-id="118790:104859" data-name="Show/Hide Avatar">
              <div className="absolute left-0 size-[46px] top-0" data-node-id="118790:104860" data-name="Avatar">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[16px] size-[45.999px] top-1/2" data-node-id="118790:104861" data-name="AvatarMedium">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgAvatarMedium2} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="118790:104862" data-name="ContactCard / Title">
              <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="118790:104863" data-name="Title">
                <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] lowercase relative shrink-0 text-[15px] text-white whitespace-nowrap" data-node-id="118790:104864">
                  Семён иванов
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="118790:104880" data-name="Show/Hide SubTitle">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="118790:104881" data-name="ContactCard / Subtitle">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="118790:104883" data-name="Text">
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="118790:104893" data-name="ContactCard / Subtitle / Text">
                      <p className="[word-break:break-word] font-['Roboto:Regular'] font-normal leading-[20px] lowercase relative shrink-0 text-[#808080] text-[15px] whitespace-nowrap" data-node-id="118790:104907" style={{ fontVariationSettings: '"wdth" 100' }}>
                        давно не видели
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-[34px]" data-node-id="118790:104908" data-name="Show/Hide Date" />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0" data-node-id="118790:104911" data-name="ContentRight">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="118790:104912" data-name="Show/Hide ContentRight">
              <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-[113px]" data-node-id="118790:104913" data-name="ContactCard User / Content Right">
                <div className="bg-[#242424] content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[12px]" data-node-id="118790:104914" data-name="Button">
                  <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap" data-node-id="118790:104915">
                    позвать
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
