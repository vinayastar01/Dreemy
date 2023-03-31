const express = require("express");
const http = require("http");
const app = express();

const connectDB = require("./mdb/mdb");
connectDB();

const path = require("path");
const empCollection = require("./model/model");
const event = require("./model/model");


const { listeners } = require("process");
const { equal } = require("assert");
const { response } = require("express");

const temp_path = path.join(__dirname, "../template/views");
require("./mdb/mdb");
app.set("view engine", "hbs");
app.set("views", temp_path);
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/registration1", (req, res) => {
  res.render("registration1");
});
app.get("/registration2", (req, res) => {
  res.render("registration2");
});
app.get("/event", (req, res) => {
  res.render("event");
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.post("/empdata", async (req, res) => {
  try{
    const password = req.body.password;
    const cpassword = req .body.cpassword;
    if(password===cpassword){
      const empData = new empCollection({
        name: req.body.name,
        email:req.body.email,
        password:req.body.password,
        cpassword:req.body.cpassword,
        usertype:req.body.type,
      });
  
      const postData = await empData.save();
      res.redirect("/login");
    }else
    {
      res.send("password are not matching");
    }
  }catch(error){
    res.send(error);
  }
})

app.get("/login",(req,res) => {
  res.render("login");
});
app.post("/login",async(req,res)=>{
  try{
    const email = req.body.email;
    const password = req.body.password;

    const getEmail= await empCollection.findOne({email: email});
    if(getEmail == null){
      res.send("this email is not registered")
    }
    
     if(getEmail.password===password)
     {
      res.render('home');
    }
    else{
      res.send('password are not matching...');
    }
  }catch(error){
    console.log(error);
  }
});

port = 5000;
var listener = app.listen(port, function () {
  console.log(
    "Listening on port " + "http://localhost:" + listener.address().port
  ); //Listening on port 8888
});
