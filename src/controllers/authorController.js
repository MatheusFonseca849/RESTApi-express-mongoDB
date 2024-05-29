import { author } from "../models/author.js";

class AuthorController {
    static async listAuthors(req,res){
        try {
            const authorList = await author.find({});
            res.status(200).json(authorList)
        } catch (err) {
            res.status(500).json({
                message:`Erro: Falha na requisição: ${err.message}`
            })
        }
    }

    static async listAuthorById(req,res){
        try {
          const id = req.params.id;
          const searchedAuthor = await author.findById(id)
        
          res.status(200).json(searchedAuthor)
        } catch (err) {
          res.status(500).json({message: "Livro não encontrado"})
          console.log(err)
        }
      }

      static async registerAuthor(req,res){
        try {
            const newAuthor = await author.create(req.body)
            res.status(201).json({
                message: "Livro cadastrado com sucesso!",
                author: newAuthor
            });
        } catch (err) {
            res.status(500).json({
                message:`${err.message} - Falha ao cadastrar livro.`
            })
        }
      }

      static async updateAuthor(req, res){
        try {
          const id = req.params.id
          await author.findByIdAndUpdate(id, req.body);
          res.status(200).json({message: "Livro atualizado com sucesso"})
    
        } catch (err) {
          res.status(500).json(`Falha ao cadastrar livro: ${err.message}`)
        }
      }
    
      static async deleteAuthor(req, res){
        try {
          const id = req.params.id
          await author.findByIdAndDelete(id);
          res.status(200).json({message: "Livro excluído com sucesso"})
    
        } catch (err) {
          res.status(500).json(`Falha ao excluir livro: ${err.message}`)
        }
      }
}

export default AuthorController