const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));
const knockknock = require("knock-knock-jokes");

// routes
app.get("/", function(req, res){
    res.render("index.html", {joke: knockknock()});
});

app.get("/cpp", function(req, res){
    res.render("cpp.html");
});

app.get("/python.html", function(req, res){
    res.render("python.html");
});

app.get("/swift.html", function(req, res){
    res.render("swift.html");
});


// server listener
// Use for testing
// app.listen("8081", "127.0.0.1", function(){
//     console.log("Express Server is running...");
// });

// Uncomment when done and ready to push to Heroku
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express Server is running...");
});