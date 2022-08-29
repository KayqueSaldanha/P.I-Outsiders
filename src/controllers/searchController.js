const Produto = require('../models/Produto');
const { createMenuObject } = require('../../helpers/createMenuObject')
const { db } = require('../database/db.json');
const { findByName } = require('../models/Produto');

const buscar = (req, res) =>{
    let busca = req.query.q;
    let produtos = findByName(busca)
    console.log(busca)
    res.render('busca', {
        menu: createMenuObject('false'),
        busca,
        produtos
    })
}


module.exports = buscar;