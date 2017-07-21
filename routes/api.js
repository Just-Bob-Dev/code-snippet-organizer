const express = require('express');
const router = express.Router();
const Snippet = require('../models/snippet');
const api = require('../controllers/apiControllers.js')



router.get('/snippets', api.returnAllSnippets);

router.post('/snippets', api.postAndCreateSnip);

router.get('/snippets/:snippetId', api.findOneSnippetById);

router.put('/snippets/:snippetId', api.updateSnippetById);

router.delete('/snippets/:snippetId', api.deleteSnippetById);

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
