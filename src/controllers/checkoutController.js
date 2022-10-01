const User = require('../modelsJson/Users');
const { Address } = require('../models');
const { Shipping } = require('../models');
const { CreditCard } = require('../models');
const { Pix } = require('../models');
const { Ticket } = require('../models');
const { Purchase } = require('../models');
const Checkout = require('../modelsJson/Checkout');

const CheckoutController = {

    index: async (req, res) => {
        let address = await Address.findAll();

    },

    userIsNotLoggedInAddress: (req, res) => {

        !req.session.carrinho ? res.redirect('/') : res.render('information');
        !req.session.user ? res.redirect('/login') : res.render('information');
        
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
        });

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

        !req.session.addressId ? res.redirect('/login') : res.render('shipping');
        !req.session.carrinho ? res.redirect('/') : res.render('shipping');
        !req.session.user ? res.redirect('/login') : res.render('shipping');

    },

    addShippingMethod: async (req, res) => {
        // Pega a requisição do corpo e armazena na constante
        const shippingMethodSelector = req.body.frete;
        // Executa o metodo da Model pra adicionar o frete ao JSON com os parametros especificados
        const shippingId = await Shipping.findOne({
            where: {
                id: shippingMethodSelector
            }
        });
        req.session.shippingId = shippingId.id;
        res.redirect('/metodo-de-pagamento');
    },

    userIdNotLoggedInPaymentMethod: (req, res) => {

        !req.session.shippingId ? res.redirect('/login') : res.render('payment');
        !req.session.carrinho ? res.redirect('/') : res.render('payment');
        !req.session.user ? res.redirect('/login') : res.render('payment');

    },

    addPaymentMethod: async (req, res) => {

        const { id } = req.session.user
        const paymentMethodSelected = req.body

        if (paymentMethodSelected.metodoDePagamento === "cartao") {

            const creditCardInformations = req.body;
            const saveCard = req.body.saveCard;

            if (saveCard) {

                const newCreditCardSaved = await CreditCard.create({
                    ...creditCardInformations,
                    usuarioId: id
                });

                req.session.creditCardId = newCreditCardSaved.id;

            } else {

                const oldCreditCard = await CreditCard.findOne({
                    where: {
                        numero: creditCardInformations.numero,
                        validade: creditCardInformations.validade,
                        cvv: creditCardInformations.cvv,
                        nomeImpresso: creditCardInformations.nomeImpresso,
                        cpf: creditCardInformations.cpf
                    }
                });

                req.session.creditCardId = oldCreditCard.id;
                req.session.parcelNumbers = creditCardInformations.numeroParcela;

            };

        } else if (paymentMethodSelected.metodoDePagamento === "pix") {

            const pix = await Pix.create({
                qrCode: "123124124123",
                vencimento: "31/12/2022"
            });

            req.session.pixId = pix.id;

        } else {

            const ticket = await Ticket.create({
                codigoBarras: "12390.00005 00000.00006 00000.000007 8 56760000015075",
                codigoPdf: "https://www.africau.edu/images/default/sample.pdf",
                vencimento: "31/12/2022"
            });

            req.session.ticketId = ticket.id;
            
        };

        res.redirect('/compra-confirmada');

    },

    purchaseFinalization: async (req, res) => {

        !req.session.creditCardId || !req.session.pixId || !req.session.ticketId ? res.redirect('/login') : res.render('confirmation');

        await Purchase.create({
            where: {
                usuarioId: req.session.user.id,
                freteId: req.session.shippingId,
                enderecoId: req.session.addressId,
                boletoId: req.session.ticketId,
                pixId: req.session.pixId,
                cartaoId: req.session.creditCardId,                
                status: "Compra finalizada com sucesso",
                numeroParcela: req.session.parcelNumbers
            }
        })

    }
}

module.exports = CheckoutController;