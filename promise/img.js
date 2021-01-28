function loadImage(src){
	return new Promise((resolve, reject) => {
		const image = new Image();
		image.src = src;
		image.onload = () => {
			resolve(image);
		}
		image.onerror = reject;
		document.body.appendChild(image);
	})
}