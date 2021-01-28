function interval(delay = 1000, callback){
	return new Promise(resolve => {
		let id = seInterval(() => {
			callback(id, resolve);
		}, delay);
	});
}

interval(100, (id, resolve) => {
	console.log(12)
	clearInterval(id);
	resolve();
}).then(() => {
	
})