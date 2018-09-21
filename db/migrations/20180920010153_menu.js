exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('menu', function (table) {
      table.increments('id');
      table.string('pizza_name');
      table.decimal('price');
      table.string('description');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('menu')
  ])
};
