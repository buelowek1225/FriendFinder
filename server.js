// ===============================boiler plate=======================================
const express = require('express');
var friendsFile = require('./app/data/friends');

// port
const PORT = process.env.PORT || 8080;
const app = express();


// ===============================boiler plate=======================================
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


// Don't connect CSS this way
// app.get("/public/css/main.css", function(req, res) {
//     res.sendFile(__dirname + "/public/css/main.css")
// })

// forces my app to look in the public folder first
app.use(express.static("app/public"));

// if I don't find the reference in the public folder look at the path and return the relative htmls
require("./app/routing/htmlRoutes.js")(app);

// ===============================boiler plate=======================================

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
// ===============================boiler plate=======================================


// What was removed and placed on other files

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


