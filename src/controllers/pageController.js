const { ProdutoModel } = require('../models');
const { Product } = require('../models');
const { createMenuObject } = require('../../helpers/createMenuObject');
const Produto = require('../modelsJson/Produto');

const pageController = {
    department: (req, res) => {
        const { categoria } = req.params;
        const produtos = Produto.findByGenero(categoria)
        res.render('department', {
            menu: createMenuObject(categoria),
            banner: {
                background: `departamento_${categoria}.jpg`
            },
            produtos, 
            categoria
        });
    },

    produtos: (req, res) => {
        res.render('produtos', {
            menu: createMenuObject('false'),
        })
        res.render('produtos');
    },

    mostrarProduto: async (req, res) => {
        const { id } = req.params
        const interesses = Produto.findByStatus('interesses')
        const produto = Produto.findById(id)
        res.render('produtos', {
            menu: createMenuObject('false'),
            produto,
            interesses
        });

    },

    remover: async (req, res) => {
        const idProduto = await User.findOne({
            attibutes: ['id'],
            where: {
                id : req.params.id
            }
        })
    },

    // aumentar: (req, res) => {
    //         const idProduto = req.params.id
    //         const produtoIndex = req.session.produtos.findIndex(produto => produto.id === idProduto)
    //         const produto = req.session.produtos[produtoIndex]
    //          req.session.produtos[produtoIndex] = { ...produto, quantidade: produto.quantidade + 1 }
    //         res.redirect('/carrinho')
    //      },

    home: async (req, res) => {
        const diaDia = Produto.findByStatus('diaDia')
        const esporte = Produto.findByStatus('esporte')
        let homens = await Product.findAll({ 
                where: { 
                    categoria: 'homem',
                }
            });
        res.render('home', { esporte, diaDia, homens, menu: createMenuObject('false') })}

}

module.exports = pageController