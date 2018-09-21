exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('orders', function (table) {
      table.increments('id');
      table.string('status');
      table.integer('consumer_id');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('orders')
  ])
};