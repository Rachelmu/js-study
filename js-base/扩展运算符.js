// 扩展运算符实现原理

// 简易版实现
function _spread(){
	for(var ar =[], i=0; i < arguments.length; i++){
		ar = ar.concat(arguments[i])
	}
	return ar
}

const a1 = ['test1', 'test2'];
const a2 = _spread(a1);

a2[0] = 'test2';
a2 // ['test2', 'test2']


// 判断是否为数组，数组一定可迭代，则直接复制数组后返回结果即可。
// 判断是否为实现了遍历器（Iterator）接口的对象，若实现了则转为数组。
// 如果没有实现遍历器（Iterator）接口的对象，则判断是否为普通字符串/Map/Set等。
// 均不满足以上条件的话，则抛错。

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) || //  判断是否为数组
    _iterableToArray(arr) || //  判断是否为实现了遍历器（Iterator）接口的对象
    _unsupportedIterableToArray(arr) || // 判断是否为普调字符串/Map/Set等
    _nonIterableSpread() // 则抛错
  );
}

function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (
    (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null) ||
    iter["@@iterator"] != null
  )
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}