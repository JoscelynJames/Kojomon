exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('food').del()
    .then(function() {
      // Inserts seed entries
      return knex('food').insert([{
          id: 1,
          pet_id: 1,
          last_interaction: "2017-07-16T15:31:33.324Z"
        },{
          id: 2,
          pet_id: 2,
          last_interaction: "2017-07-16T17:31:33.324Z"
        }
          ]);
    }).then(function() {
      return knex.raw('alter sequence food_id_seq restart with 10')
    })
};
