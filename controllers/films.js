//since we don't have a database we'll use our front end models at the moment
var UI = require('../client/src/views/ui');
var films = require('../client/src/models/films');
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');
var list = new films();

var express = require('express');

var filmsRouter = new express.Router();


filmsRouter.get('/', function(req, res){
  // var ui = new UI();
  res.json(list);
    // ui.render(list);
});

filmsRouter.post('/', function(req, res){
  list.push(req.body.film);
  res.json({data: list});
});

filmsRouter.get('/:id', function(req, res){
  res.json( {data: list[req.params.id]} );
});

filmsRouter.put('/:id', function(req, res){
  list[req.params.id] = req.body.film;
  res.json(list);
});

filmsRouter.delete('/:id', function(req, res){
  list.splice(req.params.id, 1);
  res.json({data: list});
});


module.exports = filmsRouter;
