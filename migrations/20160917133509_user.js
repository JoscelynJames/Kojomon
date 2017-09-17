
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', (table) => {
    table.increments('id')
    table.text('name')
    table.text('email')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user')
};
