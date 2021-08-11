import bind from '../src/bind';

(Function.prototype as any).bind2 = bind;
// console.assert((Function.prototype as any).bind2 != undefined) 

const fn1 =function(){
    return this
}