module.exports = (sequelize, DataType) => {
    const CreditCard = sequelize.define('CreditCard', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        numero: {
            type: DataType.STRING,
            allowNull: false
        },
        validade: {
            type: DataType.STRING,
            allowNull: false
        },
        cvv: {
            type: DataType.STRING,
            allowNull: false
        },
        nomeImpresso: {
            type: DataType.STRING,
            allowNull: false
        },
        cpf: {
            type: DataType.STRING,
            allowNull: false
        },
        usuarioId: {
            type:DataType.INTEGER,
            primaryKey:true
        }
    }, {
        tableName: 'cartoes',
        timestamps: false
    })

    // CreditCard.associate = (modelList) => {
    //     CreditCard.belongsTo(modelList.User, {
    //         foreignKey: 'usuarioId',
    //         as: 'usuarios'
    //     });
    // };

    // CreditCard.associate = (modelList) => {
    //     CreditCard.hasMany(modelList.Purchase, {
    //         foreignKey: 'cartaoId',
    //         as: 'compras'
    //     });
    // };

    return CreditCard;
}