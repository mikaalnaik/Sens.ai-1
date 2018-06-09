var usersModule = require("./modules/usersModule");
var searchResultModule = require("./modules/searchResultModule");
const changeCase = require("change-case");

module.exports = function(app) {

    //get user details by userid
    app.get("/users/:id", (req, res) => {
      usersModule.getUserDetailsById(req.params.id)
      .then((rows) => {
        res.json(rows);
      })
      .catch((err) => {
        console.log(err);
      });
    });


    //get user details by username
    app.get("/users/name/:name", (req, res) => {
      usersModule.getUserDetailsByName(req.params.name)
      .then((rows) => {
        res.json(rows);
      })
      .catch((err) => {
        console.log(err);
      });
    });

    //get all user details
    app.get("/users", (req, res) => {
      usersModule.getAllUserDetails()
      .then((rows) => {

        // console.log(rows);
        // let usersObj = {users: rows};
        // res.render("users_index", {usersObj: usersObj});

        res.json(rows);
      })
      .catch((err) => {
        console.log(err);
      });
    });


    //add new user to the database
    app.post("/users", (req, res) => {

      usersModule.getUserDetailsByName(req.body.username)
      .then((rows) => {
        if(rows.length === 0) {   //to check if user does exist
          //adding user if not exists
          usersModule.addNewUser(req.body.username)
          .then((rows) => {
            res.redirect("/users");
            //res.send(`User ${req.body.username} is registered successfully!`);
          })
          .catch((err) => {
            console.log(err);
          });
        } else {
          // res.send("User already exists!");
          res.redirect("/users");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    });


    //get search result by user id and search id
    app.get("/results/user/:id1/search/:id2", (req, res) => {
      searchResultModule.getSearchResultById(req.params.id1, req.params.id2)
      .then((rows) => {
        res.json(rows);
      })
      .catch((err) => {
        console.log(err);
      })
    });

    //get search result by user id
    app.get("/results/user/:id", (req, res) => {
      searchResultModule.getSearchResultByUserId(req.params.id)
      .then((rows) => {
        res.json(rows);
      })
      .catch((err) => {
        console.log(err);
      })
    });


    //get search result by search id
    app.get("/results/search/:id", (req, res) => {
      searchResultModule.getSearchResultBySearchId(req.params.id)
      .then((rows) => {
        res.json(rows);
      })
      .catch((err) => {
        console.log(err);
      })
    });

    //get all search results
    app.get("/results", (req, res) => {
      searchResultModule.getAllSearchResults()
      .then((rows) => {

        // console.log(rows);
        // let searchResultsObj = {searchResults: rows};
        // res.render("searchresults_index", {searchResultsObj: searchResultsObj});

        res.json(rows);
      })
      .catch((err) => {
        console.log(err);
      })
    });



    //add new searchname (word) to the database
    app.post("/results", (req, res) => {

          searchResultModule.addNewSearchResult(req.body.userid, req.body.searchid, req.body.searchresult)
          .then((rows) => {
            res.redirect("/results");
            //res.send(`User ${req.body.username} is registered successfully!`);
          })
          .catch((err) => {
            console.log(err);
          });
    });

    //get all search words (names)
    app.get("/searchnames", (req, res) => {
      searchResultModule.getAllSearchNames()
      .then((rows) => {

        console.log(rows);
        let searchNamesObj = {searchNames: rows};
        res.render("searchnames_index", {searchNamesObj: searchNamesObj});


        //res.json(rows);
      })
      .catch((err) => {
        console.log(err);
      })
    });


    //get search name by searchid
    app.get("/searchnames/:id", (req, res) => {
      searchResultModule.getSearchNameBySearchId(req.params.id)
      .then((rows) => {
        res.json(rows);
      })
      .catch((err) => {
        console.log(err);
      })
    });


    //get search id by searchname
    app.get("/searchnames/name/:name", (req, res) => {
      searchResultModule.getSearchIdBySearchName(req.params.name)
      .then((rows) => {
        res.json(rows);
      })
      .catch((err) => {
        console.log(err);
      })
    });

    //add new searchname (word) to the database
    app.post("/searchnames", (req, res) => {

      searchResultModule.getSearchIdBySearchName(req.body.searchname)
      .then((rows) => {
        if(rows.length === 0) {   //to check if searchname does exist
          //adding searchname if not exists
          searchResultModule.addNewSearchName(req.body.searchname)
          .then((rows) => {
            res.redirect("/searchnames");
            //res.send(`User ${req.body.username} is registered successfully!`);
          })
          .catch((err) => {
            console.log(err);
          });
        } else {
          //res.send("Searchname already exists!");
          res.redirect("/searchnames");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    });
}
