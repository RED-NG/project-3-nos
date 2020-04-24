const express = require("express");
const Router = express.Router();

const bcryptjs = require("bcryptjs");

const User = require("../../models/User");

Router.get("/", (req, res) => {
  res.send("hello world");
});

//USER API
//Create a new user
Router.post("/", (req, res) => {
  const { name, email, password } = req.body;

//   if (!name || !email || !password) {
//     return res
//       .status(400)
//       .json({ msg: "Please fill in all the required fields!" });
//   }

  User.findOne({ email }).then((user) => {
    if (user)
      return res.status(400).json({
        msg:
          "This email is already in use, please try again with a different email",
      });

    const createUser = new User({ name, email, password });

    bcryptjs.genSalt(10, (err, salt) => {
      bcryptjs.hash(createUser.password, salt, (err, hash) => {
        if (err) throw err;
        createUser.password = hash;
        createUser.save().then((user) => {
          res.json({
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
            },
          });
        });
      });
    });
  });
});

module.exports = Router;
