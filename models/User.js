// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt-nodejs");
// const Schema = mongoose.Schema;

// const usersSchema = new Schema({
//   firstname: {
//     type: String,
//     required: true,
//   },
//   lastname: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     unique: true,
//     required: true,
//   },
//   username: {
//     type: String,
//     unique: true,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now(),
//   },
// });

// usersSchema.methods.generateHash = function (password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
// };

// usersSchema.methods.validPassword = function (password, encrypted) {
//   return bcrypt.compareSync(password, encrypted);
// };

// const User = mongoose.model("User", usersSchema);

// module.exports = User;
