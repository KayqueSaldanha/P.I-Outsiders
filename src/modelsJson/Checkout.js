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

    addFrete: (idUsuario, idEndereco, produto, frete) => {
        // Armazena o id da compra numa constante
        const idCompra = v4();
        // Escreve os dados no JSON de compras
        db.compras.push({ idCompra, idUsuario, idEndereco, status: "incompleto", metodoDePagamento: "", produto, frete });
        writeToDB();
        return idCompra;
    },

    formaDePagamentoCartao: (idUsuario, dadosDoCartao) => {
        const idCard = v4();
        db.cartoes.push({ idCard, idUsuario, dadosDoCartao });
        writeToDB();
        return idCard;
    },

    atualizaCompra: (idCompra, idCard, metodoDePagamento) => {
        const compraIndex = db.compras.findIndex(compra => compra.idCompra === idCompra);
        console.log("index", compraIndex);
        const compraOld = db.compras[compraIndex];
        console.log("OLD", compraOld);
        db.compras[compraIndex] = { ...compraOld, idCompra, idCard, metodoDePagamento, status: "aguardando pagamento" };
        console.log("COMPRINHA", db.compras[compraIndex]);
        writeToDB();
    }
}

module.exports = Checkout;