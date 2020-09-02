// 全部替换
// 我们知道string.replace()函数只能替换第一次出现的情况。你可以在正则表达式的末尾添加/g来替换所有出现的内容
var example = 'potato potato'
console.log(example.replace(/pot/, 'tom'))
console.log(example.replace(/pot/g, 'tom'))

// 提取唯一值(去重)
// 我们可以仅仅通过Set对象和Spread运算符就可以创建一个唯一值的数组。
var entries = [1,2,2,3,4,5,6,6,7,7,8,4,2,1]
var unique_entries = [...new Set(entries)]


// 数字转字符串
// 我们只需要使用带空引号集的串联运算符即可。
var converted_number = 5 + ''
console.log(typeof converted_number) // string

// 字符串转数字
// 我们只需要+运算符。
// 请注意这点，因为它仅适用于“字符串数字”。
the_string = "123";
console.log(+the_string);
// 123

the_string = "hello";
console.log(+the_string);
// NaN


// 打乱数组元素
var my_list = [1,2,3,4,5,6,7,,8,9];
console.log(my_list.sort(function(){
    return Math.random() - 0.5
}))

// 碾平多维数组
// 很简单，使用Spread运算符。只针对二位数组有效
var entries = [1, [2,5], [6,7], 9]
var flat_entries = [].concat.(...entries)
// flat()
entries.flat()


// 短路条件
if(available){
    addToCart()
}
// 使用变量和函数简化
available && addToCart()


// 动态属性名
const dynamic = 'flavour';
var item = {
    name: 'Coke',
    [dynamic]: 'Cherry'
}
console.log(item); 
// { name: "Coke", flavour: "Cherry" }


// 使用长度调整/清空数组
// 调整数组
var entries = [1,2,3,4,5,6,7]
entries.length = 4

// 清空数组
entries.length = 0