const express = require("express");
const Router = express.Router();
const config = require("config");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");

Router.get("/", (req, res) => {
  res.send("hello world");
});

//USER API
//Create a new user
Router.post("/", (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  if (!firstname || !lastname || !email || !password) {
    return res
      .status(400)
      .json({ msg: "Please fill in all the required fields!" });
  }

  User.findOne({ email }).then((user) => {
    if (user)
      return res.status(400).json({
        msg:
          "This email is already in use, please try again with a different email",
      });

    const createUser = new User({ firstname, lastname, email, password });

    bcryptjs.genSalt(10, (err, salt) => {
      bcryptjs.hash(createUser.password, salt, (err, hash) => {
        if (err) throw err;
        createUser.password = hash;
        createUser.save().then((user) => {
          jwt.sign(
            { id: user.id },
            config.get("jwtSecret"),
            { expiresIn: 172800 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  firstname: user.firstname,
                  lastname: user.lastname,
                  email: user.email,
                },
              });
            }
          );
        });
      });
    });
  });
});

module.exports = Router;
