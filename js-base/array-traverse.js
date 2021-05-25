// JavaScript 数组遍历方法的对比
// 


// for 语句
var arr = [1,2,3,4]
for(var i=0,len=arr.length;i<len; i++){
	console.log(arr[i])
}

// forEach语句
// forEach 方法对数组的每个元素执行一次提供的CALLBACK函数,forEach是一个数组方法，可以用来把一个函数套用在一个数组中的每个元素上，
// forEach为每个数组元素执行callback函数只可用于数组.遍历一个数组让数组每个元素做一件事情.
// 那些已删除（使用delete方法等情况）或者未初始化的项将被跳过（但不包括那些值为 undefined 的项）（例如在稀疏数组上)；
// 不像map() 或者reduce() ，它总是返回 undefined值，并且不可链式调用。典型用例是在一个链的最后执行副作用。
// forEach是数组内置方法，写起来比较简洁，问题就是不能中断，跳出循环。而这个是我们经常会遇见的，达到某个条件就不需要往后遍历了。
var arr = [1,2,3,4]
arr.forEach(function(item){
	console.log(item)
})

// for-in 语句
// 一般会使用for-in来遍历对象的属性的,不过属性需要 enumerable（可列举的）,才能被读取到.
// for-in 循环只遍历可枚举属性。一般常用来遍历对象，包括非整数类型的名称和继承的那些原型链上面的属性也能被遍历。
// 像 Array和 Object使用内置构造函数所创建的对象都会继承自Object.prototype和String.prototype的不可枚举属性就不能遍历了.
// 常用来遍历对象，可以获得对象的key值，但是只能提取key，value需要我们自己obj[key]的形式去访问。
var obj ={
	name: 'test',
	color: 'red',
	day: 'sunday',
	number: 5
}

for(var key in obj){
	console.log(obj[key])
}


// for-of 语句 (ES 6)
// for-of语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，调用自定义迭代钩子，
// 并为每个不同属性的值执行语句。只要是一个iterable的对象,就可以通过for-of来迭代.
var arr = [{name: 'bb'}, 5, 'test']
for(item of arr){
	console.log(item)
}

// for-of 和 for-in 的区别
// for-in 语句以原始插入顺序迭代对象的可枚举属性。for-in会把继承链的对象属性都会遍历一遍,所以会更花时间.

// for-of 语句只遍历可迭代对象的数据。


// Other 循环方法
// map 方法 (不改变原数组)
// map 方法会给原数组中的每个元素都按顺序调用一次  callback 函数。
// callback 每次执行后的返回值（包括 undefined）组合起来形成一个新数组。 
// callback 函数只会在有值的索引上被调用；那些从来没被赋过值或者使用 delete 删除的索引则不会被调用。让数组通过某种计算产生一个新数组,影射成一个新的数组,

var arr = [1,2,3,4]
var firearr = arr.map(current => current *5 )

// reduce 方法
// 让数组中的前项和后项做某种计算,并累计最终值,
var wallets = [1,2,3,4]

var totalMoney = wallets.reduce(function(countedMoney, wallet){
	return countedMoney + wallet.money
}, 0)

// filter 方法 (不改变原数组)
// filter 为数组中的每个元素调用一次 callback 函数，并利用所有使得 callback 返回 true 或 等价于 true 的值 的元素创建一个新数组。
// callback 只会在已经赋值的索引上被调用，对于那些已经被删除或者从未被赋值的索引不会被调用。
// 那些没有通过 callback 测试的元素会被跳过，不会被包含在新数组中。筛选出过滤出数组中符合条件的项,组成新数组.


// filter 方法 (不改变原数组)
// filter 为数组中的每个元素调用一次 callback 函数，并利用所有使得 callback 返回 true 或 等价于 true 的值 的元素创建一个新数组。
// callback 只会在已经赋值的索引上被调用，对于那些已经被删除或者从未被赋值的索引不会被调用。
// 那些没有通过 callback 测试的元素会被跳过，不会被包含在新数组中。筛选出过滤出数组中符合条件的项,组成新数组.

var arr = [2,3,4,5,6]
var morearr = arr.filter(function (number) {
    return number > 3
})

// every 方法
// every 方法为数组中的每个元素执行一次 callback 函数，直到它找到一个使 callback 返回 false（表示可转换为布尔值 false 的值）的元素。
// 如果发现了一个这样的元素，every 方法将会立即返回 false。否则，callback 为每一个元素返回 true，every 就会返回 true。
// 检测数组中的每一项是否符合条件,如果每一项都符合条件,就会返回true,否则返回false,有点像遍历数组且操作callback。只会为那些已经被赋值的索引调用。不会为那些被删除或从来没被赋值的索引调用。

var arr = [1,2,3,4,5]
var result = arr.every(function (item, index) {
    return item > 0
})


// some 方法
// some 为数组中的每一个元素执行一次 callback 函数，直到找到一个使得 callback 返回一个“真值”（即可转换为布尔值 true 的值）。
// 如果找到了这样一个值，some 将会立即返回 true。否则，some 返回 false。
// callback 只会在那些”有值“的索引上被调用，不会在那些被删除或从来未被赋值的索引上调用。
// 检查数组中是否有某些项符号条件,如果有一项就返回true,否则返回false,有点像遍历数组或者操作.
var arr = [1,2,3,4,5,6]
var result = arr.some(function(item, index){
	return item > 3
})

// 对比遍历速度
// for > for-of > forEach > filter > map > for-in

// every 和 some 不完全属于数组操作方法













