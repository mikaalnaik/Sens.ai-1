require('dotenv').config()

const fetch = require('node-fetch');
const express = require("express");
const bodyParser = require("body-parser");
const fetchRedditPosts = require('./media_modules/reddit-api')
const fetchTwitterPosts = require('./media_modules/twitter-api')
const statsCalculator = require('./statistics/Statistics.js')

const PORT = process.env.PORT || 3001;
const app = express();
const dbroutes = require('./db-routes')(app);
var usersModule = require("./modules/usersModule");
var searchResultModule = require("./modules/searchResultModule");
var helperModule = require("./modules/helperModule");


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// this route will respond with the analyzed posts from reddit and twitter
app.get("/results/:searchname", async (req, res) => {

    let searchname = req.params.searchname;

    console.log("")
    console.log("*** Connected to React Client ***")
    console.log("")
    console.log("")

    let redditPosts = await fetchRedditPosts(searchname)
    let twitterPosts = await fetchTwitterPosts(searchname)
    let allPosts = redditPosts.concat(twitterPosts)
    allPosts = await Promise.all(allPosts)

    console.log(allPosts.length, "posts recived from social media APIs")
    console.log("")
    console.log("")

    let stats = await statsCalculator(allPosts)

    console.log("Final results:")
    console.log("")
    console.log(stats)
    res.send(stats)


    //  =============== ADDING stats (final result), id (searchword if doesn't exist) to database and response to client all results for id (searchword)
    let userid = 1;   //assuming user id 1 as required in database (for future enhancement)
    let searchid = -1;  //assuming initial value for searchid
<<<<<<< HEAD

    searchResultModule.getSearchIdBySearchName(searchname)
    .then((rows) => {
      if(rows.length === 0) {   //to check if searchname does exist
        res.send([stats])
        //adding searchname if not exists
        searchResultModule.addNewSearchName(searchname)
        .then((rows) => {


          //getting searchid for newly added search name
          searchResultModule.getSearchIdBySearchName(searchname)
          .then((rows) => {
            searchid = rows[0].id;
            //console.log("searchid: ", searchid, " userid: ", userid);

            console.log(helperModule.doSearchResultToBeStored(stats));
            if(helperModule.doSearchResultToBeStored(stats)) {
              //adding searchresult to database
              searchResultModule.addNewSearchResult(userid, searchid, stats)
              .then((rows) => {
                //console.log(rows);
              })
              .catch((err) => {
                console.log(err);
              });
            }

            //retreiving all results and send as response
            searchResultModule.getSearchResultById(userid, searchid)
            .then((rows) => {
              //console.log(rows);

                //extracting searchresult and store into array and send as response
                let result = [];
                for(let row of rows) {
                  result.push(row.searchresult);
                }
                result.push(stats);
                //console.log(result);
                // res.send(result);

            })
            .catch((err) => {
              console.log(err);
            })


          }).catch((err) => { });


        })
        .catch((err) => {
          console.log(err);
        });

      } else {

        searchid = rows[0].id;

        console.log(helperModule.doSearchResultToBeStored(stats));
        if(helperModule.doSearchResultToBeStored(stats)) {
          //adding searchresult to database
          searchResultModule.addNewSearchResult(userid, searchid, stats)
          .then((rows) => {
            //console.log(rows);
          })
          .catch((err) => {
            console.log(err);
          });
        }

        //retreiving all results and send as response
        searchResultModule.getSearchResultById(userid, searchid)
        .then((rows) => {
          //extracting searchresult and store into array and send as response
          let result = [];
          let pastResults = [];
          result.push(stats);
          for(let row of rows) {
            pastResults.push(row.searchresult);
          }
          result.push(pastResults)
          console.log(`There are ${pastResults.length} past results.`)
          res.send(result);
        })
        .catch((err) => {
          console.log(err);
        })

      }
    })
    .catch((err) => {
      console.log(err);
    });

});
