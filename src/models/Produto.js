// File System permite escrever dentro do arquivo json
const fs = require('fs');

// Variavel para importar o arquivo json dentro da memória 
let db = require('../database/db.json');

// Variavel auxiliar para salvar os dados no arquivo json
// Função writeToDB pega os dados que estão na memoria e transforma em json
const writeToDB = () => {
 const json = JSON.stringify(db);
 fs.writeFileSync('src/database/db.json', json);
}

const Produto = {
    findByGenero: (genero) => {
            return db.produtos.filter(produto =>{
                if(produto.genero == genero){
                    return true
                } else{
                    false
                }
            })
    },

    findById: (id) => {
        const produto = db.produtos.find(produto => produto.id === id);
        return produto;
    },

    findByStatus: (status) => {
        return db.produtos.filter(produto =>{
            if(produto.status == status){
                return true
            } else{
                false
            }
        })
    }
}


module.exports = Produto;
