exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('menu', function (table) {
      table.text('url');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropColumn('url')
  ])
};