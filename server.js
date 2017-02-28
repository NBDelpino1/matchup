var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require("path");

var PORT = process.env.PORT || 8081;




// create application/x-www-form-urlencoded parser
// Front and back end communication "translate everything into same language so to speak" (modified to include app.use and from false to true)
app.use(bodyParser.urlencoded({ extended: true }));

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }));

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));


//=======================testing area=======================
// app.use(express.static(__dirname + "/public"));
app.use(express.static('app/public'));
//=======================testing area=======================





// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }));






//=======================testing area=======================

// app.use(express.static('public'));


//=======================testing area=======================




//include api routes
require('./app/routing/api-routes.js')(app);

// include html route and pass in app from this file into module exports function inside html.routes.js
require('./app/routing/html-routes.js')(app);

app.listen(PORT, function(){
    console.log("App Listening on PORT: " + PORT);
});
