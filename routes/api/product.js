const express = require("express");
const router = express.Router();
const db = require("../../config/db");
const auth = require("../../middleware/auth");

// @route GET api/produts/dry-fruits
// @des Getting Dry fruits
// @access Public
router.get("/dry-fruits", auth, (req, res) => {
  try {
    const dryFruits = "SELECT id,item,quantity,url,price FROM dry_fruits";
    db.query(dryFruits, (error, results, fields) => {
      if (error) {
        return res.status(400).json({ errors: [{ msg: error.message }] });
      } else {
        return res.json(results);
      }
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Sever Error");
  }
});

// @route GET api/produts/vegetables-fruits
// @des Getting Vegetables fruits
// @access Public
router.get("/vegetables-fruits", auth, (req, res) => {
  try {
    const vegFruits =
      "SELECT id,item,quantity,url,price FROM vegetables_fruits";
    db.query(vegFruits, (error, results, fields) => {
      if (error) {
        return res.status(400).json({ errors: [{ msg: error.message }] });
      } else {
        return res.json(results);
      }
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Sever Error");
  }
});

// @route GET api/produts/pulses
// @des Getting pulses
// @access Public
router.get("/pulses", auth, (req, res) => {
  try {
    const pulses = "SELECT id,item,quantity,url,price FROM pulses";
    db.query(pulses, (error, results, fields) => {
      if (error) {
        return res.status(400).json({ errors: [{ msg: error.message }] });
      } else {
        return res.json(results);
      }
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Sever Error");
  }
});

// @route GET api/produts/dairy-products
// @des Getting Dairy Products
// @access Public
router.get("/dairy-products", auth, (req, res) => {
  try {
    const pulses = "SELECT id,item,quantity,url,price FROM dairy_products";
    db.query(pulses, (error, results, fields) => {
      if (error) {
        return res.status(400).json({ errors: [{ msg: error.message }] });
      } else {
        return res.json(results);
      }
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Sever Error");
  }
});

module.exports = router;
