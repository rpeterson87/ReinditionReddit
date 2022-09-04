const express = require('express');
const session = require('express-session');
const { Posts } = require('../models');
const router = express.Router();
const fs = require('fs')
const path = require('path')
const multer = require('multer')


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



router.get('/images', (req, res) => {
    try {
        if (req.session.currentUser) {

            const session = req.session;
            context = { session: session }
            res.render('new_image.ejs', context)
        } else {
            res.redirect('/posts');
        }
    } catch (err) {
        console.log(err);
    }
});


router.post('/posts', upload.single('img'), (req, res, next) => {
    if (req.file){
    const obj = {
        title: req.body.title,
        community: req.body.community,
        body: req.body.body,
        
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
        
    }
    console.log(req.file)
    db.Posts.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            // res.send(obj)
            res.redirect('/posts');
        }
    });
}else{
    const obj = {
        title: req.body.title,
        community: req.body.community,
        body: req.body.body,
    }
    console.log(req.file)
    db.Posts.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            // res.send(obj)
            res.redirect('/posts');
        }
    });
}
});



module.exports = router