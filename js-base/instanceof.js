// instanceof原理

function instance_of(L,R){
	// 取R的显示原型
	var O = R.prototype;
	// 取L的隐式原型
	L = L.__proto__;
	while(true){
		if(L === null)
			return false
		// 这里重点：当O严格等于L时，返回true
		if(O === L)
			return true
		L =L.__proto__;
	}
}

function getType(obj){
	let type  = typeof obj;
	if (type !== "object") {    // 先进行typeof判断，如果是基础数据类型，直接返回
	  return type;
	}
	// 对于typeof返回结果是object的，再进行如下的判断，正则返回结果
	return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1'); 
}


function instacneOfMy(target, type) {
	type = type.prototype;
	target = target.__proto__;

	while(true){
		if(target === null){
			return false;
		}

		if(target === type){
			return true
		}

		target = target.__proto__;
	}
}

function isntaceOfMy1(target, type) {
	type =  type.prototype;
	target = target.__proto__

	while(true){
		if(target === null){
			return false;
		}

		if(target === type){
			return true
		}

		target = target.__proto__
	}
}