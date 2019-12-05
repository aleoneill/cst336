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
            res.render('index.ejs', {
                title: 'Lab 10',
                authors: results
            });
        });

    connection.end();

} );

app.get("/new", function(req, res){

    const connection = mysql.createConnection({
        host: 'er7lx9km02rjyf3n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'jqu8aralz7x2d3f8',
        password: 'j33452dd1h4o9zil',
        database: 'upz1sirhhzk031zd'
    });

    connection.connect();

    connection.query(`SELECT MAX(id) as largest FROM author`,
        function(error, results) {
            if (error) throw error;

            console.log(results);
            console.log(results[0].largest);
            res.render('new.ejs', {
                title: 'Lab 10',
                unique_id: results[0].largest + 1
            });
        });
});

app.post("/new", function(req, res){

    const connection = mysql.createConnection({
        host: 'er7lx9km02rjyf3n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'jqu8aralz7x2d3f8',
        password: 'j33452dd1h4o9zil',
        database: 'upz1sirhhzk031zd'
    });

    connection.connect();

    console.log(req.body);
    var body = req.body;

    connection.query(`INSERT INTO author VALUES (${body.id}, '${body.FirstName}', '${body.LastName}', '${body.dob}', '${body.dod}')`,
        function(error, results) {
            if (error) throw error;

            console.log(body);
            res.render('new.ejs', {
                title: 'Lab 10',
                unique_id: parseInt(body.id, 10) + 1
            });
        });
});


// running server
app.listen("3000", "0.0.0.0", function() {
    console.log("Express Server is Running...")
});