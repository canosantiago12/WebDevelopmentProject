const db = require("../models");

const User = db.user;

exports.findUser = async (req, res) => {
  const users = await User.find();
  const foundUsers = users.filter(el => el.userName.includes(req.query.name))
  
  res.status(200).send(foundUsers.map(el => ({
    userId: el._id,
    userName: el.userName,
    email: el.email,
    profilePicture: el.profilePicture,
    animeList: el.animeList,
    friends: el.friends,
    friendRequestsSent: el.friendRequestsSent,
    friendRequestsReceived: el.friendRequestsReceived
  })));
}

exports.findFriends = async (req, res) => {
  const user = await User.findById(req.userId);

  res.status(200).send(user.friends);
};

exports.makeFriendRequest = async (req, res) => {
  const userToAdd = await User.find({ userName: req.body.addUserName });
  const userSending = await User.findById(req.userId);

  if (!userToAdd)
    return res.status(404).send({ message: "User not found!" });

  userSending.friendRequestsSent.push(userToAdd[0].userName);
  userToAdd[0].friendRequestsReceived.push(userSending.userName);

  await userSending.save();
  await userToAdd[0].save();

  res.status(200).send({ message: "Friend request sent!" });
}

exports.handleFriendRequest = async (req, res) => {
  const userToAdd = await User.find({ userName: req.body.addUserName });
  const userAccepting = await User.findById(req.userId);

  userAccepting.friendRequestsReceived = userAccepting.friendRequestsReceived.filter(el => el !== userToAdd[0].userName);
  userToAdd[0].friendRequestsSent = userToAdd[0].friendRequestsSent.filter(el => el !== userAccepting.userName);

  if (req.body.accepted) {
    userAccepting.friends.push({userName: userToAdd[0].userName, profilePicture: userToAdd[0].profilePicture});
    userToAdd[0].friends.push({userName: userAccepting.userName, profilePicture: userAccepting.profilePicture});
  }
  
  await userAccepting.save();
  await userToAdd[0].save();

  const msg = req.body.accepted ? 'accepted' : 'rejected';

  res.status(200).send({ message: `Friend ${msg}!` });
}

exports.deleteFriend = async (req, res) => {
  const friendToDelete = await User.find({ userName: req.body.deleteUserName });
  const userDeleting = await User.findById(req.userId);

  friendToDelete[0].friends = friendToDelete[0].friends.filter(el => el.userName !== userDeleting.userName);
  userDeleting.friends = userDeleting.friends.filter(el => el.userName !== friendToDelete[0].userName);
  
  await friendToDelete[0].save();
  await userDeleting.save();

  res.status(200).send({ message: "Friend deleted!" });
}

exports.getFriendsAnime = async (req, res) => {
  const userToCheck = await User.find({ userName: req.body.userToCheckName});

  res.status(200).send(userToCheck[0].animeList);
}