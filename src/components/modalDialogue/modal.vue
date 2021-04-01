<template>
  <div>
    <transition name="modal">
      <dialog class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header"> default header </slot>
            </div>

            <div v-if="GET_CART.length" class="modal-body">
              <ProductCard v-for="(items,index) in GET_CART" :key="index">
                <div class="main">
                  <div class="item-left"><div class="title">
                    {{item_title}}
                    <div class="price">
                      {{item_title}}
                    </div>
                    </div></div>
                  <div class="item-right"></div>

                </div>
              </ProductCard >
              
            </div>
            <div v-else>SORRY YOU HAVE NOT YET ADDED ANYTHING TO CART!</div>

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

<style lang="scss">
@import "./index.scss";
</style>

<script>
import { mapGetters, mapMutations } from "vuex";
import { GET_CART } from "../../views/Home/vuex-module/index.types";
import ButtonComponent from "../button/index";
import ProductCard from "../productCard/index";
import { GET_MODAL_STATE, SET_MODAL_STATE } from "./vuex-module/index.types";

export default {
  name: "ModalTemplateBase",
  components: {
    ButtonComponent,
    ProductCard,
  },
  computed: {
    ...mapGetters([GET_CART, GET_MODAL_STATE]),
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