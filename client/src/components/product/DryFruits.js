import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addProductIntoCart } from "../../actions/cart";
import { Link } from "react-router-dom";

const DryFruits = ({ product, addProductIntoCart, cart }) => {
  const [show, setShow] = useState(0);

  const sendIntoCart = (data) => {
    const productSend = {
      product_name: data.item,
      product_id: data.id,
      qty: 1,
      price: data.price,
      url: data.url,
      weight: data.quantity,
    };

    // console.log(productSend);
    addProductIntoCart(productSend);
  };

  return (
    <div>
      <nav className='nav sales-header'>
        <div className='nav-link disabled'>Dry Fruits</div>
      </nav>
      <Vege>
        <div className='section-main d-flex  justify-content-around align-items-center'>
          {product &&
            product.map((pro) => (
              <React.Fragment key={pro.id}>
                <div
                  className='card section-product'
                  style={{ position: "relative" }}
                >
                  <img
                    className='card-img-top image'
                    src={pro.url}
                    alt={pro.item}
                    onMouseOver={() => {
                      setShow(pro.id);
                    }}
                    onMouseOut={() => {
                      setShow(false);
                    }}
                  />
                  <div
                    style={
                      show === pro.id ? { height: "100%" } : { height: "0" }
                    }
                    onMouseOver={() => {
                      setShow(pro.id);
                    }}
                    onMouseOut={() => {
                      setShow(false);
                    }}
                    className='overlay d-flex justify-content-center align-items-center'
                  >
                    <div className='row w-100'>
                      <div className='col-12 text-light'>
                        <div className='row'>
                          <div className='col-6 text-right'>
                            <h5>Product :</h5>
                          </div>
                          <div className='col-6 text-left'>
                            <h5>{pro.item}</h5>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-6 text-right'>
                            <h5>Price :</h5>
                          </div>
                          <div className='col-6 text-left'>
                            <h5>
                              <i class='fas fa-rupee-sign'></i> {pro.price}
                            </h5>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-6 text-right'>
                            <h5>Quantity :</h5>
                          </div>
                          <div className='col-6 text-left'>
                            <h5>1 {pro.quantity}</h5>
                          </div>
                        </div>
                        <div className='row justify-content-center mt-5'>
                          <div className='col-12'>
                            {cart.find(
                              (value) =>
                                value.product_id == pro.id &&
                                value.product_name === pro.item
                            ) ? (
                              <Link
                                to='/cart'
                                className='btn  btn-primary w-100'
                              >
                                Go To Cart
                              </Link>
                            ) : (
                              <button
                                className='btn btn-primary w-100'
                                onClick={() => sendIntoCart(pro)}
                              >
                                Add To Cart
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='card-body p-0 bg-primary text-light'>
                    <h5 class='card-title'>{pro.item}</h5>
                  </div>
                </div>
              </React.Fragment>
            ))}
        </div>
      </Vege>
    </div>
  );
};

const Vege = styled.div`
  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(15, 15, 15, 0.8);
    overflow: hidden;
    width: 100%;
    height: 0;
    transition: 0.5s ease;
  }
`;

DryFruits.propTypes = {
  addProductIntoCart: PropTypes.func.isRequired,
};

export default connect(null, { addProductIntoCart })(DryFruits);
