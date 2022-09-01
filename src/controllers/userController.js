const User = require('../models/Users');
const { createMenuObject } = require('../../helpers/createMenuObject');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const UserController = {

    cadastro: (req, res) => {
        const { nome, sobrenome, email, password } = req.body;

        // Faz a criptografia da senha
        const hash = bcrypt.hashSync(password, saltRounds);

        // Chama a model para criar um novo usuário
        // Passando o email e a senha criptografada
        User.create({ nome, sobrenome, email, password: hash });

        // Redireciona para a página de login
        res.redirect('/login');
    },

    renderFormCadastro: (req, res) => {
        // Verifica se o usuário está logado
        // Ou seja, se existe uma sessão para o usuário
        if (req.session.user != undefined) {
            // Se estiver logado, redireciona para a página restrita
            return res.redirect('/account');
        }

        // Renderiza a página de cadastro de usuário
        return res.render('cadastro', {menu: createMenuObject('false')});
    }    
}

module.exports = UserController;