const express = require('express');
const router = express.Router();
const Snippet = require('../models/snippet');


router.get('/login', function(req, res){
  res.render('login');
})

router.get('/home', function(req, res){
  Snippet.find(function(err, snippet){
    if(err){
      console.log(err);
    }
    res.render('home', {snippetBlock: snippet});
  })
})











module.exports = router;
