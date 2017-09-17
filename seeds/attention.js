exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('attention').del()
    .then(function() {
      // Inserts seed entries
      return knex('attention').insert([{
          id: 1,
          pet_id: 1,
          last_interaction: new Date()
        },

      ]);
    }).then(function() {
      return knex.raw('alter sequence attention_id_seq restart with 2')
    })
};