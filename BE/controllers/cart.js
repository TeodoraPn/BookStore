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

exports.getCart = async (req, res) => {
  try {
    const CartCollection = collection(db, "carts");
    const queryCarts = query(CartCollection);
    const CartsDocs = await getDocs(queryCarts);
    const carts = [];
    CartsDocs.forEach((cart) => {
      carts.push(cart.data());
    });
    return res.status(200).send(carts);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Can't view carts");
  }
};

exports.getCartByUser = async (req, res) => {
  try {
    const CartCollection = collection(db, "carts");
    const queryCarts = query(CartCollection);
    const CartsDocs = await getDocs(queryCarts);
    const carts = [];
    CartsDocs.forEach((cart) => {
      carts.push(cart.data());
    });
    const filtered = carts.filter((item) => item.email === req.params.email);
    return res.status(200).send(filtered);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Can't view carts");
  }
};

exports.addBookToCart = async (req, res) => {
  try {
    const body = req.body;
    const carts = collection(db, "carts");
    const cartsSnapshot = await getDocs(carts);
    const cart = cartsSnapshot.docs.filter(
      (item) => item.username === body.username
    );
    await addDoc(carts, {
      ...body,
    });
    console.log("book added to cart");
    return res.status(201).send(`added book to cart`);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Can't add book to cart");
  }
};
