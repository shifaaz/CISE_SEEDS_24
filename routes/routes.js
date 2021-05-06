const router = require("express").Router();
const articleController = require("../Controller/articleController");
const customSearchController = require("../Controller/customSearchController");



router
    .route("/getArticles")
    .get(articleController.getPublicArticle)

router
    .route("/articles/:ArticleId")
    .put(articleController.updatePublicArticleRating)
    .get(articleController.getSpecificArticle);

router
    .route("/sepractice")
    .get(customSearchController.getSePracticeMethods)
    .post(customSearchController.addMethod);

router
    .route("/sepractice/:sepracticeid")
    .put(customSearchController.addNewMethod);



router
    .route("/articles")
    .post(articleController.addNewArticle);

console.log("fileRoutes been activied");

module.exports = router;

