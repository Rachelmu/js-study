// sort
// 此时排序的方式是按照ascii码进行排序，它会先将数组里的元素全部转为字符串(不影响原值)，方便比较。
function compare(a,b){
    return a -b
}
undefined
var numbers = [2,10,3,1,9,2,5,6]
undefined
numbers.sort(compare)
// (8) [1, 2, 2, 3, 5, 6, 9, 10]

