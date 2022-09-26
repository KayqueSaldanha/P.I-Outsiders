const { Usuario } = require('../models');
const { createMenuObject } = require('../../helpers/createMenuObject');

const UsuarioController = {
    index: async (req, res) => {
        let usuarios = await Usuario.findAll();

        console.log(usuarios);
    },
    create: (req, res) => {
        return res.render('cadastro', {menu: createMenuObject('false')});
    },
    store: async (req, res) => {
        const { nome, sobrenome, email, password } = req.body;

        const resultado = await Usuario.create({
            nome,
            sobrenome,
            email,
            password
        })

        return res.redirect('/');
    }
}

module.exports = UsuarioController;