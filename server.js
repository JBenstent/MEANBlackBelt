/*
/server.js
Entry point for server. Requires all necessary server files.
*/

console.log("Loaded /server.js")
var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var session = require('express-session');



app.use(express.static(path.join(__dirname, "client"))); //serve client folder
app.use(express.static(path.join(__dirname, "bower_components")));
app.use(bodyParser.json())
app.use(session({
    secret: 'mysecret'
}))



// requires mongoose -->  requires models/item
require("./server/config/mongoose");
require("./server/config/routes")(app);


app.listen(27017, function() {
    console.log('Listening on 27017');
})
