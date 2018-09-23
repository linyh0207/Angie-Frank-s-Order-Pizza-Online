exports.up = function(knex, Promise) {
  return Promise.all([
    knex("menu").insert([
      {pizza_name: "Canadian EH!", price: 9.50,
       description: "Topped with classic pepperoni, fresh mushrooms, bacon crumble and mozzarella cheese. Made by a proudly Canadian company.", 
       url:"https://cdn.pizzapizza.ca/o33/static/PPLNEWWEB/EN/products/full/1x/canadian.png"},
       {pizza_name: "Sausage Mushroom Melt", price: 8.50,
       description: "Made with creamy garlic sauce, spicy Italian sausage, fresh mushrooms, Italiano blend seasoning, and mozzarella cheese.", 
       url:"https://cdn.pizzapizza.ca/o33/static/PPLNEWWEB/EN/products/full/1x/SausageMelt.png"},
       {pizza_name: "Tropical Hawaiian", price: 11.50,
       description: "Topped with pineapples, bacon crumble, bacon strips, and mozzarella cheese.", 
       url:"https://cdn.pizzapizza.ca/o33/static/PPLNEWWEB/EN/products/full/1x/12700.png"},
       {pizza_name: "Cauli Blanca", price: 13.50,
       description: "Cauliflower Crust, topped with olive oil, artichokes, grilled zucchini, roasted garlic, mozzarella cheese, parmesan and italiano blend seasoning.", 
       url:"https://cdn.pizzapizza.ca/o33/static/PPLNEWWEB/EN/products/full/1x/MCAO.png"}
    ])
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex("menu")
    .where('pizza_name', "Canadian EH!")
    .del()
  ])
};