const mongoose = require('mongoose');

const User = mongoose.model(
  'User',
  new mongoose.Schema({
    userName: {
      type: String,
      required: true
    },
    profilePicture: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    friends: [{
      userName: String,
      profilePicture: String,
    }],
    friendRequestsSent: [String],
    friendRequestsReceived: [String],
    animeList: [{
      title: String,
      image: String,
      airing: Boolean,
      synopsis: String,
      episodes: Number,
      score: Number,
      rated: String,
      seen: Boolean
    }]
  })
);

module.exports = User;