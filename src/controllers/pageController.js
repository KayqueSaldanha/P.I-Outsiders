const Produto = require('../models/Produto');
const { createMenuObject } = require('../../helpers/createMenuObject')

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

    mostrarProduto: (req, res) => {
        const { id } = req.params
        const interesses = Produto.findByStatus('interesses')
        const produto = Produto.findById(id)
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
    }

}

module.exports = pageController;