import { DRY_FRUITS, VEGANDFRUITS, DAIRY_PRODUCTS, PULSES } from "./Types";
import { url } from "../global/config";
import axios from "axios";

//  Getting DRY_FRUITS
export const getDryFruits = () => async (dispatch) => {
  try {
    const res = await axios.get(`${url}/api/products/dry-fruits`);
    dispatch({
      type: DRY_FRUITS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response.data.errors);
  }
};

//  Getting Dairy products
export const getDairyProducts = () => async (dispatch) => {
  try {
    const res = await axios.get(`${url}/api/products/dairy-products`);
    dispatch({
      type: DAIRY_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response.data.errors);
  }
};

//  Getting Vegetables and Fruits
export const getVegetablesAndFruits = () => async (dispatch) => {
  try {
    const res = await axios.get(`${url}/api/products/vegetables-fruits`);
    dispatch({
      type: VEGANDFRUITS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response.data.errors);
  }
};

//  Getting Pulses
export const getPulses = () => async (dispatch) => {
  try {
    const res = await axios.get(`${url}/api/products/pulses`);
    dispatch({
      type: PULSES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response.data.errors);
  }
};
