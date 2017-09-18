
exports.up = function(knex, Promise) {
  return knex.schema.createTable('badge', (table) => {
    table.increments('id').primary()
    table.text('name')
    table.integer('player_id')
    .references('player.id')
    .onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('badge')
};
