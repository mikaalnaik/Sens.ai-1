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
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));


// this route will respond with the analyzed posts from reddit and twitter
app.get("/results/:id", async (req, res) => {
    let redditPosts = await fetchRedditPosts(req.params.id)
    let twitterPosts = await fetchTwitterPosts(req.params.id)
    let allPosts = redditPosts.concat(twitterPosts)
    allPosts = await Promise.all(allPosts)
    let stats = await statsCalculator(allPosts)
    console.log(stats)

})
