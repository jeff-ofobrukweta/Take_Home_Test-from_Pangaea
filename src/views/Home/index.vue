<template>
  <div class="home-component">
    <ProductCard
      v-for="item in [1, 2, 3, 4, 5]"
      :key="item"
      customClass="custom-class-card-holder"
    >
      <router-link to="/products" class="inherit-style wrapper-image">
        <img
          class="inherit-style image-card-component"
          alt="Modern Bathroom Set"
          src="https://cdn.shopify.com/s/files/1/2960/5204/products/unnamed_1024x1024.png?v=1588260405"
        />
      </router-link>
      <h2 class="chakra-text css-1mujpit">Modern Bathroom Set</h2>
      <div class="css-1o2ui0u">
        <p class="chakra-text css-1v9wznn">From:</p>
        <p class="chakra-text css-mgwhu5">NGN&nbsp;20,000.00</p>
      </div>
      <div class="button-custom">
        <ButtonComponent customClass="btn-background"> Add to Cart </ButtonComponent>
      </div>
    </ProductCard>
  </div>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>

<script>
import ButtonComponent from "../../components/button/index";
import ProductCard from "../../components/productCard/index";

export default {
  name: "HomePageComponent",
  components: {
    ButtonComponent,
    ProductCard,
  },
};
</script>
