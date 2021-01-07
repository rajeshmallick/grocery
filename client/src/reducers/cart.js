import { GETTING_PRODUCT_FROM_CART, CLEAR_CART } from "../actions/Types";

const initialState = [];

export default function cart(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GETTING_PRODUCT_FROM_CART:
      return payload;
    case CLEAR_CART:
      return initialState;
    default:
      return state;
  }
}
