const express = require('express');
const UserController = require('../controllers/UserController');
const AuthController = require('../controllers/AuthController');
const ProductController = require('../controllers/productController');
const router = express.Router();

// ======================
// Rotas Públicas
// (Usuários não logados)
// ======================

// Renderiza a página de cadastro de usuário
router.get('/cadastro', UserController.renderFormRegister);
// Rota para cadastrar um novo usuário
router.post('/cadastro', UserController.createNewUser);
// Renderiza a página inicial de login
router.get('/login', AuthController.renderLogin);
// Rota para fazer o login do usuário
router.post('/login', AuthController.login);
// Rota para renderizar a página de departamento
router.get('/collections/:categoria', ProductController.findByCategory);

module.exports = router;