const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 2
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2
    },
    phone: {
        type: String,
        required: true,
        minlength: 10
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    age: {
        type: String,
        required: true,
        minlength: 1
    },
    isAdmin: {
        type: Boolean,
        required: true,
    },
});

const User = mongoose.model("users", userSchema);
module.exports = User;