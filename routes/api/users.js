const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const db = require("../../config/db");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

// @route POST api/users
// @desc Register User
// @access public
router.post(
  "/",
  [
    body("name", "Name is required").not().isEmpty(),
    body("email", "Please include a valid email").isEmail(),
    body(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
    body("mobile", "Please enter 10 digit mobile number").isLength({ min: 10 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let { name, email, password, mobile } = req.body;

    try {
      // Check user if exist
      let userFind = `SELECT email FROM users WHERE email=?`;

      db.query(userFind, [email], async (error, results, fields) => {
        if (results.length > 0) {
          return res
            .status(400)
            .json({ errors: [{ msg: "User already exists" }] });
        } else {
          // Encrypt Password

          password = await bcrypt.hash(password, 10);

          // Register user
          const user = `INSERT INTO users SET ? `;

          let usersData = { name, email, password, mobile };

          db.query(user, usersData, (error, results, fields) => {
            if (error) {
              return res.status(400).json({ errors: [{ msg: error.message }] });
            } else {
              // Getting id of user
              let getId = "SELECT id FROM users WHERE email=?";

              db.query(getId, [email], (error, results, fields) => {
                if (error) {
                  return res
                    .status(400)
                    .json({ errors: [{ msg: error.message }] });
                } else {
                  // Return jsonwebtoken
                  const payload = {
                    user: {
                      id: results[0].id,
                    },
                  };

                  jwt.sign(
                    payload,
                    config.get("jwtSecret"),
                    { expiresIn: 36000 },
                    (err, token) => {
                      if (err) throw err;
                      return res.json({ token });
                    }
                  );
                }
              });
            }
          });
        }
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
