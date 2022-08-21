const Produto = require('../models/Produto');

const produtoController = {
    index: (req, res) =>{
        const produtos = Produto.findAll();
        res.render('cadastroProdutos/index', { produtos });
    },

    criar: (req, res) =>{
        res.render('cadastroProdutos/cadastro');
    },

    criarProduto: (req, res) =>{
        const produto = req.body;
        const imagem = req.file.filename;
        Produto.criar(produto, imagem);
        res.redirect('/adm');
    },
}


module.exports = produtoController;