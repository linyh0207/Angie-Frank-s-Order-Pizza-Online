exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('records', function (table) {
      table.increments('id');
      table.integer('order_id');
      table.integer('menu_id');
      table.integer('quantity');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('records')
  ])
};