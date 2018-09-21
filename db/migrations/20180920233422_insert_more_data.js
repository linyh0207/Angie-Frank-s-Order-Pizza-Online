exports.up = function(knex, Promise) {
  return Promise.all([
    knex("menu").insert([
      {pizza_name: "Italian", price: 11.00,
       description: "Topped with Genoa salami, spicy Italian sausage, parmesan cheese, red onions and Italiano blend seasoning.", 
       url:"https://cdn.pizzapizza.ca/o33/static/PPLNEWWEB/EN/products/full/1x/13930.png"},
    ])
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex("menu")
    .where('pizza_name', "Italian")
    .del()
  ])
};