exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('phrase').del()
    .then(function() {
      // Inserts seed entries
      return knex('phrase').insert([{
          id: 1,
          pet_id: 1,
          phrase: "Hey I am a blobmon"
        }, {
          id: 2,
          pet_id: 1,
          phrase: "I'm Hungry"
          }, {
          id: 3,
          pet_id: 1,
          phrase: "Hey"
        }, {
          id: 4,
          pet_id: 1,
          phrase: "Death is upon us"
        },

      ]);
    }).then(function() {
      return knex.raw('alter sequence phrase_id_seq restart with 5')
    })
};
