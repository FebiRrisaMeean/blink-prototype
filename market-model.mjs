export const productNames={
 stickers:['жутко весело','летучая мышь','привидение','жутко весело','жутко весело','привидение и летучая мышь','летучая мышь','привидение и летучая мышь','хэллоуин','жутко весело','хэллоуин','жутко весело'],
 tails:['огненный хвост','кото йота','огненный хвост','огненный хвост','дементор','скоро','огненный хвост','дементор','огненный хвост','огненный хвост','дементор'],
 maps:['потрачено','потрачено','потрачено'],
 gifts:['рарное кольцо всевластия дизайна','роза','конфета','молоко','сердце']
};
export const giftImages=['1fe87.png','ff8f8.png','0e518.png','74de7.png','4d65e.png'];
export const stickerSlides=[0,1,2,3,3,2,1,2,3,3,3,3];
export const coinPacks=[{coins:10,rubles:100},{coins:30,rubles:285},{coins:50,rubles:450},{coins:100,rubles:850},{coins:300,rubles:2400},{coins:500,rubles:3750},{coins:1000,rubles:7000}];
export function topUp(wallet,coins){
 if(!coinPacks.some(p=>p.coins===coins))return {wallet,error:'unavailable'};
 const balance=wallet.balance+coins;
 if(!Number.isSafeInteger(balance))return {wallet,error:'balance'};
 return {wallet:{...wallet,balance},error:null};
}
export function product(category,index){
 if(!Number.isInteger(index)||index<0||!productNames[category]?.[index])return null;
 const owned=category==='stickers'?index>=6&&index<10:category==='tails'?index>=6&&index<9:false;
 return {id:category+'-'+index,category,index,name:productNames[category][index],owned,archived:category==='stickers'?index>=10:category==='tails'?index>=9:false,soon:category==='tails'&&index===5,price:category==='gifts'?(index===0?5000:index===2?100:300):300,free:category==='tails'&&[2,3].includes(index)||category==='stickers'&&index===3||category==='gifts'&&index===3};
}
export function productById(id){const m=typeof id==='string'&&id.match(/^(stickers|tails|maps|gifts)-(0|[1-9]\d*)$/);return m?product(m[1],Number(m[2])):null;}
export function cleanWallet(value){
 const v=value&&typeof value==='object'?value:{};
 const owned=Array.isArray(v.owned)?[...new Set(v.owned.filter(id=>{const p=productById(id);return p&&p.category!=='gifts'&&!p.archived&&!p.soon;}))]:[];
 const selected={};for(const cat of ['stickers','tails','maps']){const p=productById(v.selected?.[cat]);if(p&&p.category===cat&&!p.archived&&!p.soon&&(p.owned||owned.includes(p.id)))selected[cat]=p.id;}
 return {balance:typeof v.balance==='number'&&Number.isSafeInteger(v.balance)&&v.balance>=0?v.balance:55000,owned,selected};
}
export function purchase(wallet,p){
 if(!p||p.archived||p.soon)return {wallet,error:'unavailable'};
 if(p.category!=='gifts'&&(p.owned||wallet.owned.includes(p.id)))return {wallet,error:'owned'};
 const cost=p.free?0:p.price;
 if(wallet.balance<cost)return {wallet,error:'balance'};
 return {wallet:{...wallet,balance:wallet.balance-cost,owned:p.category==='gifts'?wallet.owned:[...wallet.owned,p.id]},error:null};
}
export function readWallet(storage){try{return cleanWallet(JSON.parse(storage.getItem('blink-market-demo-v1')));}catch{return cleanWallet(null);}}
export function saveWallet(storage,wallet){try{storage.setItem('blink-market-demo-v1',JSON.stringify(wallet));return true;}catch{return false;}}
