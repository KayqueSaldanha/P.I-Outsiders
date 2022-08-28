const express = require('express');

const authController = require('../controllers/authController');

const router = express.Router();

// ==================
// Rotas Privadas
// (Usuários logados)
// ==================

// Renderiza a página restrita
router.get('/account', authController.renderAreaRestrita);

module.exports = router;