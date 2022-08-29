const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        Email: { type: String, required: [true, "Email cannot be empty"] },
        password: { type: String, required: [true, "Password cannot be empty"] },
        Username: { type: String, required: [true, "Username cannot by empty"]}
    },
    { timestamps: true }
);

const user = mongoose.model("user", userSchema);

module.exports = user;