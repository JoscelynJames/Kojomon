exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('attention').del()
    .then(function() {
      // Inserts seed entries
      return knex('attention').insert([{
          id: 1,
          pet_id: 1,
          last_interaction: "2017-07-16T15:31:33.324Z"
        },{
          id: 2,
          pet_id: 1,
          last_interaction: "2017-07-16T17:31:33.324Z"
        },{
          id: 3,
          pet_id: 1,
          last_interaction: "2017-09-16T5:31:33.324Z"
        },{
          id: 5,
          pet_id: 2,
          last_interaction: new Date()
        },{
          id: 6,
          pet_id: 2,
          last_interaction: "2017-09-11T17:31:33.324Z"
        },{
          id: 7,
          pet_id: 2,
          last_interaction: "2017-09-10T5:31:33.324Z"
        },{
          id: 8,
          pet_id: 2,
          last_interaction: "2017-09-10T10:31:33.324Z"
        },{
          id: 9,
          pet_id: 2,
          last_interaction: "2017-09-10T8:31:33.324Z"
        }

      ]);
    }).then(function() {
      return knex.raw('alter sequence attention_id_seq restart with 10')
    })
};
