import {
  DRY_FRUITS,
  VEGANDFRUITS,
  DAIRY_PRODUCTS,
  PULSES,
  CLEAR_PRODUCTS,
} from "../actions/Types";

const initialState = {
  dryFruits: [],
  vegFruits: [],
  dairyProduct: [],
  pulses: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case DRY_FRUITS:
      return { ...state, dryFruits: payload };
    case VEGANDFRUITS:
      return { ...state, vegFruits: payload };
    case DAIRY_PRODUCTS:
      return { ...state, dairyProduct: payload };
    case PULSES:
      return { ...state, pulses: payload };
    case CLEAR_PRODUCTS:
      return initialState;
    default:
      return state;
  }
}
