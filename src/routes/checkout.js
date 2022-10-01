const express = require('express');
const router = express.Router();

const CheckoutController = require('../controllers/checkoutController');
const renderShippingMethod = require('../middlewares/renderShippingMethod');

// Verifica se o usuário está logado
router.get('/information', CheckoutController.userIsNotLoggedInAddress);
// Pega a requisição e armazena no banco de dados via post
router.post('/information', CheckoutController.addAddress);
// Renderiza a pagina de frete
router.get('/frete', renderShippingMethod, CheckoutController.userIsNotLoggedInShipping);
// Adiciona o frete por post
router.post('/frete', CheckoutController.addShippingMethod);
// renderiza a pagina de pagamento
router.get('/metodo-de-pagamento', CheckoutController.userIdNotLoggedInPaymentMethod);

router.post('/metodo-de-pagamento', CheckoutController.addPaymentMethod);

router.get('/compra-confirmada', CheckoutController.purchaseFinalization);



module.exports = router;