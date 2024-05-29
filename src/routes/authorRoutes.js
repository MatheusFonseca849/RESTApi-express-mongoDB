import express from "express";
import AuthorController from "../controllers/authorController.js";
import BookController from "../controllers/bookController.js";

const routes = express.Router();

routes.get("/authors", AuthorController.listAuthors);
routes.get("/authors/:id", AuthorController.listAuthorById);
routes.post("/authors", AuthorController.registerAuthor);
routes.put("/author/:id", AuthorController.updateAuthor);
routes.delete("/author/:id", AuthorController.deleteAuthor)

export default routes