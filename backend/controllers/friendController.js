const db = require("../models");

const User = db.user;

exports.findFriends = async (req, res) => {
  const user = await User.findOne({ userName: req.body.userName });
  console.log(user.friends);
  res.status(200).send(user.friends)
};

exports.makeFriendRequest = async (req, res) => {
  const userToAdd = await User.findOne({ userName: req.body.addUserName });
  const userSending = await User.findOne({ userName: req.body.userName });

  if (!userToAdd)
    return res.status(404).send({ message: "User not found!" });
    
  userSending.friendRequestsSent.push(userToAdd.userName);
  userToAdd.friendRequestsReceived.push(userSending.userName);

  await userSending.save()
  await userToAdd.save();

  res.status(200).send({ message: "Friend request sent!" });
}

exports.handleFriendRequest = async (req, res) => {
  const userToAdd = await User.findOne({ userName: req.body.addUserName });
  const userAccepting = await User.findOne({ userName: req.body.userName });

  userAccepting.friendRequestsReceived = userAccepting.friendRequestsReceived.filter(el => el !== userToAdd.userName);
  userToAdd.friendRequestsSent = userToAdd.friendRequestsSent.filter(el => el !== userAccepting.userName);

  if (req.body.accepted) {
    userAccepting.friends.push(userToAdd.userName);
    userToAdd.friends.push(userAccepting.userName);
  }
  
  await userAccepting.save();
  await userToAdd.save();

  const msg = req.body.accepted ? 'accepted' : 'rejected';

  res.status(200).send({ message: `Friend ${msg}!` });
}

exports.deleteFriend = async (req, res) => {
  const friendToDelete = await User.findOne({ userName: req.body.deleteUserName });
  const userDeleting = await User.findOne({ userName: req.body.userName });

  friendToDelete.friends = friendToDelete.friends.filter(el => el !== userDeleting.userName);
  userDeleting.friends = userDeleting.friends.filter(el => el !== friendToDelete.userName);
  
  await friendToDelete.save();
  await userDeleting.save();

  res.status(200).send({ message: "Friend deleted!" });
}