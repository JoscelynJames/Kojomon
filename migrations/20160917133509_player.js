
exports.up = function(knex, Promise) {
  return knex.schema.createTable('player', (table) => {
    table.increments('id')
    table.text('name')
    table.text('email')
    table.timestamp('last_login')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('player')
};
