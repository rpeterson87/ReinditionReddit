const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String, 
            required: [true,"Must enter a title."]},
        community: {
            type: String, 
            required: true},
        body: {
            type: String, 
            equired: true}
    },
    {timestamps: true}
);

const Posts = mongoose.model('Posts', postSchema)

module.exports = Posts;