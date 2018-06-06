const settings = require("../knexfile");

var knex = require('knex')(settings.development);

//get User name for user_id specified
var getUserDetailsById = function getUserDetailsById(userid) {
  return knex.select("*")
  .from("users")
  .where({"id": userid});
}

module.exports = {
  getUserDetailsById: getUserDetailsById
}
