const express = require('express');
const session = require('express-session');
const { Posts } = require('../models');
const router = express.Router();

// MIDDLEWARE
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// MODEL IMPORT
const db = require('../models');

// INDEX / GET - localhost:4000/posts
router.get('/', async (req, res) => {
    try {
        const sorted = await db.Posts.find().sort({voteTotal:-1});
        let uniqueComms = [... new Set(sorted.map(comm => comm.community))];
        const posts = await db.Posts.find();
        let context = { posts: posts };
        if (req.session) {
            const session = req.session;
            context = { posts: posts, session: session, uniqueComms};
        }
        res.render('index.ejs', context);
    } catch (err) {
        console.log(err);
    }
});
// NEW / GET- localhost:4000/posts/new
router.get('/new', (req, res) => {
    try {
        if(req.session.currentUser){
       
            const session = req.session;
            context = { session: session}
            res.render('new.ejs', context)
        } else {
            res.redirect('/login');
        }
    } catch (err) {
        console.log(err);
    }
});

// CREATE / POST - localhost:4000/posts/create
router.post('/', async (req, res, next) => {
    const createdPost = req.body;
    try {
        const newPost = await db.Posts.create(createdPost);
        res.redirect('/posts');
    } catch (err) {
        console.log(err);
        next();
    }
});

// SHOW / GET - localhost:4000/posts/_id
router.get('/:id', async (req, res) => {
    try {
        let postID = req.params.id;
        const foundPost = await db.Posts.findById(req.params.id)
        const postInfo = await db.Posts.find({ post: foundPost._id })
        const postComment = await db.Comment.find({postID})

        let context = { posts: foundPost, id: foundPost._id, comment: postComment}

        if(req.session){
            const session = req.session;
            context = { posts: foundPost, id: foundPost._id, comment: postComment, session: session}
        }
        res.render('show.ejs', context)

    } catch (err) {
        console.log(err);
    }
});
// DESTROY / DELETE  - localhost:4000/posts/<_id>
router.delete('/:id', async (req, res) => {
    try {
        const deletePost = await db.Posts.findByIdAndDelete(req.params.id);
        return res.redirect('/posts');
    } catch (error) {
        req.error = error;
        console.log(error);
        res.redirect('/404');
    }
});
// EDIT / GET - localhost:4000/posts/<_id>/edit
router.get('/:id/edit', async (req, res) => {
    try {

        const editPost = await db.Posts.findById(req.params.id)
        let context = { post: editPost, id: editPost._id }
        if(req.session.currentUser){
            const session = req.session;
            context = { post: editPost, id: editPost._id, session: session}
            res.render('edit.ejs', context)
        } else {
            res.redirect('/login')
        }

    } catch (err) {
        console.log(err);
    }
});

// COMMENTS ROUTE
router.put('/:id/comments', async (req, res, next) => {
    try{
        let post = await db.Comment.create(req.body);
        res.redirect(`/posts/${req.params.id}`)
    } catch(err) {
        console.log(err)
        next()
    }
});

// UPDATE / PUT- localhost:4000/posts/<_id>
// update route
router.put("/:id", async (req, res, next) => {

    try {
        const updatedPost = req.body;
        await db.Posts.findByIdAndUpdate(req.params.id, updatedPost, { new: true });
        res.redirect(`/posts`);
    } catch (err) {
        console.log(err)
        next()
    }
});
router.put("/:id/vote", async (req, res, next) => {
    try {
        const updatedPost = req.body;
        await db.Posts.findByIdAndUpdate(req.params.id, updatedPost, { new: true });
        res.redirect(`/posts`);
    } catch (err) {
        console.log(err)
        next()
    }
});
router.put("/:id/vote/show", async (req, res, next) => {
    try {
        const updatedPost = req.body;
        await db.Posts.findByIdAndUpdate(req.params.id, updatedPost, { new: true });
        res.redirect(`/posts/${req.params.id}`);
    } catch (err) {
        console.log(err)
        next()
    }
});

module.exports = router;