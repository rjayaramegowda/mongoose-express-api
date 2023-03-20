const express = require("express");
const router = express.Router();
const Users = require("../model/Users");

router.get("/", async function (req, res) {
  try {
    const result = await Users.find({}, { name: 1, email: 1, _id: 0 });
    res.json(result);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
