const settings = require("../knexfile");
const changeCase = require("change-case");


var knex = require('knex')(settings.development);


//get search result by search id specified
var getAllSearchResults = function getAllSearchResults() {
  return knex.select("*")
  .from("searchresults");
}


//get search result by user id and search id specified
var getSearchResultById = function getSearchResultById(userid, searchid) {
  return knex.select("*")
  .from("searchresults")
  .where({"userid": userid, "searchid": searchid});
}


//get search result by user id specified
var getSearchResultByUserId = function getSearchResultByUserId(userid) {
  return knex.select("*")
  .from("searchresults")
  .where({"userid": userid});
}


//get search result by search id specified
var getSearchResultBySearchId = function getSearchResultBySearchId(searchid) {
  return knex.select("*")
  .from("searchresults")
  .where({"searchid": searchid});
}



//get searchname (word) by searchid
var getSearchNameBySearchId = function getSearchNameBySearchId(search_id) {
  return knex.select("*")
  .from("searchwords")
  .where({"id": search_id});
}


//get searchid by searchname (word)
var getSearchIdBySearchName = function getSearchIdBySearchName(search_name) {
  search_name = changeCase.upper(search_name);
  return knex.select("*")
  .from("searchwords")
  .where({"searchname": search_name});
}


//get all searchnames (words)
var getAllSearchNames = function getAllSearchNames() {
  return knex.select("*")
  .from("searchwords");
}


//add new search word (name)
var addNewSearchName = function addNewSearchName(searchname) {
  searchname = changeCase.upper(searchname);
  return knex.insert({"searchname": searchname}).into("searchwords");
}


//add new search result
var addNewSearchResult = function addNewSearchResult(uid, sid, sresultjson) {
  return knex.insert({"userid": uid, "searchid": sid, "searchresult": sresultjson}).into("searchresults");
}


module.exports = {
  getAllSearchResults: getAllSearchResults,
  getSearchResultById: getSearchResultById,
  getSearchResultByUserId: getSearchResultByUserId,
  getSearchResultBySearchId: getSearchResultBySearchId,
  getSearchNameBySearchId: getSearchNameBySearchId,
  getSearchIdBySearchName: getSearchIdBySearchName,
  getAllSearchNames: getAllSearchNames,
  addNewSearchName: addNewSearchName,
  addNewSearchResult: addNewSearchResult
}
