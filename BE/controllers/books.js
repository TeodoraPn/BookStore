const { collection, addDoc, getDocs, query } = require("firebase/firestore");
const { db } = require("../database.js");

// add book
exports.addBook = async (req, res) => {
  try {
    const body = req.body;
    const books = collection(db, "books");
    await addDoc(books, {
      ...body,
    });
    console.log("book added");
    res.status(201).send(`added book`);
  } catch (error) {
    res.status(400).send("Can't add book");
    console.log(error);
  }
};

// get all books
exports.getBooks = async (req, res) => {
  try {
    const booksCollection = collection(db, "books");
    const queryBooks = query(booksCollection);
    const booksDocs = await getDocs(queryBooks);
    const books = [];
    booksDocs.forEach((book) => {
      books.push(book.data());
    });
    res.status(200).send(books);
  } catch (error) {
    res.status(400).send("Can't view books");
    console.log(error);
  }
};
