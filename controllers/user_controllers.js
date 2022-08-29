// importing statements
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// MIDDLEWARE
router.use(express.json());

// built in method to recognize incoming request object as strings or arrays
router.use(express.urlencoded({ extended: true }));

// MODEL IMPORT
const user = require('../models');

// GET LOGIN ROUTE 
router.get('/login', (req, res) => {
    res.render('/users/login.ejs');
});

// POST LOGIN ROUTE
router.post('/login', async (req,res, next) => {
    try{
        let formData = req.body;
        // this checks the boolean if the user exists
        let foundUser = await user.findOne({email: formData.email});
        if (!foundUser) {
            return res.redirect('/register')
        }else{
            const match = await bcrypt.compare(formData.password, foundUser.password);
            if(!match) return res.send(`email or password doesn't match` );
            req.session.currentUser = {
                id: foundUser._id,
                username: foundUser.username,
            }
            return res.redirect('/posts');
        }
    }catch(error){
    console.log(error);
    next();
    }
});

// GET REGISTER ROUTE


// POST REGISTER








// EXPORT
module.exports = router