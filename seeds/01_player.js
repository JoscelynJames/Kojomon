exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('player').del()
    .then(function() {
      // Inserts seed entries
      return knex('player').insert([{
          id: 1,
          name: "Jose",
          email: "jose@email.com",
          last_login: "2017-07-16T15:31:33.324Z"
        },{
          id: 2,
          name: "Paul",
          email: "paul@email.com",
          last_login: "2017-07-15T5:31:33.324Z"
        },{
            id: 3,
            name: "Zoe",
            email: "zoe@email.com",
            last_login: "2017-07-16T1:31:33.324Z"
        },{
          id: 4,
          name: "Janer",
          email: "janet@email.com",
          last_login: "2017-07-16T11:31:33.324Z"
        },

      ]);
    }).then(function() {
      return knex.raw('alter sequence player_id_seq restart with 5')
    })
};
