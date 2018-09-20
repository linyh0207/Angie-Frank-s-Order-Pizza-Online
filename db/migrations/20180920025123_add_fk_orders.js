exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('orders', function (table) {
      table.foreign('consumer_id').references('id').inTable('consumers');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropColumn('consumer_id'),
  ])
};