const User = require('../models/Users');

const userController = {

    cadastro: (req, res) => {

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