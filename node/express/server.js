const express = require("express");
const app = express();
const port = 7001;

const User = require("./model/user.js");

app.get("/", (req, res) => {
  res.send("hello, world");
});
app.get("/user", (req, res) => {
  res.json(User);
});
app.listen(port, () => {
  console.log(`Example app is running on: ${port}`);
});
