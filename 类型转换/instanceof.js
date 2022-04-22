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

// 手动实现instacneof
// 核心: 原型链的向上查找
function myInstanceof(left, right){
    // 基本数据类型之间返回fasle
    if(typeof left !== 'Object' || left === null) return false;
    // Object.getPrototypeOf() 方法返回指定对象的原型（内部[[Prototype]]属性的值）。给定对象的原型。如果没有继承属性，则返回 null 。
    // getProtypeOf是Object对象自带的一个方法，能够拿到参数的原型对象
    let proto = Object.getPrototypeOf(left)
    while(true){
      // 查找到尽头，还没找到
      if(proto == null) return false;
      // 找到相同的原型对象
      if(proto == right.getPrototypeOf) return true;
      proto = Object.getPrototypeOf(proto)
    }
}

console.log(myInstanceof(1, Number))
console.log(Object.getPrototypeOf(1))

function myInstanceof1(left, right){
  if(typeof left !== Object || left === null) return false;

  let proto = Object.getPrototypeOf(left)
}