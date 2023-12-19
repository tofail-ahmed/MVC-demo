const express = require("express");
const { getProduct, postProduct } = require("../controllers/products.controller");
const router = express.Router();
router.get("/products", getProduct);
router.post("/products", postProduct);

module.exports = router;
