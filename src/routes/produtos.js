const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');
const multer = require('multer');
const { storage } =  require('../../config/upload');

//inicialização do multer com as configurações de storage
const upload = multer({ storage });

//rota para listar todos produtos

router.get('/', produtoController.index);


//rota para mostrar o cadastro

router.get('/addProduto', produtoController.criar);

//rota para criar produto
router.post('/', upload.single('imagem') , produtoController.criarProduto);

module.exports = router;