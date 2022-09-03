const express = require('express');
const router = express.Router();

const CheckoutController = require('../controllers/checkoutController');

// 
router.get('/information', CheckoutController.userNotLoggedIn);
// Pega a requisição e armazena no banco de dados via post
router.post('/information', CheckoutController.endereco);

module.exports = router;