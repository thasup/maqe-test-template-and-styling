// Require modules
const express = require("express");
const ejs = require("ejs");
const posts = require("./data/posts.json");
const authors = require("./data/authors.json");

// Start up an instance of app
const app = express();

// Setup EJS
app.set("view engine", "ejs");

// Add middleware
app.use(express.static("public"));

// Defines the port number
const port = 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// GET route for root
app.get("/", (req, res) => {
  res.render("home", {
    ejsPost: JSON.parse(JSON.stringify(posts)),
    ejsAuthor: JSON.parse(JSON.stringify(authors)),
  });
});
