import { SET_PRODUT_LIST } from "./index.types";

const state = {
  productLists: []
};

const getters = {
  getProductLists: (state) => state.productLists
};

const mutations = {
  SET_PRODUT_LIST(state, payload) {
    state.productLists = payload;
  }
};

const actions = {
  REGISTER: ({ commit }, payload) => {
    commit(SET_PRODUT_LIST, null, { root: true });
    // make request here ...

  }
}

export default {
  state,
  actions,
  getters,
  mutations
};