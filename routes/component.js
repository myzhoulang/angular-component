var express = require('express');
var component = express.Router();

component.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


component.get('/sug', function(req, res, next){
  res.render('sug', {
    title:"Sug"
  })
});

//router.get('tooltip', function(req, res, next){
//  res.render('too')
//});

module.exports = component;