const express = require("express");
const connection = require("./config/db");
const cors = require("cors");

const app = express();

// Cors policy
app.use(cors());

// Init Middleware
app.use(express.json({ extended: false }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/", (req, res) => res.send("API Running"));

// Define Route
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/products", require("./routes/api/product"));
app.use("/api/cart", require("./routes/api/cart"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
