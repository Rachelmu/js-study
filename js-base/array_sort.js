// sort()方法用于对数组的元素进行排序,并返回数组。默认排序顺序是根据字符串Unicode码点。
// 语法：arrayObject.sort(sortby)；参数sortby可选。规定排序顺序。必须是函数。
// 注：如果调用该方法时没有使用参数，将按字母顺序对数组中的元素进行排序，说得更精确点，是按照字符编码的顺序进行排序。要实现这一点，首先应把数组的元素都转换成字符串（如有必要），以便进行比较。

// 会更改原始数组
let arr1 = new Array(6)
arr1[0] = "George"
arr1[1] = "John"
arr1[2] = "Thomas"
arr1[3] = "James"
arr1[4] = "Adrew"
arr1[5] = "Martin"

arr1
arr1.sort()

// 输出
// George,John,Thomas,James,Adrew,Martin
// Adrew,George,James,John,Martin,Thomas


var arr2 = new Array(6)
arr2[0] = "10"
arr2[1] = "5"
arr2[2] = "40"
arr2[3] = "25"
arr2[4] = "1000"
arr2[5] = "1"

arr2
arr2.sort()

// 输出
// 10,5,40,25,1000,1
// 1,10,1000,25,40,5
// 


// 大小排序

function sortNumber(a,b){
	return a-b
}
var arr2 = new Array(6)
arr2[0] = "10"
arr2[1] = "5"
arr2[2] = "40"
arr2[3] = "25"
arr2[4] = "1000"
arr2[5] = "1"

arr2.sort(sortNumber)

// 输出
// 10,5,40,25,1000,1
// 1,5,10,25,40,1000
// 

// 升序排列
function sortNumber(a,b){
	return a - b
}

// 降序排列
function sortNumber(a,b){
	return b - a
}

// 根据数组对象中的某个属性值进行排序
// sort方法接收一个函数作为参数，这里嵌套一层函数用来接收对象属性名，其他部分代码与正常使用sort方法相同。

let arr4 = [
	{name: 'amm', age: 0},
	{name: 'mxc', age: 18},
	{name: 'mumu',age: 6}
];

function compare(property){
	return function(a,b){
		let value1 = a[property];
		let value2 = b[property];
		return value1 - value2
	}
}
console.log(arr.sort(compare('age')))


// 如何根据参数不同，来确定是升序排列，还是降序排序呢
sortBy: function(attr,rev){
    //第二个参数没有传递 默认升序排列
    if(rev ==  undefined){
        rev = 1;
    }else{
        rev = (rev) ? 1 : -1;
    }
    return function(a,b){
        a = a[attr];
        b = b[attr];
        if(a < b){
            return rev * -1;
        }
        if(a > b){
            return rev * 1;
        }
        return 0;
    }
}
newArray.sort(sortBy('number',false)) 

// V8 引擎 sort 函数只给出了两种排序 InsertionSort 和 QuickSort，数量小于10的数组使用 InsertionSort，比10大的数组则使用 QuickSort。










