module.exports = (sequelize, DataType) => {
    const User = sequelize.define('User', {
        id: {
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nome: {
            type:DataType.STRING,
            allowNull:false
        },
        sobrenome:{
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
        cpf: {
            type:DataType.STRING
        },
        telefone: {
            type:DataType.STRING
        },
        dataNascimento: {
            type:DataType.DATE
        }
    },{
        tableName:'usuarios',
        timestamps:false
    })
    
    // User.associate = (modelList) => {
    //     User.hasMany(modelList.Address, {
    //         foreignKey: 'enderecoId',
    //         as: 'enderecoId'
    //     });
    // };
    
    // User.associate = (modelList) => {
    //     User.hasMany(modelList.CreditCard, {
    //         foreignKey: 'cartaoId',
    //         as: 'cartoes'
    //     });
    // };

    return User;
}