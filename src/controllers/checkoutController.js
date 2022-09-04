const User = require('../models/Users');
const Checkout = require('../models/Checkout');


const CheckoutController = {
    userNotLoggedIn: (req, res) => {
        // Verifica se o usuário está logado
        // Ou seja, se existe uma sessão para o usuário
        if (req.session.user == undefined) {
            // Se não estiver logado, redireciona para a página login
            return res.redirect('/login');
        }
        res.render('information');
    },

    endereco: (req, res) => {
        // Recebe os dados do corpo da requisição (endereço digitado)
        const endereco = req.body;
        // Recebe o id do usuario logado caso estiver
        const { id } = req.session.user;
        // Salva o endereço com as informações salvas nas constantes anteriores
        Checkout.addInfo({ userid: id, endereco });
        // Redireciona para a proxima etapa frete
        res.redirect('/frete');
    },

    frete: (req, res) => {
        res.render('shipping');
    }
}

module.exports = CheckoutController;