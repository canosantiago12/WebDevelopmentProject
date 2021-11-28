const mongoose = require('mongoose');

const User = mongoose.model(
  'User',
  new mongoose.Schema({
    userName: {
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
    friends: [String],
    animeList: [{
      title: String,
      image: String,
      airing: Boolean,
      synopsis: String,
      episodes: Number,
      score: Number,
      rated: String
    }]
  })
);

module.exports = User;