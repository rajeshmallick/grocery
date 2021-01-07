import { GETTING_PRODUCT_FROM_CART } from "./Types";
import axios from "axios";
import { setAlert } from "./alert";
import { url } from "../global/config";

// add Product into cart
export const addProductIntoCart = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify(data);

  try {
    const res = await axios.post(`${url}/api/cart/add-cart`, body, config);
    dispatch(setAlert(res.data.msg, "success"));
    dispatch(getProductFromCart());
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(errors);
    dispatch(setAlert(errors[0].msg, "danger"));
  }
};

// getting Product From cart
export const getProductFromCart = () => async (dispatch) => {
  try {
    const res = await axios.get(`${url}/api/cart/get-cart`);
    dispatch({ type: GETTING_PRODUCT_FROM_CART, payload: res.data });
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(errors);
    dispatch(setAlert(errors[0].msg, "danger"));
  }
};

// Increment and Decrement in quantity
export const incDecQtyIntoCart = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify(data);

  try {
    const res = await axios.post(`${url}/api/cart/qty-inc-dec`, body, config);
    dispatch(getProductFromCart());
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(errors);
    dispatch(setAlert(errors[0].msg, "danger"));
  }
};

// Remove Item from cart
export const removeItemFromCart = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify(data);

  try {
    const res = await axios.post(
      `${url}/api/cart/remove-product`,
      body,
      config
    );
    dispatch(setAlert(res.data.msg, "danger"));
    dispatch(getProductFromCart());
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(errors);
    dispatch(setAlert(errors[0].msg, "danger"));
  }
};

// remove all Product From user cart
export const removeAllProductFromCart = () => async (dispatch) => {
  try {
    const res = await axios.post(`${url}/api/cart/remove-all-product`);
    dispatch(setAlert(res.data.msg, "danger"));
    dispatch(getProductFromCart());
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(errors);
    dispatch(setAlert(errors[0].msg, "danger"));
  }
};
