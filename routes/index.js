const express = require('express');
const router  = express.Router();
<<<<<<< HEAD

module.exports = (db) => {
  router.get("/", (req, res) => {
    res.render("index");
=======
const database = require('../HelperFunctions/getUserEmail.js');

module.exports = (db) => {
  router.get("/", (req, res) => {
    const accountEmail = req.session.user_id;
    console.log(accountEmail);
    //console.log("accountemail cookie",accountEmail);
    //database.getName(accountEmail).then((value) => {
      //console.log("TEST NAME: ", value);
      //const templateVars = {value};

   // });
      db.query(`SELECT * FROM items;`)
      .then(data => {
        const templateVars = {items:data.rows}
        //const item1 = templateVars[0]
        //console.log(templateVars);
        //console.log(templateVars)
        console.log('test',templateVars);


        res.render("index", templateVars);

    })
>>>>>>> item-feature
  });
  return router;
};
