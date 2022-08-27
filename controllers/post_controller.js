const express = require('express');
const router = express.Router();

// MIDDLEWARE
router.use(express.json());
router.use(express.urlencoded({extended: false}));

// MODEL IMPORT
const db = require('../models');

// INDEX / GET - localhost:4000/posts

// CREATE / POST - localhost:4000/posts/create

// SHOW / GET - localhost:4000/posts/_id

// NEW / GET- localhost:4000/posts/new

// DESTROY / DELETE  - localhost:4000/posts/<_id>

// EDIT / GET - localhost:4000/posts/<_id>/edit

// UPDATE / PUT- localhost:4000/posts/<_id>

module.exports = router;