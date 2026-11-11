import test from 'node:test';
import assert from 'node:assert/strict';
import {cleanWallet,product,productById,purchase,readWallet,saveWallet,topUp,coinPacks} from '../market-model.mjs';
test('stored data is validated and inaccessible selections are discarded',()=>{
 assert.deepEqual(cleanWallet({balance:'12',owned:{},selected:{maps:'maps-2'}}),{balance:55000,owned:[],selected:{}});
 assert.deepEqual(cleanWallet({balance:300,owned:['maps-0','maps-0','tails-5','stickers-11','gifts-0','bogus'],selected:{maps:'maps-0',tails:'tails-9'}}),{balance:300,owned:['maps-0'],selected:{maps:'maps-0'}});
 for(const balance of [NaN,Infinity,-1,1.5])assert.equal(cleanWallet({balance}).balance,55000);
 assert.equal(productById('maps-3'),null);assert.equal(productById('stickers--1'),null);assert.equal(productById('tails-01'),null);
});
test('purchase is atomic and cannot charge twice for an owned item',()=>{
 const before=cleanWallet({balance:300});const first=purchase(before,product('maps',0));assert.equal(first.wallet.balance,0);assert.deepEqual(first.wallet.owned,['maps-0']);assert.equal(before.balance,300);
 const repeated=purchase(first.wallet,product('maps',0));assert.equal(repeated.error,'owned');assert.equal(repeated.wallet,first.wallet);
 const unavailable=purchase(before,product('tails',5));assert.equal(unavailable.error,'unavailable');assert.equal(unavailable.wallet,before);
 const insufficient=purchase(before,product('gifts',0));assert.equal(insufficient.error,'balance');assert.equal(insufficient.wallet,before);
});
test('free items cost zero and gifts remain repeatable',()=>{
 const free=purchase(cleanWallet({balance:0}),product('stickers',3));assert.equal(free.error,null);assert.equal(free.wallet.balance,0);assert.deepEqual(free.wallet.owned,['stickers-3']);
 const gift=purchase(cleanWallet({balance:10000}),product('gifts',0));const again=purchase(gift.wallet,product('gifts',0));assert.equal(again.wallet.balance,0);assert.deepEqual(again.wallet.owned,[]);
 assert.equal(purchase(cleanWallet({balance:0}),product('gifts',3)).error,null);
});
test('denied storage access preserves an in-memory session',()=>{
 const blocked={getItem(){throw Error('denied');},setItem(){throw Error('quota');}};assert.equal(readWallet(blocked).balance,55000);assert.equal(saveWallet(blocked,cleanWallet(null)),false);
});
test('demo top-up adds the selected pack and preserves the collection',()=>{
 const before=cleanWallet({balance:0,owned:['maps-0'],selected:{maps:'maps-0'}});
 for(const pack of coinPacks){const result=topUp(before,pack.coins);assert.equal(result.error,null);assert.equal(result.wallet.balance,pack.coins);assert.deepEqual(result.wallet.owned,['maps-0']);assert.equal(result.wallet.selected.maps,'maps-0');}
 assert.equal(before.balance,0);
});
test('invalid and overflowing demo top-ups do not change the wallet',()=>{
 const before=cleanWallet({balance:0});for(const coins of [-1,0,12,NaN,Infinity]){const result=topUp(before,coins);assert.equal(result.error,'unavailable');assert.equal(result.wallet,before);}
 const full=cleanWallet({balance:Number.MAX_SAFE_INTEGER});assert.equal(topUp(full,10).wallet,full);assert.equal(topUp(full,10).error,'balance');
});
