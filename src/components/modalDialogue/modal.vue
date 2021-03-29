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
                <ButtonComponent
                  customName="modal-close"
                  eventNameToEmit="close"
                  @close="handleModalClose"
                  customClass="modal-default-button"
                >
                  OK
                </ButtonComponent>
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
import { mapGetters, mapMutations } from "vuex";
import ButtonComponent from "../button/index";
import { GET_MODAL_STATE, SET_MODAL_STATE } from "./vuex-module/index.types";

export default {
  name: "ModalTemplateBase",
  components: {
    ButtonComponent,
  },
  computed: {
    ...mapGetters([GET_MODAL_STATE]),
  },
  methods: {
    ...mapMutations([SET_MODAL_STATE]),
    handleModalClose(e) {
      if (e.name === "modal-close") {
        this[SET_MODAL_STATE](false);
      }
    },
  },
  props: {
    closeModal: {
      type: Boolean,
    },
  },
};
</script>