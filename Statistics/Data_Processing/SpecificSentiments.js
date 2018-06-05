function sentimentCounter(analysis, counterObj) {
  if (analysis.tone == 'Sadness') {
    counterObj.dissapointed++;
  } else if (analysis.tone == 'Angry') {
    counterObj.angry++;
  } else if (analysis.tone == 'Fear') {
    counterObj.cautious++;
  } else if (analysis.tone == 'Tentative') {
    counterObj.doubtful++;
  } else if (analysis.tone == 'Joy') {
    counterObj.happy++;
  } else if (analysis.tone == 'Confidence') {
    counterObj.confident++;
  }
}

async function specificSentiments(analyzedPosts) {

  analyzedPosts = await analyzedPosts

  let sentimentCount = (function() {
    let counter = {
      dissapointed: 0,
      angry: 0,
      cautious: 0,
      doubtful: 0,
      happy: 0
    }

    for (post of analyzedPosts) {
      post.tones.forEach( analysis => {
        sentimentCounter(analysis, counter)
      })
    }
    return counter
  })()

  let totalCount = (function() {
    let total = 0;
    for ( emotion in sentimentCount ) {
      total += sentimentCount[emotion]
    }
    return total
  })()

  let percentages = (function() {
    let percentages = {}
    for (emotion in sentimentCount) {
      percentages[emotion] = Number(((sentimentCount[emotion]/totalCount)*100).toFixed(2)) // so that it only displays 2 decimal places
    }
    return percentages
  })()

  return percentages
}

module.exports = specificSentiments
