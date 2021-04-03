<template>
  <div>
    <div>
      <ModalTemplateBase v-if="GET_MODAL_STATE">
        <div slot="header" class="btn-circle-container">
          <div class="head-main">
            <div class="btn-wrapper">
              <ButtonComponent
                customClass="btn-back"
                customName="modal-close"
                eventNameToEmit="close"
                @close="handleModalClose"
              >
                <svg
                  viewBox="0 0 256 512"
                  focusable="false"
                  role="presentation"
                  class="arrow-svg"
                >
                  <path
                    fill="currentColor"
                    d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"
                  ></path>
                </svg>
              </ButtonComponent>
            </div>
            <div class="your-cart-text">YOUR CART</div>
          </div>
          <div class="dropdown">
            <DropdownSearch customClass="custom-dropdown" />
          </div>
        </div>
        <div slot="body">
          <div v-if="GET_CART.length" class="modal-body">
            <ProductCard
              v-for="item in GET_CART"
              :key="item.quantity"
              customClass="sidebar-card-layer-contain"
            >
              <div class="title-card-main-container">
                <div class="title-card">{{ item.title }}</div>
                <span @click="closeItem(item.id)" class="close-button-x"
                  >X</span
                >
              </div>
              <div class="title-card-main-container">
                <div class="title-card"></div>
                <div class="image-container">
                  <img
                    class="card-image-card-component"
                    :alt="item.title"
                    :src="item.image_url"
                  />
                </div>
              </div>
              <div class="footer-card-main-container">
                <div class="btn-container">
                  <ButtonComponent
                    customName="add-qty"
                    eventNameToEmit="add-qty"
                  >
                    <span
                      @click="addRem({ items: item, type: 'DEC' })"
                      class="side-inner-btn"
                      >-</span
                    >
                    <span class="side-inner-btn">{{ item.quantity }}</span>
                    <span
                      @click="addRem({ items: item })"
                      class="side-inner-btn"
                      >+</span
                    >
                  </ButtonComponent>
                </div>
                <div class="price-container-main">
                  ${{ item.quantity * item.price }}
                </div>
              </div>
            </ProductCard>
          </div>
          <div v-else>SORRY YOU HAVE NOT YET ADDED ANYTHING TO CART!</div>
        </div>

        <div slot="footer" class="modal-footer-desc">
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
        </div>
      </ModalTemplateBase>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { GET_MODAL_STATE, SET_MODAL_STATE } from "./vuex-module/index.types";
import ButtonComponent from "../button/index";
import ProductCard from "../productCard/index";
import ModalTemplateBase from "./modal";
import DropdownSearch from "../dropdown/index";
import {
  GET_CART,
  REMOVE_ITEM,
  ADD_TO_CART,
} from "../../views/Home/vuex-module/index.types";

export default {
  name: "ModalComponent",
  components: {
    ButtonComponent,
    ProductCard,
    ModalTemplateBase,
    DropdownSearch,
  },
  data() {
    return {
      modalState: false,
    };
  },
  computed: {
    ...mapGetters([GET_MODAL_STATE, GET_CART]),
  },
  methods: {
    ...mapMutations([SET_MODAL_STATE, REMOVE_ITEM, ADD_TO_CART]),
    handleModalClose(e) {
      if (e.name === "modal-close") {
        this[SET_MODAL_STATE](false);
      }
    },
    closeItem(e) {
      this[REMOVE_ITEM](e);
    },
    addRem(e) {
      this[ADD_TO_CART](e);
      this.$forceUpdate();
    },
  },
  props: {
    closeModal: {
      type: Boolean,
    },
    showModal: {
      type: Boolean,
      default: false,
    }
  }
};
</script>
