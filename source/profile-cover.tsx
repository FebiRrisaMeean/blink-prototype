
const imgImage181 = "./profile-assets/1ac64.png";
const imgImage180 = "./profile-assets/e8fa5.svg";
const imgColor1 = "./profile-assets/74785.svg";
const imgColor2 = "./profile-assets/7fbb9.svg";
const imgColor3 = "./profile-assets/cf4de.svg";
const imgBtnRandom = "./profile-assets/16602.svg";
const imgIconFlip32 = "./profile-assets/02f47.svg";
export default function CoverWheel({colors,onColor,onRandom}: {colors:string[],onColor:(i:number,v:string)=>void,onRandom:()=>void}) { return (
      <div className="absolute left-[64px] size-[262px] top-[411px]" data-node-id="47521:176551" data-name="ColorWheel">
        <div className="absolute contents left-0 top-0" data-node-id="47521:176552" data-name="color wheel">
          <div className="absolute contents left-0 top-0" data-node-id="47521:176553" data-name="glow">
            <div className="absolute left-[-33.72px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[33.718px_33.717px] mask-size-[262px_262px] opacity-60 size-[329.435px] top-[-33.72px]" data-node-id="47521:176555" style={{ maskImage: `url("${imgImage180}")` }} data-name="image 180">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage181} />
            </div>
          </div>
          <div className="absolute contents left-0 top-0" data-node-id="47521:176556" data-name="wheel">
            <div className="absolute left-[-33.72px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[33.718px_33.717px] mask-size-[262px_262px] size-[329.435px] top-[-33.72px]" data-node-id="47521:176558" style={{ maskImage: `url("${imgImage180}")` }} data-name="image_hsl_wheel">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage181} />
            </div>
          </div>
        </div>
        <div className="absolute left-[60px] size-[26px] top-[75px]" data-node-id="47521:176559" data-name="color1"><span className={'profile-cover-color-fill'} style={{background:colors[0]}}/><input type="color" aria-label="Цвет обложки 1" value={colors[0]} onInput={e=>onColor(0,e.currentTarget.value)} onChange={e=>onColor(0,e.target.value)} className={'profile-cover-color-input'}/>
          <div className="absolute inset-[-19.23%_-26.92%_-34.62%_-26.92%]">
            <img alt="" className="block max-w-none size-full" src={imgColor1} />
          </div>
        </div>
        <div className="absolute left-[44px] size-[26px] top-[110px]" data-node-id="47521:176560" data-name="color2"><span className={'profile-cover-color-fill'} style={{background:colors[1]}}/><input type="color" aria-label="Цвет обложки 2" value={colors[1]} onInput={e=>onColor(1,e.currentTarget.value)} onChange={e=>onColor(1,e.target.value)} className={'profile-cover-color-input'}/>
          <div className="absolute inset-[-19.23%_-26.92%_-34.62%_-26.92%]">
            <img alt="" className="block max-w-none size-full" src={imgColor2} />
          </div>
        </div>
        <div className="absolute left-[180px] size-[26px] top-[50px]" data-node-id="47521:176561" data-name="color3"><span className={'profile-cover-color-fill'} style={{background:colors[2]}}/><input type="color" aria-label="Цвет обложки 3" value={colors[2]} onInput={e=>onColor(2,e.currentTarget.value)} onChange={e=>onColor(2,e.target.value)} className={'profile-cover-color-input'}/>
          <div className="absolute inset-[-19.23%_-26.92%_-34.62%_-26.92%]">
            <img alt="" className="block max-w-none size-full" src={imgColor3} />
          </div>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[100px] top-1/2" data-node-id="47521:176562" data-name="BtnRandom" role="button" tabIndex={0} aria-label="Случайные цвета обложки" onClick={onRandom} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();onRandom();}}}>
          <div className="absolute inset-[-2%_-4%_-6%_-4%]">
            <img alt="" className="block max-w-none size-full" src={imgBtnRandom} />
          </div>
          <div className="absolute inset-[34%]" data-node-id="I47521:176562;43997:443902" data-name="icon">
            <div className="absolute left-0 size-[32px] top-0" data-node-id="I47521:176562;43997:443902;8365:156162" data-name="icon_flip_32">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconFlip32} />
            </div>
          </div>
        </div>
      </div>
); }
