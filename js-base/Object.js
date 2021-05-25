// Object.keys原理
const obj = {
  100: '一百',
  2: '二',
  7: '七'
}
Object.keys(obj) // ["2", "7", "100"]

const obj = {
  c: 'c',
  a: 'a',
  b: 'b'
}
Object.keys(obj) // ["c", "a", "b"]


// 如果属性名的类型是Number，那么Object.keys返回值是按照key从小到大排序
// 如果属性名的类型是String，那么Object.keys返回值是按照属性被创建的时间升序排序。
// 如果属性名的类型是Symbol，那么逻辑同String相同