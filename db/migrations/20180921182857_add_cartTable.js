exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('cart', function (table) {
      table.increments('id');
      table.integer('menu_id');
      table.integer('qty');
      table.decimal('sub_total');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('cart')
  ])
};
