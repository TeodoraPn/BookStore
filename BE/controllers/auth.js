const {
  collection,
  addDoc,
  getDocs,
  query,
  where,
} = require("firebase/firestore");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { db, firebaseApp } = require("../database.js");

exports.signup = async (req, res) => {
  try {
    const body = req.body;
    // get all users from db
    const usersCollection = collection(db, "users");
    const queryUsers = query(usersCollection);
    const usersDocs = await getDocs(queryUsers);
    const allUsers = [];
    usersDocs.forEach((user) => {
      allUsers.push(user.data());
    });
    // TODO validate if the username already exists
    const usernameAlreadyExists = allUsers.filter((user) => {
      return user.username === body.username;
    });
    if (usernameAlreadyExists.length !== 0) {
      return res.status(400).send("username already exists");
    }
    // TODO validate if the email already exists
    const emailAlreadyExists = allUsers.filter((user) => {
      return user.gmail === body.gmail;
    });
    if (emailAlreadyExists.length !== 0) {
      return res.status(400).send("email already exists");
    }

    if (body.password !== body.confirmPassword) {
      return res.status(400).send("passwords don't match");
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const users = collection(db, "users");
    await addDoc(users, {
      role: body.role,
      username: body.username,
      gmail: body.gmail,
      password: hashedPassword,
    });
    console.log("account created");
    res.status(201).send(`account created`);
  } catch (error) {
    console.log(error);
    return res.status(400).send("can't create account");
  }
};
