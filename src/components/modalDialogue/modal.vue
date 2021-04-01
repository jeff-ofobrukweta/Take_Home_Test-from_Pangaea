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
              <!-- <ProductCard v-for="(item,index) in GET_CART" :key="index">
                <div class="main">
                  <div class="item-left"><div class="title">
                    {{item.title}}
                    <div class="price">
                      {{item.price}}
                    </div>
                    <div class="image">
                      <img :src="item.image" :alt="item.title"/>
                    </div>
                    </div></div>
                  <div class="item-right"></div>

                </div>
              </ProductCard > -->

              <ProductCard
                v-for="(item, index) in GET_CART"
                :key="index"
                customClass="sidebar-card-layer-contain"
              >
                <div class="title-card-main-container">
                  <div class="title-card">Dark Circle Defense</div>
                  <span class="close-button-x">X</span>
                </div>
                <div class="title-card-main-container">
                  <div class="title-card"></div>
                  <div class="image-container">
                    <img
                      class="card-image-card-component"
                      :alt="item.title"
                      :src="item.image"
                    />
                  </div>
                </div>
                <div class="footer-card-main-container">
                  <div class="btn-container">
                    <ButtonComponent
                      customName="add-qty"
                      eventNameToEmit="add-qty"
                    >
                      <span class="side-inner-btn">-</span>
                      <span class="side-inner-btn">10</span>
                      <span class="side-inner-btn">+</span>
                    </ButtonComponent>
                  </div>
                  <div class="price-container-main">$12300</div>
                </div>
              </ProductCard>
            </div>
            <div v-else>SORRY YOU HAVE NOT YET ADDED ANYTHING TO CART!</div>

            <div class="modal-footer">
              <slot name="footer">
                <!-- <div>default footer</div> -->
                <div class="btn-container-main-footer">
                  <ButtonComponent
                    customName="modal-close"
                    eventNameToEmit="close"
                    @close="handleModalClose"
                    customClass="modal-default-button-subscription"
                  >
                   MAKE THIS A SUBSCRIPTION (SAVE 20%)
                  </ButtonComponent>
                  <ButtonComponent
                    customName="modal-close"
                    eventNameToEmit="close"
                    @close="handleModalClose"
                    customClass="modal-default-button-checkout"
                  >
                    PROCEED TO CHECKOUT
                  </ButtonComponent>
                </div>
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