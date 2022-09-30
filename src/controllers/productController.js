// ============================================================
// Controller responsável pela exibição de produtos no banco
// ============================================================
const { Product } = require('../models');
const { createMenuObject } = require('../../helpers/createMenuObject');

const ProductController = {
    // Função responsável por buscar no banco de dados o produto por sua categoria
    findByCategory: async (req, res) => {
        // Busca na requisição o parametro categoria que foi inserido na url
        const { category } = req.params;
        // Busca no banco de dados todos os produtos existente
        const products = await Product.findAll({ 
        // Where: Filtra e exibi somente os produtos que possuem a mesma categoria passada na url
            where: { 
                categoria: category
            }
        });
        return res.render('department',{ menu: createMenuObject(categoria), 
            banner: {background: `departamento_${categoria}.jpg`}})
        // Renderiza a view department
    },

}





module.exports = ProductController;