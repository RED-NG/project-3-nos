const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");

const app = express();

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb://user:codingbootcamp1@ds031978.mlab.com:31978/heroku_ngv7n3dm",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.log(err));

app.use("/api/items", items);

app.listen(PORT, function () {
  console.log(`Server listening on http://localhost:${PORT}!`);
});
