<template>
  <div id="app">
    <HeaderNavbar />
    <!-- {{ allProducts.products[0].image_url }} -->
    <router-view />
  </div>
</template>


<style lang="scss">
@import "./assets/scss/main.scss";
</style>

<script>
import gql from "graphql-tag";
import HeaderNavbar from "./components/headerComponent/index";

export default {
  name: "ApplicationMain",
  data() {
    return {
      products: [],
    };
  },
  components: {
    HeaderNavbar,
  },
  mounted() {
    console.log(">>>All products>>>", this.products);
  },
  apollo: {
    products: gql`
      query {
        products {
          image_url
          title
          price(currency: ${"GTQ"})
        }
      }
    `,
  },
};
</script>
