// require in data from other files

var matches = require('../data/matches.js');

// build a route where I can view all possible matches then include these api routes in my server file

module.exports = function(app) {

    app.get('/api/matches', function (req,res) {
        res.json(matches);

    });

// find a way for user input to be put into the same format as other saved objects [found in matches.js file]so it can be compared
// determine which existing object has the closest answers to the same questions the user was asked , consider it the best match and store it into an object
// once I determine the who the best match is I need to display the name and photo of the best match to the user

    app.post('/api/matches', function(req, res){

        // server will respond to a user's survey result
        // then compare those results against every user in the database.
        // tt will then calculate the difference between each of the numbers and the user's numbers.
        // it will then choose the user with the least differences as the best match.
        // in the case of multiple users with the same result it will choose the first match.
        // after the comparison test, it will push the user to the database.

        // object to store the closest match
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        // take the result of the user's survey POST and parse it.
        var userData 	= req.body;
        var userName 	= userData.name;
        var userPhoto 	= userData.photo;
        var userScores 	= userData.scores;

        // this variable will calculate the difference between the user's scores and the scores of
        // each user in the database
        var totalDifference = 0;

        // loop through all the match possibilities in the database.
        for  (var i=0; i< matches.length; i++) {

            console.log(matches[i].name);
            totalDifference = 0;

            // loop through all the scores of each match
            for (var j=0; j< matches[i].scores[j]; j++){

                // calculate the difference between the scores and sum them into the totalDifference
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(matches[i].scores[j]));

                // if the sum of differences is less then the differences of the current best match
                if (totalDifference <= bestMatch.friendDifference){

                    // Reset the bestMatch to be the new match.
                    bestMatch.name = matches[i].name;
                    bestMatch.photo = matches[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }

        // save the user's data to the database (this has to happen AFTER the check. otherwise,
        // the database will always return that the user is the user's best friend).
        matches.push(userData);

        // return a JSON object with the user's bestMatch that will go back to front end of the application [HTML].
        res.json(bestMatch);

    });

};



