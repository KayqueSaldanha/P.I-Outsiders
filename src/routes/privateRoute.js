const express = require('express');

const AuthController = require('../controllers/AuthController');

const router = express.Router();

// ==================
// Rotas Privadas
// (Usuários logados)
// ==================

// Renderiza a página restrita
router.get('/account', AuthController.renderAreaRestrita);
// Rota para mostrar formulário de edição de usuário
router.get('/edit/:id', AuthController.editForm);
router.post('/logout', AuthController.logout);

module.exports = router;