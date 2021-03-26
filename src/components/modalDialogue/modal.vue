<template>
  <div>
    <transition name="modal">
      <dialog class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header"> default header </slot>
            </div>

            <div class="modal-body">
              <slot name="body"> default body </slot>
            </div>

            <div class="modal-footer">
              <slot name="footer">
                <div>default footer</div>
                <button class="modal-default-button" @click="$emit('close')">
                  OK
                </button>
              </slot>
            </div>
          </div>
        </div>
      </dialog>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>

<script>
export default {
  name: "ModalTemplateBase",
  props: {
    closeModal: {
      type: Boolean
    }
  }
};
</script>