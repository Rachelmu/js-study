// instanceof的原理是基于原型链的查询，只要处于原型链中，判断永远为true
// instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上
// 其实就是自定义instanceof行为的一种方式，这里将原有的instanceof方法重定义，换成了typeof，因此能够判断基本数据类型。
class PrimitiveNumber {
  // Symbol.hasInstance用于判断某对象是否为某构造器的实例。因此你可以用它自定义 instanceof 操作符在某个类上的行为。
    static [Symbol.hasInstance](x) {
      return typeof x === 'number'
    }
  }
console.log('111' instanceof PrimitiveNumber) // true


const primitive = type => {
  return class {
    static [Symbol.hasInstance](value) {
      return typeof value === type
    }
  }
}
const primitiveString = primitive('string')
const primitiveNumber = primitive('number')
console.log('123' instanceof primitiveString)
console.log(123 instanceof primitiveNumber)


// 手动实现instacneof
// 核心: 原型链的向上查找
function myInstanceof(left, right){
    // 基本数据类型之间返回fasle
    if(typeof left !== 'object' || left === null) return false;
    // Object.getPrototypeOf() 方法返回指定对象的原型（内部[[Prototype]]属性的值）。给定对象的原型。如果没有继承属性，则返回 null 。
    // getProtypeOf是Object对象自带的一个方法，能够拿到参数的原型对象
    let proto = Object.getPrototypeOf(left)
    while(true){
      // 查找到尽头，还没找到
      if(proto == null) return false;
      // 找到相同的原型对象
      if(proto == right.prototype) return true;
      proto = Object.getPrototypeOf(proto)
    }
}

console.log(myInstanceof3(new String('111'), String))
// console.log(Object.getPrototypeOf(1), Number.prototype)

function myInstanceof2(left, right){
  if(typeof left !== 'object' || left === null) return false;
  let proto = Object.getPrototypeOf(left)
  while(true){
    if(proto == null) return false;
    if(proto == right.prototype) return true;
    proto = Object.getPrototypeOf(proto)
  }
}
const myInstanceof = (target, origin) => {
  while (target) {
    if (target.__proto__ === origin.prototype) {
      return true
    }
    target = target.__proto__
  }
  return false
}

function myInstanceof(target, origin) {
  // 非object直接返回false
  if(typeof target !== 'object' || target === null) return false;
  
  var proto = Object.getPrototypeOf(target);
  while (proto) {
    if (proto === origin.prototype) {
      return true
    }
    proto = Object.getPrototypeOf(proto);
  }
  return false
}

function myInstanceof(L = null, R) {
  // 对于左侧参数如果是非对象直接返回false
  if (Object(L) !== L) return false
  // 对于右侧参数可以认为只能为函数且不能没有Prototype属性
  if (typeof R !== 'function' || !R.prototype) throw new TypeError('Right-hand side of 'instanceof' is not an object')
  // 声明一个变量获取对象的__proto__
  let link = L.__proto__
  // 做循环（当link最终指向null，如果指向null的情况下都找不到那就返回false）
  while (link !== null) {
      // 如果找到说明R.prototype在L的原型链上，即返回true
      if(link === R.prototype) return true
      // 逐级向下
      link = link.__proto__
  }
  return false
}


