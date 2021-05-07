const specificRouter = require("express").Router();
const articleController = require("../controller/articleController");
const customSearchController = require("../controller/customSearchController");
const fileController = require("../controller/fileController");
const userController = require("../controller/userController")





specificRouter
  .route('/users')
  .get(userController.getUsers);


module.exports = specificRouter;
