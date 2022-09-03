const express = require('express');
const router = express.Router();

const carrinhoController = require('../controllers/carrinhoController');

router.post('/carrinho', carrinhoController.adicionar);
router.get('/carrinho', carrinhoController.aumentar);
router.get('/carrinho',carrinhoController.renderCart);
router.delete('/carrinho/:id', carrinhoController.diminuir);

module.exports = router;