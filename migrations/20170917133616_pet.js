
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pet', (table) => {
    table.increments('id').primary()
    table.text('name')
    table.timestamp('creation_date')
    table.integer('evo_score')
    table.integer('user_id')
    .references('user.id')
    .onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('pet')
};
