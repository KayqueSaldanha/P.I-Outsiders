const express = require('express');
const router = express.Router();

const carrinhoController = require('../controllers/carrinhoController');


router.get('/carrinho',carrinhoController.renderCart);
router.post('/carrinho/:id', carrinhoController.adicionar);
// router.get('/carrinho', carrinhoController.aumentar);
// router.delete('/carrinho/:id', carrinhoController.diminuir);

module.exports = router;