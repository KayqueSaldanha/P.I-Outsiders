const { Product } = require('../models');
const Produto = require('../modelsJson/Produto')
const { createMenuObject } = require('../../helpers/createMenuObject')


const buscar = async (req, res) =>{

    let busca = req.query.q;
    
    let allProduct = await Product.findAll({})

    let produtos = allProduct.filter(produto => {
        if (produto.nome.toLowerCase().indexOf(busca.toLowerCase()) > -1) {
            return true
        } else {
            return false
        }
    })

    console.log(produtos)




    res.render('busca', {
        menu: createMenuObject('false'),
        busca,
        produtos
    })
}


module.exports = buscar;