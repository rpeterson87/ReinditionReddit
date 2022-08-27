
const express = require('express')
const methodOverride = require('method-override');
const session = require("express-session");
const MongoStore = require("connect-mongo");
require('dotenv').config();

// CONTROLLER IMPORTS
const controllers = require('./controllers')

const app = express()
const PORT = 4000
app.set('view engine', 'ejs')

// MIDDLEWARE
app.use(express.static('public'))
app.use(methodOverride('_method'));

// app.use(
//     session({
//         store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
//         secret: "super secret",
//         resave: false,
//         saveUninitialized: false,
//         cookie: {
//             maxAge: 1000 * 60 * 60 * 24 * 7, 
//         },
//     })
// );

// MIDDLEWARE - code that runs for every request (before routes)
app.use('/posts', controllers.posts)
//todo app.use('/users', controllers.users)


//  home route
app.get('/', (req, res) => {
    res.render(`home.ejs`)
})

// 404 Wildcard Route
app.route('/*').all((req,res)=>{
    res.render('404')
})

// SERVER
app.listen(4000, () => console.log('starting server at port:', PORT))
