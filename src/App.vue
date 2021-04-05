<template>
  <div id="app">
    <router-view />
    <div class="loading"></div>
  </div>
</template>


<style lang="scss">
@import "./assets/scss/main.scss";
</style>

<script>

export default {
  name: "ApplicationMain",
  data() {
    return {};
  },
  components: {
  }
};
</script>
