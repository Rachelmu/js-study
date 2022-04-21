// instanceof的原理是基于原型链的查询，只要处于原型链中，判断永远为true
// instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上
// 其实就是自定义instanceof行为的一种方式，这里将原有的instanceof方法重定义，换成了typeof，因此能够判断基本数据类型。
class PrimitiveNumber {
    static [Symbol.hasInstance](x) {
      return typeof x === 'number'
    }
  }
console.log(111 instanceof PrimitiveNumber) // true

// 手动实现instacneof
// 核心: 原型链的向上查找
function myInstanceof(left, right){
    // 基本数据类型之间返回fasle
    if(typeof left !== 'Object' || left === null) return false;

    let proto = Object.getPrototypeOf(left)
    return proto
}

console.log(myInstanceof(1, Number))
console.log(Object.getPrototypeOf(1))