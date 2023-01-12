const express = require("express");
const router = express.Router();
const {
  getCart,
  addBookToCart,
  getCartByUser,
} = require("../controllers/cart.js");

router.get("/carts", getCart);
router.get("/carts/:email", getCartByUser);
router.post("/carts", addBookToCart);

// TODO: add a functionality for a cart: add books in cart

module.exports = router;
