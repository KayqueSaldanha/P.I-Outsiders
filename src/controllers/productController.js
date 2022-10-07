// ============================================================
// Controller responsável pela exibição de produtos no banco
// ============================================================
const { Product } = require('../models');
const { createMenuObject } = require('../../helpers/createMenuObject');


const ProductController = {
    // Função responsável por buscar no banco de dados o produto por sua categoria
    findByCategory: async (req, res) => {
        // Busca na requisição o parametro categoria que foi inserido na url
        const categoria = req.params.categoria;
        // Busca no banco de dados todos os produtos existente
        const products = await Product.findAll({ 
           // Where: Filtra e exibi somente os produtos que possuem a mesma categoria passada na url
           where: {
                categoria
           }
        })
        res.render('department', {
            menu: createMenuObject(categoria),
            banner: {
                background: `departamento_${categoria}.jpg`
            },
            products, categoria
        });

        return res.render('department',{ menu: createMenuObject(categoria), 
            banner: {background: `departamento_${categoria}.jpg`}})
    },
     


    produto: async (req, res) => {
        const {id} = req.params
        console.log(id)
        const produto = await Product.findAll({ 
            // Where: Filtra e exibi somente os produtos que possuem o mesmo id passada na url
                where: { 
                    id: id,
                }
            });
            console.log(produto[0].nome)
        res.render('produtos', { produto, menu: createMenuObject('false') })
        // res.redirect('/carrinho')
    
    },

}


module.exports = ProductController;