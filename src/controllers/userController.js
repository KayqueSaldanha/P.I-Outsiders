const { create } = require('domain');
const User = require('../models/Users');

const userController = {

    cadastro: (req, res) => {
        const user = req.body;

        User.create(user);
        res.redirect('/users/login');
    },

    formularioCadastro: (req, res) => {
        res.render('cadastro');
    },

    login: (req, res) => {

    },

    account: (req, res) => {

    },

    accountEdit: (req, res) => {

    },

    accountRequest: (req, res) => {

    },

    index: (req, res) => {
        const users = User.findAll();
        res.render('', { users });
    }


}

module.exports = userController;