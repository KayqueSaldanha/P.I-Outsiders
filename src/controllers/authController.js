// ========================================================
// Controller responsável por gerenciar a sessão do usuário
// (Ex: login, logout)
// ========================================================
const { createMenuObject } = require('../../helpers/createMenuObject');
const bcrypt = require('bcrypt');
const { User } = require('../models');

const AuthController = {
    login: async (req, res) => {
        // Busca no banco de dados um usuário pelos campos especificados
        const user = await User.findOne({
            // attribute: atributos nos quais o metodo findOne irá procurar
            attibutes: ['id', 'email', 'senha'],
            // onde o email é igual ao que foi recebido pelo corpo da requisição
            where: {
                email: req.body.email
            }
        });

        // Verifica se o usuário existe
        if (!user) {
            // Se não existir, renderiza a página de login com erro
            return res.render('login', { error: 'Email ou senha inválidos', menu: createMenuObject('false') });
        }

        // Verifica se a senha informada é a mesma que a senha criptografada no db
        const validPassword = bcrypt.compareSync(req.body.senha, user.senha);
        // Verifica se a senha é válida
        if (!validPassword) {
            // Se a senha for inválida, renderiza a página de login com erro
            return res.render('login', { error: 'Email ou senha inválidos', menu: createMenuObject('false') });
        }

        // Se o email e a senha forem válidos, cria uma sessão para o usuário
        // Salvando as informações do usuário na sessão
        req.session.user = {
            email: user.email,
            id: user.id,
            nome: user.nome,
            sobrenome: user.sobrenome,
            cpf: user.cpf,
            dataNascimento: user.dataNascimento,
            telefone: user.telefone
        };

        // Redireciona para a página home
        return res.redirect('/');
    },

    logout: (req, res) => {
        // Exclui a sessão do usuário
        req.session.destroy();

        // Redireciona para a página inicial
        return res.redirect('/login');
    },

    renderLogin: (req, res) => {
        // Verifica se o usuário está logado
        // Ou seja, se existe uma sessão para o usuário
        if (req.session.user != undefined) {
            // Se estiver logado, redireciona para a página restrita
            return res.redirect('/account');
        }

        // Renderiza a página de login
        return res.render('login', { error: null, menu: createMenuObject('false') });
    },

    renderRestrictArea: (req, res) => {
        const userData = req.session.user;
        // Renderiza a página restrita passando os dados do usuário logado
        return res.render('account', { userData });
    },

    editForm: async (req, res) => {
        const userData = req.session.user;

        res.render('account_edit', { userData });
    },

    edit: async (req, res) => {
        const userData = req.body;

        await User.update(
            {
                nome: userData.nome,
                sobrenome: userData.sobrenome,
                cpf: userData.cpf,
                telefone: userData.telefone,
                dataNascimento: userData.dataNascimento
            }, {
                where: {
                    id: req.session.user.id
                }
            }
        )

        res.redirect('/account')
    }
}

module.exports = AuthController;