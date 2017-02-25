// include path package that will deliver pages using Express
var path = require("path");

// build routes that will tell the router what page to deliver based on the url
// put this inside a modules export function so that I can later include these paths inside my server

// in export pass in parameter app (express) then when user hits survey link deliver survey.html
module.export = function (app) {
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(_dirname + "/../public/survey.html"))
    });
}