const express = require('express');

const AuthController = require('../controllers/AuthController');

const router = express.Router();

// ==================
// Rotas Privadas
// (Usuários logados)
// ==================

// Renderiza a página restrita
router.get('/account', AuthController.renderAreaRestrita);

router.post('/logout', AuthController.logout);

module.exports = router;