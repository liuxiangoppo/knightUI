const flag = "getComputedStyle" in window;

//->listToArray:把类数组集合转换为数组
function listToArray(likeAry) {
    if (flag) {
        return Array.prototype.slice.call(likeAry, 0);
    }
    var ary = [];
    for (var i = 0; i < likeAry.length; i++) {
        ary[ary.length] = likeAry[i];
    }
    return ary;
}

/**
 * 判断是否是低版本浏览器  ie6-8
 */
export function isLowerBrowsers() {
    return "getComputedStyle" in window
}

/**
 * 手动设置样式对象
 * @param {*} selector 所选择的元素
 * @param {*} styleObj 样式对象
 */
export function setStyle(selector, styleObj) {
    Object.keys(styleObj).forEach(key => {
        const attr = key.replace(/[A-Z]/g, function (word) {
            return '-' + word.toLowerCase();
        });
        selector.style(attr, styleObj[key]);
    })
}

/**
 * 手动设置样式对象
 * @param {*} selectors 所选择的元素列表
 * @param {*} styleObj 样式对象
 */
export function setStyleToSelectors(selectors, styleObj) {
    selectors.forEach(item => {
        setStyle(item, styleObj)
    })
}

//->getElementsByClass:通过元素的样式类名获取一组元素集合
export function getElementsByClass(strClass, context) {
    context = context || document;
    if (flag) {
        return listToArray(context.getElementsByClassName(strClass));
    }
    //->IE6~8
    var ary = [], strClassAry = strClass.replace(/(^ +| +$)/g, "").split(/ +/g);
    var nodeList = context.getElementsByTagName("*");
    for (var i = 0, len = nodeList.length; i < len; i++) {
        var curNode = nodeList[i];
        var isOk = true;
        for (var k = 0; k < strClassAry.length; k++) {
            var reg = new RegExp("(^| +)" + strClassAry[k] + "( +|$)");
            if (!reg.test(curNode.className)) {
                isOk = false;
                break;
            }
        }
        if (isOk) {
            ary[ary.length] = curNode;
        }
    }
    return ary;
}
/**
 * 添加className到指定的元素
 * @param {*} className 样式名称
 */
export function addClass(selector, className) {
    const ary = className.replace(/(^ +| +$)/g, "").split(/ +/g);
    ary.forEach(clsName => {
        if (!hasClass(selector, clsName)) {
            selector.className += " " + clsName;
        }
    });
}

/**
 * 批量给选定的元素添加className
 * @param {*} selectors 元素列表
 * @param {*} className 样式名称
 */
export function addClassToSelectors(selectors, className) {
    selectors.forEach(item => {
        addClass(item, className)
    })
}
/**
 * 判断当前选择元素是否包含该className
 * @param {*} className className
 */
export function hasClass(selector, className) {
    const reg = new RegExp("(^| +)" + className + "( +|$)");
    return reg.test(selector.className);
}

/**
 * 删除className
 * @param {*} selector 元素
 * @param {*} className 样式名称
 */
export function removeClass(selector, className) {
    const ary = className.replace(/(^ +| +$)/g, "").split(/ +/g);
    ary.forEach(curName => {
        if (hasClass(selector, curName)) {
            var reg = new RegExp("(^| +)" + curName + "( +|$)", "g");
            selector.className = selector.className.replace(reg, " ");
        }
    });
}

/**
 * 批量删除所选元素的className
 * @param {*} selectors 元素列表
 * @param {*} className 批量删除所选元素的className
 */
export function removeClassToSelectors(selectors, className) {
    selectors.forEach(item => {
        removeClass(item, className)
    })
}

/**
 * 获取元素指定的属性名称
 * @param {*} selector 元素
 * @param {*} attrName 属性名称
 */
export function getAttribute(selector, attrName) {
    return selector.getAttribute(attrName)
}

/**
 * 显示
 * @param {*} selector 
 */
export function show(selector) {
    let ary = []
    if (!Array.isArray(selector)) {
        ary.push(selector)
    } else {
        ary = selector
    }
    ary.forEach(item => {
        item.style.display = 'block'
    })
}

/**
 * 隐藏
 * @param {*} selector 
 */
export function hide(selector) {
    let ary = []
    if (!Array.isArray(selector)) {
        ary.push(selector)
    } else {
        ary = selector
    }
    ary.forEach(item => {
        item.style.display = 'none'
    })
}