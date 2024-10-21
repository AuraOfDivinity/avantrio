const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const products = require("./product.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/products", (req, res) => {
  console.log(products);
  res.json(products);
});

app.get("/cart", (req, res) => {});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
