// Require in data from other files

var matches = require('../data/matches.js');

// Build a route where I can view all possible matches then include these api routes in my server file

module.exports = function(app) {

    app.get('/api/matches', function (req,res) {
        res.json(matches);

    });
};
