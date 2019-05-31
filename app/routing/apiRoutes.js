
const path = require('path');
var express = require('express');
var app = express.Router();

app.get("/api/friends", function(req, res) {
  console.log(friendsFile)
  return res.json(friendsFile.friends);
});

module.exports = app;

// // Listener
// // ===========================================================
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });
