const fetch = require('node-fetch')
const express = require("express");
const bodyParser = require("body-parser");
let Twit = require('twit');
require('dotenv').config()

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const PORT = process.env.PORT || 3001;
console.log(process.env.SECRETCONSUMERKEY);


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

app.get("/api/hello", (req, res) => {

async function getPosts() {
  let reddit = await fetch('https://api.pushshift.io/reddit/search/comment?q=budweiser&limit=50')
  let resolvedReddit = await reddit.json()
  // console.log(resolvedReddit.data);
  let mappedReddit = resolvedReddit.data.map(data => ({
    platform: 'Reddit',
    user: data.author,
    content: data.body,
    source: data.permalink,
    created_at: data.created_utc
  })
)
console.log(mappedReddit);



  T.get('search/tweets', { q: 'iphone X -filter:retweets', lang: "en", count: 50 }, function(err, data, response) {
     tweetdata = data.statuses.map(status => ({
      platform: "Twitter",
      user: status.user.name,
      content: status.text,
      source: "nill",
      created_at: status.created_at
    }))
    // console.log(data);
    console.log(JSO N.stringify({tweetdata}, null, 2))
  })
}



    let posts = getPosts()
    //
    // res.send(computeData(posts))
})

  // Make the express server serve static assets (html, javascript, css) from the /public folder

  app.use(express.static('public'))
    .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));
