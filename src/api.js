const express = require("express");
const serverless = require("serverless-http");
var mysql = require('mysql');


const app = express();
const router = express.Router();
var con = mysql.createConnection({
    host: "https://remotemysql.com:3306",
    user: "Gv2iWTPYAv",
    password: "2ppWYezbEP",
    database: "Gv2iWTPYAv"
});
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM countries", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
});
router.get("/", (req, res) => {
    con.query("SELECT * FROM countries", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
  res.json({
    hello: "hi!"
  });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);