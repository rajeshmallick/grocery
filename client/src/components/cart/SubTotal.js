import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { removeAllProductFromCart } from "../../actions/cart";
import PropTypes from "prop-types";
import { tax } from "../../global/config";

const SubTotal = ({ removeAllProductFromCart, cartItem }) => {
  const [subTotal, setSubTotal] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);

  useEffect(() => {
    setSubTotal(
      cartItem.reduce((sum, cart) => {
        return (sum = sum + cart.price * cart.qty);
      }, 0)
    );
  }, [cartItem]);

  useEffect(() => {
    if (subTotal > 0) {
      setTaxAmount(((subTotal * tax) / 100).toFixed(2));
    }
  }, [subTotal]);

  return (
    <div className='row subTotal-main justify-content-center'>
      <div className='col-3 d-flex flex-column'>
        <div className='row subTotal-row'>
          <div className='col-12'>
            <button
              className='subTotal-button py-1 mb-2'
              onClick={removeAllProductFromCart}
            >
              CLEAR CART
            </button>
          </div>
        </div>
        <div className='row subTotal-row'>
          <div className='col-12'>
            <div className='row'>
              <div className='col-6'>SUBTOTAL :</div>
              <div className='col-5'>
                <i class='fas fa-rupee-sign'></i> {subTotal}
              </div>
            </div>
          </div>
        </div>
        <div className='row subTotal-row'>
          <div className='col-12'>
            <div className='row'>
              <div className='col-6'>TAX :</div>
              <div className='col-5'>
                <i class='fas fa-rupee-sign'></i> {taxAmount}
              </div>
            </div>
          </div>
        </div>
        <div className='row subTotal-row'>
          <div className='col-12'>
            <div className='row'>
              <div className='col-6'>TOTAL :</div>
              <div className='col-5'>
                <i class='fas fa-rupee-sign'></i>{" "}
                {parseInt(subTotal) + parseFloat(taxAmount)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SubTotal.propTypes = {
  removeAllProductFromCart: PropTypes.func.isRequired,
};

export default connect(null, { removeAllProductFromCart })(SubTotal);
