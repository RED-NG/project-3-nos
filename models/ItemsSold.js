const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const day = new Schema({
  name: { type: String, required: true },
  sold: { type: Number, required: true },
  date: { type: Date, required: true },
  profit: { type: Number, required: true },
});

module.exports = Day = mongoose.model("days", day);
