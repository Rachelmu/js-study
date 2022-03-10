// 冒泡
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


// 插入
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
