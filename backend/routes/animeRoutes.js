const { authJwt } = require("../middlewares");
const controller = require("../controllers/animeController");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/anime/animes", [authJwt.verifyToken], controller.getAnimes);
  app.post("/api/anime/addAnime", [authJwt.verifyToken], controller.addAnime);
  app.post("/api/anime/deleteAnime", [authJwt.verifyToken], controller.deleteAnime);
};