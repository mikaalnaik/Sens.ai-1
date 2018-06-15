require('dotenv').config()

var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
var toneAnalyzer = new ToneAnalyzerV3(
  {
    "version": "2017-09-21",
    "url": "https://gateway.watsonplatform.net/tone-analyzer/api",
    "username": process.env.C_IBM_USER,
    "password": process.env.C_IBM_PASSWORD
  });


const sentimentAnalyzer = function(post) {
  return new Promise(function(resolve, reject) {

    post.tones = [];

    let toneParams = { // toneParams is the required input for the toneAnalyzer API
      'tone_input': { 'text': post.content },
      'content_type': 'application/json'
    }

    toneAnalyzer.tone(toneParams, function (error, analysis) {
      const tones = analysis.document_tone.tones

      if (error) {
        console.log('error',error);
        return reject(error)
      } else {
        if (tones.length > 0) { // eluding a scenario where content has no analyzed sentimentss
          tones.forEach( tone => {
            if (tone.tone_id === 'sadness' || tone.tone_id === 'anger' || tone.tone_id === 'fear' || tone.tone_id === 'tentative' || tone.tone_id === 'joy' || tone.tone_id === 'confident') {
              post.tones.push({tone: tone.tone_name, confidence: tone.score})
            }
          })
        }

        return resolve(post);
      }
    })
  })
};

module.exports = sentimentAnalyzer
