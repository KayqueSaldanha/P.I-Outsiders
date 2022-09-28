const express = require('express');
const UserController = require('../controllers/UserController');
const AuthController = require('../controllers/AuthController');
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

module.exports = router;