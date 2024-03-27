/** Set是一种叫做集合的数据结构，Map是一种叫做字典的数据结构

什么是集合？什么又是字典？

集合
是由一堆无序的、相关联的，且不重复的内存结构【数学中称为元素】组成的组合

字典
是一些元素的集合。每个元素有一个称作key 的域，不同元素的key 各不相同

区别？

共同点：集合、字典都可以存储不重复的值
不同点：集合是以[值，值]的形式存储元素，字典是以[键，值]的形式存储 **/

// set
// Set是es6新增的数据结构，类似于数组，但是成员的值都是唯一的，没有重复的值，我们一般称为集合

// Set本身是一个构造函数，用来生成 Set 数据结构

//Set的实例关于增删改查的方法：
const s = new Set()
s.add(1)
s.delete(1)
s.has(1)
s.clear()

// Set实例遍历的方法有如下：

// 关于遍历的方法，有如下：

// keys()：返回键名的遍历器
// values()：返回键值的遍历器
// entries()：返回键值对的遍历器
// forEach()：使用回调函数遍历每个成员

let set = new Set(['red', 'green', 'blue']);
 
for (let item of set.keys()) {
  console.log(item);
}
// red
// green
// blue
 
for (let item of set.values()) {
  console.log(item);
}
// red
// green
// blue
 
for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]

let set2 = new Set([1, 4, 9]);
set.forEach((value, key) => console.log(key + ' : ' + value))
// 1 : 1
// 4 : 4
// 9 : 9

// set 数组去重
let arr = [3, 5, 2, 2, 5, 5];
let unique = [...new Set(arr)]; 
// [3, 5, 2] 
// 字符串let 
str = "352255";
let unique2 = [...new Set(str)].join(""); 
// ""


// 实现并集、交集、和差集
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
 
// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}
 
// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}
 
// （a 相对于 b 的）差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}