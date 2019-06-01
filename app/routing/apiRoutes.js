// API Routes to pull json friends data
var friends = require("../data/friends");

// console.log(friends)

function apiRoutes(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  app.post("/api/friends", function(req, res) {
    // console.log(req.body);
    // friends.push(req.body);
    compareUserData(req.body);
    res.json(friends);
    // console.log(friends);
    
    
  })
}

function compareUserData(data){
  var totaldifference;
  console.log(data);
  for(var i=0; i < friends.length; i++) {
    var friendScore = 0;
    console.log(friends[i].scores);
    console.log(data.scores)
    for(var j=0; j < friends[i].scores.length; j++) {
      // console.log(data.scores[j])
      // console.log(friends[i].scores[j])
      totaldifference = Math.abs(data.scores[j]-friends[i].scores[j]);
      console.log(totaldifference);
      friendScore = friendScore + totaldifference;
      // lowest friend score and who it is related to

      // pseudocode
      // find which find had the lowest match
    };
  };
}

module.exports = apiRoutes;
