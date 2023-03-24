const express = require("express");
const http = require("http");
const app = express();

const connectDB = require("./mdb/mdb");
connectDB();

const path = require("path");
const empCollection = require("./model/model");
const { listeners } = require("process");

const temp_path = path.join(__dirname, "../template/views");
require("./mdb/mdb");
app.set("view engine", "hbs");
app.set("views", temp_path);
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/empdata", async (req, res) => {
  console.log(req.body.name);
  res.send(req.body.name);
});

port = 5000;
var listener = app.listen(port, function () {
  console.log(
    "Listening on port " + "http://localhost:" + listener.address().port
  ); //Listening on port 8888
});
