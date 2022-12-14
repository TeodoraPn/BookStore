const express = require("express");
const router = express.Router();
const {
  addBook,
  getBooks,
  deleteBook,
  //   updateBook,
} = require("../controllers/books.js");

router.post("/books", addBook);
router.get("/books", getBooks);
router.delete("/books/:title", deleteBook);
// router.patch("/books/:title", updateBook);

module.exports = router;
