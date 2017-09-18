const express = require('express');
const knex = require('../knex/knex');
const router = express.Router();

router.get('/playerdata/:id', function (req, res) {
  var playerId = req.param.id
  return knex('player')
  .join('pet', 'player.id', '=', 'pet.player_id')
  .join('badge', 'player.id', '=', 'badge.player_id')
  .where('player.id', '=', playerId)
  .then(player => {
    res.json(player)
  })
})



module.exports = router
