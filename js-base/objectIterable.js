// Iterable object（可迭代对象）
// 可迭代（Iterable） 对象是数组的泛化。这个概念是说任何对象都可以被定制为可在 for..of 循环中使用的对象。

// 数组是可迭代的。但不仅仅是数组。很多其他内建对象也都是可迭代的。例如字符串也是可迭代的。

// 如果从技术上讲，对象不是数组，而是表示某物的集合（列表，集合），for..of 是一个能够遍历它的很好的语法，因此，让我们来看看如何使其发挥作用。



// 创建Symbol.iterator
// 
let range = {
  from: 1,
  to: 5
};

// 我们希望 for..of 这样运行：
// for(let num of range) ... num=1,2,3,4,5

// 为了让 range 对象可迭代（也就让 for..of 可以运行）我们需要为对象添加一个名为 Symbol.iterator 的方法（一个专门用于使对象可迭代的内置 symbol）。

// 当 for..of 循环启动时，它会调用这个方法（如果没找到，就会报错）。这个方法必须返回一个 迭代器（iterator） —— 一个有 next 方法的对象。
// 从此开始，for..of 仅适用于这个被返回的对象。
// 当 for..of 循环希望取得下一个数值，它就调用这个对象的 next() 方法。
// next() 方法返回的结果的格式必须是 {done: Boolean, value: any}，当 done=true 时，表示迭代结束，否则 value 是下一个值。

let range = {
  from: 1,
  to: 5
};

// 1. for..of 调用首先会调用这个：
range[Symbol.iterator] = function() {

  // ……它返回迭代器对象（iterator object）：
  // 2. 接下来，for..of 仅与此迭代器一起工作，要求它提供下一个值
  return {
    current: this.from,
    last: this.to,

    // 3. next() 在 for..of 的每一轮循环迭代中被调用
    next() {
      // 4. 它将会返回 {done:.., value :...} 格式的对象
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};

// 现在它可以运行了！
for (let num of range) {
  alert(num); // 1, 然后是 2, 3, 4, 5
}

// 请注意可迭代对象的核心功能：关注点分离。

// range 自身没有 next() 方法。
// 相反，是通过调用 range[Symbol.iterator]() 创建了另一个对象，即所谓的“迭代器”对象，并且它的 next 会为迭代生成值。
//因此，迭代器对象和与其进行迭代的对象是分开的。
// 从技术上说，我们可以将它们合并，并使用 range 自身作为迭代器来简化代码。

let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (let num of range) {
  alert(num); // 1, 然后是 2, 3, 4, 5
}

// 现在 range[Symbol.iterator]() 返回的是 range 对象自身：它包括了必需的 next() 方法，并通过 this.current 记忆了当前的迭代进程。这样更短，对吗？是的。有时这样也可以。
// 但缺点是，现在不可能同时在对象上运行两个 for..of 循环了：它们将共享迭代状态，因为只有一个迭代器，即对象本身。但是两个并行的 for..of 是很罕见的，即使在异步情况下。


let str = "Hello";

// 和 for..of 做相同的事
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value); // 一个接一个地输出字符
}

// 总结
// 可以应用 for..of 的对象被称为 可迭代的。

// 技术上来说，可迭代对象必须实现 Symbol.iterator 方法。
// obj[Symbol.iterator]() 的结果被称为 迭代器（iterator）。由它处理进一步的迭代过程。
// 	一个迭代器必须有 next() 方法，它返回一个 {done: Boolean, value: any} 对象，这里 done:true 表明迭代结束，否则 value 就是下一个值。
// 	Symbol.iterator 方法会被 for..of 自动调用，但我们也可以直接调用它。
// 内置的可迭代对象例如字符串和数组，都实现了 Symbol.iterator。
// 字符串迭代器能够识别代理对（surrogate pair）。（译注：代理对也就是 UTF-16 扩展字符。）
// 有索引属性和 length 属性的对象被称为 类数组对象。这种对象可能还具有其他属性和方法，但是没有数组的内建方法。

// 如果我们仔细研究一下规范 —— 就会发现大多数内建方法都假设它们需要处理的是可迭代对象或者类数组对象，而不是“真正的”数组，因为这样抽象度更高。

// Array.from(obj[, mapFn, thisArg]) 将可迭代对象或类数组对象 obj 转化为真正的数组 Array，然后我们就可以对它应用数组的方法。可选参数 mapFn 和 thisArg 允许我们将函数应用到每个元素。








