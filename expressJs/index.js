var express = require("express");
var bodyParser = require("body-parser");
var multer = require("multer");
// var multer = multer();
const res = require("express/lib/response");
var storage = multer.diskStorage({
  destination: function(req, file, callBack) {
    callBack(null, "./upload");
  },
  filename: function(req, file, callBack) {
    callBack(null, file.originalname);
  },
});
var upload = multer({ storage: storage }).single("newFile");
app = express();
app.use(bodyParser.json());
app.use(express.static("public"));
//application level middleware
app.use((req,res,next)=>{
  console.log("This is application level middleware");
  next();
})
app.use("/new",(req,res,next)=>{
  console.log("This is from route middleware");
  next();
})
app.get("/", function (req, res) {
  res.send("Hello Xpress");
});
app.put("/about", function (req, res) {
  res.send("About page");
});
app.post("/contact", function (req, res) {
  res.send("Contact page");
});
app.delete("/blog", function (req, res) {
  res.send("Blog page");
});
app.get("/new", function (req, res) {
  res.append("name", "Tasin");
  res.status(404);
  res.end("Hello Tasin");
});
app.get("/red", function (req, res) {
  res.redirect("http://localhost:8000/");
});
app.get("/down", function (req, res) {
  res.download("../fsModule/index.html");
});
app.get("/cok", function (req, res) {
  res.cookie("name", "Udoy");
  res.cookie("Roll", "4");
  res.end();
});
app.get("/clcok", function (req, res) {
  res.clearCookie("name", "Udoy");
  res.clearCookie("Roll", "4");
  res.end();
});
app.get("/uqry", function (req, res) {
  let name = req.query.name;
  let roll = req.query.roll;
  res.end(name + " " + roll);
});
app.get("/headReq", function (req, res) {
  let name = req.header("name");
  let roll = req.header("roll");
  res.end(name + " " + roll);
});
app.post("/postR", function (req, res) {
  res.send("This is post request");
});
app.post("/postUR", function (req, res) {
  let name = req.query.name;
  let roll = req.query.roll;
  res.send(name + " " + roll);
});
app.post("/postheadReq", function (req, res) {
  let name = req.header("name");
  let roll = req.header("roll");
  res.send(name + " " + roll);
});
app.post("/postJson", function (req, res) {
  //body-parser module require
  let jsonData = req.body;
  let jsonString = JSON.stringify(jsonData);
  res.send(jsonString);
});
app.post("/postMulPrtData", function (req, res) {
  let jsonData = req.body;
  let jsonString = JSON.stringify(jsonData);
  res.send(jsonString);
});
app.post("/postUpFile", function (req, res) {
  upload(req, res, function (error) {
    if (error) {
      res.send(error);
    } else {
      res.send("File Uploaded");
    }
  });
});

app.listen(8000, function () {
  console.log("Server running");
});
