// ============================================================
// Controller responsável pelo cadastro de um usuário no banco
// ============================================================
const { User } = require('../models');
const { createMenuObject } = require('../../helpers/createMenuObject');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const UserController = {
    index: async (req, res) => {
        let usuarios = await User.findAll();
    },
    // metodo para renderizar a página de criação de um novo usuário
    renderFormRegister: (req, res) => {

        if (req.session.user != undefined) {
            // Se estiver logado, redireciona para a página restrita
            return res.redirect('/account');
        }

        // Renderiza a página de cadastro de usuário
        return res.render('cadastro', {menu: createMenuObject('false')});
    },
    // método para fazer a gravação no banco de dados dos usuários
    createNewUser: async (req, res) => {
        // essa variável armazena os dados recebidos via body
        const { nome, sobrenome, email, senha } = req.body;

        const hash = bcrypt.hashSync(senha, saltRounds);

        // esse resultado é assincrono e faz a inclusão no DB dos parametros armazenados anteriormente
        await User.create({
            nome,
            sobrenome,
            email,
            senha: hash
        })

        return res.redirect('/');
    }
}

module.exports = UserController;