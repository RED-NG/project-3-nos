const express = require("express");
const Router = express.Router();

const Item = require("../../models/Items");
const Day = require("../../models/ItemsSold");

//ITEM API
//Get all items
Router.get("/", (req, res) => {
  Item.find().then((items) => res.json(items));
});

//Create a new item
Router.post("/", (req, res) => {
  console.log(`api post route`, JSON.stringify(req.body));
  const newItem = new Item({
    name: req.body.name,
    count: req.body.count,
    threshold: req.body.threshold,
  });

  //Created item is saved
  newItem.save((err, item) => {
    console.log(item);
    console.log(`This is the err`, err);
    res.json(item);
  });
});

//Delete item based on id
Router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

//DAY API
//Get all days
Router.get("/day", (req, res) => {
  Day.find().then((day) => res.json(day));
});

//Create new day
Router.post("/day", (req, res) => {
  console.log(`api post route`, JSON.stringify(req.body));
  const newDay = new Day({
    name: req.body.name,
    sold: req.body.sold,
    date: req.body.date,
  });

  //Created day is saved
  newDay.save((err, day) => {
    console.log(day);
    console.log(`This is the err`, err);
    res.json(day);
  });
});

//Delete day based on id
Router.delete("/day/:id", (req, res) => {
  Day.findById(req.params.id)
    .then((day) => day.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = Router;
