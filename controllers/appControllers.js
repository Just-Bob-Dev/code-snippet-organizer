var Snippet = require('../models/snippet.js');
var User = require('../models/user.js');

//renders login page.
exports.login = function(req, res){
  res.render('login');
};

//Renders all Snips to a page.
exports.getSnips = function(req, res){
  Snippet.find(function(err, snippet){
    if(err){
      console.log(err);
    }
    res.render('home', {snippetBlock: snippet});
  });
};

//Renders New Snip for for people to make a new snip.
exports.newSnip = function(req, res){
  res.render('newSnippet');
};

exports.createSnippet = function(req, res){
  let sniptitle = req.body.title;
  let snipBody = req.body.snipBody;
  let snipNotes = req.body.snipNotes
  let snipLang = req.body.snipLanguage;
  let snipTags = req.body.snipTags;
  snipTags = snipTags.split(' ');
  console.log(snipTags);
  for(let i = 0; i < snipTags.length; i++){
    let snip = snipTags[i];
    snipTags[i] = {tagContent: snip};
  }
  console.log(snipTags);
  let newSnippet = Snippet.create({
    title: sniptitle,
    body: snipBody,
    notes: snipNotes,
    language: snipLang
  })
  if(snipTags[0].tagContent = " ")
  {
    res.redirect('/app/Home');
  }
  res.redirect('/app/Home');
};

exports.getOneSnippet = function(req, res) {
  let snipId = req.params.snipId;
  Snippet.getSnippetById(snipId, function(err, snippet){
    if(err){
      console.log(err);
    }
    res.render('singleSnip', {snippetBlock: snippet});
  })
}
