const mongoose = require("mongoose");

mongoose.connect("");

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
