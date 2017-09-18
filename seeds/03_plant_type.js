
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('plant_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('plant_type').insert([
        {id: 1, type: "bob", evo_1: '/imgs/bob_1', evo_2: '/imgs/bob_2', evo_3: '/imgs/bob_3', evo_4: "/imgs/casket"},
      ]);
    });
};
