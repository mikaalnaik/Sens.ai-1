
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
	                       "all":{
                           "overallHowManyWere":{"positive":100,"negative":0},
	                         "specificHowManyWere":{"disappointed":0,"angry":0,"cautious":0,"doubtful":0,"happy":100}
                         },
	                       "twitter":{
                           "overallHowManyWere":{"positive":100,"negative":0},
                           "specificHowManyWere":{"disappointed":0,"angry":0,"cautious":0,"doubtful":0,"happy":100}
                          },
                         "reddit":{
                           "overallHowManyWere":{"positive":67,"negative":33},
                         "specificHowManyWere":{"disappointed":12,"angry":29,"cautious":54,"doubtful":10,"happy":90}
                       },
	                        "createdAt":"Jun 2, 2018"
                      }
        },
        {
          userid: 1,
          searchid: 2,
          searchresult: {
	                       "all":{
                           "overallHowManyWere":{"positive":40,"negative":60},
	                         "specificHowManyWere":{"disappointed":20,"angry":20,"cautious":10,"doubtful":20,"happy":30}
                         },
	                       "twitter":{
                           "overallHowManyWere":{"positive":80,"negative":20},
                           "specificHowManyWere":{"disappointed":0,"angry":10,"cautious":10,"doubtful":0,"happy":80}
                          },
                          "reddit":{
                            "overallHowManyWere":{"positive":67,"negative":33},
                          "specificHowManyWere":{"disappointed":24,"angry":39,"cautious":54,"doubtful":10,"happy":90}
                        },
	                        "createdAt":"Jun 4, 2018"
                        }
        },
        {
          userid: 1,
          searchid: 1,
          searchresult: {
	                       "all":{
                           "overallHowManyWere":{"positive":14,"negative":86},
	                         "specificHowManyWere":{"disappointed":4,"angry":1,"cautious":3,"doubtful":2,"happy":90}
                         },
	                       "twitter":{
                           "overallHowManyWere":{"positive":55,"negative":45},
                           "specificHowManyWere":{"disappointed":0,"angry":0,"cautious":0,"doubtful":0,"happy":100}
                          },
                          "reddit":{
                            "overallHowManyWere":{"positive":67,"negative":33},
                          "specificHowManyWere":{"disappointed":12,"angry":29,"cautious":54,"doubtful":10,"happy":90}
                        },
	                        "createdAt":"Jun 5, 2018"
                        }
        },
        {
          userid: 1,
          searchid: 3,
          searchresult: {
	                       "all":{
                           "overallHowManyWere":{"positive":51,"negative":49},
	                         "specificHowManyWere":{"disappointed":22,"angry":7,"cautious":5,"doubtful":1,"happy":65}
                         },
	                       "twitter":{
                           "overallHowManyWere":{"positive":84,"negative":16},
                           "specificHowManyWere":{"disappointed":0,"angry":0,"cautious":0,"doubtful":16,"happy":84}
                          },
                          "reddit":{
                            "overallHowManyWere":{"positive":67,"negative":33},
                          "specificHowManyWere":{"disappointed":12,"angry":29,"cautious":54,"doubtful":10,"happy":90}
                        },
	                        "createdAt":"Jun 7, 2018"
                        }
        },
        {
          userid: 1,
          searchid: 3,
          searchresult: {
	                       "all":{
                           "overallHowManyWere":{"positive":42,"negative":58},
	                         "specificHowManyWere":{"disappointed":3,"angry":9,"cautious":6,"doubtful":3,"happy":79}
                         },
	                       "twitter":{
                           "overallHowManyWere":{"positive":47,"negative":53},
                           "specificHowManyWere":{"disappointed":7,"angry":1,"cautious":3,"doubtful":43,"happy":46}
                          },
                          "reddit":{
                            "overallHowManyWere":{"positive":67,"negative":33},
                          "specificHowManyWere":{"disappointed":12,"angry":29,"cautious":54,"doubtful":10,"happy":90}
                        },
	                        "createdAt":"Jun 8, 2018"
                        }
        }
      ]);
    });
};
