const settings = require("../knexfile");
const changeCase = require("change-case");

var knex = require('knex')(settings.development);

//get User name for user_id specified
var getAllUserDetails = function getAllUserDetails() {
  return knex.select("*")
  .from("users");
}

//get User details for username specified
var getUserDetailsByName = function getUserDetailsByName(username) {
  username = changeCase.upper(username);
  return knex.select("*")
  .from("users")
  .where({"name": username});
}



//get User details for user_id specified
var getUserDetailsById = function getUserDetailsById(userid) {
  return knex.select("*")
  .from("users")
  .where({"id": userid});
}

//add new username
var addNewUser = function addNewUser(username) {
  username = changeCase.upper(username);
  return knex.insert({name: username}).into("users");
}


module.exports = {
  getUserDetailsByName: getUserDetailsByName,
  getAllUserDetails: getAllUserDetails,
  getUserDetailsById: getUserDetailsById,
  addNewUser: addNewUser
}
