exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('consumers', function (table) {
      table.increments('id');
      table.string('consumer_name');
      table.string('email');
      table.string('phone');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('consumers')
  ])
};