
exports.up = function(knex, Promise) {
  return knex.schema.createTable('searchresults', function (table) {
    table.increments();
    table.integer('userid').unsigned();
    table.integer('searchid');
    table.string('searchresult');
    table.foreign('userid').references('users.id');
    table.foreign('searchid').references('searchwords.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('searchresults');
};
