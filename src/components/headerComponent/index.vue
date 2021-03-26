<template>
  <nav class="header-main navigation-container">
    <div class="header-main-left">1</div>
    <div class="header-main-right">
      <div class="cart-container">
        <img :src="Cart" alt="shoping cart" class="cart-icon"/>
        <span class="cart-number">0</span>
      </div>
      <div class="select-container"></div>
    </div>
  </nav>
</template>

<script>
import Cart from "../../assets/images/icons/cart.png";

export default {
  name: "HeaderComponent",
  data() {
    return {
      Cart,
    };
  },
  components: {},

  props: {},
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
