const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/studentDB");

// Schema
const studentSchema = new mongoose.Schema({
    name: String,
    roll: String,
    branch: String
});

const Student = mongoose.model("Student", studentSchema);

// Serve form
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Add student
app.post("/add", (req, res) => {
    const newStudent = new Student({
        name: req.body.name,
        roll: req.body.roll,
        branch: req.body.branch
    });

    newStudent.save();
    res.send("Student Added Successfully!");
});

// View students
app.get("/students", async (req, res) => {
    const students = await Student.find();

    let output = "<h2>Student List</h2>";

    students.forEach(s => {
        output += `<p>${s.name} - ${s.roll} - ${s.branch}</p>`;
    });

    res.send(output);
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});