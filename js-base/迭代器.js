// 迭代器是带有特殊接口的对象。
// 含有一个next()方法，调用返回一个包含两个属性的对象，
// 分别是value和done，value表示当前位置的值，done表示是否迭代完，当为true的时候，调用next就无效了。
function createIterator(ary){
	var i = 0;
	return{
		next: function(){
			return{
				value: ary[i++],
				done: i > ary.length
			}
		}
	}
}
var iterator = createIterator(['a','b','c'])
var done = false

while (!done) {
  var result = iterator.next();
  console.log(result);
  done = result.done;
}
//{ value: 'a', done: false }
//{ value: 'b', done: false }
//{ value: 'c', done: false }
//{ value: undefined, done: true }


// createIterator可以看做一个返回迭代器对象的工厂函数，
// 通过while循环调用返回的iterator.next()会得到result，直到done变为true。
// 用ES5写还是比较麻烦的，而且我们这样写并不支持for...of。很快就会看到ES6真正的写法啦。
// 
// 迭代器协议(Iteration protocols)
// 迭代器对象不是新的语法或新的内置对象，而一种协议（ 迭代器协议），所有遵守这个协议的对象，都可以称之为迭代器。
// 也就是说我们上面ES5的写法得到的对象遵循迭代器协议，即包含next，调用next返回一个result{value，done}。
// 
// 可迭代类型
// ES6还引入了一个新的Symbol对象，symbol值是唯一的。
// 定义了一个Symbol.iterator属性，只要对象中含有这个属性，就是可迭代的，可用于for...of。
// 在ES6中，所有的集合对象，包括数组，Map和Set，还有字符串都是可迭代的，因为他们都有默认的迭代器。


let ary = ['a','b','c']; // 数组
let str = 'str'; 		// 字符串
let set = new Set();	// Set

set.add('s');
set.add('s');
set.add('e');
set.add('t');

let map = new Map()		// Map
let o ={}
map.set('m', 'm')
map.set(o, 'object')

let obj = {
	name: 'mu',
	age: '18'
}

function forOf(list){
	for(var value of list){
		consoel.log(value)
	}
}

forOf(ary); //a b c
forOf(str); // s t r
forOf(set); // s e t
forOf(map); //[ 'm', 'm' ], [ {}, 'object' ]
forOf(obj); //TypeError: list[Symbol.iterator] is not a function

// 可以访问默认的iterator
// 数组中默认的iterator我们是可以访问的，用法是一样的。

let ary = ['a', 'b', 'c'];
let iterator = ary[Symbol.iterator]();
console.log(iterator.next()); //{ value: 'a', done: false }
console.log(iterator.next()); //{ value: 'b', done: false }
console.log(iterator.next()); //{ value: 'c', done: false }
console.log(iterator.next()); //{ value: undefined, done: true }


// 使对象可迭代
// 前面说了只要对象包含[Symbol.iterator]的属性，就可以通过for...of遍历。我们也可以在对象中添加该属性。

const obj = {
	b: 2
}

const a = 'a'
obj.a = 1
Object.defineProperty(obj, Symbol.iterator,{
	enumerbale: false,
	writable: false,
	configurable: true,
	value: function(){
		const that = this
		let index = 0
		const ks =Object.key(that)

		return{
			next: function(){
				return{
					value: that[ks[index++]],
					done: (index > ks.length)
				}
			}
		}
	}
})
for(const v of obj){
	console.log(v)  //2,1
}

// 通过defineProperty向obj对象中添加[Symbol.iterator]，
// 我们在对应的value做的就是通过Object.keys取出它的key，然后调用一次next就往后找一位，
// 可以通过next()尝试一下。因为obj有了[Symbol.iterator]，for...of可以找到，并且调用。


 const fibonacci = {
   [Symbol.iterator]: function () {
     let [pre, next] = [0, 1];
     return {
       next() {
         [pre, next] = [next, pre + next];
         return {
           value: next,
           done: next > 1000
         }
       }
     }
   }
 }
 
 for(var n of fibonacci) {
   console.log(n)
 }
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610,987

// 通过直接声明给对象定义一个iterator。
// 这里是iterator经典的用法。当这个数据集合特别大，甚至无限的时候，我们要把它定义好，
// 取出来都是很庞大的操作，这时候iterator的优势就很明显了。
// 只有调用一次next，才返回下一个值，不调用就没有。假如说我们给done没加限制条件，
// 这个迭代器就永远没有done=true，就会永远可以next。为了防止for...of ，调用next的时候，有可能让我的电脑卡死，限制在1000以内。


const fibonacci = {
   a: 'a',
   b: 'b',
}
console.log(...fibonacci); //TypeError:
//(var)[Symbol.iterator] is not a function

fibonacci[Symbol.iterator] = function () {
  let [pre, next] = [0, 1];
  return {
    next() {
      [pre, next] = [next, pre + next];
      return {
        value: next,
        done: next > 1000
      }
    }
  }
}    
console.log(...fibonacci);//











































