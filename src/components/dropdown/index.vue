<template>
  <div class="dropdown">
    <button
      @click="currencyOpen = !currencyOpen"
      :class="`dropbtn ${customClass}`"
    >
      <span class="currency">USD</span>
      <span class="dropdown-icon">
        <svg
          viewBox="0 0 256 512"
          focusable="false"
          role="presentation"
          class="dropdown-svg"
        >
          <path
            fill="currentColor"
            d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"
          ></path></svg
      ></span>
    </button>
    <div id="myDropdown" v-show="currencyOpen" class="drop">
      <input
        type="text"
        placeholder="Search.."
        id="myInput"
        @keyup="handleSearch"
      />
      <div class="contain-list-search">
        <div class="drop-down-item-list">About</div>
        <div class="drop-down-item-list">Base</div>
        <div class="drop-down-item-list">Blog</div>
        <div class="drop-down-item-list">Contact</div>
        <div class="drop-down-item-list">Custom</div>
        <div class="drop-down-item-list">Tools</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>

<script>
export default {
  name: "DropDown",
  data() {
    return {
      currencyOpen: false
    };
  },
  components: {},
  props: {
    customClass: {
      type: String,
      default: "",
    },
    listItems: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleSearch() {},
    showCurrencyList() {},
  },
};
</script>