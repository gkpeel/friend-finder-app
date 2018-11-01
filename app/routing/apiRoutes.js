// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
var friendList = require('../data/friends.js');

module.exports = function(app) {

    app.get('/api/friends', function(req,res){
        res.json(friendList);
    });

    app.post('/api/friends', function(req,res){
        var currentFriend = req.body
        console.log(currentFriend);
        
        var bestFriend;
        var smallestDiff;
        friendList.forEach(function(friend){
            sumOfDiffs = 0;
            for (var i=0; i<currentFriend.scores.length; i++) {
                questionDiff = Math.abs(friend.scores[i] - currentFriend.scores[i]);
                sumOfDiffs += questionDiff;
            }
            if (smallestDiff !== undefined) {
                if (sumOfDiffs < smallestDiff) {
                    bestFriend = friend;
                }
            } else {
                smallestDiff = sumOfDiffs;
                bestFriend = friend;
            }
            console.log(bestFriend.name);
        });

        friendList.push(currentFriend);
        res.send(bestFriend);
        
        

        // Once you've found the current user's most compatible friend, display the result as a modal pop-up.
        // The modal should display both the name and picture of the closest match.


    });

}


