const express = require('express');
const knex = require('../knex/knex.js');
const router = express.Router();

router.get('/', function(req, res) {
  return knex('player')
    .then(function(player) {
      res.send(player)
    })
})

router.get('/:id', function (req, res) {
  var playerId = req.params.id
  return knex('player').where('id', playerId)
  .then(function(player){
    res.send(player);
  })
  return
  })

  router.put('/:id', function (req, res){
    var playerId = req.params.id
    return knex('player').where('id', playerId).update({
      last_login: new Date()
    })
    .then(function(player){
      res.send('Success')
    })
    return
  })


module.exports = router
