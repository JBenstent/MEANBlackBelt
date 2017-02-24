/*
/server/models/item.js
create database schema for "item"
*/

console.log("Loaded: /server/models/item.js")

var mongoose = require("mongoose")

var UserSchema = mongoose.Schema({
  username: {type:String, unique: true}
})


var PollSchema = mongoose.Schema({
    poll: String,
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    username: String,
}, {timestamps: true});




mongoose.model("User", UserSchema);
mongoose.model("Poll", PollSchema);
