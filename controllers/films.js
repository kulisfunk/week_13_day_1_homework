//since we don't have a database we'll use our front end models at the moment
var UI = require('../client/src/views/ui');
var films = require('../client/src/models/films');//add () to generate array instead of var list
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');
var list = new films();//if we put () after films require it creates array as films above.....

var express = require('express');

var filmsRouter = new express.Router();


filmsRouter.get('/', function(req, res){
  // var ui = new UI();
  res.json(list);
    // ui.render(list);
});

filmsRouter.post('/', function(req, res){
  var newFilm = new Film(req.body.film)
  // list.push(req.body.film);
  list.push(newFilm);
  res.json({data: list});
});

filmsRouter.get('/:id', function(req, res){
  res.json( {data: list[req.params.id]} );
});

filmsRouter.put('/:id', function(req, res){
  var newFilm = new Film(req.body.film);
  list[req.params.id] = newFilm;
  res.json(list);
});

filmsRouter.delete('/:id', function(req, res){
  list.splice(req.params.id, 1);
  res.json({data: list});
});

filmsRouter.patch('/add_review/:id', function(req, res){
  var newReview = new Review(req.body.review);
  list[req.params.id].addReview(newReview);
  res.json(list);
})


module.exports = filmsRouter;
