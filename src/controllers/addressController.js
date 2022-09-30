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
            const currentAddressId = currentAddress.id;
        } else if (!currentAddress) {
            const newAddress = await Address.create({
                ...addressInformation,
                usuarioId: id
            })
            const newAddressId = newAddress.id;
        } else {
            return res.redirect('/frete');
        }
    }
}

module.exports = AddressController;