// VueRouter是一个插件
// 内容做了什么
// 1、实现并声明了两个全局注册的组件，分别是router-link和router-view
// 2、实现install：this.$router.push()

// hash实现
// 通过浏览器前进后退改变 URL 时会触发 popstate 事件
// 通过pushState/replaceState或<a>标签改变 URL 不会触发 popstate 事件。
// 好在我们可以拦截 pushState/replaceState的调用和<a>标签的点击事件来检测 URL 变化
// 通过js 调用history的back，go，forward方法课触发该事件
// 我们通过a标签的href属性来改变URL的hash值（当然，你触发浏览器的前进后退按钮也可以，或者在控制台输入window.location赋值来改变hash）
// 我们监听hashchange事件。一旦事件触发，就改变routerView的内容，若是在vue中，这改变的应当是router-view这个组件的内容
// 为何又监听了load事件？这时应为页面第一次加载完不会触发 hashchange，因而用load事件来监听hash值，再将视图渲染成对应的内容
let routerView = routeView
window.addEventListener('hashchange', ()=>{
    let hash = location.hash;
    routerView.innerHTML = hash
})
window.addEventListener('DOMContentLoaded', ()=>{
    if(!location.hash){//如果不存在hash值，那么重定向到#/
        location.hash="/"
    }else{//如果存在hash值，那就渲染对应UI
        let hash = location.hash;
        routerView.innerHTML = hash
    }
})

// 基于 history 实现
// 我们通过a标签的href属性来改变URL的path值（当然，你触发浏览器的前进后退按钮也可以，或者在控制台输入history.go,back,forward赋值来触发popState事件）。这里需要注意的就是，当改变path值时，默认会触发页面的跳转，所以需要拦截 <a> 标签点击事件默认行为， 点击时使用 pushState 修改 URL并更新手动 UI，从而实现点击链接更新 URL 和 UI 的效果。
// 我们监听popState事件。一旦事件触发，就改变routerView的内容。
// load事件则是一样的
let routerViewHis = routeView
window.addEventListener('DOMContentLoaded', onLoad)
window.addEventListener('popstate', ()=>{
    routerViewHis.innerHTML = location.pathname
})
function onLoad () {
    routerViewHis.innerHTML = location.pathname
    var linkList = document.querySelectorAll('a[href]')
    linkList.forEach(el => el.addEventListener('click', function (e) {
        e.preventDefault()
        history.pushState(null, '', el.getAttribute('href'))
        routerViewHis.innerHTML = location.pathname
    }))
}
