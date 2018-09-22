exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('orderline', function (table) {
      table.increments('id');
      table.integer('order_id');
      table.integer('menu_id');
      table.integer('qty')
      table.decimal('total_price');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('orderline')
  ])
};
