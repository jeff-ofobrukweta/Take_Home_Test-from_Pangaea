<template>
  <div class="header-main-navigation-container">
    <div class="navigate-holder">
      <nav class="header-main navigation-container">
        <div class="header-main-left">
          <div class="image_container">
            <img :src="LuminLogo" class="image_logo" alt="LOGO" />
          </div>
        </div>
        <div class="header-main-right">
          <div @click="handleModal" class="cart-container">
            <span class="account">Account</span>
            <img :src="Cart" alt="shoping cart" class="cart-icon" />
            <span class="cart-number">{{ GET_CART_LENGTH }}</span>
          </div>
          <div class="select-container"></div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import {
  NUMBER,
  GET_CART_LENGTH,
} from "../../views/Home/vuex-module/index.types";
import {
  GET_MODAL_STATE,
  SET_MODAL_STATE,
} from "../modalDialogue/vuex-module/index.types";

import Cart from "../../assets/images/icons/cart.png";
import LuminLogo from "../../assets/images/lumin_logo.png";

export default {
  name: "HeaderComponent",
  data() {
    return {
      Cart,
      LuminLogo,
    };
  },
  components: {},
  computed: {
    ...mapGetters([GET_MODAL_STATE, GET_CART_LENGTH]),
  },
  methods: {
    ...mapMutations([SET_MODAL_STATE, NUMBER]),
    handleModal() {
      this[SET_MODAL_STATE](!this[GET_MODAL_STATE]);
    },
  },

  props: {},
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
