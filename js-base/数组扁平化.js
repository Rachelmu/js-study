// 在 ES2019 之前，可通过 「reduce + concat」 实现，由于 Array.prototype.concat 既可以连接数组又可以连接单项，十分巧妙
const flatten = list => list.reduce( (a, b) => a.concat(b), [])


// 一个更简单的实现方式是 Array.prototype.concat 与 ... 运算符
const flatten = list => [].concat(...list)

// 如果要求深层数组打平，则如下实现
const flatten = list => list.reduce( (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])

// 在 ES2019 之后，可通过 「Array.prototype.flat」 直接实现！

// 合并数组
// const a = [1,2,3];
// const b = [1,5,6];
// const c = a.concat(b);//[1,2,3,1,5,6]

// const obj1 = {
//   a:1,
// }
// const obj2 = {
//   b:1,
// }
// const obj = Object.assign({}, obj1, obj2);//{a:1,b:1}

const a = [1,2,3];
const b = [1,5,6];
const c = [...new Set([...a,...b])];//[1,2,3,5,6]

const obj1 = {
  a:1,
}
const obj2 = {
  b:1,
}
const obj = {...obj1,...obj2};//{a:1,b:1}


// 数组去重复
function dedupe (array) {
    return Array.from(new Set(array))
}
dedupe([1,2,3,1,3,]); // [1,2,3]

// 字符串去重
// 字符串
let str = "352255";
let unique = [...new Set(str)].join(""); // ""

