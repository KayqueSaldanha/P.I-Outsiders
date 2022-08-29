const express = require('express');

const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

const router = express.Router();

// ==================
// Rotas Privadas
// (Usuários logados)
// ==================

// Renderiza a página restrita
router.get('/account', authController.renderAreaRestrita);

//edição de dados do usuario
router.get('/account_edit', userController.accountEdit);

//visualização dos dados de compra
router.get('/account_request', userController.accountRequest);

module.exports = router;