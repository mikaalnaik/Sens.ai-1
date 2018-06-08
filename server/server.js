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

    console.log("*** Connected to React Client ***")
    console.log("")
    console.log("")

    let redditPosts = await fetchRedditPosts(req.params.id)
    let twitterPosts = await fetchTwitterPosts(req.params.id)
    let allPosts = redditPosts.concat(twitterPosts)
    allPosts = await Promise.all(allPosts)

    console.log(allPosts.length, "posts recived from social media APIs")
    console.log("")
    console.log("")

    let stats = await statsCalculator(allPosts)

    console.log("Final results:")
    console.log("")
    console.log("")
    console.log(stats)
    
    res.send(stats)

});
