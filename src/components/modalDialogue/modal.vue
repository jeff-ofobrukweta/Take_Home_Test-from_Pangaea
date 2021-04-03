<template>
  <div>
    <transition name="modal">
      <dialog class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header"></slot>
            </div>
            <slot name="body"></slot>
            <div class="modal-footer">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </dialog>
    </transition>
  </div>
</template>

<style lang="scss">
@import "./index.scss";
</style>

<script>
export default {
  name: "ModalTemplateBase",
  components: {},
  computed: {},
};
</script>