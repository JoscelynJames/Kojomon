
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('plant_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('plant_type').insert([{
        id: 1,
        evo_1: '/imgs/evo-path-1/evo-1.png',
        evo_2: '/imgs/evo-path-1/evo-2.png',
        evo_3: '/imgs/evo-path-1/evo-3.png',
        evo_4: "/imgs/headstone.png"
      },{
        id: 2,
        evo_1: '/imgs/evo-path-2/evo-1.png',
        evo_2: '/imgs/evo-path-2/evo-2.png',
        evo_3: '/imgs/evo-path-2/evo-3.png',
        evo_4: "/imgs/headstone.png"
      },{
        id: 3,
        evo_1: '/imgs/evo-path-3/evo-1.png',
        evo_2: '/imgs/evo-path-3/evo-2.png',
        evo_3: '/imgs/evo-path-3/evo-3.png',
        evo_4: "/imgs/headstone.png"
      },{
        id: 4,
        evo_1: '/imgs/evo-path-4/evo-1.png',
        evo_2: '/imgs/evo-path-4/evo-2.png',
        evo_3: '/imgs/evo-path-4/evo-3.png',
        evo_4: "/imgs/headstone.png"
      },{
        id: 5, 
        evo_1: '/imgs/evo-path-5/evo-1.png',
        evo_2: '/imgs/evo-path-5/evo-2.png',
        evo_3: '/imgs/evo-path-5/evo-3.png',
        evo_4: "/imgs/headstone.png"
      },
      ]);
    });
};
