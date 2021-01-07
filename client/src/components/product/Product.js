import React, { useEffect, useState } from "react";
import DairyProduct from "./DairyProduct";
import DryFruits from "./DryFruits";
import Pulses from "./Pulses";
import Vegetable from "./Vegetables";
import { connect } from "react-redux";
import { getProductFromCart } from "../../actions/cart";

import {
  getDryFruits,
  getDairyProducts,
  getPulses,
  getVegetablesAndFruits,
} from "../../actions/products";
import PropTypes from "prop-types";

const Product = ({
  products,
  getVegetablesAndFruits,
  getDairyProducts,
  getDryFruits,
  getPulses,
  cart,
  getProductFromCart,
}) => {
  const [getProducts, setGetProducts] = useState({});
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    getProductFromCart();
  }, [getProductFromCart]);

  useEffect(() => setCartItem(cart && cart), [cart]);

  useEffect(() => {
    getDairyProducts();
  }, [getDryFruits, getDairyProducts, getPulses, getVegetablesAndFruits]);
  useEffect(() => {
    getDryFruits();
  }, [getDryFruits]);
  useEffect(() => {
    getPulses();
  }, [getPulses]);
  useEffect(() => {
    getVegetablesAndFruits();
  }, [getVegetablesAndFruits]);

  useEffect(() => {
    products && setGetProducts(products);
  }, [products]);

  return (
    <div>
      <DryFruits
        product={getProducts.dryFruits && getProducts.dryFruits}
        cart={cartItem && cartItem}
      />
      <DairyProduct
        product={getProducts.dairyProduct && getProducts.dairyProduct}
        cart={cartItem && cartItem}
      />
      <Pulses
        product={getProducts.pulses && getProducts.pulses}
        cart={cartItem && cartItem}
      />
      <Vegetable
        product={getProducts.vegFruits && getProducts.vegFruits}
        cart={cartItem && cartItem}
      />
    </div>
  );
};

Product.propTypes = {
  getDryFruits: PropTypes.func.isRequired,
  product: PropTypes.object,
  getDairyProducts: PropTypes.func.isRequired,
  getPulses: PropTypes.func.isRequired,
  getVegetablesAndFruits: PropTypes.func.isRequired,
  cart: PropTypes.array,
  getProductFromCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.products,
  cart: state.cart,
});

export default connect(mapStateToProps, {
  getDairyProducts,
  getDryFruits,
  getPulses,
  getVegetablesAndFruits,
  getProductFromCart,
})(Product);
