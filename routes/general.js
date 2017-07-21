const express = require('express');
const router = express.Router();
const Snippet = require('../models/snippet');
const app = require('../controllers/appControllers.js')

//displays login page.
router.get('/login', app.login);

//uses find to return all snips
router.get('/home', app.getSnips);

//renders the newSnip creation page.
router.get('/newSnip', app.newSnip);

//Grabs the snippet selected by the user.
router.get('/snip/:snipId', app.getOneSnippet);

//Creates a new snip from the newSnip page.
router.post('/newSnip', app.createSnippet);



module.exports = router;
