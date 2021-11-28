var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const db = require("../models");
require('dotenv').config();

const User = db.user;

exports.signup = (req, res) => {
  const user = new User({
    userName: req.body.userName,
    profilePicture: req.body.profilePicture,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  });

  user.save(err => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.send({ message: "User was registered successfully!" });
  });
};

exports.signin = (req, res) => {
  User.findOne({
    userName: req.body.userName
  })
  .exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (!user)
      return res.status(404).send({ message: "User Not found." });

    var passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!passwordIsValid)
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!"
      });

    var token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: 86400 });

    res.status(200).send({
      id: user._id,
      userName: user.userName,
      email: user.email,
      accessToken: token
    });
  });
};