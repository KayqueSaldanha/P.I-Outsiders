const User = require('../models/Users');
const Checkout = require('../models/Checkout');


const CheckoutController = {
    userNotLoggedIn: (req, res) => {
        if (req.session.carrinho == undefined) {
            return res.redirect('/');
        }
        res.render('information');
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
        return endereco
    },

    userNotLoggedFrete: (req, res) => {
        if (req.session.endereco == undefined) {
            return res.redirect('/login');
        }
        res.render('shipping');
        if (req.session.carrinho == undefined) {
            return res.redirect('/');
        }
        res.render('shipping');
        if (req.session.user == undefined) {
            // Se não estiver logado, redireciona para a página login
            return res.redirect('/login');
        }
        res.render('shipping');
    },

    addFrete: (req, res) => {
        // Armazena o id do usuario da sessão numa constante chamada idUsuario
        const idUsuario = req.session.user.id
        // Pega o id do endereço e armazena numa constante
        const idEndereco = req.session.endereco
        // Pega o produto do carrinho e armazena numa constante
        const produto = req.session.carrinho
        // Pega a requisição do corpo e armazena na constante body
        const body = req.body.frete;
        // Trata a requisição do corpo que vem como texto simples e da um parse pro JSON
        const frete = JSON.parse(body);
        // Executa o metodo da Model pra adicionar o frete ao JSON com os parametros especificados
        const freteSession = Checkout.addFrete(idUsuario, idEndereco, produto, frete);
        req.session.frete = freteSession;
        res.redirect('/metodo-de-pagamento');
    },

    metodoDePagamentoLogado: (req, res) => {
        if (req.session.frete == undefined) {
            return res.redirect('/login');
        }
        res.render('payment');
        if (req.session.carrinho == undefined) {
            return res.redirect('/');
        }
        res.render('payment');
        if (req.session.user == undefined) {
            // Se não estiver logado, redireciona para a página login
            return res.redirect('/login');
        }
        res.render('payment');
    },

    metodoCartao: (req, res) => {
        const idUsuario = req.session.user.id;
        const dadosDoCartao = req.body.dadosDoCartao;
        console.log('ola', dadosDoCartao);
        const cartaoSession = Checkout.formaDePagamentoCartao(idUsuario, dadosDoCartao);
        req.session.cartao = cartaoSession;        
    }
}

module.exports = CheckoutController;