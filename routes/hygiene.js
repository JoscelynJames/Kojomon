const express = require('express');
const knex = require('../knex/knex.js');
const router = express.Router();

router.get('/:id', function (req, res) {
  var hygieneId = req.params.id
  return knex('hygiene').where('id', hygieneId)
  .then(function(hygiene){
    res.send(hygiene);
  })
  return
  })

  router.put('/:id', function (req, res){
    var hygieneId = req.params.id
    return knex('hygiene').where('id', hygieneId).update({
      last_interaction: new Date()
    })
    .then(function(hygiene){
      res.send('Success')
    })
    return
  })


module.exports = router;
