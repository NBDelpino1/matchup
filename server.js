var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

// include html route file and pass in app from this file into module exports function inside html.routes.js
require("./app/routing/html-routes.js")(app);

app.listen(PORT, function(){
    console.log("App Listening on PORT: " + PORT);
})
