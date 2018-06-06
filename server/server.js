require('dotenv').config()

const fetch = require('node-fetch');
const express = require("express");
const bodyParser = require("body-parser");
const fetchRedditPosts = require('./media_modules/reddit-api')
const fetchTwitterPosts = require('./media_modules/twitter-api')

const PORT = process.env.PORT || 3001;
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))
.listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

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

app.get("/results/:id", async (req, res) => {

    let redditPosts = await fetchRedditPosts(req.params.id)
    let twitterPosts = await fetchTwitterPosts(req.params.id)

    res.json({redditPosts: redditPosts, twitterPosts: twitterPosts})
})
