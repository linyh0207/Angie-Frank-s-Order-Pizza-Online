exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('cart', function (table) {
      table.foreign('menu_id').references('id').inTable('menu');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropColumn('menu_id')
  ])
};