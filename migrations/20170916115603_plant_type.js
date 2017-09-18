
exports.up = function(knex, Promise) {
  return knex.schema.createTable('plant_type', (table) => {
    table.increments('id').primary()
    table.text('type')
    table.text('evo_1')
    table.text('evo_2')
    table.text('evo_3')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('plant_type')
};
