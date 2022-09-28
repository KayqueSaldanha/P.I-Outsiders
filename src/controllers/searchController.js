const Produto = require('../modelsJson/Produto');
const { createMenuObject } = require('../../helpers/createMenuObject')
const { db } = require('../database/db.json');


const buscar = (req, res) =>{

    let busca = req.query.q;
    let produtos = Produto.findByName(busca)

    res.render('busca', {
        menu: createMenuObject('false'),
        busca,
        produtos
    })
}


module.exports = buscar;