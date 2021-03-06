const { verifySignUp } = require("../middlewares");
const { authJwt } = require("../middlewares");
const controller = require("../controllers/authController");

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/auth/user", [authJwt.verifyToken], controller.getUser)
  app.post("/api/auth/signup", [verifySignUp.checkDuplicateUsernameOrEmail], controller.signup);
  app.post("/api/auth/signin", controller.signin);};