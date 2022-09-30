const User = require('../modelsJson/Users');
const { Address } = require('../models');
const Checkout = require('../modelsJson/Checkout');

const CheckoutController = {
    index: async (req, res) => {
        let address = await Address.findAll();
    },

    userIsNotLoggedInAddress: (req, res) => {
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

    addAddress: async (req, res) => {
        // Recebe os dados do corpo da requisição (endereço digitado)
        const addressInformation = req.body;
        // Recebe o id do usuario logado caso estiver
        const { id } = req.session.user;

        const currentAddress = await Address.findOne({
            where: {
                cep: addressInformation.cep,
                cidade: addressInformation.cidade,
                rua: addressInformation.rua,
                numero: addressInformation.numero,
                bairro: addressInformation.bairro,
                complemento: addressInformation.complemento,
                estado: addressInformation.estado
            }
        })

        if (currentAddress) {
            req.session.addressId = currentAddress.id;
        } else if (!currentAddress) {
            const newAddress = await Address.create({
                ...addressInformation,
                usuarioId: id
            })
            req.session.addressId = newAddress.id;
        }
        res.redirect('/frete');

    },

    userIsNotLoggedInShipping: (req, res) => {
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
        const idCompra = Checkout.addFrete(idUsuario, idEndereco, produto, frete);
        req.session.idCompra = idCompra;
        console.log('aqui', idCompra);
        res.redirect('/metodo-de-pagamento');
    },

    metodoDePagamentoLogado: (req, res) => {
        console.log('METODO DE PAGAMENTO LOGADO');
        if (req.session.idCompra == undefined) {
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
        const idCompra = req.session.idCompra;
        const idUsuario = req.session.user.id;
        const { metodoDePagamento, ...dadosDoCartao } = req.body;
        console.log('ola', dadosDoCartao);
        const idCard = Checkout.formaDePagamentoCartao(idUsuario, dadosDoCartao);
        Checkout.atualizaCompra(idCompra, idCard, metodoDePagamento);
        console.log("ID CARD AQUI", idCard);
    }
}

module.exports = CheckoutController;