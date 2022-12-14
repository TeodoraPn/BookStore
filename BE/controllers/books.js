const {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
  getDoc,
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
    return res.status(201).send(`added book`);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Can't add book");
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
    return res.status(200).send(books);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Can't view books");
  }
};

// delete book by title
exports.deleteBook = async (req, res) => {
  try {
    const title = req.params.title;
    const books = await collection(db, "books");
    const book = query(books, where("title", "==", title));
    const bookDoc = await getDocs(book);
    bookDoc.forEach((doc) => {
      deleteDoc(doc.ref);
    });
    return res
      .status(200)
      .send(`book with title ${title} deleted successfully`);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Can't delete book");
  }
};

// update book by title
// exports.updateBook = async (req, res) => {
//   try {
//     const body = req.body;
//     const title = req.params.title;
//     const books = await collection(db, "books");
//     const book = query(books, where("title", "==", title));
//     const bookDoc = await getDocs(book);
//   } catch (error) {
//     console.log(error);
//     return res.status(400).send("Can't update book");
//   }
// };
