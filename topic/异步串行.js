const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const subFlow = createFlow([() => delay(1000).then(() => log("c"))]);

createFlow([
  () => log("a"),
  () => log("b"),
  subFlow,
  [() => delay(1000).then(() => log("d")), () => log("e")],
]).run(() => {
  console.log("done");
});

// 需要按照 a,b,延迟1秒,c,延迟1秒,d,e, done 的顺序打印
function createFlow(effects = []) {
    let sources = effects.slice().flat();
    function run(callback) {
      while (sources.length) {
        const task = sources.shift();
        // 把callback放到下一个flow的callback时机里执行
        const next = () => createFlow(sources).run(callback)
        if (typeof task === "function") {
          const res = task();
          if (res?.then) {
            res.then(next);
            return;
          }
        } else if (task?.isFlow) {
          task.run(next);
          return;
        }
      }
      callback?.();
    }
    return {
      run,
      isFlow: true,
    };
}
  