import express from "express";
import connectToDatabse from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await connectToDatabse();

connection.on("error", (err) => {
  console.log("Erro de conexão", err);
});

connection.once("open", () => {
  console.log("Conexão bem sucedida");
});

const app = express();
routes(app);


app.delete("/livros/:id", (req, res) => {
  const index = getBook(req.params.id);
  books.splice(index, 1);
  res.status(204).json(books);
});

export default app;
