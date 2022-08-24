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

    homem: (req, res) => {
        const produtos = Produto.findByGenero('homem')
        res.render('department', {
            menu: createMenuObject('homem'),
            banner: {
                background: 'img_homem.png'
            },
            produtos
        })
    },

    mulher: (req, res) => {
        const produtos = Produto.findByGenero('mulher')
        res.render('department', {
            menu: createMenuObject('mulher'),
            banner: {
                background: 'img_mulher.png'
            }
            , produtos
        })
    },

    account: (req, res) => {
        res.render('account');
    },

    account_edit: (req, res) => {
        res.render('account_edit');
    },

    account_request: (req, res) => {
        res.render('account_request');
    },

    produtos: (req, res) => {
        res.render('produtos', { menu: createMenuObject('false') });
    },

    login: (req, res) => {
        res.render('login');
    },

    cadastro: (req, res) => {
        res.render('cadastro');
    },

    home: (req, res) => {
        res.render('home', {
            menu: createMenuObject('false'),
        })
    },

    carrinho: (req, res) => {
        res.render('carrinho')
    }
}

module.exports = pageController;