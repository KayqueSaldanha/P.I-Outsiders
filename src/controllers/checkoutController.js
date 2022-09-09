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
        const idEndereco = Checkout.addEndereco({ userid: id, endereco });
        // Redireciona para a proxima etapa frete
        req.session.endereco = idEndereco;
        res.redirect('/frete');
    },

    frete: (req, res) => {
        res.render('shipping');
    },

    addFrete: (req, res) => {
        // Salvando o corpo da requisição numa constante
        const frete = req.body;
        // Salvando o a sessão do carrinho numa constante
        const produtos = req.session.carrinho;
        // Salvando o id do usuario numa constante
        const { id } = req.session.user;
        // Salvando o id do endereço numa constante
        const idEndereco = req.session.endereco;
        // Executando a função de addFrete e armazenando o retorno dela numa constante
        const idCompra = Checkout.addFrete(id, idEndereco, produtos, frete);
        // deixando o idCompra disponivel para ser usado em outra parte do código
        req.session.idCompra = idCompra;
        res.redirect('/metodo-de-pagamento');
    },

    metodoDePagamento: (req, res) => {
        res.render('payment');
    }
}

module.exports = CheckoutController;