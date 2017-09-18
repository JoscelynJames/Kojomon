
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pet', (table) => {
    table.increments('id').primary()
    table.text('name')
    table.timestamp('creation_date')
    table.boolean('active')
    table.integer('evo_score')
    table.integer('player_id')
    .references('player.id')
    .onDelete('CASCADE')
    table.integer('plant_type_id')
    .references('plant_type.id')
    .onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('pet')
};
