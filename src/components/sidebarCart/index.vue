<template>
  <div class="transparent-holder">
    <ProductCard customClass="side-bar-product-card"> </ProductCard>
  </div>
</template>

<script>
import ProductCard from "../productCard/index";

export default {
  name: "ProductCard",
  components: {
    ProductCard
  },
  props: {
    customClass: {
      type: String,
      default: ""
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("./index.scss");
</style>
