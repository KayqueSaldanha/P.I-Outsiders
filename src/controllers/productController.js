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





    // mostrarProduto: async (req, res) => {
    //     const { id } = req.params
    //     const interesses = Produto.findByStatus('interesses')
    //     const produto = Produto.findById(id)
    //     res.render('produtos', {
    //         menu: createMenuObject('false'),
    //         produto,
    //         interesses
    //     });
    // },


    // remover: async (req, res) => {
    //     const idProduto = await User.findOne({
    //         attibutes: ['id'],
    //         where: {
    //             id : req.params.id
    //         }
    //     })
    // },

}





module.exports = ProductController;