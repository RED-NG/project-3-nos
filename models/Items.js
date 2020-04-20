const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: { type: String, required: true },
  count: { type: Number, required: true },
  threshold: { type: Number, required: true },
  sold: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = Item = mongoose.model("item", ItemSchema);
