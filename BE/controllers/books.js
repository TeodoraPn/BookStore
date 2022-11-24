const {
  collection,
  addDoc,
  getDocs,
  query,
  where,
} = require("firebase/firestore");
const { db, firebaseApp } = require("../database.js");

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
    console.log(error);
    res.status(400).send("Can't add book");
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
    console.log(error);
    res.status(400).send("Can't view books");
  }
};

// delete book by title
// exports.deleteBook = async (req, res) => {
//   const { title } = req.params.title;
//   const books = collection(db, "books").where("title", "==", title);
//   console.log(books);
// };
