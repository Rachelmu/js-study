// 实现一个promise
function MyPromise(executor) {
  let self = this;
  self.status = 'pending'; // 初始状态为pending
  self.value = undefined; // fulfilled时的结果
  self.reason = undefined; // rejected时的原因

  function resolve(value) {
    if (self.status === 'pending') {
      self.status = 'fulfilled';
      self.value = value;
      handleCallbacks();
    }
  }

  function reject(reason) {
    if (self.status === 'pending') {
      self.status = 'rejected';
      self.reason = reason;
      handleCallbacks();
    }
  }

  function handleCallbacks() {
    if (self.status === 'fulfilled' && typeof self.onFulfilled === 'function') {
      setTimeout(() => self.onFulfilled(self.value), 0);
    }
    if (self.status === 'rejected' && typeof self.onRejected === 'function') {
      setTimeout(() => self.onRejected(self.reason), 0);
    }
  }

  try {
    executor(resolve, reject); // 执行传入的executor函数
  } catch (e) {
    reject(e); // 如果executor执行时抛出异常，直接reject
  }
  
  // 添加then方法
  this.then = function(onFulfilled, onRejected) {
    self.onFulfilled = onFulfilled;
    self.onRejected = onRejected;
    handleCallbacks(); // 立即调用handleCallbacks以检查是否有待处理的回调
    return new MyPromise((resolve, reject) => { // 返回一个新的Promise，以便链式调用
      // 这里可以添加对onFulfilled和onRejected返回值的处理逻辑
    });
  };
}

// 使用示例：
let promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
  }, 1000);
});

promise.then(
  value => console.log(value),
  reason => console.log(reason)
);


// 定义状态
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class SelfPromise {
    // 储存状态，初始值是 pending
    status = PENDING;
    // 成功之后的值
    value = null;
    // 失败之后的原因
    reason = null;
    
    constructor(executor) {
        // 将 resolve 和 reject 传给 new Promsie 的回调函数
        executor(this.resolve, this.reject);
    }
    
    // 箭头函数可以函数里面的 this 始终指向 Promise 实例对象
    resolve = (value) => {
        // 只有状态是 pending 的情况下，才改变为 fulfilled 状态
        if (this.status === PENDING) {
            this.status = FULFILLED;
            this.value = value;
        }
    };

    reject = (reason) => {
        // 只有状态是 pending 的情况下，才改变为 rejected 状态
        if (this.status === PENDING) {
            this.status = REJECTED;
            this.reason = reason;
        }
    };
    
    then(onFulfilled, onRejected) {
        if (this.status === FULFILLED) {
            // 把 resolve 的值传递给 fulfilled 状态的回调函数，并且调用它。
            onFulfilled(this.value);
        } else if (this.status === REJECTED) {
            // 把 reject 的值传递给 rejected 状态的回调函数，并且调用它。
            onRejected(this.reason);
        }
    }
}
