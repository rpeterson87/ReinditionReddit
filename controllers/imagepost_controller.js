const express = require('express');
const session = require('express-session');
const { Posts } = require('../models');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const multer = require('multer');


let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + '/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + new Date().toISOString())
    }
});

let upload = multer({ storage: storage });


// MIDDLEWARE
router.use(express.json());
router.use(express.urlencoded({ extended: false }));


// MODEL IMPORT
const db = require('../models');
const { debugPort } = require('process');




router.get('/posts/new', async (req, res) => {
    try {
        if (req.session.currentUser) {
            const sorted = await db.Posts.find().sort({ voteTotal: -1 });
            let uniqueComms = [... new Set(sorted.map(comm => comm.community))];
            const session = req.session;
            context = { session: session, uniqueComms }
            res.render('new.ejs', context);
        } else {
            res.redirect('/login');
        }
    } catch (err) {
        console.log(err);
    }
});


router.post('/posts', upload.single('img'), (req, res, next) => {
    if (req.file) {
        const obj = {
            title: req.body.title,
            community: req.body.community,
            body: req.body.body,
            username: req.body.username,
            img: {
                data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
                contentType: 'image/png'
            }

        }
        db.Posts.create(obj, (err, item) => {
            if (err) {
                console.log(err);
            }
            else {
                res.redirect('/posts');
            }
        });
    } else {
        const obj = req.body;
        db.Posts.create(obj, (err, item) => {
            if (err) {
                console.log(err);
            }
            else {
                res.redirect('/posts');
            }
        });
    }
});



module.exports = router;