const settings = require("../knexfile");

var knex = require('knex')(settings.development);

//get User name for user_id specified
var getSearchResultById = function getSearchResultById(userid, searchid) {
  return knex.select("*")
  .from("searchresults")
  .where({"userid": userid, "searchid": searchid});
}

module.exports = {
  getSearchResultById: getSearchResultById
}
