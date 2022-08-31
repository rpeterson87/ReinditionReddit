const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        email: { type: String, required: [true, "Email cannot be empty"] },
        password: { type: String, required: [true, "Password cannot be empty"] },
        username: { type: String, required: [true, "Username cannot by empty"] }
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;