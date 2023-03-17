// getting-started.js
const mongoose = require("mongoose");
const Users = require("./model/Users");
require("dotenv").config();

mongoose.connect(process.env.DB_URL);

getAllUsers();

async function getAllUsers() {
  console.log("Loading data..");

  const result = await Users.find({}, { name: 1, email: 1, _id: 0 });
  console.log("result = ", result);
}
