const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemsSold = new Schema({
  name: { type: String, required: true },
  sold: { type: Number, required: true },
  date: { type: String, required: true },
});

module.exports = Day = mongoose.model("days", ItemsSold);
