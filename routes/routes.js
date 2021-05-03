const router = require("express").Router();
const articleController = require("../Controller/articleController");



router
    .route("/getArticles")
    .get(articleController.getPublicArticle)

router
    .route("/articles/:ArticleId")
    .put(articleController.updatePublicArticleRating)
    .get(articleController.getSpecificArticle);




router
    .route("/declined")
    .get(articleController.getDeclinedArticle)
    .post(articleController.declineArticle);

router
    .route("/articles")
    .post(articleController.addNewArticle);

console.log("fileRoutes been activied");

module.exports = router;

