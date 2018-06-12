let getOverallSentiments = require('./Data_Processing/OverallSentiments')
let getSpecificSentiments = require('./Data_Processing/SpecificSentiments')
let postsAnalyzer = require('./AI_Modules/MasterAnalyzer')
let moment = require('moment');

async function computeData(posts) {

  let analyzedPosts = await postsAnalyzer(posts)

  console.log(analyzedPosts.length, "posts came back through the intent filter and the sentiment analyzer")
  console.log("")
  console.log("")

  let twitterPosts = [];
  let redditPosts = [];

  for (post of analyzedPosts) {
    if (post.platform == 'Twitter') {
      twitterPosts.push(post)
    } else if (post.platform == 'Reddit') {
      redditPosts.push(post)
    }
  }


  let overallSentiments = await getOverallSentiments(analyzedPosts)
  let specificSentiments = await getSpecificSentiments(analyzedPosts)
  let timeCreated = moment().format('ll')
  let stats = {
    all: {
      overallHowManyWere: await getOverallSentiments(analyzedPosts),
      specificHowManyWere: await getSpecificSentiments(analyzedPosts)
    },

    twitter: {
      overallHowManyWere: await getOverallSentiments(twitterPosts),
      specificHowManyWere: await getSpecificSentiments(twitterPosts)
    },

    reddit: {
      overallHowManyWere: await getOverallSentiments(redditPosts),
      specificHowManyWere: await getSpecificSentiments(redditPosts)
    },
    createdAt : timeCreated
  }

  return stats

}

module.exports = computeData
