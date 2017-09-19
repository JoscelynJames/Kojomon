const express = require('express');
const knex = require('../knex/knex.js');
const router = express.Router();


router.get('/:id', function (req, res) {
  var petId = req.params.id
  return knex('pet').where('id', petId)
  .then(function(){
    res.send(pet);
  })
  return
  })

//THIS ROUTE MIGHT NEED TO BE ADJUSTED DEPENDING ON VALUE
  router.put('/evo/:id', function (req, res){
    var petId = req.params.id
    return knex('pet').where('id', petId).update({
      evo_score: req.body.score
    })
    .then(function(pet){
      res.send("Success")
    })
    return
  })

  router.put('/name/:id', function (req, res){
    var petId = req.params.id
    return knex('pet').where('id', petId).update({
      name: req.body.name
    })
    .then(function(pet){
      res.send('Success')
    })
    return
  })

  router.put('/creation_time/:id', function (req, res){
    var petId = req.params.id
    return knex('pet').where('id', petId).update({
      creation_time: new Date()
    })
    .then(function(pet){
      res.send('Success')
    })
    return
  })

//this may or may not work
  router.put('/active/:id', function (req, res){
    var petId = req.params.id
    return knex('pet').where('id', petId).update({
      active: false
    })
    .then(function(pet){
      res.send('Active changed')
    })
    return
  })

module.exports = router;
