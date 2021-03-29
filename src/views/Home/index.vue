<template>
  <div class="home-component">
    <Sidebar />

    <div v-if="GET_PRODUCT.length" class="product-wrapper">
      <ProductCard
        v-for="(item, index) in GET_PRODUCT"
        :key="index"
        customClass="custom-class-card-holder"
      >
        <div class="image">
          <router-link to="/products" class="inherit-style wrapper-image">
            <img
              class="inherit-style image-card-component"
              alt="Modern Bathroom Set"
              :src="item.image_url"
            />
          </router-link>
        </div>
        <h2 class="chakra-text css-1mujpit">{{ item.title }}</h2>
        <div class="css-1o2ui0u">
          <p class="chakra-text css-1v9wznn">From:</p>
          <p class="chakra-text css-mgwhu5">NGN&nbsp;{{ item.price }}</p>
        </div>
        <div class="button-custom">
          <ButtonComponent
            id="show-modal"
            customName="modal-open"
            eventNameToEmit="open"
            @open="handleModalOpen"
            customClass="btn-background"
          >
            Add to Cart
          </ButtonComponent>
        </div>
      </ProductCard>
    </div>

    <!-- this part is the skelecton loader for bad network -->
    <div v-else class="loading-card-holder">{{ GET_RESPONSE_ERROR }}</div>
  </div>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import ButtonComponent from "../../components/button/index";
import ProductCard from "../../components/productCard/index";
import Sidebar from "../../components/sidebarCart/index";
import {
  GET_PRODUCT,
  GET_CURRENCY,
  GET_PRODUCTS_ACTIONS,
  GET_CURRENCY_ACTIONS,
} from "./vuex-module/index.types";

import { GET_RESPONSE_ERROR } from "../../store/index.types";
import { GET_MODAL_STATE, SET_MODAL_STATE } from "../../components/modalDialogue/vuex-module/index.types";

export default {
  name: "HomePageComponent",
  data() {
    return {
      currencyList: [],
    };
  },
  components: {
    ButtonComponent,
    ProductCard,
    Sidebar,
  },
  computed: {
    ...mapGetters([
      GET_RESPONSE_ERROR,
      GET_PRODUCT,
      GET_CURRENCY,
      GET_MODAL_STATE
    ]),
  },
  methods: {
    ...mapActions([GET_PRODUCTS_ACTIONS, GET_CURRENCY_ACTIONS]),
    ...mapMutations([SET_MODAL_STATE]),
    handleModalOpen(e) {
      if (e.name === "modal-open") {
        this[SET_MODAL_STATE](true);
      }
    },
  },
  async mounted() {
    // this.currencyList = await this[GET_CURRENCY_ACTIONS]();
    await this[GET_PRODUCTS_ACTIONS]("USD");
    if (this.currencyList?.length) {
    }
  },
};
</script>
