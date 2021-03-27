import Vue from 'vue';
import Vuex from 'vuex';
import home from "../views/Home/vuex-module/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productList:[]
  },
  mutations: {

  },
  actions: {
  },
  modules: {
    home
  }
});
