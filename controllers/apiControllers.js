var Snippet = require('../models/snippet.js');
var User = require('../models/user.js');

//returns all snippets in the form of JSON
exports.returnAllSnippets = function(req, res){
  Snippet.getSnippet(function(err, snippet){
    if(err){
      console.log(err);
    }
    res.json(snippet);
  })
};

//Handles the post for the snippets and creates a new one.
exports.postAndCreateSnip = function(req, res){
  var activity = req.body;
  Snippet.createSnippet(snippet, function(err, snippet){
    if(err){
      console.log(err);
    }
    res.json(snippet);
  })
}

//Finds a specific snip based on the snip Id.
exports.findOneSnippetById = function(req, res){
  let snipId = req.params.snippetId;
  Snippet.findOne({_id: snipId}).then(function(snippet){
    console.log(snippet);
    res.send(snippet);
  })
};

exports.updateSnippetById =  function(req, res){
  let snipId = req.params.snippetId;
  let snippet = req.body;
  Snippet.updateSnippet(actId, snippet, {}, function(err, snippet){
    if(err){
      console.log("This is a PUT error:  " + err);
    }
    res.json(snippet);
  })
};

exports.deleteSnippetById =  function(req, res){
  let snipId = req.params.snippetId;
  Snippet.deleteSnippet(snipId, function(err){
    if(err){
      console.log("Deletion error: " + err);
    }
    res.send("you successfully deleted this activity.")
  })
};
