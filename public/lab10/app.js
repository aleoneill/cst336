const express = require("express");
const app = express();
const mysql = require('mysql');

// you can optionally use handlebars
app.set("view engine", "ejs");
app.use(express.static("public")); //access images, css, js

// enable use of json
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.get("/", function(req, res){

    res.render("index");

} );

app.get('/author', function(req, res, next) {

    // Get a query string value for filter
    const nameFilter = req.query.name;

    const connection = mysql.createConnection({
        host: 'er7lx9km02rjyf3n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'jqu8aralz7x2d3f8',
        password: 'j33452dd1h4o9zil',
        database: 'upz1sirhhzk031zd'
    });

    connection.connect();

    connection.query(`SELECT * from author`,
        function(error, results, fields) {
            if (error) throw error;

            console.log("Hello");
            console.log(results);
        // ../public/lab10/views/
            res.render('index.ejs', {
                title: 'Lab 10',
                authors: results
            });
        });

    connection.end();

});


// running server
app.listen("3000", "0.0.0.0", function() {
    console.log("Express Server is Running...")
});