const express = require("express");
const {addArticle, getArticle, deleteArticle,getArticleById, getArticleToEdit, editArticle} = require("../controller/article-controller.js");




const ArticleRouter = express.Router();


ArticleRouter.post("/Compose",addArticle)
ArticleRouter.get("/all",getArticle);
ArticleRouter.delete("/:id",deleteArticle);
ArticleRouter.get("/detailView/:id",getArticleById);
ArticleRouter.get("/:id",getArticleToEdit);
ArticleRouter.post("/:id",editArticle);

module.exports = ArticleRouter;
