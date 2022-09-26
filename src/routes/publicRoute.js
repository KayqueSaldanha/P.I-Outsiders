const express = require('express');

// Importando o controller de usuários
const UserController = require('../controllers/UserController');
// Importando o controller de autenticação
const AuthController = require('../controllers/AuthController');

const UsuarioController = require('../controllers/UsuarioController');

const router = express.Router();

// Rotas públicas para usuários não logados

// Renderiza a página inicial de login
// Utiliza o middleware redirectAuthenticatedUser para redirecionar o usuário que está logado
router.get('/login', AuthController.renderLogin);

// Renderiza a página de cadastro de usuário
// Utiliza o middleware redirectAuthenticatedUser para redirecionar o usuário logado
// router.get('/cadastro', UserController.renderFormCadastro);
// router.get('/cadastro', UsuarioController.create);

// Rota para fazer o login do usuário
router.post('/login', AuthController.login);

// Rota para cadastrar um novo usuário
// router.post('/cadastro', UserController.cadastro);
// router.post('/cadastro', UsuarioController.store);

module.exports = router;