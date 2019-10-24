const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

// routes
app.get("/", function(req, res){
    res.render("index.html");
});

app.get("/cpp.html", function(req, res){
    res.render("cpp.html");
});

app.get("/python.html", function(req, res){
    res.render("python.html");
})

app.get("/swift.html", function(req, res){
    res.render("swift.html");
})


// server listener
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express Server is running...");
});