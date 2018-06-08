
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('searchwords').del()
    .then(function () {
      // Inserts seed entries
      return knex('searchwords').insert([
        {searchname: 'COCACOLA'},
        {searchname: 'IPHONE'},
        {searchname: 'KINGS BURGER'}
      ]);
    });
};
