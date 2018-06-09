
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('searchresults').del()
    .then(function () {
      // Inserts seed entries
      return knex('searchresults').insert([
        {
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
        },
        {
          userid: 1,
          searchid: 2,
          searchresult: {
            overallHowManyWere: {
                                  positive: 15,
                                  negative: 85
                                },
          specificHowManyWere: {
                                  dissapointed: 10,
                                  angry: 20,
                                  cautious: 25.5,
                                  doubtful: 15,
                                  happy: 29.5
                                }
                              }
        },
        {
          userid: 1,
          searchid: 1,
          searchresult: {
            overallHowManyWere: {
                                  positive: 95,
                                  negative: 5
                                },
          specificHowManyWere: {
                                  dissapointed: 2,
                                  angry: 3,
                                  cautious: 3,
                                  doubtful: 2,
                                  happy: 90
                                }
                              }
        },
        {
          userid: 1,
          searchid: 3,
          searchresult: {
            overallHowManyWere: {
                                  positive: 50,
                                  negative: 50
                                },
          specificHowManyWere: {
                                  dissapointed: 20,
                                  angry: 25,
                                  cautious: 5,
                                  doubtful: 7,
                                  happy: 43
                                }
                              }
        },
        {
          userid: 1,
          searchid: 3,
          searchresult: {
            overallHowManyWere: {
                                  positive: 39,
                                  negative: 61
                                },
          specificHowManyWere: {
                                  dissapointed: 34,
                                  angry: 7,
                                  cautious: 9,
                                  doubtful: 20,
                                  happy: 30
                                }
                              }
        }
      ]);
    });
};
