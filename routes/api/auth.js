const express = require("express");
const Router = express.Router();
const config = require("config");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
const User = require("../../models/User");

//AUTH API
//Get user
Router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user));
});

//Authenticate the user
Router.post("/", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ msg: "Please fill in all the required fields!" });
  }

  User.findOne({ email }).then((user) => {
    if (!user)
      return res.status(400).json({
        msg: "There is no record of this user.",
      });

    bcryptjs.compare(password, user.password).then((isMatch) => {
      if (!isMatch)
        return res
          .status(400)
          .json({ msg: "That password was incorrect. Please try again." });
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

module.exports = Router;
