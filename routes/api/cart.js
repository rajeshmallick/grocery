const express = require("express");
const router = express.Router();
const db = require("../../config/db");
const { body, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

// @route POST api/auth/add-cart
// @desc Adding a Product in Cart
// @access public
router.post(
  "/add-cart",
  [
    auth,
    [
      body("product_name", "Product Name is required").not().isEmpty(),
      body("product_id", "Product Id is required").not().isEmpty(),
      body("qty", "Quantity is required").not().isEmpty(),
      body("price", "Price is required").not().isEmpty(),
      body("url", "Url is required").not().isEmpty(),
      body("weight", "Weight is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const cartItem = { ...req.body, user_id: req.user.id };
      // Add product in cart
      const insertIntoCart = "INSERT INTO cart SET ? ";
      db.query(insertIntoCart, cartItem, (error, result, field) => {
        if (error) {
          return res.status(400).json({
            errors: [{ msg: "Couldn't added into cart! please try again" }],
          });
        } else {
          return res
            .status(200)
            .json({ msg: `${req.body.product_name} has added to cart` });
        }
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route GET api/auth/get-cart
// @desc Getting a Product in Cart
// @access public
router.get("/get-cart", auth, (req, res) => {
  try {
    // Add product in cart
    const gettingProductFromCart = `SELECT * from cart where user_id = ${req.user.id} `;
    db.query(gettingProductFromCart, (error, result, field) => {
      if (error) {
        return res.status(400).json({
          errors: [{ msg: "Couldn't added into cart! please try again" }],
        });
      } else {
        return res.json(result);
      }
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

// @route POST api/auth/qty-inc-dec
// @desc Increment and Decrement in qty of product
// @access public
router.post(
  "/qty-inc-dec",
  [
    auth,
    [
      body("qty", "qty is required").not().isEmpty(),
      body("product_id", "Product id is required").not().isEmpty(),
      body("product_name", "Product name is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Update Quantity in cart
      const updateQtyIntoCart =
        "UPDATE cart SET qty = ? WHERE user_id = ? && product_id = ? && product_name = ?";
      db.query(
        updateQtyIntoCart,
        [req.body.qty, req.user.id, req.body.product_id, req.body.product_name],
        (error, result, field) => {
          if (error) {
            return res.status(400).json({
              errors: [
                { msg: "Couldn't update quantity in cart! please try again" },
              ],
            });
          } else {
            return res.status(200).send("successful");
          }
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route POST api/auth/remove-product
// @desc remove particular product from cart
// @access public
router.post(
  "/remove-product",
  [
    auth,
    [
      body("product_id", "Product id is required").not().isEmpty(),
      body("product_name", "Product name is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Remove Product from cart
      const removeOneProductFromCart =
        "Delete FROM cart WHERE user_id = ? && product_id = ? && product_name = ?";
      db.query(
        removeOneProductFromCart,
        [req.user.id, req.body.product_id, req.body.product_name],
        (error, result, field) => {
          if (error) {
            return res.status(400).json({
              errors: [
                { msg: "Couldn't remove product from cart! please try again" },
              ],
            });
          } else {
            return res.status(200).json({
              msg: `${req.body.product_name} has been remove from cart`,
            });
          }
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route POST api/auth/remove-all-product
// @desc remove all product from user cart
// @access public
router.post("/remove-all-product", auth, async (req, res) => {
  try {
    // Remove all Product from user cart
    const removeAllProductFromCart = "Delete FROM cart WHERE user_id = ? ";
    db.query(
      removeAllProductFromCart,
      [req.user.id],
      (error, result, field) => {
        if (error) {
          return res.status(400).json({
            errors: [
              { msg: "Couldn't remove product from cart! please try again" },
            ],
          });
        } else {
          return res.status(200).json({
            msg: `All Item has been remove from cart`,
          });
        }
      }
    );
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
