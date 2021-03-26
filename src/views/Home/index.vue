<template>
  <div class="home-component">
    <ButtonComponent />
  </div>
</template>

<style lang="scss" scoped>
@import url("./index.scss");
</style>

<script>
import ButtonComponent from "../../components/button/index";

export default {
  name: "HomePageComponent",
  components: {
    ButtonComponent
  }
};
</script>
