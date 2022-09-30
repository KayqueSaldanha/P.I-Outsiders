/* DataType: parametros necessário p/ converter o sql em código*/
module.exports = (sequelize, DataType) => {
    //const Produto responsável por retornar o nome da model
    const Product = sequelize.define('Product',{
        //listando abaixo a representação das colunas
        id:{
            type:DataType.INTEGER, 
            primaryKey: true, 
            autoIncrement: true
        },
        imagem1: {
            type:DataType.STRING,
            allowNull:false
        },
        imagem2: {
            type:DataType.STRING,
            allowNull:true
        },
        imagem3: {
            type:DataType.STRING,
            allowNull:true
        },
        nome: {
            type:DataType.STRING,
            allowNull:false
        },
        preco: {
            type:DataType.INTEGER,
            allowNull:false
        },
        cores: {
            type:DataType.JSON,
            allowNull:false
        },
        genero: {
            type:DataType.STRING,
            allowNull:false
        },
        categoria: {
            type:DataType.STRING,
            allowNull:false
        },
        tamanhos: {
            type:DataType.JSON,
            allowNull:false
        },
        status: {
            type:DataType.STRING,
            allowNull:true
        },
        descricao: {
            type:DataType.STRING,
            allowNull:true
        },
    },{
    //nome da tabela criada no banco
    tableName:'produtos',
    timestamps:false
    })

    return Product;
};