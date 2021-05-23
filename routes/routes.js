const router = require("express").Router();
const articleController = require("../controller/articleController");
const customSearchController = require("../controller/customSearchController");
const fileController = require("../controller/fileController");
const userController = require("../controller/userController")




router
  .route("/getArticles")
  .get(articleController.getPublicArticle)

router
  .route("/getSeMethods")
  .get(articleController.getSeMethods)

router
  .route("/getClaims")
  .get(articleController.getClaims)

router
  .route("/articles/:ArticleId")
  .put(articleController.updatePublicArticleRating)
  .get(articleController.getSpecificArticle);

router
  .route("/moderation")
  .get(articleController.getModeratorArticle)
  .post(articleController.moderatorAcceptArticle);

router
  .route("/moderation/:ArticleId")
  .delete(articleController.moderatorDelete);

router
  .route("/analyst")
  .get(articleController.getAnalystArticle)
  .post(articleController.analystAcceptArticle);

router
  .route("/analyst/:ArticleId")
  .delete(articleController.analystDelete)


router
  .route("/declined")
  .get(articleController.getDeclinedArticle)
  .post(articleController.declineArticle);

router
  .route("/methods")
  .get(customSearchController.getSeMethods)
  .post(customSearchController.addMethod);


router
  .route("/methods/:methodId")
  .put(customSearchController.addNewMethod);

router
  .route("/register")
  .post(userController.addNewUser)

router
  .route("/login")
  .post(userController.login)

router
  .route("/getUser")
  .get(userController.getAllUsers)

router
  .route("/getUser/:UserId")
  .put(userController.changeRole)
  .delete(userController.deleteUser)

router
  .route("/articles")
  .post(articleController.addNewArticle);

router
  .route("/files")
  .get(fileController.getFile)
  .post(fileController.addNewFile);
console.log("fileRoutes been activied");

router
  .route("/search/:seMethod/:claim/:startDate/:endDate")
  .get(articleController.searchArticle)
console.log("search been activied");

router
  .route("/searchWithoutYr/:seMethod/:claim")
  .get(articleController.searchArticlewithoutYr)
console.log("search been activied");
module.exports = router;

