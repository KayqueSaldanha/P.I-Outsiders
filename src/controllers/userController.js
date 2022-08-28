const { create } = require('domain');
const User = require('../models/Users');
const { createMenuObject } = require('../../helpers/createMenuObject');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const userController = {

    cadastro: (req, res) => {
        const { nome, sobrenome, email, password } = req.body;

        // Faz a criptografia da senha
        const hash = bcrypt.hashSync(password, saltRounds);

        // Chama a model para criar um novo usuário
        // Passando o email e a senha criptografada
        User.create({ nome, sobrenome, email, password: hash });

        // Redireciona para a página de login
        res.redirect('/users/login');
    },

    renderFormCadastro: (req, res) => {
        // Verifica se o usuário está logado
        // Ou seja, se existe uma sessão para o usuário
        if (req.session.user != undefined) {
            // Se estiver logado, redireciona para a página restrita
            return res.redirect('/account');
        }

        // Renderiza a página de cadastro de usuário
        return res.render('/cadastro');
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