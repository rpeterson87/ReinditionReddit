const express = require('express');
const router = express.Router();

// MIDDLEWARE
router.use(express.json());
router.use(express.urlencoded({extended: false}));

// MODEL IMPORT
const db = require('../models');

// INDEX / GET - localhost:4000/posts
router.get('/', async (req, res) => {
    try {
        const posts = await db.Posts.find();
        const context = {posts: posts};
        res.render('index.ejs', context);
    } catch(err) {
        console.log(err)
    }
});
// NEW / GET- localhost:4000/posts/new
router.get('/new', (req,res) => {
    try {
        res.render('new.ejs')
    } catch(err) {
        console.log(err)
    }
});

// CREATE / POST - localhost:4000/posts/create
router.post('/', async (req, res, next)=> {
    const createdPost = req.body;
    try{
        const newPost = await db.Posts.create(createdPost);
        console.log(newPost);
        res.redirect('/posts');
    } catch (err) {
        console.log(err);
        next();
    }
})

// SHOW / GET - localhost:4000/posts/_id
router.get('/:id', async (req,res) => {
    try {
        const foundPost = await db.Posts.findById(req.params.id)
        const postInfo = await db.Posts.find({post: foundPost._id})
        res.render('show.ejs',{posts: foundPost, id: foundPost._id})
    } catch(err) {
        console.log(err)
    }
});
// DESTROY / DELETE  - localhost:4000/posts/<_id>

// EDIT / GET - localhost:4000/posts/<_id>/edit

// UPDATE / PUT- localhost:4000/posts/<_id>

module.exports = router;