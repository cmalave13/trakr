const router = require("express").Router(); // creates route
let User = require("../models/user.model"); // calls in mongoose model

router.route("/").get((req, res) => {
  // first route, endpoint that handles get requests
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;

  const newUser = new User({ username }); // creates new instance of username

  newUser
    .save() // new user saved to db
    .then(() => res.json("User Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router; //
