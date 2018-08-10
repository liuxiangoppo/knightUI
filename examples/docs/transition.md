<style>
    .temp-list {
        width: 250px;
        border: 1px solid #ddd;
        padding: 0;
    }
    .temp-list li {
        list-style: none;
        padding: 5px;
        border-bottom: 1px solid #ddd;
    }
    .pullRight {
        float: right;
    }
</style>
# Transition 过渡动画
----
## 概述
过渡动画的提供基于vue2-animate.css
## 基础使用
<div class="demo-block">
 <template>
    <h3>Fade</h3>
    <button class="button is-primary" @click="fade">fade</button>
    <button class="button is-primary" @click="fadeRight">fadeRight</button>
    <button class="button is-primary" @click="fadeLeft">fadeLeft</button>
    <button class="button is-primary" @click="fadeLeftBig">fadeLeftBig</button>
    <button class="button is-primary" @click="fadeUpBig">fadeUpBig</button>
    <h3>Rotate</h3>
    <button class="button is-primary" @click="rotate">rotate</button>
    <button class="button is-primary" @click="rotateDownLeft">rotateDownLeft</button>
    <button class="button is-primary" @click="rotateDownRight">rotateDownRight</button>
    <button class="button is-primary" @click="rotateUpLeft">rotateUpLeft</button>
    <h3>Bounce</h3>
    <button class="button is-primary" @click="bounce">bounce</button>
    <button class="button is-primary" @click="bounceDown">bounceDown</button>
    <button class="button is-primary" @click="bounceLeft">bounceLeft</button>
    <button class="button is-primary" @click="bounceRight">bounceRight</button>
    <button class="button is-primary" @click="bounceUp">bounceUp</button>
    <h3>Slide</h3>
    <button class="button is-primary" @click="slideDown">slideDown</button>
    <button class="button is-primary" @click="slideLeft">slideLeft</button>
    <button class="button is-primary" @click="slideRight">slideRight</button>
    <button class="button is-primary" @click="slideUp">slideUp</button>
    <h3>Zoom</h3>
    <button class="button is-primary" @click="zoom">zoom</button>
    <button class="button is-primary" @click="zoomDown">zoomDown</button>
    <button class="button is-primary" @click="zoomLeft">zoomLeft</button>
    <button class="button is-primary" @click="zoomRight">zoomRight</button>
    <button class="button is-primary" @click="zoomUp">zoomUp</button>
    <animate-demo :message="message" :animate-name="animateName" :show.sync="show"></animate-demo>
 </template>
 <script>
    export default {
      data () {
        return {
          message: '实例',
          animateName: '',
          show: false
        }
      },
      methods: {
        fade () {
          this.message = 'Fade'
          this.animateName = 'fade'
          this.show = true
        },
        fadeRight () {
          this.message = 'fadeRight'
          this.animateName = 'fadeRight'
          this.show = true
        },
        fadeLeft () {
          this.message = 'fadeLeft'
          this.animateName = 'fadeLeft'
          this.show = true
        },
        fadeLeftBig () {
          this.message = 'fadeLeftBig'
          this.animateName = 'fadeLeftBig',
          this.show = true
        },
        fadeUpBig () {
          this.message = 'fadeUpBig'
          this.animateName = 'fadeUpBig'
          this.show = true
        },
        rotate () {
          this.message = 'rotate'
          this.animateName = 'rotate'
          this.show = true
        },
        rotateDownLeft () {
          this.message = 'rotateDownLeft'
          this.animateName = 'rotateDownLeft'
          this.show = true
        },
        rotateDownRight () {
          this.message = 'rotateDownRight'
          this.animateName = 'rotateDownRight'
          this.show = true
        },
        rotateUpLeft () {
          this.message = 'rotateUpLeft'
          this.animateName = 'rotateUpLeft'
          this.show = true
        },
        bounce () {
          this.message = 'bounce'
          this.animateName = 'bounce'
          this.show = true
        },
        bounceDown () {
          this.message = 'bounceDown'
          this.animateName = 'bounceDown'
          this.show = true
        },
        bounceLeft () {
          this.message = 'bounceLeft'
          this.animateName = 'bounceLeft'
          this.show = true
        },
        bounceRight () {
          this.message = 'bounceRight'
          this.animateName = 'bounceRight'
          this.show = true
        },
        bounceUp () {
          this.message = 'bounceUp'
          this.animateName = 'bounceUp'
          this.show = true
        },
        slideDown () {
          this.message = 'slideDown'
          this.animateName = 'slideDown'
          this.show = true
        },
        slideUp () {
          this.message = 'slideUp'
          this.animateName = 'slideUp'
          this.show = true
        },
        slideLeft () {
          this.message = 'slideLeft'
          this.animateName = 'slideLeft'
          this.show = true
        },
        slideRight () {
          this.message = 'slideRight'
          this.animateName = 'slideRight'
          this.show = true
        },
        zoom () {
          this.message = 'zoom'
          this.animateName = 'zoom'
          this.show = true
        },
        zoomDown () {
          this.message = 'zoomDown'
          this.animateName = 'zoomDown'
          this.show = true
        },
        zoomLeft () {
          this.message = 'zoomLeft'
          this.animateName = 'zoomLeft'
          this.show = true
        },
        zoomRight () {
          this.message = 'zoomRight'
          this.animateName = 'zoomRight'
          this.show = true
        },
        zoomUp () {
          this.message = 'zoomUp'
          this.animateName = 'zoomUp'
          this.show = true
        }
      }
    }
 </script>
