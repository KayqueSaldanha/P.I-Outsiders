// File System permite escrever dentro do arquivo json
const fs = require('fs');

// Variavel para importar o arquivo json dentro da memória 
let db = require('../database/db.json');

// Variavel auxiliar para salvar os dados no arquivo json
// Função writeToDB pega os dados que estão na memoria e transforma em json
// função necessária para cadastro de:
const writeToDB = () => {
    const json = JSON.stringify(db);
    fs.writeFileSync('src/database/db.json', json);
}

const Produto = {
    findByGenero: (genero) => {
        return db.produtos.filter(produto => {
            if (produto.genero == genero) {
                return true
            } else {
                false
            }
        })
    },
    findByName: (nome) => {
        return db.produtos.filter(produto => {
            if (produto.nome.toLowerCase().indexOf(nome.toLowerCase()) > -1) {
                return true
            } else {
                return false
            }
        })
    },

    findById: (id) => {
        return db.produtos.find(produto => produto.id == id);
    },

    findByStatus: (status) => {
        return db.produtos.filter(produto => {
            if (produto.status == status) {
                return true
            } else {
                false
            }
        })
    }
}


module.exports = Produto;
