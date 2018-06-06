function includesNegativeEmotion(analysis) {
 return ['Sadness', 'Anger', 'Fear', 'Tentative'].indexOf(analysis.tone) >= 0
}
function includesPositiveEmotion(analysis) {
  return ['Joy', 'Confidence'].indexOf(analysis.tone) >= 0
}

async function overallSentiments(analyzedPosts) {

  analyzedPosts = await analyzedPosts

  let counter = function(posts) {  //  counts posts with positive or negative emotion
    let positiveCount = 0
    let negativeCount = 0

    for (let post of posts) {

      post.tones.forEach( analysis => {
        if (includesNegativeEmotion(analysis)) {
          negativeCount++;
        } else if (includesPositiveEmotion(analysis)) {
          positiveCount++;
        }
      })
    }

    return {positiveCount: positiveCount, negativeCount: negativeCount}
  }

  let sentimentCount = counter(analyzedPosts)
  let total = sentimentCount.positiveCount + sentimentCount.negativeCount
  let percentages = {
    positive: Number(((sentimentCount.positiveCount / total) * 100).toFixed(2)),
    negative: Number(((sentimentCount.negativeCount / total) * 100).toFixed(2))
  }

  return percentages
}

module.exports = overallSentiments
