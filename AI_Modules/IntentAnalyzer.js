require('dotenv').config()
const pd = require('paralleldots');
const Promise = require('bluebird')

pd.apiKey = process.env.PD_API_KEY

const intentAnalyzer = function(post) { // analyzes all posts

  return new Promise(function(resolve, reject) {
    pd.intent(post.content)
      .then((response) => {
        let res = JSON.parse(response)
        post.analysis = res
        return resolve(post)
      })
  })

}

async function intentFilter(posts) { // filters posts based on intent

  let intentAnalyzedPosts = posts.map( post => {
    return intentAnalyzer(post)
  })

  intentAnalyzedPosts = await Promise.all(intentAnalyzedPosts)

  const intentFilter = function(post) {

    let intent = post.analysis.intent
    let probabilityOf = post.analysis.probabilities

    if (intent == 'feedback/opinion' && probabilityOf["feedback/opinion"] >= 0.5) {
      return post
    }

  }

  return filteredPosts = await Promise.filter(intentAnalyzedPosts, intentFilter)
}

module.exports = intentFilter
