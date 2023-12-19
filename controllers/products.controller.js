const products = require("../models/products.model");
const path = require("path");

const getProduct = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/product.html"));
};
const postProduct = (req, res) => {
  const name = req.body.name;
  const price = Number(req.body.price);
  const newProduct = {
    name,
    price,
  };
  products.push(newProduct);
//   console.log(`My name is ${name} and I am ${age} years old`);
  console.log(newProduct);
  res.status(201).send({
    success: true,
    data: products,
    latest_user: newProduct,
  });
  // res.send(`<h1 style="color:violet; text-align:center;">My name is ${name} and I am ${age} years old</h1>`);
};

module.exports = { getProduct, postProduct };
