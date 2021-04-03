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
  SET_ITEMS,
  GET_CART,
  REMOVE_ITEM,
  ADD_TO_CART,
  REDUCE_ITEM,
  GET_CART_LENGTH
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
  [GET_CART]: (state) => state.cartItems,
  [GET_CART_LENGTH]: (state) => state.noOfItems,
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


  [ADD_TO_CART](state, payload) {
    let pushTest = false;
    let storeCartAmt = 0;
    let quantityCount = 0;
    const DEC = "DEC";

    switch (payload.type) {
      case DEC:
        // if the current quantity value of item in cart is equal to 1 delete that obj from the array
        state.cartItems.forEach((item, j) => {
          if (item.id === payload.items.id) {
            quantityCount = payload.items.quantity;
            if (quantityCount <= 1) {
              const newCartState = state.cartItems.filter((s) => s.id !== item.id);
              state.cartItems = newCartState;
            }
            else if (quantityCount > 1) {
              let num = { ...item, quantity: item?.quantity - 1 };
              console.log("> after num", num);
              state.cartItems[j] = num;
            }
          }
        });
        // get the len of items in the cart
        state.cartItems.forEach((cartItem) => {
          storeCartAmt += cartItem.quantity;
        });

        state.noOfItems = storeCartAmt;
        // if the current quantity value in the cart is > 1 , reduce the quantity by 1
        // compute the new length of the cart
        break;

      default:
        state.cartItems.forEach((a, i) => {
          if (a.id === payload.items.id) {
            const num = { ...a, quantity: a.quantity + 1 };
            state.cartItems[i] = num;
            pushTest = true;
          }
        });

        if (!pushTest) state.cartItems.push(payload.items);

        // get the len of items in the cart
        state.cartItems.forEach((cartItem) => {
          storeCartAmt += cartItem.quantity;
        });

        state.noOfItems = storeCartAmt;

    }
  },
  // you call this set cart mutation when you want to increase cart num with id as payload


  // use this when you want to remove an item completely

  [REMOVE_ITEM](state, payload) {
    const newSet = state.cartItems.filter((s) => s.id !== payload);
    state.cartItems = newSet;
    let storeCartAmt = 0;
    state.cartItems.forEach((cartItem) => {
      storeCartAmt += cartItem.quantity;
    });

    state.noOfItems = storeCartAmt;
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
