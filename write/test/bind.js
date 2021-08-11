import bind from '../src/bind.js';

Function.prototype.bind2 = bind;


const fn1 =function(){
    return this
}

fn1.bind2({})