const express = require('express');
const router = express.Router();

const CheckoutController = require('../controllers/checkoutController');

// Verifica se o usuário está logado
router.get('/information', CheckoutController.userNotLoggedIn);
// Pega a requisição e armazena no banco de dados via post
router.post('/information', CheckoutController.endereco);
// Renderiza a pagina de frete
router.get('/frete', CheckoutController.frete);

module.exports = router;