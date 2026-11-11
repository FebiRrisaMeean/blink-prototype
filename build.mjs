import fs from 'node:fs/promises';
import path from 'node:path';
import {build} from 'esbuild';

const classes = new Map(), unknown = new Set();
const value = s => s.replaceAll('_',' ').replace(/calc\(([^)]+)\)/g,(_,x)=>'calc('+x.replace(/([%a-z\d)])([+-])(?=[\da-z])/g,'$1 $2 ')+')');
const bracket = s => value(s.slice(1,-1));
const length = s => s.startsWith('[')?bracket(s):s==='full'?'100%':s==='screen'?'100vh':s==='auto'?'auto':s==='px'?'1px':s.includes('/')?(100*Number(s.split('/')[0])/Number(s.split('/')[1]))+'%':Number.isFinite(+s)?(+s*4)+'px':s;
const color = s => ({white:'#fff',black:'#000',transparent:'transparent',current:'currentColor'}[s]|| (s.startsWith('[')?bracket(s).replace(/^color:/,''):s));
function css(t) {
  const fixed={
    absolute:'position:absolute',relative:'position:relative',sticky:'position:sticky',static:'position:static',
    flex:'display:flex','inline-flex':'display:inline-flex',block:'display:block',contents:'display:contents',hidden:'display:none',grid:'display:grid','inline-grid':'display:inline-grid',
    'grid-cols-[max-content]':'grid-template-columns:max-content','grid-rows-[max-content]':'grid-template-rows:max-content','place-items-start':'place-items:start','col-1':'grid-column:1','row-1':'grid-row:1',
    'flex-col':'flex-direction:column','flex-row':'flex-direction:row','flex-wrap':'flex-wrap:wrap','flex-none':'flex:none','flex-1':'flex:1 1 0%',
    'shrink-0':'flex-shrink:0','grow':'flex-grow:1','min-w-px':'min-width:1px','max-w-none':'max-width:none','min-w-0':'min-width:0',
    'content-stretch':'align-content:stretch','items-start':'align-items:flex-start','items-end':'align-items:flex-end','items-center':'align-items:center','items-stretch':'align-items:stretch',
    'justify-start':'justify-content:flex-start','justify-end':'justify-content:flex-end','justify-center':'justify-content:center','justify-between':'justify-content:space-between',
    'self-stretch':'align-self:stretch','self-center':'align-self:center','border-solid':'border-style:solid',border:'border-width:1px',
    'font-normal':'font-weight:400','font-medium':'font-weight:500','font-semibold':'font-weight:600','font-bold':'font-weight:700','font-extrabold':'font-weight:800','font-black':'font-weight:900',
    italic:'font-style:italic','not-italic':'font-style:normal',lowercase:'text-transform:lowercase',uppercase:'text-transform:uppercase',capitalize:'text-transform:capitalize',
    underline:'text-decoration-line:underline','decoration-solid':'text-decoration-style:solid',
    'text-center':'text-align:center','text-left':'text-align:left','text-right':'text-align:right','text-ellipsis':'text-overflow:ellipsis',
    'whitespace-nowrap':'white-space:nowrap','whitespace-pre':'white-space:pre','whitespace-pre-wrap':'white-space:pre-wrap','break-words':'overflow-wrap:break-word',
    'leading-none':'line-height:1','leading-normal':'line-height:1.5','cursor-pointer':'cursor:pointer',
    'pointer-events-none':'pointer-events:none','pointer-events-auto':'pointer-events:auto',
    'object-cover':'object-fit:cover','object-contain':'object-fit:contain',
    'object-bottom':'object-position:bottom','mix-blend-screen':'mix-blend-mode:screen','mix-blend-hard-light':'mix-blend-mode:hard-light','line-through':'text-decoration-line:line-through','decoration-from-font':'text-decoration-thickness:from-font',
    'bg-gradient-to-t':'background-image:linear-gradient(to top,var(--gfrom,transparent),var(--gto,transparent) var(--gto-pos,100%))',
    'mask-alpha':'mask-mode:alpha','mask-intersect':'mask-composite:intersect','mask-no-clip':'mask-clip:no-clip','mask-no-repeat':'mask-repeat:no-repeat',
    'overflow-hidden':'overflow:hidden','overflow-clip':'overflow:clip','overflow-visible':'overflow:visible','overflow-auto':'overflow:auto',
    'rounded-full':'border-radius:9999px','-scale-y-100':'scale:1 -1','-scale-x-100':'scale:-1 1',
    'bg-clip-text':'background-clip:text;-webkit-background-clip:text',
    'bg-gradient-to-b':'background-image:linear-gradient(to bottom,var(--gfrom,transparent) var(--gfrom-pos,0%),var(--gto,transparent) var(--gto-pos,100%))',
    'bg-gradient-to-l':'background-image:linear-gradient(to left,var(--gfrom,transparent) var(--gfrom-pos,0%),var(--gto,transparent) var(--gto-pos,100%))'
  };
  if(fixed[t]) return fixed[t];
  if(t.startsWith('aspect-['))return 'aspect-ratio:'+bracket(t.slice(7));
  if(t.startsWith('drop-shadow-['))return 'filter:drop-shadow('+bracket(t.slice(12))+')';
  if(t.startsWith('[')&&t.endsWith(']'))return bracket(t);
  let m;
  if((m=t.match(/^overflow-([xy])-(auto|hidden|clip|scroll|visible)$/)))return 'overflow-'+m[1]+':'+m[2];
  if((m=t.match(/^(size|w|h|min-w|min-h|max-w|max-h)-(.+)$/))) {const v=length(m[2]);return (m[1]==='size'?'width:'+v+';height':({'w':'width','h':'height','min-w':'min-width','min-h':'min-height','max-w':'max-width','max-h':'max-height'}[m[1]]))+':'+v;}
  if((m=t.match(/^(-?)(top|left|right|bottom|inset|inset-x|inset-y)-(.+)$/))){let v=length(m[3]);if(m[1])v='calc('+v+' * -1)';return (m[2]==='inset-x'?'left:'+v+';right':m[2]==='inset-y'?'top:'+v+';bottom':m[2])+':'+v;}
  if((m=t.match(/^(-?)(p|m)(x|y|t|b|l|r)?-(.+)$/))){let v=length(m[4]);if(m[1])v='calc('+v+' * -1)';const p=m[2]==='p'?'padding':'margin';return (m[3]==='x'?p+'-left:'+v+';'+p+'-right':m[3]==='y'?p+'-top:'+v+';'+p+'-bottom':p+({t:'-top',b:'-bottom',l:'-left',r:'-right'}[m[3]]||''))+':'+v;}
  if((m=t.match(/^gap(?:-([xy]))?-(.+)$/)))return (m[1]==='x'?'column-gap':m[1]==='y'?'row-gap':'gap')+':'+length(m[2]);
  if((m=t.match(/^(-?)translate-([xy])-(.+)$/))){let v=length(m[3]);if(m[1])v='calc('+v+' * -1)';return '--t'+m[2]+':'+v;}
  if((m=t.match(/^(-?)rotate-(.+)$/))){let v=m[2].startsWith('[')?bracket(m[2]):m[2]+'deg';return '--rot:'+(m[1]?'-':'')+v;}
  if((m=t.match(/^(-?)skew-x-(.+)$/)))return '--skew:'+(m[1]?'-':'')+(m[2].startsWith('[')?bracket(m[2]):m[2]+'deg');
  if((m=t.match(/^font-\['([^']+)'\]$/))){const f=m[1].replaceAll('_',' ').split(':');let w=/Heavy/i.test(f[1])?900:/Extra.?Bold/i.test(f[1])?800:/Semi.?Bold/i.test(f[1])?600:/Bold/i.test(f[1])?700:/Medium/i.test(f[1])?500:/Regular/i.test(f[1])?400:null;return 'font-family:"'+f[0]+'",'+(f[0]==='SF Pro Rounded'?'"SF Pro Text",':'')+'sans-serif'+(w?';font-weight:'+w:'')+(/Italic/i.test(f[1])?';font-style:italic':'');}
  if((m=t.match(/^text-shadow-\[(.+)\]$/)))return 'text-shadow:'+value(m[1]);
  if((m=t.match(/^text-(.+)$/))){let v=m[1];return 'text-'+v==='text-balance'?'text-wrap:balance':v.startsWith('[')&&/^[-.\d]/.test(v.slice(1))?'font-size:'+bracket(v):'color:'+color(v);}
  if((m=t.match(/^leading-(.+)$/)))return 'line-height:'+(m[1].startsWith('[')?bracket(m[1]):m[1]);
  if((m=t.match(/^tracking-(.+)$/)))return 'letter-spacing:'+(m[1].startsWith('[')?bracket(m[1]):m[1]);
  if((m=t.match(/^bg-(.+)$/)))return 'background-color:'+color(m[1]);
  if((m=t.match(/^(from|to)-(.+)$/))){const v=m[2].startsWith('[')?bracket(m[2]):color(m[2]);return /^[-.\d]+%$/.test(v)?'--g'+m[1]+'-pos:'+v:'--g'+m[1]+':'+v;}
  if((m=t.match(/^border-(.+)$/)))return /^\d+$/.test(m[1])?'border-width:'+m[1]+'px':/^\[[\d.]+px\]$/.test(m[1])?'border-width:'+bracket(m[1]):'border-color:'+color(m[1]);
  if((m=t.match(/^rounded(?:-(tl|tr|bl|br|t|b))?-(.+)$/))){const v=length(m[2]);const props={tl:['top-left'],tr:['top-right'],bl:['bottom-left'],br:['bottom-right'],t:['top-left','top-right'],b:['bottom-left','bottom-right']}[m[1]];return props?props.map(p=>'border-'+p+'-radius:'+v).join(';'):'border-radius:'+v;}
  if((m=t.match(/^opacity-(.+)$/)))return 'opacity:'+(m[1].startsWith('[')?bracket(m[1]):+m[1]/100);
  if((m=t.match(/^shadow-\[(.+)\]$/)))return 'box-shadow:'+value(m[1]);
  if((m=t.match(/^backdrop-blur-\[(.+)\]$/)))return 'backdrop-filter:blur('+value(m[1])+')';
  if((m=t.match(/^blur-\[(.+)\]$/)))return 'filter:blur('+value(m[1])+')';
  if((m=t.match(/^flex-\[(.+)\]$/)))return 'flex:'+value(m[1]);
  if((m=t.match(/^mask-(position|size)-\[(.+)\]$/)))return 'mask-'+m[1]+':'+value(m[2]);
  if((m=t.match(/^decoration-\[(.+)\]$/)))return 'text-decoration-thickness:'+value(m[1]);
  if((m=t.match(/^z-(.+)$/)))return 'z-index:'+m[1];
  unknown.add(t);return '';
}
function convert(list){return list.split(/\s+/).filter(Boolean).map(t=>{if(!classes.has(t))classes.set(t,{name:'b'+classes.size,css:css(t)});return classes.get(t).name;}).join(' ');}
await fs.mkdir('.generated',{recursive:true});
const files=await fs.readdir('source');
for(const f of files.filter(f=>f.endsWith('.tsx'))){
  let src=await fs.readFile(path.join('source',f),'utf8');
  src=src.replace(/const assetPathPrefix = "([^"]+)";/,(all,prefix)=>prefix.startsWith('./')?all:'const assetPathPrefix = "./assets";');
  src=src.replace(/(className=\{|className\s*\|\|\s*)`([^`]+)`/g,(_,prefix,template)=>{
    const parts=template.split(/(\$\{[^}]+\})/g).map(part=>part.startsWith('${')?part.replace(/"([^"]*)"/g,(_,list)=>'"'+convert(list)+'"'):part.trim()?(part.startsWith(' ')?' ':'')+convert(part.trim())+(part.endsWith(' ')?' ':''):part);
    return prefix+'`'+parts.join('')+'`';
  });
  src=src.replace(/className="([^"]*)"/g,(_,c)=>'className="'+convert(c)+'"').replace(/(className\s*\|\|\s*)"([^"]*)"/g,(_,p,c)=>p+'"'+convert(c)+'"');
  await fs.writeFile(path.join('.generated',f),"import React from 'react';\n"+src);
}
const rules=[...classes.values()].filter(x=>x.css).map(x=>'.'+x.name+'{'+x.css+(/--t[xy]:|--rot:|--skew:/.test(x.css)?';transform:translate(var(--tx,0px),var(--ty,0px)) rotate(var(--rot,0deg)) skewX(var(--skew,0deg))':'')+'}').join('\n');
await fs.writeFile('dist/figma.css',rules);
await fs.writeFile('class-report.json',JSON.stringify({count:classes.size,unsupported:[...unknown]},null,2));
if(unknown.size)console.log('Unmapped design utilities: '+[...unknown].join(', '));
await build({entryPoints:['app.jsx'],bundle:true,outfile:'dist/app.js',minify:true,jsx:'automatic',sourcemap:true,target:'es2022'});
console.log('Built '+files.length+' source modules and '+classes.size+' style rules');
