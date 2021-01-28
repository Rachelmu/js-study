new Promise((resolve, reject) => {
    resolve()
}).then(() => {
    console.log('A')
    new Promise((resolve, reject) => {
        resolve()
    }).then(() => {
        console.log('B')
    }).then(() => {
        console.log('C')
    })
}).then(() => {
    console.log('D')
})

new Promise(executor).then(onResolvedA).then(onResolvedD)

function executor(resolve, reject) {
    resolve()
}
function onResolvedA() {
    console.log('A')
    new Promise(executor).then(onResolvedB).then(onResolvedC)
}
function onResolvedB() {
    console.log('B')
}
function onResolvedC() {
    console.log('C')
}
function onResolvedD() {
    console.log('D')
}




new Promise((resolve, reject) => {
    resolve(1)
}).then(res => {
    console.log('A', res)
}).finally(() => {
    console.log('B')
})
new Promise((resolve, reject) => {
    resolve(2)
}).then(res => {
    console.log('C')
}).finally(() => {
    console.log('D')
})

new Promise((resolve, reject) => {
    resolve(1)
}).then(onResolvedA).finally(onFinally)

function onResolvedA() {
    console.log('A')
}
function onFinally() {
    console.log('B')
}




function init(){
    console.log(3)
    return 3
}
let p1 = Promise.race([
    new Promise((resolve, reject) => {
        resolve(9)
    }).then(res => {
        console.log(res)
        return 'A'
    }),
    new Promise((resolve, reject) => {
        reject(6)
    }),
    init(),
])
let p2 = p1.then(res => {
    console.log(res)
}, err => {
    console.log(err)
})
setTimeout(console.log, 0, p1)
// 3
// 9
// 6
// Promise {<rejected>: 6}
// 

const one =() => Promise.resolve('One!').then(res => console.log('res',res))

async function myFunc(){
    console.log('In function!')
    const res = await one()
    console.log(res)
}

console.log('Before function!')
myFunc();
console.log('After function!')