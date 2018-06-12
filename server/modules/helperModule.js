

//Helper function to check if the searchresult contains any of the value NaN or not?
//If it is NaN, it is not to be stored in the database
var doSearchResultToBeStored = (searchresult) => {
  let tw = searchresult.twitter.overallHowManyWere;
  let twspec = searchresult.twitter.specificHowManyWere;
  let rd = searchresult.reddit.overallHowManyWere;
  let rdspec = searchresult.reddit.specificHowManyWere;

  let result1 = (isNaN(tw.positive) || isNaN(rd.positive) || isNaN(tw.negative) || isNaN(rd.negative));

  let result2 = (isNaN(twspec.dissapointed) || isNaN(twspec.angry) || isNaN(twspec.cautious) || isNaN(twspec.doubtful) || isNaN(twspec.happy));

  let result3 = (isNaN(rdspec.dissapointed) || isNaN(rdspec.angry) || isNaN(rdspec.cautious) || isNaN(rdspec.doubtful) || isNaN(rdspec.happy));


  // let result3 = (isNaN(rdspec.positive) || isNaN(rdspec.negative));


  return !(result1 || result2 || result3);
}


module.exports = {
  doSearchResultToBeStored: doSearchResultToBeStored
}
