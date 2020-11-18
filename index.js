const express = require("express");

const app = express();
const { dosomefun } = require("./app");

const bodyParser = require("body-parser");
const path = require("path");
const port = 3200;

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/", async (req, res) => {
  console.log(req.body.user);
  let result = await dosomefun(req.body.user);
  res.json({
    posts: result[0],
    followers: result[1],
    following: result[2],
  });
});

app.listen(port, () => console.log(`listening at ${port}`));
