<style>
.opacity {
    opacity: 0.5;    
}
</style>
# Introduce 写在前面的话
----

## 为什么叫KUI？
<p class="text" style="font-weight: bold; color: red;">KUI 即 KnightUI</p>
<p>立项初期我就在想: 到底要起个啥样的名字！俗话说好事开门红,起一个拉轰点的名字说不定我就成功一半了呢？！</p>
<p>起名字的过程耗费了不少脑筋~ 我借鉴了ElementUI、IView等组件库的名称,发现这两者的名字都十分贴切、优雅,不行,我不能输,我想起做这个组件库的初衷:</p>

- <p style="font-weight: bold;">方便公司前端方向的研发,为以后的前端开发生态做基建</p>
- 补充自己的技术栈

我想过使用EasyUI来做名称, Easy！方便吗~ 贴切顺耳, 后来突然想起有个老牌的UI库叫EasyUI,在jQuery时代及其流行！看来这条路子行不通了, 突然想起自己玩游戏的时候为自己起名字```Knight(骑士)```! KnightUI! 没错就你了(*/ω＼*) <span class="opacity">后来组件库进行到一半的时候突然想起为啥不用公司前缀wit打头 脑抽了 (╥╯^╰╥)</span>

<p class="opacity">(这里说下为啥要着急起名字？因为在进行开发的时候,需要优先设计样式以及组件名称的命令空间,防止日后的开发混乱。)</p>


<p style="margin-top: 30px;">写这样一套组件库是比较耗时间的<span class="opacity">(在此非常感谢公司的领导并未给予我时间上的压迫)</span>,许多看似简单的组件在内部的实现缺变得较为复杂, 因为此组件库是基于Vue, 需要优先搞懂Vue在某些设计上的实现。为此我阅读了ElementUI、IView等各个组件库的源码<span class="opacity">（当然还有一些其他的开源组件等等 我就不一一细说了。）</span>,发现大家在实现的方式上大体相同, 只是细节上的差异确实是比较明显。</p>

<p style="margin-top: 30px;">指的一提的是IView在实现上确实是借鉴了ElementUI,但是同时我也在ElementUI的源码中发现了Bootstrap的影子 /再次捂脸 (*/ω＼*)</p>

<p style="margin-top: 30px;">样式上的设计,自己是无能为力的~ 其实组件内部使用的组件库最好由公司UI参与,设计一套被企业内部认可的风格进行开发！最起码风格是大家认可过的。在自己孤军奋战的情况下,只能奉行拿来主义啦。KUI的开发支出借鉴过MAdmin(一套基于Bootstrao的框架)的风格, 后来感觉风格太明显,MAdmin是很明显的后台管理风,用于做系统管理的页面非常合适,但是对于其他风格的页面就差强人意了。思来想后最终在进度进行到三分之一的时候参考其他的组件库改成了现在的风格……</p>

<p style="margin-top: 30px;">目前很多组件库的文档实例并不是很全, 但是基本的功能都已经实现。 文档补全的事情先放到最后吧。</p>

<p style="margin-top: 30px; text-align: right;">写于2018-07-06</p>