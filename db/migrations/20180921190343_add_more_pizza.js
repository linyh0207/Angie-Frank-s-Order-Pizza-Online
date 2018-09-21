exports.up = function(knex, Promise) {
  return Promise.all([
    knex("menu").insert([
      {pizza_name: "Chipotle Steak", price: 11.50,
       description: "Topped with chipotle sauce, chipotle steak, red onions, and mozzarella cheese.", 
       url:"https://cdn.pizzapizza.ca/o33/static/PPLNEWWEB/EN/products/full/1x/Chipotle-Steak.png"},
       {pizza_name: "Bacon Double Cheesebuger", price: 10.50,
       description: "Topped with ground beef, bacon crumble and four-cheese blend. Tip: Try with Honey Mustard dipping sauce.", 
       url:"https://cdn.pizzapizza.ca/o33/static/PPLNEWWEB/EN/products/full/1x/bacondblchburg.png"},
       {pizza_name: "Garden Veggie", price: 9.00,
       description: "Made with fresh mushrooms, green peppers, roma tomatoes, and mozzarella cheese.", 
       url:"https://cdn.pizzapizza.ca/o33/static/PPLNEWWEB/EN/products/full/1x/12500.png"},
    ])
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex("menu")
    .where('pizza_name', "Garden Veggie")
    .del()
  ])
};