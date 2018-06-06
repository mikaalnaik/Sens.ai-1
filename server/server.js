require('dotenv').config()

const fetch = require('node-fetch');
const express = require("express");
const bodyParser = require("body-parser");
const fetchRedditPosts = require('./media_modules/reddit-api')
const fetchTwitterPosts = require('./media_modules/twitter-api')
const statsCalculator = require('./statistics/Statistics.js')

const PORT = process.env.PORT || 3001;
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))
<<<<<<< HEAD
.listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));
=======
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));
>>>>>>> e03e81a4bf4a04c73cfa51a30bbda04268d0c4d3

//////////////// CODE PART - 1 : ROUTES FOR DATABASE MODULES - CREATED BY HEMANT /////////////////////////

app.get("/users/:id", (req, res) => {
  userModule.getUserDetailsById(req.params.id)
  .then((rows) => {
    res.json(rows);
  })
  .catch((err) => {
    console.log(err);
  });

});

app.get("/results/user/:id1/search/:id2", (req, res) => {
  searchResultModule.getSearchResultById(req.params.id1, req.params.id2)
  .then((rows) => {
    res.json(rows);
  })
  .catch((err) => {
    console.log(err);
  })
});
//////////////////// END OF CODE PART - 1 /////////////////////////



// this route will respond with the analyzed posts from reddit and twitter
app.get("/results/:id", async (req, res) => {

    // let redditPosts = await fetchRedditPosts(req.params.id)
    // let twitterPosts = await fetchTwitterPosts(req.params.id)
    // let allPosts = redditPosts.concat(twitterPosts)
    // allPosts = await Promise.all(allPosts)

    let stats = await statsCalculator(queryResults)
    console.log(stats)
    res.send(stats)
})
