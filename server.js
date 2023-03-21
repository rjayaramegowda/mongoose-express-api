// getting-started.js
const mongoose = require("mongoose");
const Users = require("./model/Users");
require("dotenv").config();

mongoose.connect(process.env.DB_URL);

//CRUD
createUser();
getAllUsers();
updateUser();
deleteUser();

async function createUser() {
  try {
    const user = await Users.create({
      id: 77,
      name: "Ravichandran",
      username: "Bret",
      email: "rav@google.com",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    });
    console.log("createUser = ", user);
  } catch (e) {
    console.log(e);
  }
}

async function getAllUsers() {
  console.log("Loading data..");

  const result = await Users.find(
    { name: "Ravi" },
    { name: 1, email: 1, _id: 0 }
  );
  console.log("getAllUsers = ", result);
}

async function updateUser() {
  console.log("Loading data..");

  const result = await Users.findOneAndUpdate(
    { name: "Ravi" },
    { email: "ravichandran@google.com" }
  );
  console.log("updateUser = ", result);
}

async function deleteUser() {
  const user = Users.findOneAndDelete({ id: 77 });
  console.log("Deleted ", user);
}
