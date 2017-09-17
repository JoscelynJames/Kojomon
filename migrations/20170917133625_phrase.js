
exports.up = function(knex, Promise) {
  return knex.schema.createTable('phrase', (table) => {
    table.increments('id').primary()
    table.integer('pet_id')
      .references('pet.id')
      .onDelete('CASCADE')
    table.varchar('phrase')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('phrase')
};
