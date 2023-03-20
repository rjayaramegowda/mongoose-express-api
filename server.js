const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./router/userRouter");
require("dotenv").config();

mongoose.connect(process.env.DB_URL);

const app = express();
app.use("/", userRoute);
app.listen("4500");
