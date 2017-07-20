const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
mongoose.Promise = require('bluebird');
const bodyParser = require('body-parser');
const generalRouter = require('./routes/general');
const apiRouter = require('./routes/api');
const Snippet = require('./models/snippet.js');
// const passport = require('passport');
// const BasicStrategy = require('passport-http').BasicStrategy;
// const bcrypt = require('bcrypt');
const mustacheExpress = require('mustache-express');
const app = express();

mongoose.connect('mongodb://localhost:27017/codeSnippet');
var db = mongoose.connection;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.static('./css'));
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(express.static('./public'));

// Snippet.create({
//   title: 'Hello World JavaScript.',
//   body: "console.log('Hello World').",
//   notes: "Will print Hello World in console.",
//   language: "Javascript",
//   tags: [{
//     tagContent: "Javascript"
//   },
//   {
//     tagContent: "Console"
//   },
//   {
//     tagContent: "Web-Dev"
//   }
//   ]
// })



app.use("/app", generalRouter);
app.use("/api", apiRouter);

app.listen(3000, function(req, res){
  console.log("look like you made it after all.");
})
