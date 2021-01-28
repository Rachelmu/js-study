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