exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('badge').del()
    .then(function() {
      // Inserts seed entries
      return knex('badge').insert([{
          id: 1,
          user_id: 1,
          name: 'Beginner'
        },

      ]);
    }).then(function() {
      return knex.raw('alter sequence badge_id_seq restart with 2')
    })
};