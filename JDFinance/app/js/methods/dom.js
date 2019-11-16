// 元素的开头 中间 结尾 是否有该className
export function hasClass(el,className) {
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
}

export function addClass(el, className) {
    // 元素有对应的className就不添加
    if (hasClass(el, className)) {
        return
    }

    // 将元素原有的class以空格隔开，整理成数组
    let newClass = el.className.split(' ')
    // 添加新的className
    newClass.push(className)
    // 将添加了新的className的数组以空格隔开，整理成字符串
    el.className = newClass.join(' ')
}
