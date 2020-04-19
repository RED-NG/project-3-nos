const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const ItemsSchema = new Schema({
  name: { type: String, required: true },
  count: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = Item = mongoose.model("items", ItemsSchema);
