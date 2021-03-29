import Vue from 'vue';
import Vuex from 'vuex';
import home from "../views/Home/vuex-module/index";
import modal from "../components/modalDialogue/vuex-module/index";
import { SET_RESPONSE_ERROR, GET_RESPONSE_ERROR } from "./index.types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    errorResp: []
  },
  getters: {
    [GET_RESPONSE_ERROR]: (state) => state.errorResp
  },
  mutations: {
    [SET_RESPONSE_ERROR](state, payload) {
      state.errorResp = payload;
    }
  },
  actions: {},
  modules: {
    home,
    modal
  }
});
