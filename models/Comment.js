const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
        postID: { type: String },
        username: { type: String },
        body: { type: String }
    },
    { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;