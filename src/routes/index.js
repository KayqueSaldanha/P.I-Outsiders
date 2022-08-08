const express = require('express');
const router = express.Router();

const pageController = require('../src/controllers/pageController')
const searchController = require('../src/controllers/searchController')


router.get('/', pageController.home)
router.get('/carrinho', pageController.carrinho)
router.get('/information', pageController.information)
router.get('/departament', pageController.departament)
router.get('/cadastro', pageController.cadastro)
router.get('/account', pageController.account)
router.get('/login', pageController.login)
router.get('/produtos', pageController.produtos)


router.get('/search', searchController.search)

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

