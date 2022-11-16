const express = require("express");
const router = express.Router();
const { addProfile } = require("../controllers/profile.js");

// the user can set the profile for the account
router.post("/setProfile", addProfile);

module.exports = router;
