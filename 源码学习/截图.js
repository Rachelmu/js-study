function takeScreenshot(targetElement, filename) {
    // 创建一个canvas元素
    var canvas = document.createElement('canvas');
    canvas.width = targetElement.offsetWidth;
    canvas.height = targetElement.offsetHeight;
    var ctx = canvas.getContext('2d');
 
    // 将目标元素绘制到canvas上
    var data = (new XMLSerializer()).serializeToString(targetElement);
    var DOMURL = window.URL || window.webkitURL || window;
    var img = new Image();
    var svg = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
    var url = DOMURL.createObjectURL(svg);
 
    img.onload = function() {
        ctx.drawImage(img, 0, 0);
        DOMURL.revokeObjectURL(url);
 
        // 创建一个img元素来展示截图
        var img = canvas.toDataURL('image/png');
        var screenshot = document.createElement('img');
        screenshot.src = img;
        screenshot.style.width = '200px'; // 可以设置样式
        screenshot.style.height = 'auto'; // 可以设置样式
 
        // 下载截图
        var link = document.createElement('a');
        link.download = filename || 'screenshot.png';
        link.href = screenshot.src;
        link.click();
    };
    img.src = url;
}
 
// 使用方法：
// 假设你有一个id为"myElement"的元素你想要截图
takeScreenshot(document.getElementById('myElement'), 'custom_name.png');