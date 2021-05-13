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
console.log(arr4.sort(compare('age')))


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


// sort原理
// sort()内部采用了 二分法插入排序，如果数组的大小超过了10，就会采用快速排序的方法

let arr = []
for(let i = 0 ; i < 100000 ; i++){
    arr.push(parseInt(Math.random() * 10000))
}
//performance.now()H5的一个新的api，效果相当于Date.now()，不过它更强大
let startTime = performance.now()
arr.sort((a, b) => {
    return a - b
})
let endTime = performance.now()

console.log(endTime - startTime)



// 快排
function quickSort(arr) {
    var len = arr.length;
    //结束递归的条件
    if (len <= 1) return arr;
    var left = [];
    var right = [];
    //中间基数
    var midindex = Math.floor(len / 2);
    var mid = arr[midindex];
    for (var i = 0; i < len; i++) {
        if (arr[i] == mid) continue;
        else if (arr[i] < mid) left.push(arr[i]);
        else right.push(arr[i]);
    }
    return quickSort(left).concat([mid], quickSort(right));
}

let arr = []
for(let i = 0 ; i < 100000 ; i++){
    arr.push(parseInt(Math.random() * 10000))
}

let startTime = performance.now()
quickSort(arr)
let endTime = performance.now()

console.log(endTime - startTime)


// 插入排序
function insertSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        var k = i;
        //前提： 1  前面必须有内容
        //前提： 2  当前这个元素，比左边小，交换1次
        while (k - 1 >= 0 && arr[k] < arr[k - 1]) {
            var temp = arr[k];
            arr[k] = arr[k - 1];
            arr[k - 1] = temp;
            k--;
        }
    }
    return arr;
}

let arr = []
for(let i = 0 ; i < 100000 ; i++){
    arr.push(parseInt(Math.random() * 10000))
}

let startTime = performance.now()
insertSort(arr)
let endTime = performance.now()

console.log(endTime - startTime)

// 冒泡排序
 let arr = []
for(let i = 0 ; i < 100000 ; i++){
    arr.push(parseInt(Math.random() * 10000))
}

function bubbleSort(arr) {
    var len = arr.length - 1;//循环次数
    for (var j = len; j > 0; j--) {
        //比较 交换
        for (var i = 0; i < j; i++) {
            if (arr[i] > arr[i + 1]) {
                var tamp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tamp;
            }
        }
    }
    return arr;
    }
let startTime = performance.now()
bubbleSort(arr)
let endTime = performance.now()

console.log(endTime - startTime)

// 总结
// sort()方法没有参数时，按照ascii码进行排序
// 通过给sort()的参数返回一个负值可以实现数组reverse()效果
// sort(next,prev) 参数返回 next - prev时，数组是升序，返回-(next - prev) 即prev - next时，数组是降序
// 通过以上的比较我们还是可以看出sort()方法效率还是挺高的，可以直接使用
// 一般情况下，对数组进行排序使用快速排序或者sort(),在已知数据规律时才考虑其他排序方式

