// Routes
// ===========================================================

// Dependencies
var express = require("express");

var app = express();
var PORT = 3000;


// Routes
// ===========================================================


//get api/friends
app.get("/api/friends", function(req, res) {
  return res.json(friends);
});

// get api/friends/moreinfo
app.get("/api/friends/:friend", function(req, res) {
  // What does this code do?
  var chosen = req.params.friends;
  console.log(chosen);

  // loops through and finds out if there is firend that matches request
  for (var i = 0; i < friends.length; i++) {
    if (chosen === friends[i].routeName) {
      return res.json(friends[i]);
    }
  }

  return res.send("No Friends found");
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
