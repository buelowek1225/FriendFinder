// ===============================boiler plate=======================================
const express = require('express');
const path = require('path');
var friendsFile = require('./app/data/friends');
// var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");

// port
const PORT = process.env.PORT || 8080;
const app = express();

// ===============================boiler plate=======================================

app.use("", htmlRoutes);
// app.use("", apiRoutes);

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// static assets
/* route requests for static files to appropriate directory */
// server.use('/assets', express.static(__dirname + '/app/public/assets'))

// step 2: set up routes
// app.get("/survey", function(req, res){
//     res.sendFile(path.join(__dirname + '/app/public/survey.html'));
// });

//get api/friends
// app.get("/api/friends", function(req, res) {
//     console.log(friendsFile)
//     return res.json(friendsFile.friends);
// });

// app.get("/*", function(req, res){
//     res.sendFile(path.join(__dirname + '/app/public/home.html'));
// });



// ===============================boiler plate=======================================

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
// ===============================boiler plate=======================================