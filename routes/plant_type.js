const express = require('express');
const knex = require('../knex/knex.js');
const router = express.Router();

router.get('/:id', function (req, res) {
  var plant_typeId = req.params.id
  return knex('plant_type').where('id', plant_typeId)
  .then(function(plant_type){
    res.send(plant_type);
  })
  return
  })




module.exports = router;
