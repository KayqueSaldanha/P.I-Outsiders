module.exports = (sequelize, DataType) => {
    const Address = sequelize.define('Address', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cep: {
            type: DataType.STRING,
            allowNull: false
        },
        cidade: {
            type: DataType.STRING,
            allowNull: false
        },
        rua: {
            type: DataType.STRING,
            allowNull: false
        },
        numero: {
            type: DataType.STRING,
            allowNull: false
        },
        bairro: {
            type: DataType.STRING,
            allowNull: false
        },
        complemento: {
            type: DataType.STRING,
            allowNull: false
        },
        estado: {
            type: DataType.STRING,
            allowNull: false
        },
        usuarioId: {
            type: DataType.INTEGER,
            primaryKey: true
        }
    }, {
        tableName: 'enderecos',
        timestamps: false
    })

    // Address.associate = (modelList) => {
    //     Address.belongsTo(modelList.User, {
    //         foreignKey: 'enderecoId',
    //         as: 'enderecoId'
    //     });
    // };

    // Address.associate = (modelList) => {
    //     Address.hasOne(modelList.Purchase, {
    //         foreignKey: 'enderecoId',
    //         as: 'enderecoId'
    //     });
    // };

    return Address;
}