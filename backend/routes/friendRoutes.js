const { authJwt } = require("../middlewares");
const { verifyFriends } = require("../middlewares");
const controller = require("../controllers/friendController");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/friend/friends", [authJwt.verifyToken], controller.findFriends);
  app.post("/api/friend/makeFriendRequest", [authJwt.verifyToken], controller.makeFriendRequest);
  app.post("/api/friend/handleFriendRequest", [authJwt.verifyToken], controller.handleFriendRequest);
  app.post("/api/friend/deleteFriend", [authJwt.verifyToken], controller.deleteFriend);
  app.get("/api/friend/see-friends-anime", [authJwt.verifyToken, verifyFriends.checkIfFriends], controller.getFriendsAnime)
};