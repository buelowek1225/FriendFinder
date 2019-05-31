// html routes /survey and default for the home.html

const path = require('path');
// var express = require('express');
// var app = express.Router();

function htmlRoutes(app) {
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
}

module.exports = htmlRoutes;