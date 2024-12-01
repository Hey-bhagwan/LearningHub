const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ayushupa29:chutiyaaa@cluster0.80prm.mongodb.net/LearningHub");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        trum: true
    },
    email: {
        type: String,
        required: true,
        minLength: 3,
        trum: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;