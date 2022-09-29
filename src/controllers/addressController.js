const { Address } = require('../models');

const AddressController = {
    index: async (req, res) => {
        let address = await Address.findAll();
    },

    userIsNotLoggedIn: (req, res) => {
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
        const { cep, cidade, rua, numero, bairro, complemento, estado } = req.body;
        // Recebe o id do usuario logado caso estiver
        const { id } = req.session.user;

        const currentAddress = await Address.findOne({
            where: {
                cep: cep,
                cidade: cidade,
                rua: rua,
                numero: numero,
                bairro: bairro,
                complemento: complemento,
                estado: estado
            }
        })

        if (!currentAddress) {
            await Address.create({
                cep,
                cidade,
                rua,
                numero,
                bairro,
                complemento,
                estado,
                usuarioId: id
            })
        } else {
            req.session.userAddressId = id;
            return currentAddress, res.redirect('/frete');
        }
    }
}

module.exports = AddressController;