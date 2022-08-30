const Produto = require('../models/Produto');
const { createMenuObject } = require('../../helpers/createMenuObject')

const pageController = {
    information: (req, res) => {
        res.render('information');
    },

    frete: (req, res) => {
        res.render('shipping');
    },

    metodo_de_pagamento: (req, res) => {
        res.render('payment');
    },

    compra_confirmada: (req, res) => {
        res.render('confirmation');
    },



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

    mostrarProduto: (req, res) => {
        const { id } = req.params
        console.log(id)
        const interesses = Produto.findByStatus('interesses')
        const produto = Produto.findById(id)
        console.log(produto)
        res.render('produtos', {
            menu: createMenuObject('false'),
            produto,
            interesses
        });

    },

    home: (req, res) => {
        const diaDia = Produto.findByStatus('diaDia')
        const esporte = Produto.findByStatus('esporte')
        const homens = Produto.findByGenero('homem')
        res.render('home', {
            menu: createMenuObject('false'),
            homens,
            esporte,
            diaDia
        });

        res.render('home')
    },

    carrinho: (req, res) => {
        res.render('carrinho', {
            menu: createMenuObject('false')
        });
    }
}

module.exports = pageController;