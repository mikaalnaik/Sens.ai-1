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


// Twitter API
var T = new Twit({
consumer_key: process.env.SECRETCONSUMERKEY,
consumer_secret: process.env.SECRETCONSUMERSECRET,
access_token: process.env.SECRETACCESSTOKEN,
access_token_secret: process.env.SECRETACCESSTOKENSECRET,
timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
strictSSL:            true,     // optional - requires SSL certificates to be valid.
})
console.log(T.config.consumer_key);
=======
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));
>>>>>>> eeb956af6d14961da80aca19b890655d0af9dbb9

  const queryResults = [
    {
      platform: 'Reddit',
      user: 'Bobbie Brown',
      title: 'Reddit Article',
      content: 'I love this product',
      createdAt: 'Yesterday'
    },
    {
      platform: 'Reddit',
      user: 'Jack Hugh',
      title: 'Reddit Article',
      content: 'I love this product',
      createdAt: 'Yesterday'
    },
    {
      platform: 'Reddit',
      user: 'Man',
      title: 'Reddit Article',
      content: 'I hate this product',
      createdAt: 'Yesterday'
    },
    {
      platform: 'Reddit',
      user: 'Woman',
      title: 'Reddit Article',
      content: 'This product is ok.',
      createdAt: 'Yesterday' }] // TEST DATA

// this route will respond with the analyzed posts from reddit and twitter
app.get("/results/:id", async (req, res) => {

    // let redditPosts = await fetchRedditPosts(req.params.id)
    // let twitterPosts = await fetchTwitterPosts(req.params.id)
    // let allPosts = redditPosts.concat(twitterPosts)
    // allPosts = await Promise.all(allPosts)

    let stats = await statsCalculator(queryResults)

    res.send(stats)
})
