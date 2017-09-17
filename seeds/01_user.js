exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function() {
      // Inserts seed entries
      return knex('user').insert([{
          id: 1,
          name: "Jose",
          email: "jose@email.com"
        },

      ]);
    }).then(function() {
      return knex.raw('alter sequence user_id_seq restart with 2')
    })
};