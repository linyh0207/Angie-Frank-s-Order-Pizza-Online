exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('orders', function (table) {
      table.dropColumn('consumer_id');
      table.string('phone');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropColumn('phone')
  ])
};