// ===============================boiler plate=======================================
const express = require('express');
const path = require('path');
var friendsFile = require('./app/data/friends');

// port
const PORT = process.env.PORT || 8080;

const app = express();

// ===============================boiler plate=======================================


// step 2: set up routes
app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname + '/app/public/survey.html'));
});

//get api/friends
app.get("/api/friends", function(req, res) {
    console.log(friendsFile)
    return res.json(friendsFile.friends);
});

app.get("/*", function(req, res){
    res.sendFile(path.join(__dirname + '/app/public/home.html'));
});



// ===============================boiler plate=======================================

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
// ===============================boiler plate=======================================