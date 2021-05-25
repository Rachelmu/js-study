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