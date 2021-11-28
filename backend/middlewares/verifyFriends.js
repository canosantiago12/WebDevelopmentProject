const db = require("../models");

const User = db.user;

checkIfFriends = async (req, res, next) => {
  const userChecking = await User.findById(req.userId);
  const userToCheck = await User.findById(req.body.userToCheckId);

  if (!userChecking.friends.includes(userToCheck.userName) || !userToCheck.friends.includes(userChecking.userName)) {
    res.status(400).send({ message: "You are not freinds with this user!" });
    return;
  }

  next();
};

const verifyFriends = {
  checkIfFriends,
};

module.exports = verifyFriends;