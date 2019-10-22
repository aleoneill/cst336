const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

// routes
app.get("/", function(req, res){
    res.render("index.html");
});

app.get("/cpp", function(req, res){
    res.send("This will be the C++ page");
});

app.get("/python", function(req, res){
    res.send("This will be the Python Page");
})

app.get("/swift", function(req, res){
    res.send("This will be the Swift Page");
})


// server listener
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express Server is running...");
});