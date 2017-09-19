const express = require('express');
const knex = require('../knex/knex.js');
const router = express.Router();

router.get('/:id', function (req, res) {
  var badgeId = req.params.id
  return knex('badge').where('id', badgeId)
  .then(function(badge){
    res.send(badge);
  })
  return
  })

//LINE 18 LOGIC NEEDS TO BE ADDRESSED REQ.BODY => JS LOGIC?
  router.put('/:id', function (req, res){
    var badgeId = req.params.id
    return knex('badge').where('id', badgeId).update({
      name: req.body.name
    })
    .then(function(badge){
      res.send('Success')
    })
    return
  })


module.exports = router;
