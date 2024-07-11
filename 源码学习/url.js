// 删除url中某个参数,并跳转
function removeQueryParam(url, key) {
    // 使用正则表达式匹配查询字符串中的特定参数
    const r = new RegExp('([?&])' + key + '=[^&]*(&?)', 'gi')
    const newUrl = url.replace(r, function(match, group1, group2) {
        if (group1 === '&') {
        return group2
        } else {
        return ''
        }
    })
    // 如果结果以'?'开头，移除它
    return newUrl.replace(/^\?/, '')
}