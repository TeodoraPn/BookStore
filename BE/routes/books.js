const express = require("express");
const router = express.Router();
const { addBook, getBooks } = require("../controllers/books.js");

router.post("/books", addBook);
router.get("/books", getBooks);
// router.delete("/books/:title", deleteBook);

module.exports = router;
