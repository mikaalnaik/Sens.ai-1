require('dotenv').config()

const fetch = require('node-fetch');
const express = require("express");
const bodyParser = require("body-parser");
const Twit = require('twit');
const fetchRedditContent = require('./redditAPI')

const PORT = process.env.PORT || 3001;
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));



// Twitter API
var T = new Twit({
consumer_key: process.env.SECRETCONSUMERKEY,
consumer_secret: process.env.SECRETCONSUMERSECRET,
access_token: process.env.SECRETACCESSTOKEN,
access_token_secret: process.env.SECRETACCESSTOKENSECRET,
timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
strictSSL:            true,     // optional - requires SSL certificates to be valid.
})


app.get("/results/:id", (req, res) => {

  async function getPosts() {

    fetchRedditContent()

//   T.get('search/tweets', { q: 'iphone X -filter:retweets', lang: "en", count: 50 }, function(err, data, response) {
//      tweetdata = data.statuses.map(status => ({
//       platform: "Twitter",
//       user: status.user.name,
//       content: status.text,
//       source: "nill",
//       created_at: status.created_at
//     }))
//
//     console.log(JSON.stringify({tweetdata}, null, 2))
  // })
  }
})
