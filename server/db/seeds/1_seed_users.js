
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'TEMPUSER1'},
        {name: 'TEMPUSER2'},
        {name: 'TEMPUSER3'},
        {name: 'TEMPUSER4'},
        {name: 'TEMPUSER5'}
      ]);
    });
};
