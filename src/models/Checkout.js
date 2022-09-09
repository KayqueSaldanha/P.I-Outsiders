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

    addEndereco: (endereco) => {
        const id = v4();
        // Pega os dados de endereço recebidos e adiciona no campo endereço do JSON com um ID exclusivo de endereço
        db.endereco.push({ id: id, ...endereco });
        // Escreve os dados no JSON
        writeToDB();
        return id;
    },

    addFrete: (idUsuario, idEndereco, produtos, frete) => {
        // Armazena o id da compra numa constante
        const idCompra = v4();
        // Escreve os dados no JSON de compras
        db.compras.push({ id: idCompra, idUsuario, idEndereco, produtos, status: "incompleto", ...frete });
        writeToDB();
        return id;
    }
}

module.exports = Checkout;