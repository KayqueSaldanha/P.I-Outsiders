const express = require('express');

// Importando o controller de usuários
const UserController = require('../controllers/UserController');
// Importando o controller de autenticação
const AuthController = require('../controllers/AuthController');

const router = express.Router();

// Rotas públicas para usuários não logados

// Renderiza a página inicial de login
// Utiliza o middleware redirectAuthenticatedUser para redirecionar o usuário que está logado
router.get('/login', AuthController.renderLogin);

// Renderiza a página de cadastro de usuário
// Utiliza o middleware redirectAuthenticatedUser para redirecionar o usuário logado
router.get('/cadastro', UserController.renderFormCadastro);

// Rota para fazer o login do usuário
router.post('/login', AuthController.login);

// Rota para cadastrar um novo usuário
router.post('/cadastro', UserController.cadastro);

module.exports = router;