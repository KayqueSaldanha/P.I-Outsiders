const express = require('express');
const router = express.Router();

const pageController = require('../controllers/pageController');
const searchController = require('../controllers/searchController');
const ProductController = require('../controllers/productController');


router.get('/', pageController.home)
//router.get('/departamento/:categoria', pageController.department)
// router.get('/produtos/:id', ProductController.produto);
// router.post('/produtos/:id', ProductController.produto);
router.get('/produtos/:id', ProductController.produto)
router.get('/busca', searchController)

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

