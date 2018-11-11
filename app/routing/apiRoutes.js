// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends.js");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------


  //sends back all the friends object array 

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });



  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newFriend = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    //newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newFriend);
  
    friends.push(newFriend);
  





    var friendsScoreArray = [];
    var userScoreArray = [];
    var totalDifferenceArray = [];
    var totalDifferenceReduced = [];
    var totalDifferenceIndex = 0;
    

    function getSum(total, num) {
        return total + num;
        }
    
 
  
    userScoreArray = friends[2].scores.pop();
    
    console.log ("userScoreArray" + userScoreArray);
    
    for (var j = 0; j < 2; j++) {
    
        for (var k = 0; k < 10; k++) {
        totalDifferenceArray[j]=Math.abs(userScoreArray[k]-friends[j].scores[k]); 
        }
        totalDifferenceReduced[j] = totalDifferenceArray.reduce(getSum);
    }
    
    totalDifferenceIndex = totalDifferenceReduced.indexOf(Math.min.apply(null,totalDifferenceReduced));
    
    console.log("totaldiffindex" + totalDifferenceIndex);

    










    
/*   trying to use for each but having problems bc of callback function mixed with array
    function scoreExtractorFXN(item) {
        
        friendsScoreArray[i].push(item);    
    }

    function getSum(total, num) {
        return total + num;
        }
    

    for (var i=0; i < friends.length; i++) {
    
    friends[i].scores.forEach(scoreExtractorFXN);
    }
    
  
 
  
    userScoreArray = friendsScoreArray.pop();
    
    console.log ("userScoreArray" + userScoreArray);
    
    for (var j = 0; j< friendsScoreArray.length; j++) {
    
        for (var k = 0; k < 10; k++) {
        totalDifferenceArray[j]=Math.abs(userScoreArray[k]-friendsScoreArray[j][k]); 
        }
        totalDifferenceReduced[j] = totalDifferenceArray.reduce(getSum);
    }
    
    totalDifferenceIndex = totalDifferenceReduced.indexOf(Math.min.apply(null,totalDifferenceReduced));
    
    
    
    
    
  */  
    
    
    
    
    /*
    var user = [];
    var totalDifference = [];
    
    for (var i=0; i < friends.length; i++) {
    
    friends[i].scores.forEach(scoreExtractorFXN);
    }
    
    function scoreExtractorFXN(item) {
        
        user[i].push(item);    
    }
    
    for (var j = user.length; j > 0; j--) {
        var k = (j - 1)
        user[j].forEach(absCalcFXN);
    }
    
    function absCalcFXN(item) {
    
    totalDifference.push(Math.abs(user[j].item - user[k].item));
    
    }
    
    for (var l = 0; l < totalDifference.length; l++) {
        
        tdReduced[l] = totalDifference[l].reduce(getSum);  
    
    }
    
    function getSum(total, num) {
        return total + num;
    }
    
    lowestDifference = tdReduced.sort(function(a, b){return a-b});
    
    
    */












    console.log ("Match index is:" + friends[totalDifferenceIndex]);  
    res.json(friends[totalDifferenceIndex]);
  });

};
