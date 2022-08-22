const { produto } = require('../database/db.json');

const search  = (req, res) => {

    let query = req.query.q
    let list = produto.getFromName(query)
    
    res.render('pages/pages', {
        list
    });
};

module.exports.search = search;