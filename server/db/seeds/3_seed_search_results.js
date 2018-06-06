
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('searchresults').del()
    .then(function () {
      // Inserts seed entries
      return knex('searchresults').insert([
        {
          id: 1,
          userid: 1,
          searchid: 1,
          searchresult: {
            overallHowManyWere: {
                                  positive: 25,
                                  negative: 75
                                },
          specificHowManyWere: {
                                  dissapointed: 0,
                                  angry: 0,
                                  cautious: 33.33,
                                  doubtful: 33.33,
                                  happy: 33.33
                                }
                              }
        }
      ]);
    });
};
