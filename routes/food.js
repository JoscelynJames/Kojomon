const express = require('express');
const knex = require('../knex/knex.js');
const router = express.Router();

router.get('/:id', function (req, res) {
  var foodId = req.params.id
  return knex('food').where('id', foodId)
  .then(function(food){
    res.send(food);
  })
  return
  })

  router.put('/:id', function (req, res){
    var foodId = req.params.id
    return knex('food').where('id', foodId).update({
      last_interaction: new Date()
    })
    .then(function(food){
      res.send('Success')
    })
    return
  })


module.exports = router;
