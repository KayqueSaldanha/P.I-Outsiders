const { createMenuObject } = require('../../helpers/createMenuObject');
const bcrypt = require('bcrypt');
const { Product } = require('../models');

const carrinhoController = {

    renderCart: (req, res) => {
        const carrinho = req.session.carrinho
        console.log(carrinho)
        res.render('carrinho', { carrinho, menu: createMenuObject('false')  })
    },

    adicionar: async (req, res) => {
        const produtoPesquisa = await Product.findOne({
            attibutes: ['id'],
            where: {
                id : req.params.id
            }
        })
        const quantidadeProduto = { ...produtoPesquisa, quantidade: 1 }
        // console.log(JSON.stringify(quantidadeProduto))
        if (req.session.carrinho != undefined) {
            req.session.carrinho.push(quantidadeProduto)
        } else {
            req.session.carrinho = [quantidadeProduto]
        }
        res.redirect('/carrinho')
    },

    // aumentar: (req, res) => {
    //     const idProduto = req.params.id
    //     const produtoIndex = req.session.carrinho.findIndex(produto => produto.id === idProduto)
    //     const produto = req.session.carrinho[produtoIndex]
    //     req.session.carrinho[produtoIndex] = { ...produto, quantidade: produto.quantidade + 1 }
    //     res.redirect('/carrinho')
    // },

    // update: (id, user, avatar) => {
    //     const userIndex = db.users.findIndex(user => user.id === id);
    //     db.users[userIndex] = { id, ...user, avatar };
    //     writeToDB();
    //     },

    remover: async (req, res) => {
        const idProduto = await Product.findOne({
            attibutes: ['id'],
            where: {
                id : req.params.id
            }
        })
        const produtoIndex = req.session.carrinho.find(produto => produto.id === idProduto)
        req.session.carrinho.splice(produtoIndex, 1) 
    res.redirect('/carrinho')
    }
}


module.exports = carrinhoController 