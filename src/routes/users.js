const express = require('express');
const router = express.Router();

const UsuarioController = require('../controllers/UsuarioController');


router.get('/cadastro', UsuarioController.create);
router.post('/cadastro', UsuarioController.store);

module.exports = router