exports.up = function(knex, Promise) {
  return Promise.all([
    knex("menu").insert([
      {pizza_name: "Greek", price: 10.00, description: "Topped with kalamata olives, spinach, red onions, and feta cheese.", url:"https://cdn.pizzapizza.ca/o33/static/PPLNEWWEB/EN/products/full/1x/13920.png"},
    ])
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex("menu")
    .where('pizza_name', "Greek")
    .del()
  ])
};