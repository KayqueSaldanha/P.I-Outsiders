const express = require('express');
const router = express.Router();

const CheckoutController = require('../controllers/checkoutController');

// Verifica se o usuário está logado
router.get('/information', CheckoutController.userNotLoggedIn);
// Pega a requisição e armazena no banco de dados via post
router.post('/information', CheckoutController.endereco);
// Renderiza a pagina de frete
router.get('/frete', CheckoutController.userNotLoggedFrete);
// Adiciona o frete por post
router.post('/frete', CheckoutController.addFrete);
// renderiza a pagina de pagamento
router.get('/metodo-de-pagamento', CheckoutController.metodoDePagamentoLogado);

router.post('/metodo-de-pagamento', CheckoutController.metodoCartao);



module.exports = router;