let mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ignou_grocery",
});

connection.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
    process.exit(1);
  }

  console.log("Connected to the MySQL server.");
});

module.exports = connection;
