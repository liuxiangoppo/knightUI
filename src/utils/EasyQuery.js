class EasyDom {
    constructor(selector) {
        this.selectors = [];
        this.use(selector);
    }

    /**
     * 根据id获取dom元素
     * @param {*} id 
     */
    queryById(id) {
        const ary = []
        ary.push(document.getElementById(id));
        this.selectors = ary;
        return this;
    }

    /**
     * 根据标签名称获取dom元素
     * @param {*} tagName 
     */
    queryByTagName(tagName) {
        const ary = []
        document.getElementsByTagName(tagName).forEach((item, i) => {
            ary[i] = item
        })
        this.selectors = ary;
        return this;
    }

    /**
     * 根据样式名称获取dom元素
     * @param {*} className 
     */
    queryByClassName(className) {
        const ary = []
        document.getElementsByClassName(className).forEach((item, i) => {
            ary[i] = item
        })
        this.selectors = ary;
        return this;
    }

    /**
     * 使用当前的dom元素 并放置到selectors数组中
     * @param {*} dom HTMLDocument
     */
    use(queryTag) {
        const ary = []
        if (typeof queryTag === 'object') {
            ary.push(queryTag);
            this.selectors = ary;
        } else {
            const queryType = this.getQueryTagType(queryTag);
            switch (queryType) {
                case 'id':
                    this.queryById(queryTag);
                    break;
                case 'className':
                    this.queryByClassName(queryTag);
                    break;
                case 'tagName':
                    this.queryByTagName(queryTag);
                    break;
            }
        }
        return this;
    }

    /**
     * 根据查询条件字符串获取查询类型。
     * @param {*} queryTag 查询标签字符串 Object | #id | .className | <p>
     */
    getQueryTagType(queryTag) {
        const reg = /^(#)?(\.)?(\w+)$/img;
        const regResult = reg.exec(queryTag);
        let queryType = '';
        if (regResult[1]) {
            queryType = 'id';
        } else if (regResult[2]) {
            queryType = 'className';
        } else if (regResult[3]) {
            queryType = 'tagName'
        }
        return queryType;
    }

    /**
     * 向指定的dom内添加元素
     * @param {*} dom 
     */
    append(dom) {
        if (this._isNotEmpty()) {
            this.selectors.forEach(item => {
                item.appendChild(dom)
            })
        }
        return this;
    }

    /**
     * 判断当前selectors不为空
     */
    _isNotEmpty() {
        return this.selectors.length > 0;
    }

    /**
     * 设置样式
     * @param {*} styleObj 样式对象
     */
    style(styleObj) {
        if (this._isNotEmpty()) {
            this.selectors.forEach(selector => {
                Object.keys(styleObj).forEach(key => {
                    const attr = key.replace(/[A-Z]/g, function (word) {
                        return '-' + word.toLowerCase();
                    });
                    selector.style[attr] = styleObj[key];
                })
            })
        }
        return this;
    }

    /**
     * 获取样式名称获取该样式的值
     * @param {*} styleName 
     */
    getStyle(styleName) {
        if (this._isNotEmpty()) {
            return this.selectors[0].style[styleName]
        }
    }

    /**
     * 判断当前元素是否含有指定的样式名称
     * @param {*} selector 
     * @param {*} className 
     */
    _hasClass(selector, className) {
        const reg = new RegExp("(^| +)" + className + "( +|$)");
        return reg.test(selector.className);
    }

    /**
     * 判断已选的dom元素中是否含有某个样式.
     * 注: 若被选中的数组中拥有多个元素的话 默认对第一个进行判断。
     * @param {*} className 
     */
    hasClass(className) {
        if (!this._isNotEmpty) {
            return this._hasClass(this.selectors[0], className);
        }
        return false;
    }

    /**
     * 给指定的dom元素添加样式名称
     * @param {*} selector 
     * @param {*} className 
     */
    _addClassToSelector(selector, className) {
        const ary = className.replace(/(^ +| +$)/g, "").split(/ +/g);
        ary.forEach(clsName => {
            if (!this._hasClass(selector, clsName)) {
                selector.className += " " + clsName;
            }
        });
    }

    /**
     * 批量添加样式
     * @param {*} className 样式名称
     */
    addClass(className) {
        if (this._isNotEmpty()) {
            this.selectors.forEach(item => {
                this._addClassToSelector(item, className);
            })
        }
        return this;
    }

    /**
     * 跟某个元素移除样式名称
     * @param {*} selector 
     * @param {*} className 
     */
    _removeClassToSelector(selector, className) {
        const ary = className.replace(/(^ +| +$)/g, "").split(/ +/g);
        ary.forEach(curName => {
            if (this._hasClass(selector, curName)) {
                var reg = new RegExp("(^| +)" + curName + "( +|$)", "g");
                selector.className = selector.className.replace(reg, " ");
            }
        });
    }

    /**
     * 批量移除样式名称
     * @param {*} className 样式名称
     */
    removeClass(className) {
        if (this._isNotEmpty()) {
            this.selectors.forEach(item => {
                this._removeClassToSelector(item, className);
            })
        }
        return this;
    }

    /**
     * 设置属性
     */
    setAttribute(attrName, attrVal) {
        if (this._isNotEmpty()) {
            this.selectors.forEach(item => {
                item.setAttribute(attrName, attrVal);
            })
        }
        return this;
    }

    /**
     * 获取元素
     */
    getAttribute(attrName) {
        if (this._isNotEmpty()) {
            this.selectors.forEach(item => {
                item.getAttribute(attrName);
            })
        }
        return this;
    }

    /**
     * 设置宽度
     */
    width(_width) {
        if (this._isNotEmpty()) {
            this.selectors.forEach(item => {
                item.style.width = `${_width}px`;
            })
        }
        return this;
    }

    /**
     * 设置高度
     */
    height(_height) {
        if (this._isNotEmpty()) {
            this.selectors.forEach(item => {
                item.style.height = `${_height}px`;
            })
        }
        return this;
    }

    /**
     * 获取元素宽度
     * @param {*} type width | offsetWidth | clientWidth
     */
    getWidth(type) {
        if (this._isNotEmpty()) {
            const selector = this.selectors[0]
            if (!type) {
                return selector.style.width;
            } else {
                return selector[type];
            }
        }
    }

    /**
     * 获取元素高度
     * @param {*} type height | offsetHeight | clientHeight
     */
    getHeight(type) {
        if (this._isNotEmpty()) {
            const selector = this.selectors[0]
            if (!type) {
                return selector.style.height;
            } else {
                return selector[type];
            }
        }
    }

    /**
     * 显示
     */
    show() {
        if (this._isNotEmpty()) {
            this.selectors.forEach(item => {
                item.style.display = 'block';
            })
        }
        return this;
    }

    /**
     * 隐藏
     */
    hide() {
        if (this._isNotEmpty()) {
            this.selectors.forEach(item => {
                item.style.display = 'none';
            })
        }
        return this;
    }

    /**
     * 获取被选中的元素
     */
    getSelectors() {
        return this.selectors;
    }

    /**
     * 为选中的元素设置id
     * 注:若参数id不为空则为选中的值设置id 反之就将当前已选中的元素的第一个元素的id返回。
     * @param {*} id id
     */
    id(id) {
        if (this._isNotEmpty()) {
            if (id) {
                // 给selector中 每一个元素都设置为指定的id
                this.selectors.forEach(item => {
                    item.id = id
                })
                return this;
            } else {
                // 若id为空的话 则将selecotr数组中处于首位的元素的id返回。
                return this.selectors[0].id;
            }
        } else {
            return this;
        }
    }
}

export default class EasyQuery {
    static use(selector) {
        return new EasyDom(selector);
    }
}