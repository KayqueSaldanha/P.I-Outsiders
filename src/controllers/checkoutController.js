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
        const { address } = req.body;
        // Recebe o id do usuario logado caso estiver
        const { id } = req.session.user;
        // Busca o usuario da sessão e armazena numa constante
        const idUser = User.findById(id);
        // Salva o endereço com as informações salvas nas constantes anteriores
        Checkout.addInfo({ idUser, ...address });
        // Redireciona para a proxima etapa frete
        res.redirect('/frete');
    }
}

module.exports = CheckoutController;