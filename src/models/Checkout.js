const fs = require('fs');
const { v4 } = require('uuid');

const db = require('../database/db.json');

const writeToDB = () => {
    // Converte o objeto db em string
    const json = JSON.stringify(db);
    // Escreve a string no arquivo db.json
    fs.writeFileSync('src/database/db.json', json);
}

const Checkout = {
    // Retorna um endereço por um campo
    findAll: () => db.endereco,

    addInfo: (endereco) => {
        // Pega os dados de endereço recebidos e adiciona no campo endereço do JSON com um ID exclusivo de endereço
        db.endereco.push({ id: v4(), ...endereco });
        // Escreve os dados no JSON
        writeToDB();
    },

    addFrete: (frete) => {
        db.frete.push({ ...frete })
    }
}

module.exports = Checkout;