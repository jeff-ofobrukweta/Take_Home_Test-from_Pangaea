<template>
  <div id="app">
    <HeaderNavbar />
    <router-view />
  </div>
</template>

<script>
import HeaderNavbar from "./components/headerComponent/index";

export default {
  name: "ApplicationMain",
  components: {
    HeaderNavbar
  }
};
</script>
