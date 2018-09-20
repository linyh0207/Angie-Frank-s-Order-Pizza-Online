exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('records', function (table) {
      table.foreign('order_id').references('id').inTable('orders');
      table.foreign('menu_id').references('id').inTable('menu');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropColumn('order_id'),
    knex.schema.dropColumn('menu_id')
  ])
};