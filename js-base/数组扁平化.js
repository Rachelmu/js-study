// 在 ES2019 之前，可通过 「reduce + concat」 实现，由于 Array.prototype.concat 既可以连接数组又可以连接单项，十分巧妙
const flatten = list => list.reduce( (a, b) => a.concat(b), [])


// 一个更简单的实现方式是 Array.prototype.concat 与 ... 运算符
const flatten = list => [].concat(...list)

// 如果要求深层数组打平，则如下实现
const flatten = list => list.reduce( (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])

// 在 ES2019 之后，可通过 「Array.prototype.flat」 直接实现！
