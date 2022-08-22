const express = require('express');
const router = express.Router();

const pageController = require('../controllers/pageController');
// const searchController = require('../controllers/searchController');


router.get('/', pageController.home)
router.get('/carrinho', pageController.carrinho)
router.get('/information', pageController.information)
router.get('/frete', pageController.frete)
router.get('/metodo-de-pagamento', pageController.metodo_de_pagamento)
router.get('/compra-confirmada', pageController.compra_confirmada)
router.get('/homem', pageController.homem)
router.get('/mulher', pageController.mulher)
router.get('/cadastro', pageController.cadastro)
router.get('/account', pageController.account)
router.get('/account_edit', pageController.account_edit)
router.get('/account_request', pageController.account_request)
router.get('/login', pageController.login)
router.get('/produtos', pageController.produtos)


// router.get('/search', searchController.search)

module.exports = router




// EXEMPLO DE ROTAS


// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// // GET carrinho page

// router


// // GET information page
// router.get('/information', (req, res)) => {
//   res.render()
// }

// module.exports = router;

