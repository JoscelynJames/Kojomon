exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('hygiene').del()
    .then(function() {
      // Inserts seed entries
      return knex('hygiene').insert([{
        id: 1,
        pet_id: 1,
        last_interaction: new Date()
      }, ]);
    }).then(function() {
      return knex.raw('alter sequence hygiene_id_seq restart with 2')
    })
};