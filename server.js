const express = require("express");

const app = express();

app.get("/", function(req, res){
  res.send("<h1>Welcome, Server Started.</h1>");
});

app.get("/contact", function(req, res){
  res.send("you can contact me at <h4>iamshivprakash04@gmail.com</h4>")
});

app.get("/about", function(req, res){
  res.send("I love to code and play basketball.")
});

app.get("/hobbies", function(req, res){
  res.send("Playing Basketball and watching cricket.")
});

app.listen(3000, function () {
  console.log("server started at port 3000.");

});
