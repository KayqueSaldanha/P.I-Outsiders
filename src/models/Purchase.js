module.exports = (sequelize, DataType) => {
    const Purchase = sequelize.define('Purchase', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        usuarioId: {
            type: DataType.INTEGER
        },
        freteId: {
            type: DataType.INTEGER
        },
        enderecoId: {
            type: DataType.INTEGER
        },
        boletoId: {
            type: DataType.INTEGER
        },
        pixId: {
            type: DataType.INTEGER
        },
        cartaoId: {
            type: DataType.INTEGER
        },
        status: {
            type: DataType.STRING
        },
        numeroParcela: {
            type: DataType.INTEGER
        }
    }, {
        tableName: 'compras',
        timestamps: false
    })

    // Purchase.associate = (modelList) => {
    //     Purchase.hasOne(modelList.User, {
    //         foreignKey: 'usuarioId',
    //         as: 'usuarioId'
    //     });
    // };

    // Purchase.associate = (modelList) => {
    //     Purchase.hasOne(modelList.Shipping, {
    //         foreignKey: 'freteId',
    //         as: 'freteId'
    //     });
    // };

    // Purchase.associate = (modelList) => {
    //     Purchase.hasOne(modelList.Address, {
    //         foreignKey: 'enderecoId',
    //         as: 'enderecoId'
    //     });
    // };

    // Purchase.associate = (modelList) => {
    //     Purchase.hasOne(modelList.Ticket, {
    //         foreignKey: 'boletoId',
    //         as: 'boletos'
    //     });
    // };

    // Purchase.associate = (modelList) => {
    //     Purchase.hasOne(modelList.Pix, {
    //         foreignKey: 'pixId',
    //         as: 'pixId'
    //     });
    // };

    // Purchase.associate = (modelList) => {
    //     Purchase.belongsTo(modelList.CreditCard, {
    //         foreignKey: 'cartaoId',
    //         as: 'cartoes'
    //     });
    // };

    return Purchase;
}