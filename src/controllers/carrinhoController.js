const User = require('../models/Users');
const { createMenuObject } = require('../../helpers/createMenuObject');
const bcrypt = require('bcrypt');

const carrinhoController = {

    adicionar: (req, res) => {
        res.render('carrinho', {
            menu: createMenuObject('false')
        })
    },

    remover:(req,res) =>{

    }
}


module.exports = carrinhoController