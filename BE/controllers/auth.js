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
const { SECRETKEY } = require("../config/index.js");

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
    const usernameAlreadyExists = allUsers.filter((user) => {
      return user.username === body.username;
    });
    if (usernameAlreadyExists.length !== 0) {
      return res.status(400).send("username already exists");
    }
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

exports.signin = async (req, res) => {
  const body = req.body;
  // get all users from db
  const usersCollection = collection(db, "users");
  const queryUsers = query(usersCollection);
  const usersDocs = await getDocs(queryUsers);
  const allUsers = [];
  usersDocs.forEach((user) => {
    allUsers.push(user.data());
  });
  const user = allUsers.filter((user) => {
    return user.gmail === body.gmail;
  });
  // email doesn't exist
  if (user.length === 0) {
    return res.status(400).send("email doesn't exists");
  }

  //TODO role not correct -> forbidden

  const comparePassword = await bcrypt.compare(body.password, user[0].password);
  if (comparePassword) {
    const token = jwt.sign(
      {
        role: user.role,
        username: user.username,
        email: user.email,
      },
      SECRETKEY,
      { expiresIn: "1 day" }
    );

    const result = {
      username: user.username,
      email: user.email,
      role: user.role,
      token: `Bearer ${token}`,
      expiresIn: 24,
    };

    return res.status(200).json({
      ...result,
      message: "you are successfully logged in",
    });
  } else {
    return res.status(403).send("the password is incorrect");
  }
};
