exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pet').del()
    .then(function() {
      // Inserts seed entries
      return knex('pet').insert([{
        id: 1,
        player_id: 1,
        name: 'Planty',
        evo_score: 35,
        active: true,
        creation_date: new Date(),
        plant_type_id: 1
      }, {
        id: 2,
        player_id: 1,
        name: 'Mojo',
        evo_score: 62,
        active: true,
        creation_date: new Date(),
        plant_type_id: 3
      },{
        id: 3,
        player_id: 2,
        name: 'Mr.Plant',
        evo_score: 88,
        active: true,
        creation_date: new Date(),
        plant_type_id: 2
      },{
        id: 4,
        player_id: 3,
        name: 'Frank',
        evo_score: 20,
        active: false,
        creation_date: new Date(),
        plant_type_id: 4
      },{
        id: 5,
        player_id: 3,
        name: 'Plant',
        evo_score: 1,
        active: true,
        creation_date: new Date(),
        plant_type_id: 2
      },{
        id: 6,
        player_id: 4,
        name: 'Kojo',
        evo_score: 50,
        active: true,
        creation_date: new Date(),
        plant_type_id: 3
      },

    ]);
    }).then(function() {
      return knex.raw('alter sequence pet_id_seq restart with 7')
    })
};
