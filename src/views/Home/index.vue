<template>
  <div>
    <HeaderNavbar />
    <div class="contain-product-360">
    <div class="all-products-360 product-wrapper">
      <div class="css-mafqmj">
        <h1 class="chakra-heading css-6zdeqh">All Products</h1>
        <p class="chakra-text css-12eueq9">A 360° look at Lumin</p>
      </div>
      <div class="chakra-select__wrapper css-42b2qy"></div>
    </div>
    </div>
    <div class="home-component">
      <Sidebar />
      <div v-if="GET_PRODUCT.length" class="product-wrapper wrapper-p-main">
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
            <p class="chakra-text css-mgwhu5">{{GET_CURRENT_CURRENCY}}&nbsp;{{ item.price }}</p>
          </div>
          <div class="button-custom">
            <ButtonComponent
              typed="add"
              :keyId="index"
              customName="modal-open"
              eventNameToEmit="open"
              :item="item"
              @open="handleModalOpen"
              customClass="btn-background"
            >
              Add to Cart
            </ButtonComponent>
          </div>
        </ProductCard>
      </div>
      <!-- this part is the aolloIsLoading  -->
       <div v-if="false" class="product-wrapper wrapper-p-main">
         <ProductCard
          v-for="(item, index) in [1,2,3,4]"
          :key="index"
          customClass="custom-class-card-loader-holder">
          <div class="image">
            image here
          </div>
          <h2 class="chakra-text css-1mujpit"></h2>
          <div class="css-1o2ui0u">
            price here
          </div>
          <div class="button-custom">
            buton here
          </div>
          </ProductCard>
       </div>


       <!-- this section is for empty product in rhe all product scenerio -->
       <div v-if="false" class="product-wrapper wrapper-p-main">
         <div class="empty-product-show-all">
           There are no product to showcase currently...
         </div>
       </div>

      <!-- this part is the netweork  error for bad network -->
      <div v-else class="loading-card-holder red-anger">
        {{ GET_RESPONSE_ERROR }}
      </div>
    </div>
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
import HeaderNavbar from "../../components/headerComponent/index";
import {
  GET_PRODUCT,
  GET_CURRENCY,
  GET_PRODUCTS_ACTIONS,
  GET_CURRENCY_ACTIONS,
  GET_CART,
  ADD_TO_CART,
  SET_CURRENT_CURRENCY,
  GET_CURRENT_CURRENCY,
} from "./vuex-module/index.types";

import { GET_RESPONSE_ERROR } from "../../store/index.types";
import {
  GET_MODAL_STATE,
  SET_MODAL_STATE,
} from "../../components/modalDialogue/vuex-module/index.types";

export default {
  name: "HomePageComponent",
  data() {
    return {
    };
  },
  components: {
    ButtonComponent,
    ProductCard,
    Sidebar,
    HeaderNavbar
  },
  computed: {
    ...mapGetters([
      GET_RESPONSE_ERROR,
      GET_PRODUCT,
      GET_CURRENCY,
      GET_MODAL_STATE,
      GET_CART,
      GET_CURRENT_CURRENCY,
    ]),
  },
  methods: {
    ...mapActions([GET_PRODUCTS_ACTIONS, GET_CURRENCY_ACTIONS]),
    ...mapMutations([SET_MODAL_STATE, ADD_TO_CART, SET_CURRENT_CURRENCY]),
    handleModalOpen(e) {
      const { name } = e;
      if (name === "modal-open") this[SET_MODAL_STATE](true);
      this[ADD_TO_CART](e);
    },
  },
  async mounted() {
    await this[GET_CURRENCY_ACTIONS]();
    const currency = this[GET_CURRENCY][0];
    this[SET_CURRENT_CURRENCY](currency);
    await this[GET_PRODUCTS_ACTIONS](this[GET_CURRENT_CURRENCY]);
  },
};
</script>
