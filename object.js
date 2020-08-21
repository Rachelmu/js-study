// 新版本ES6检查是否为空对象Object.keys(value)
function isEmptyObject(value) {
    return Object.keys(value).length === 0 && value.constructor === Object;
}

// 旧版本浏览器检查空对象
function isObjectEmpty(value) {
    return (
      Object.prototype.toString.call(value) === '[object Object]' && JSON.stringify(value) === '{}'
    );
}
