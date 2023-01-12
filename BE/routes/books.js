const express = require("express");
const router = express.Router();
const {
  addBook,
  getBooks,
  deleteBook,
} = require("../controllers/books.js");

router.post("/books", addBook);
router.get("/books", getBooks);
router.delete("/books/:title", deleteBook);

// TODO: add a functionality for a cart: add books in cart 

module.exports = router;
