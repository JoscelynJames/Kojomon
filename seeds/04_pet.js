exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pet').del()
    .then(function() {
      // Inserts seed entries
      return knex('pet').insert([{
        id: 1,
        user_id: 1,
        name: 'Planty',
        evo_score: 1,
        creation_date: new Date()
      }, ]);
    }).then(function() {
      return knex.raw('alter sequence pet_id_seq restart with 2')
    })
};