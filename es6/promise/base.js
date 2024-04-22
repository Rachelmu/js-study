// 基本用法
const promise = new Promise(funtcion (resolve, reject){
    if('成功') {
        resolve(value)
    } else {
        reject(error)
    }
})

// 模拟
function sendMessage(name, onFulffiled, onRejected){
    setTimeout(() => {
        if(Math.random() <= 0.1){
            onFulffiled(`${name} -> 成功`)
        } else {
            onRejected(`${name} -> 失败`)
        }
    }, 1000)
}

sendMessage(
    'mu',
    (reply) => {
        console.log('成功', reply)
    },
    (reply) => {
        console.log('失败', reply)
    }
)