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