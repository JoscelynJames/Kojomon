
exports.up = function(knex, Promise) {
  return knex.schema.createTable('hygiene', (table) => {
    table.increments('id').primary()
    table.integer('pet_id')
      .references('pet.id')
      .onDelete('CASCADE')
    table.timestamp('last_interaction')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('hygiene')
};
