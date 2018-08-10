function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

export function guid() {
    return S4();
}

export function catIn(target, parent) {
    let path = []
    let parentNode = target
    while (parentNode && parentNode !== document.body) {
        path.push(parentNode)
        parentNode = parentNode.parentNode
    }
    return path.indexOf(parent) !== -1
}

export function debounce(fn, delay) {
    // 维护一个 timer
    let timer = null
    return function () {
        // 通过 ‘this’ 和 ‘arguments’ 获取函数的作用域和变量
        let context = this
        let args = arguments
        clearTimeout(timer)
        timer = setTimeout(function () {
            fn.apply(context, args)
        }, delay)
    }
}