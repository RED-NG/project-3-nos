const config = require("config");
const jwtoken = require("jsonwebtoken");

function auth(req, res, next) {
  const checkToken = req.header("x-auth-token");

  if (!checkToken) {
    res.status(401).json({ msg: "You are not authorized for access." });
  }

  try {
    const verifiedToken = jwtoken.verify(checkToken, config.get("jwtSecret"));
    req.user = verifiedToken;
    next();
  } catch (e) {
    res.status(400).json({ msg: "Sorry, this token is invalid." });
  }
}

module.exports = auth;
