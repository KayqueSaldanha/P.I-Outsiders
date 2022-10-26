const User = require('../modelsJson/Users');
const { Address, Shipping, CreditCard, Pix, Ticket, Purchase, Product } = require('../models');

const CheckoutController = {

    index: async (req, res) => {
        let address = await Address.findAll();

    },

    userIsNotLoggedInAddress: (req, res) => {

        const productCart = req.session.carrinho;
        console.log("carrinho aqui", productCart[0].quantidade);

        !req.session.carrinho ? res.redirect('/') : res.render('information', { productCart });
        !req.session.user ? res.redirect('/login') : res.render('information', { productCart });
        
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

    userIsNotLoggedInShipping: async (req, res) => {

        const productCart = req.session.carrinho;
        console.log("carrinho aqui", productCart[0].dataValues.preco);
        
        const firstField = await Shipping.findOne({
            where: {
                id: 1
            }
        });
        const secondField = await Shipping.findOne({
            where: {
                id: 2
            }
        });
        const thirdField = await Shipping.findOne({
            where: {
                id: 3
            }
        });

        !req.session.addressId ? res.redirect('/login') : res.render('shipping', { productCart, firstField, secondField, thirdField });
        !req.session.carrinho ? res.redirect('/') : res.render('shipping', { productCart, firstField, secondField, thirdField });
        !req.session.user ? res.redirect('/login') : res.render('shipping', { productCart, firstField, secondField, thirdField });
        

    
        // res.render('shipping', { productCart, firstField, secondField, thirdField });


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

            const oldCreditCard = await CreditCard.findOne({
                where: {
                    numero: creditCardInformations.numero,
                    validade: creditCardInformations.validade,
                    cvv: creditCardInformations.cvv,
                    nomeImpresso: creditCardInformations.nomeImpresso,
                    cpf: creditCardInformations.cpf
                }
            });

            if (!oldCreditCard) {

                const newCreditCardSaved = await CreditCard.create({
                    ...creditCardInformations,
                    usuarioId: id
                });

                req.session.creditCardId = newCreditCardSaved.id;

            } else {

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
        
        const purchaseInformation = await Purchase.create({            
            usuarioId: req.session.user.id,
            freteId: req.session.shippingId,
            enderecoId: req.session.addressId,
            boletoId: req.session.ticketId,
            pixId: req.session.pixId,
            cartaoId: req.session.creditCardId,                
            status: "Compra finalizada com sucesso",
            numeroParcela: req.session.parcelNumbers
        });
        
        const purchaseId = await Purchase.findOne({
            where: {
                id: purchaseInformation.id
            }
        });
        const userData = req.session.user;
        const addressData = await Address.findOne({
            where: {
                id: req.session.addressId
            }
        });
        const shippingData = await Shipping.findOne({
            where: {
                id: req.session.shippingId
            }
        });

        // !req.session.creditCardId || !req.session.pixId || !req.session.ticketId ? res.redirect('/login') : '';

        res.render('confirmation', { purchaseInformation, userData, addressData, shippingData, purchaseId });
    }
}

module.exports = CheckoutController;