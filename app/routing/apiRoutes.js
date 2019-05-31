// API Routes to pull json friends data

var express = require('express');
var app = express.Router();

function apiRoutes(app) {
  app.get("/api/friends", function(req, res) {
    console.log(friendsFile)
    res.json(friendsFile.friends);
  });
}



module.exports = apiRoutes;
