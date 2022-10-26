module.exports = (sequelize, DataType) => {
    const Adminstradores = sequelize.define('Administradores', {
        id: {
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nome: {
            type:DataType.STRING,
            allowNull:false
        },
        email: {
            type:DataType.STRING,
            allowNull:false
        },
        senha: {
            type:DataType.STRING,
            allowNull:false
        },
        cargo: {
            type:DataType.STRING,
            allowNull:false
        },
    },{
        tableName:'administradores',
        timestamps:false
    })

    return Adminstradores;
}
