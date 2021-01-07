import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Items from "./Items";
import SubTotal from "./SubTotal";
import { connect } from "react-redux";
import { getProductFromCart } from "../../actions/cart";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Cart = ({ cart, getProductFromCart }) => {
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    getProductFromCart();
  }, [getProductFromCart]);

  useEffect(() => setCartItem(cart && cart), [cart]);

  return (
    <CartStyle>
      <div className='cart-home'>
        {cartItem.length >= 1 ? (
          <>
            <div className='row m-0 mt-4 header-cart justify-content-center'>
              <div className='col-6 text-center'>
                <h2 className='header-text'>My Cart</h2>
              </div>
            </div>

            <Items cartItem={cartItem && cartItem} />
            <SubTotal cartItem={cartItem && cartItem} />
          </>
        ) : (
          <>
            <div className='row mt-5 justify-content-center align-items-center'>
              <div className='col-6 text-center'>
                <img
                  src='./assets/images/cart/emptyCart.png'
                  style={{ width: "100%", height: "100%" }}
                  alt=''
                />
              </div>
            </div>
            <div className='row mt-5 justify-content-center align-items-center'>
              <div className='col-6 text-center'>
                <Link to='/product' className='btn btn-primary'>
                  Go to product page
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </CartStyle>
  );
};

const CartStyle = styled.div`
  .header-text {
    color: rgb(61, 56, 56);
    font-weight: bold;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
`;

Cart.propTypes = {
  cart: PropTypes.array,
  getProductFromCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, {
  getProductFromCart,
})(Cart);
