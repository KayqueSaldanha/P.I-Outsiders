// File System permite escrever dentro do arquivo json
const fs = require('fs');

// Variavel para importar o arquivo json dentro da memória 
let db = require('../database/db.json');

// Variavel auxiliar para salvar os dados no arquivo json
// Função writeToDB vai pegar os dados que estão na memoria e transformar em json
const writeToDB = () => {
 const json = JSON.stringify(db);
 fs.writeFileSync('src/database/db.json', json);
}

const Produto = {
    findAll: () => db.produtos,

    findById: (id) => {
        const produto = db.produtos.find(produto => produto.id === id);
        return produto;
    }
}

module.exports = Produto;
