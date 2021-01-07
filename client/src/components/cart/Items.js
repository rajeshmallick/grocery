import React from "react";
import { connect } from "react-redux";
import { incDecQtyIntoCart, removeItemFromCart } from "../../actions/cart";
import PropTypes from "prop-types";

const Items = ({ cartItem, incDecQtyIntoCart, removeItemFromCart }) => {
  const incQty = (data, product_id, product_name) => {
    data = { qty: data + 1, product_id, product_name };
    incDecQtyIntoCart(data);
  };

  const decQty = (data, product_id, product_name) => {
    data = { qty: data - 1, product_id, product_name };
    incDecQtyIntoCart(data);
  };
  return (
    <div className='row m-0 mt-4 item-cart'>
      <div className='col-12'>
        <div className='row border_bottom justify-content-around mx-3'>
          <div className='col-1 text-center font-weight-bold'>Items</div>
          <div className='col-3 text-center font-weight-bold'>
            Item Name
          </div>
          <div className='col-2 text-center font-weight-bold'>Rate</div>
          <div className='col-3 text-center font-weight-bold'>Qty</div>
          <div className='col-1 text-center font-weight-bold'>Remove</div>
          <div className='col-2 text-center font-weight-bold'>Total</div>
        </div>
        {cartItem.map((cart) => (
          <div className='row border_bottom justify-content-around mx-3 mt-4'>
            <div className='col-1 text-center'>
              <img className='img-cart' src={cart.url} alt='' />
            </div>
            <div className='col-3 text-center items-col-text'>
              {cart.product_name}
            </div>
            <div className='col-2 text-center items-col-text'>
              <i class='fas fa-rupee-sign'></i> {cart.price}
            </div>
            <div className='col-3 text-center mx-auto'>
              <div className='row justify-content-center align-items-center'>
                <div className='col-1 cart-incDec'>
                  <button
                    className='w-100'
                    onClick={() =>
                      decQty(cart.qty, cart.product_id, cart.product_name)
                    }
                    disabled={cart.qty <= 1 ? true : false}
                    style={cart.qty === 1 ? { cursor: "not-allowed" } : {}}
                  >
                    -
                  </button>
                </div>
                <div className='col-2 cart-incDec'>
                  <button className='w-100'>
                    {cart.qty} {cart.weight}
                  </button>
                </div>
                <div className='col-1 cart-incDec'>
                  <button
                    className='w-100'
                    onClick={() =>
                      incQty(cart.qty, cart.product_id, cart.product_name)
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className='col-1 text-center'>
              <i
                className='fas fa-trash'
                style={{ color: "#ff6666", cursor: "pointer" }}
                onMouseOut={(e) => (e.target.style.color = "#ff6666")}
                onMouseOver={(e) => (e.target.style.color = "red")}
                onClick={() =>
                  removeItemFromCart({
                    product_id: cart.product_id,
                    product_name: cart.product_name,
                  })
                }
              ></i>
            </div>
            <div className='col-2 text-center items-col-text'>
              <i class='fas fa-rupee-sign'></i> {cart.qty * cart.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Items.propTypes = {
  incDecQtyIntoCart: PropTypes.func.isRequired,
  removeItemFromCart: PropTypes.func.isRequired,
};

export default connect(null, { incDecQtyIntoCart, removeItemFromCart })(Items);
