const db = require("../models");

const User = db.user;

exports.getAnimes = async (req, res) => {
  const user = await User.findById(req.userId);

  res.status(200).send(user.animeList);
}

exports.addAnime = async (req, res) => {
  const user = await User.findById(req.userId);

  user.animeList.push({
    title: req.body.title,
    image: req.body.image,
    airing: req.body.airing,
    synopsis: req.body.synopsis,
    episodes: req.body.episodes,
    score: req.body.score,
    rated: req.body.rated
  });

  await user.save();

  res.status(200).send({ message: "Anime added to the list!" });
}

exports.deleteAnime = async (req, res) => {
  const user = await User.findById(req.userId);

  user.animeList = user.animeList.filter(el => el.title !== req.body.title);

  user.save();

  res.status(200).send({ message: "Anime deleted from the list!" });
}