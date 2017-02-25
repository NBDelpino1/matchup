// Require in data from other files

var matches = require('../data/matches.js');

// Build a route where I can view all possible matches then include these api routes in my server file

module.exports = function(app) {

    app.get('/api/matches', function (req,res) {
        res.json(matches);

    });

// Find a way for user input to be put into the same format as matches [matches.js file] object so they can be compared
// Determine who has the closest answers to the same questions as the user and store it in an object
// Once you determine the who the best match is you need to display the name and photo of the match to the user

    app.post('/api/matches', function(req, res){

        // Server will respond to a user's survey result
        // Then compare those results against every user in the database.
        // It will then calculate the difference between each of the numbers and the user's numbers.
        // It will then choose the user with the least differences as the best match.
        // In the case of multiple users with the same result it will choose the first match.
        // After the test, it will push the user to the database.

        // Object to store the closest match
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        // Here we take the result of the user's survey POST and parse it.
        var userData 	= req.body;
        var userName 	= userData.name;
        var userPhoto 	= userData.photo;
        var userScores 	= userData.scores;

        // This variable will calculate the difference between the user's scores and the scores of
        // each user in the database
        var totalDifference = 0;

        // Here we loop through all the friend possibilities in the database.
        for  (var i=0; i< matches.length; i++) {

            console.log(matches[i].name);
            totalDifference = 0;

            // Loop through all the scores of each friend
            for (var j=0; j< matches[i].scores[j]; j++){

                // Calculate the difference between the scores and sum them into the totalDifference
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(matches[i].scores[j]));

                // If the sum of differences is less then the differences of the current best match
                if (totalDifference <= bestMatch.friendDifference){

                    // Reset the bestMatch to be the new match.
                    bestMatch.name = matches[i].name;
                    bestMatch.photo = matches[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }

        // Save the user's data to the database (this has to happen AFTER the check. otherwise,
        // the database will always return that the user is the user's best friend).
        matches.push(userData);

        // Return a JSON with the user's bestMatch that will go back to front end of the application [HTML].
        res.json(bestMatch);

    });

};



