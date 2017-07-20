const express = require('express');
const router = express.Router();
const Snippet = require('../models/snippet');



router.get('/snippets', function(req, res){
  Snippet.getActivity(function(err, snippet){
    if(err){
      console.log(err);
    }
    res.json(snippet);
  })
})

router.post('/snippets', function(req, res){
  var activity = req.body;
  Snippet.createActivity(snippet, function(err, snippet){
    if(err){
      console.log(err);
    }
    res.json(snippet);
  })
})

router.get('/snippets/:snippetId', function(req, res){
  let snipId = req.params.snippetId;
  Snippet.findOne({_id: snipId}).then(function(snippet){
    console.log(snippet);
    res.send(snippet);
  })
})

router.put('/snippets/:snippetId', function(req, res){
  let snipId = req.params.snippetId;
  let snippet = req.body;
  Snippet.updateActivity(actId, snippet, {}, function(err, snippet){
    if(err){
      console.log("This is a PUT error:  " + err);
    }
    res.json(snippet);
  })
})

router.delete('/snippets/:snippetId', function(req, res){
  let snipId = req.params.snippetId;
  Snippet.deleteActivity(snipId, function(err){
    if(err){
      console.log("Deletion error: " + err);
    }
    res.send("you successfully deleted this activity.")
  })
})

// router.post('/snippets/:snippetId', passport.authenticate('basic', {session: false}),function(req, res){
//   let actId = req.params.activityId;
//   let stat = req.body;
//   Activity.getActivityById(actId, function(err, activity){
//     if(err){
//       console.log(err);
//     }
//     let newStat = {
//       description: stat.description,
//       quantity: stat.quantity
//     }
//     activity.stats.push(newStat);
//     activity.save();
//     res.json(activity);
//   })
// })

// router.delete('/stats/:statsId', passport.authenticate('basic', {session: false}),function(req, res){
//   let actId = req.params.activityId;
//   let statId = req.params.statsId;
//   Activity.update(
//     {},
//     {$pull: {stats: {_id: statId}}}
//   ).then(function(activity){
//     res.json(activity);
//   })
// })


module.exports = router;
