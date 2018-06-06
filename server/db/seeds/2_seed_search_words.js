
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('searchwords').del()
    .then(function () {
      // Inserts seed entries
      return knex('searchwords').insert([
        {id: 1, searchname: 'Cocacola'},
        {id: 2, searchname: 'iPhone'},
        {id: 3, searchname: 'LighthouseLabs'}
      ]);
    });
};
