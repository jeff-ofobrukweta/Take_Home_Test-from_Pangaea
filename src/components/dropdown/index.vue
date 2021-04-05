<template>
  <div class="dropdown">
    <button
      title="CLICK TO TOOGLE CURRENCY"
      @click="currencyOpen = !currencyOpen"
      :class="`dropbtn ${customClass}`"
    >
      <span class="currency">{{ GET_CURRENT_CURRENCY }}</span>
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
          ></path>
        </svg>
      </span>
    </button>
    <div id="myDropdown" v-show="currencyOpen" class="drop">
      <input
        type="search"
        placeholder="Search.."
        id="myInput"
        v-model="inputField"
        @input="handleSearch"
      />
      <div class="contain-list-search">
        <div
          v-for="(c, i) in currency"
          @click="changeCurrency(c)"
          :key="i"
          :title="c"
          class="drop-down-item-list"
        >
          {{ c }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import {
  GET_CURRENT_CURRENCY,
  SET_CURRENT_CURRENCY,
  GET_CURRENCY,
  GET_PRODUCTS_ACTIONS,
  SET_CURRENCY
} from "../../views/Home/vuex-module/index.types";

export default {
  name: "DropDown",
  data() {
    return {
      currencyOpen: false,
      inputField: "",
      currency: () => [],
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
      default: () => []
    },
  },
  computed: {
    ...mapGetters([GET_CURRENT_CURRENCY, GET_CURRENCY]),
  },
  methods: {
    ...mapMutations([SET_CURRENT_CURRENCY, SET_CURRENCY]),
    ...mapActions([GET_PRODUCTS_ACTIONS]),
    async changeCurrency(e) {
      // make api call to the apolo server to change the current currency
      await this[GET_PRODUCTS_ACTIONS](e);
      // change the current currency
      this.currencyOpen = false;
      this[SET_CURRENT_CURRENCY](e);
      this.inputField = "";
    },
    handleSearch() {
      if (this.inputField.length) {
        const apf = this[GET_CURRENCY].filter((e) => {
          return e.toUpperCase().includes(this.inputField.toUpperCase());
        });
        this.currency = apf.splice(0, 5);
      }
    }
  },
  mounted() {
    this.currency = this[GET_CURRENCY].splice(0, 5);
    this[SET_CURRENCY]([...this.currency, ...this[GET_CURRENCY]]);
  },
};
</script>