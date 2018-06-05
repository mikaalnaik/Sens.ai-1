const sentimentAnalyzer = require('./SentimentAnalyzer.js')
const intentFilter = require('./IntentAnalyzer.js')
const Promise = require('bluebird')

/*
  this file returns a function that filters a set of posts by intent
  and adds to them a property called 'analysis' with the analyzed
  sentiments
*/

async function postsAnalyzer(posts) {

  let intentFilteredPosts = await intentFilter(posts)

  let sentimentAnalyzedPosts = intentFilteredPosts.map( post => {
    return sentimentAnalyzer(post)
  })

  return sentimentAnalyzedPosts = await Promise.all(sentimentAnalyzedPosts)

}

module.exports = postsAnalyzer
