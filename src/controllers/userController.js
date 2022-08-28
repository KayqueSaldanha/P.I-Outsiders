const { create } = require('domain');
const User = require('../models/Users');
const { createMenuObject } = require('../../helpers/createMenuObject');

const userController = {

    cadastro: (req, res) => {
        const user = req.body;

        User.create(user);
        res.redirect('/users/login');
    },

    formularioCadastro: (req, res) => {
        res.render('cadastro', { menu: createMenuObject('false') });
    },

    login: (req, res) => {
        res.render('login', { menu: createMenuObject('false') });
    },

    account: (req, res) => {
        res.render('account')
    },

    accountEdit: (req, res) => {
        res.render('account_edit')
    },

    accountRequest: (req, res) => {
        res.render('account_request')
    },

    index: (req, res) => {
        const users = User.findAll();
        res.render('', { users });
    }


}

module.exports = userController;