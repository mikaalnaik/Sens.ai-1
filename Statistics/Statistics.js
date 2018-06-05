let overallSentiments = require('./Data_Processing/OverallSentiments')
let specificSentiments = require('./Data_Processing/SpecificSentiments')
let postsAnalyzer = require('./AI_Modules/MasterAnalyzer')
const testData = require('./testdata/reddit.js');

async function computeData(posts) {

  analyzedPosts = await postsAnalyzer(posts)
  overallSentiments = await overallSentiments(analyzedPosts)
  specificSentiments = await specificSentiments(analyzedPosts)


  let x = {
    overallHowManyWere: overallSentiments,
    specificHowManyWere: specificSentiments
  }

  console.log(x)
}


module.exports = computeData(testData)
