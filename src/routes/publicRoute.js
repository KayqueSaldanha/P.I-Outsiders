const express = require('express');

// Importando o controller de usuários
const userController = require('../controllers/userController');
// Importando o controller de autenticação
const authController = require('../controllers/authController');

const router = express.Router();

// Rotas públicas para usuários não logados

// Renderiza a página inicial de login
// Utiliza o middleware redirectAuthenticatedUser para redirecionar o usuário que está logado
router.get('/login', authController.renderLogin);

// Renderiza a página de cadastro de usuário
// Utiliza o middleware redirectAuthenticatedUser para redirecionar o usuário logado
router.get('/cadastro', userController.formularioCadastro);

// Rota para fazer o login do usuário
router.post('/login', authController.login);

// Rota para cadastrar um novo usuário
router.post('/cadastro', userController.cadastro);

module.exports = router;