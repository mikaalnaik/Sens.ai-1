
exports.up = function(knex, Promise) {
  return knex.schema.createTable('searchwords', function (table) {
    table.increments();
    table.string('searchname');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('searchwords');
};
