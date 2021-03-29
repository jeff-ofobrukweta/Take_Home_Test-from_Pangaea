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

import HeaderNavbar from "./components/headerComponent/index";

export default {
  name: "ApplicationMain",
  data() {
    return {};
  },
  components: {
    HeaderNavbar
  }
};
</script>
