/**
 *  深拷贝
 */

//  JSON.parse(JSON.stringify());

const obj1 = {
    age: 20,
    name: 'mumu',
    address:{
        citye: 'beijing'
    },
    arr: ['a','b', 'c']
}

const obj2 = deepClone(obj1)

/**
 * 
 * @param {Object} obj 要拷贝对对象 
 * @returns 
 */
function deepClone(obj = {}){
    if(typeof obj !== 'object' || obj == null){
        // obj 是null，或者不是对象和数组，直接返回
        return obj
    }
    // 初始化返回结果
    let result
    if (obj instanceof Array) {
        result = []
    }else{
        result = {}
    }
    
    for(let key in obj){
        // 保证 key 不是原型的属性
        if (obj.hasOwnProperty(key)) {
            // 递归调用！！
            result[key] = deepClone(obj[key])
        }
    }

    // 返回结果
    return result
}

const deepClone = (target) => {
    if (typeof target === 'object' && target !== null) {
      const cloneTarget = Array.isArray(target) ? []: {};
      for (let prop in target) {
        if (target.hasOwnProperty(prop)) {
            cloneTarget[prop] = deepClone(target[prop]);
        }
      }
      return cloneTarget;
    } else {
      return target;
    }
  }

function deepClone(obj = {}){
    if (typeof obj === 'object' || obj !== null) {
        const result = Array.isArray(obj) ? [] : {}
        for(key in obj){
            if(obj,hasOwnProperty(key)){
                result[key] = deepClone(obj[key])
            }
        }
        return result
    }else{
        return obj
    }
}