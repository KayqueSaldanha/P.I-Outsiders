const express = require('express');
const router = express.Router();

const carrinhoController = require('../controllers/carrinhoController');

router.get('/carrinho', carrinhoController.adicionar)
// router.get('/carrinho', carrinhoController.remover)

module.exports = router;