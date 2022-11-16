const { collection, addDoc } = require("firebase/firestore");
const { db } = require("../database.js");

exports.addProfile = async (req, res) => {
  try {
    const body = req.body;
    if (body.role != "customer" && body.role != "seller") {
      return res.status(400).send("role doesn't exist");
    }
    // TODO check if email exists
    const users = collection(db, "users");
    await addDoc(users, {
      ...body,
    });
    console.log("profile added successfully");
    res.status(201).send(`profile added successfully`);
  } catch (error) {
    res.status(400).send("Can't set up profile");
    console.log(error);
  }
};
