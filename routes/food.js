const express = require('express');
const knex = require('../knex/knex.js');
const router = express.Router();

router.get('/:id', function (req, res) {
  var petId = req.params.id
  return knex('food').where('pet_id', petId)
  .then(function(food){
    res.send(food);
  })
  return
  })

  router.put('/:id', function (req, res){
    var petId = req.params.id
    return knex('food').where('pet_id', petId).update({
      last_interaction: new Date()
    })
    .then(function(food){
      res.send('Success')
    })
    return
  })


module.exports = router;
