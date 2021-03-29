import { getQuery } from "../../../utils/apollo";
import {
  GET_PRODUCT_QUERY,
  GET_CURRENCY_QUERY
} from "../../../utils/gqlConstants";


import {
  SET_CURRENCY,
  GET_CURRENCY,
  GET_CURRENCY_ACTIONS,
  GET_PRODUCT,
  GET_PRODUCTS_ACTIONS,
  SET_PRODUCT_LIST,
  GET_PRICE,
  SET_PRICE,
  GET_ITEMS,
  SET_ITEMS,
  GET_CART,
  SET_CART,
  REMOVE_ITEM,
  ADD_TO_CART,
  NUMBER,
  REDUCE_ITEM
} from "./index.types";

import { SET_RESPONSE_ERROR } from "../../../store/index.types";

const state = {
  cartItems: [],
  productLists: [],
  currencyList: [],
  price: 0,
  noOfItems: 0
};

const getters = {
  [GET_PRODUCT]: (state) => state.productLists,
  [GET_CURRENCY]: (state) => state.currencyList,
  [GET_PRICE]: (state) => state.price,
  [GET_ITEMS]: (state) => state.noOfItems,
  [GET_CART]: (state) => state.cartItems
};

const mutations = {
  [SET_PRODUCT_LIST](state, payload) {
    state.productLists = payload;
  },
  [SET_CURRENCY](state, payload) {
    state.currencyList = payload;
  },
  [SET_PRICE](state, payload) {
    state.price += payload;
  },
  [SET_ITEMS](state, payload) {
    state.noOfItems += payload;
  },

  // use this if you want to remove an item from the list

  [REDUCE_ITEM](state, payload) {
    state.cartItems.filter(e => {
      if (e.id === payload) {
        if (e.quantity > 1) {
          const quantity = e.quantity - 1;
          return {
            ...e,
            quantity
          }

        }
      }
      return e;
    });
  },
  // use this if you want to get the number of items in cart
  [NUMBER](state) {

    const totalCartLength = state.cartItems.reducer((acc, { quantity }) => {
      return acc + quantity;
    });
    state.noOfItems = totalCartLength;
  },
  // use this mutation when you want to add to cart {id,title,image,price,1}

  [ADD_TO_CART](state, payload) {
    const stateX = state.cartItems.filter((s) => {
      if (s.id === payload.id) {
        const quantity = s.quantity + 1;
        return {
          ...s,
          quantity

        };
      }
      return s;
    });
    state.cartItems = state.cartItems.push(stateX)
  },
  // you call this set cart mutation when you want to increase cart num with id as payload

  [SET_CART](state, payload) {
    const newS = state.cartItems.filter((s) => {
      if (s.id === payload) {
        const quantity = s.quantity + 1;
        return {
          ...s,
          quantity

        };
      }
      return s;
    });
    state.cartItems = newS;
  },
  // use this when you want to remove an item completely

  [REMOVE_ITEM](state, payload) {
    const newSet = state.cartItems.filter((s) => s.id !== payload);
    state.cartItems = newSet;
  }

};

const actions = {
  [GET_PRODUCTS_ACTIONS]: async ({ commit }, payload) => {
    try {
      const { products } = await getQuery(GET_PRODUCT_QUERY(payload));
      commit(SET_PRODUCT_LIST, products, { root: true });
    } catch (err) {
      commit(SET_RESPONSE_ERROR, err, { root: true });
    }
  },
  [GET_CURRENCY_ACTIONS]: async ({ commit }) => {
    try {
      const { currency } = await getQuery(GET_CURRENCY_QUERY());
      commit(SET_CURRENCY, currency, { root: true });
    } catch (err) {
      commit(SET_RESPONSE_ERROR, err, { root: true });
    }
  }
};

export default {
  state,
  actions,
  getters,
  mutations
};
