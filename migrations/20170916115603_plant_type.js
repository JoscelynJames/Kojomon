
exports.up = function(knex, Promise) {
  return knex.schema.createTable('plant_type', (table) => {
    table.increments('id').primary()
    table.text('evo_1')
    table.text('evo_2')
    table.text('evo_3')
    table.text('evo_4')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('plant_type')
};
