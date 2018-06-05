let getOverallSentiments = require('./Data_Processing/OverallSentiments')
let getSpecificSentiments = require('./Data_Processing/SpecificSentiments')
let postsAnalyzer = require('./AI_Modules/MasterAnalyzer')

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
    createdAt: 'Yesterday'
  }
]

async function computeData(posts) {

    let analyzedPosts = await postsAnalyzer(posts)
    let overallSentiments = await getOverallSentiments(analyzedPosts)
    let specificSentiments = await getSpecificSentiments(analyzedPosts)

    return {
      overallHowManyWere: overallSentiments,
      specificHowManyWere: specificSentiments
    }

}



module.exports = computeData
