// Object.is和===的区别？
// Object在严格等于的基础上修复了一些特殊情况下的失误，具体来说就是+0和-0，NaN和NaN。 源码如下
function is(x, y){
    if(x === y){
        return x !== 0 || y !== 0  || 1/x === 1/y;
    }else{
        return x !== x && y !== y;
    }
}

function is(x, y) {
    if (x === y) {
      //运行到1/x === 1/y的时候x和y都为0，但是1/+0 = +Infinity， 1/-0 = -Infinity, 是不一样的
      return x !== 0 || y !== 0 || 1 / x === 1 / y;
    } else {
      //NaN===NaN是false,这是不对的，我们在这里做一个拦截，x !== x，那么一定是 NaN, y 同理
      //两个都是NaN的时候返回true
      return x !== x && y !== y;
    }
}
console.log(is(NaN, NaN))
console.log(Object.is(NaN,NaN))
console.log(NaN === NaN)
console.log(-0 === +0)