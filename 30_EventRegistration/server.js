const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/eventDB");

// Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    event: String
});

const User = mongoose.model("User", userSchema);

// Serve HTML
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

// Handle form
app.post("/register", function(req, res) {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        event: req.body.event
    });

    newUser.save();
    res.send("Registration Successful!");
});

// Start server
app.listen(3000, function() {
    console.log("Server running on port 3000");
});