</div>

::: demo
```html

<template>
    <h3>Fade</h3>
    <button class="button is-primary" @click="fade">fade</button>
    <button class="button is-primary" @click="fadeRight">fadeRight</button>
    <button class="button is-primary" @click="fadeLeft">fadeLeft</button>
    <button class="button is-primary" @click="fadeLeftBig">fadeLeftBig</button>
    <button class="button is-primary" @click="fadeUpBig">fadeUpBig</button>
    <h3>Rotate</h3>
    <button class="button is-primary" @click="rotate">rotate</button>
    <button class="button is-primary" @click="rotateDownLeft">rotateDownLeft</button>
    <button class="button is-primary" @click="rotateDownRight">rotateDownRight</button>
    <button class="button is-primary" @click="rotateUpLeft">rotateUpLeft</button>
    <h3>Bounce</h3>
    <button class="button is-primary" @click="bounce">bounce</button>
    <button class="button is-primary" @click="bounceDown">bounceDown</button>
    <button class="button is-primary" @click="bounceLeft">bounceLeft</button>
    <button class="button is-primary" @click="bounceRight">bounceRight</button>
    <button class="button is-primary" @click="bounceUp">bounceUp</button>
    <h3>Slide</h3>
    <button class="button is-primary" @click="slideDown">slideDown</button>
    <button class="button is-primary" @click="slideLeft">slideLeft</button>
    <button class="button is-primary" @click="slideRight">slideRight</button>
    <button class="button is-primary" @click="slideUp">slideUp</button>
    <h3>Zoom</h3>
    <button class="button is-primary" @click="zoom">zoom</button>
    <button class="button is-primary" @click="zoomDown">zoomDown</button>
    <button class="button is-primary" @click="zoomLeft">zoomLeft</button>
    <button class="button is-primary" @click="zoomRight">zoomRight</button>
    <button class="button is-primary" @click="zoomUp">zoomUp</button>
    <animate-demo :message="message" :animate-name="animateName" :show.sync="show"></animate-demo>
 </template>
 <script>
    export default {
      data () {
        return {
          message: '实例',
          animateName: '',
          show: false
        }
      },
      methods: {
        fade () {
          this.message = 'Fade'
          this.animateName = 'fade'
          this.show = true
        },
        fadeRight () {
          this.message = 'fadeRight'
          this.animateName = 'fadeRight'
          this.show = true
        },
        fadeLeft () {
          this.message = 'fadeLeft'
          this.animateName = 'fadeLeft'
          this.show = true
        },
        fadeLeftBig () {
          this.message = 'fadeLeftBig'
          this.animateName = 'fadeLeftBig',
          this.show = true
        },
        fadeUpBig () {
          this.message = 'fadeUpBig'
          this.animateName = 'fadeUpBig'
          this.show = true
        },
        rotate () {
          this.message = 'rotate'
          this.animateName = 'rotate'
          this.show = true
        },
        rotateDownLeft () {
          this.message = 'rotateDownLeft'
          this.animateName = 'rotateDownLeft'
          this.show = true
        },
        rotateDownRight () {
          this.message = 'rotateDownRight'
          this.animateName = 'rotateDownRight'
          this.show = true
        },
        rotateUpLeft () {
          this.message = 'rotateUpLeft'
          this.animateName = 'rotateUpLeft'
          this.show = true
        },
        bounce () {
          this.message = 'bounce'
          this.animateName = 'bounce'
          this.show = true
        },
        bounceDown () {
          this.message = 'bounceDown'
          this.animateName = 'bounceDown'
          this.show = true
        },
        bounceLeft () {
          this.message = 'bounceLeft'
          this.animateName = 'bounceLeft'
          this.show = true
        },
        bounceRight () {
          this.message = 'bounceRight'
          this.animateName = 'bounceRight'
          this.show = true
        },
        bounceUp () {
          this.message = 'bounceUp'
          this.animateName = 'bounceUp'
          this.show = true
        },
        slideDown () {
          this.message = 'slideDown'
          this.animateName = 'slideDown'
          this.show = true
        },
        slideUp () {
          this.message = 'slideUp'
          this.animateName = 'slideUp'
          this.show = true
        },
        slideLeft () {
          this.message = 'slideLeft'
          this.animateName = 'slideLeft'
          this.show = true
        },
        slideRight () {
          this.message = 'slideRight'
          this.animateName = 'slideRight'
          this.show = true
        },
        zoom () {
          this.message = 'zoom'
          this.animateName = 'zoom'
          this.show = true
        },
        zoomDown () {
          this.message = 'zoomDown'
          this.animateName = 'zoomDown'
          this.show = true
        },
        zoomLeft () {
          this.message = 'zoomLeft'
          this.animateName = 'zoomLeft'
          this.show = true
        },
        zoomRight () {
          this.message = 'zoomRight'
          this.animateName = 'zoomRight'
          this.show = true
        },
        zoomUp () {
          this.message = 'zoomUp'
          this.animateName = 'zoomUp'
          this.show = true
        }
      }
    }
 </script>

```
:::

<k-info mode="flat" title="使用方法">
  直接将上述过渡动画名称赋给transition组件的name属性
</k-info>