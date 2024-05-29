import express from "express";
import BookController from "../controllers/bookController.js";

const routes = express.Router();

routes.get("/livros", BookController.listBooks);
routes.get("/livros/busca", BookController.listBooksByPublisher)
routes.get("/livro/:id", BookController.listBookById)
routes.post("/livros", BookController.registerBook);
routes.put("/livro/:id", BookController.updateBook)
routes.delete("/livro/:id", BookController.deleteBook)
export default routes