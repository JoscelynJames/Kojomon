const express = require('express');
const knex = require('../knex/knex.js');
const router = express.Router();

router.get('/:id', function (req, res) {
  var attentionId = req.params.id
  return knex('attention').where('id', attentionId)
  .then(function(attention){
    res.send(attention);
  })
  return
  })

  router.put('/:id', function (req, res){
    var attentionId = req.params.id
    return knex('attention').where('id', attentionId).update({
      last_interaction: new Date()
    })
    .then(function(attention){
      res.send('Success')
    })
    return
  })

module.exports = router;
