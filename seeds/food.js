exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('food').del()
    .then(function() {
      // Inserts seed entries
      return knex('food').insert([{
        id: 1,
        pet_id: 1,
        last_interaction: new Date()
      }, ]);
    }).then(function() {
      return knex.raw('alter sequence food_id_seq restart with 2')
    })
};