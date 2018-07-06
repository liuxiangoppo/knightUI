<template>
  <transition name="fade">
    <div class="modal" v-show="isActive" :style="{zIndex: modalWrapperZindex}">
      <div class="modal-content">
        <div class="modal-background" v-if="backdrop" @click="backdropClose" :style="{zIndex: modalBgZIndex}"></div>
            <transition name="fade"><!--:name="transition"-->
                <div class="modal-card radius5" :style="modalStyle" v-show="isActive">
                    <header class="modal-card-head" v-if="showHeader">
                        <slot name="header">
                            <p class="modal-card-title">{{ title }}</p>
                            <span class="close" @click="handleCancel">×</span>
                        </slot>
                    </header>
                    <section class="modal-card-body">
                        <slot></slot>
                    </section>
                    <footer class="modal-card-foot" v-if="showFooter">
                        <slot name="footer">
                            <a class="button" @click="handleCancel" v-if="showCancel">{{ cancelText }}</a>
                            <a class="button is-primary" :class="{'is-loading': isLoading}" @click="handleOk" v-if="showOk">{{ okText }}</a>
                        </slot>
                    </footer>
                </div>
            </transition>
        </div>
      </div>
  </transition>
</template>

<script>
import ModalMixin from './ModalMixin'
export default {
  name: 'k-modal',
  mixins: [ModalMixin]
}
</script>
