const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

//formulario de registro
router.get('/cadastro', userController.formularioCadastro);

//rota de cadastro de usuario
router.post('/cadastro', userController.cadastro);

//formulário de login
router.get('/login', userController.login);

//sessão logada
router.get('/account', userController.account);

//edição de dados do usuario
router.get('/account_edit', userController.accountEdit);

//visualização dos dados de compra
router.get('/account_request', userController.accountRequest);

module.exports = router;