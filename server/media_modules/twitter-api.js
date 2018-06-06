require('dotenv').config()
const Twit = require('twit');

var twitterApiKey = new Twit(
  {
    consumer_key: process.env.SECRETCONSUMERKEY,
    consumer_secret: process.env.SECRETCONSUMERSECRET,
    access_token: process.env.SECRETACCESSTOKEN,
    access_token_secret: process.env.SECRETACCESSTOKENSECRET,
  })

const fetchTwitterPosts = function(query) {

  return new Promise (function(resolve, reject) {

    twitterApiKey.get('search/tweets', { q: `${query} -filter:retweets`, lang: "en", count: 50}, function(err, data, response) {
      tweetdata = data.statuses.map(status => ({
        platform: "Twitter",
        user: status.user.name,
        content: status.text,
        source: "nill",
        created_at: status.created_at
        })

      )
      resolve(tweetdata)
    })

  })
}

module.exports = fetchTwitterPosts
