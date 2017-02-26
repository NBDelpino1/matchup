// include path package that will deliver pages using Express JS
var path = require("path");

// build routes that will tell the router what page to deliver based on the url
// put this inside a modules export function so that I can later include these paths inside my server

// in export pass in parameter app (express) then when user hits survey url deliver survey.html. Next include html route file in server.js

module.exports = function (app) {

    // create path to survey
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
    // create path to home page
    app.use(function(req,res) {
        res.sendFile(path.join(__dirname + "/../public/index.html"));
    });

};