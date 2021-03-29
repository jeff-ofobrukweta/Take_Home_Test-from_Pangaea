import { SET_MODAL_STATE, GET_MODAL_STATE } from "./index.types";

const state = {
  showModal: false
};

const getters = {
  [GET_MODAL_STATE]: (state) => state.showModal
};

const mutations = {
  [SET_MODAL_STATE](state, payload) {
    state.showModal = payload;
  }

};

const actions = {};

export default {
  state,
  actions,
  getters,
  mutations
};