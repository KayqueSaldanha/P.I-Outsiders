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
        res.render('department');
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
        res.render('produtos');
    },

    login: (req, res) => {
        res.render('login');
    },

    cadastro: (req, res) => {
        res.render('cadastro');
    },

    home: (req, res) => {
        res.render('home')
    },

    carrinho: (req, res) =>{
        res.render('carrinho')
    }
}

module.exports = pageController;