const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Must enter a title."]
        },
        community: {
            type: String,
            required: true
        },
        body: {
            type: String,
        },
        voteTotal: {
            type: Number,
            default: 0
        },
        image: {type: String},
        username: {type: String},
        img:
        {
        data: Buffer,
        contentType: String
        }
    },
    { timestamps: true },
    
);

const Posts = mongoose.model('Posts', postSchema);

module.exports = Posts;