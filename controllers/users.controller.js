const users = require("../models/users.model");
const path = require("path");

const getUser = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/index.html"));
};
const postUser = (req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const newUser = {
    name,
    age,
  };
  users.push(newUser);
  console.log(`My name is ${name} and I am ${age} years old`);
  console.log(users);
  res.status(201).send({
    success: true,
    data: users,
    latest_user: newUser,
  });
  // res.send(`<h1 style="color:violet; text-align:center;">My name is ${name} and I am ${age} years old</h1>`);
};

module.exports = { getUser, postUser };
