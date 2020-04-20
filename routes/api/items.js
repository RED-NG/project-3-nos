const express = require("express");
const Router = express.Router();

const Item = require("../../models/Items.js");

//Get all items
Router.get("/", (req, res) => {
  Item.find().then((items) => res.json(items));
});

//Create a new item
Router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    count: req.body.count,
    threshold: req.body.threshold,
    sold: req.body.sold,
  });

  newItem.save().then((item) => res.json(item));
});

Router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = Router;
