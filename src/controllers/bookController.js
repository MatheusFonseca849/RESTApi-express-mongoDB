import { author } from "../models/author.js";
import book from "../models/book.js";

class BookController {
  static async listBooks(req, res) {
    try {
      const bookList = await book.find({});
      res.status(200).json(bookList);
    } catch (err) {
      res.status(500).json({
        message: `Erro: Falha na requisição: ${err.message}`,
      });
    }
  }

  static async listBookById(req, res) {
    try {
      const id = req.params.id;
      const searchedBook = await book.findById(id);

      res.status(200).json(searchedBook);
    } catch (err) {
      res.status(500).json({ message: "Livro não encontrado" });
      console.log(err);
    }
  }

  static async registerBook(req, res) {
    const newBook = req.body

    try {

      const bookAuthor = await author.findById(newBook.author)
      const completeBook = { ...newBook, author: { ...bookAuthor._doc } }
      const createdBook = await book.create(completeBook)
      res.status(201).json({
        message: "Livro cadastrado com sucesso!",
        book: createdBook,
      });
    } catch (err) {
      res.status(500).json({
        message: `${err.message} - Falha ao cadastrar livro.`,
      });
    }
  }

  static async updateBook(req, res) {
    try {
      const id = req.params.id;
      await book.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Livro atualizado com sucesso" });
    } catch (err) {
      res.status(500).json(`Falha ao cadastrar livro: ${err.message}`);
    }
  }

  static async deleteBook(req, res) {
    try {
      const id = req.params.id;
      await book.findByIdAndDelete(id);
      res.status(200).json({ message: "Livro excluído com sucesso" });
    } catch (err) {
      res.status(500).json(`Falha ao excluir livro: ${err.message}`);
    }
  }

  static async listBooksByPublisher(req, res){
    const publisher = req.query.publisher
    try {
      const booksByPublisher = await book.find({publisher:publisher})
      res.status(200).json(booksByPublisher)
    } catch (err) {
      res.status(500).json(`Falha ao excluir livro: ${err.message}`);
    }
  }
}

export default BookController;
