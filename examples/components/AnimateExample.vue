<template>
    <div class="animate_bg" v-show="show" @click.self="close">
        <transition :name="animateName">
            <div id="animateExample" v-show="show">
                {{ message }}
            </div>
        </transition>
    </div>
</template>

<script>
export default {
  name: 'animate-example',
  props: {
    message: {
      type: String,
      default: ''
    },
    animateName: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close () {
      console.log(this.animateName)
      this.$emit('update:show', false)
    }
  }
}
</script>

<style lang="less" scoped>
    .animate_bg {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        background: rgba(0, 0, 0, .3);
    }
    #animateExample {
        width: 300px;
        height: 300px;

        border: 1px solid #ddd;
        text-align: center;
        line-height: 300px;

        position: absolute;
        left:50%;
        top:50%;
        margin-left:-150px;
        margin-top:-150px;

        background: #fff;

        z-index: 10000;
        font-size: 20px;
    }
</style>
