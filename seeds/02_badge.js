exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('badge').del()
    .then(function() {
      // Inserts seed entries
      return knex('badge').insert([{
          id: 1,
          player_id: 4,
          name: 'Beginner'
        }, {
          id: 3,
          player_id: 2,
          name: 'Fully Evolved'
        },{
          id: 4,
          player_id: 1,
          name: 'Beginner'
        },{
          id: 5,
          player_id: 2,
          name: 'Beginner'
        },{
          id: 2,
          player_id: 3,
          name: 'Death'
        }, {
          id: 6,
          player_id: 3,
          name: 'Beginner'
        },{
          id: 7,
          player_id: 3,
          name: 'Fully Evolved'
        },{
          id: 8,
          player_id: 3,
          name: 'Happy'
        },

      ]);
    }).then(function() {
      return knex.raw('alter sequence badge_id_seq restart with 9')
    })
};
