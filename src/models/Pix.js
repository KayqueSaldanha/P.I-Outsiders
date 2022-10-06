module.exports = (sequelize, DataType) => {
    const Pix = sequelize.define('Pix', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        qrCode: {
            type: DataType.STRING,
            allowNull: false
        },
        vencimento: {
            type: DataType.STRING,
            allowNull: false
        }
    }, {
        tableName: 'pix',
        timestamps: false
    })

    // Pix.associate = (modelList) => {
    //     Pix.belongsTo(modelList.Purchase, {
    //         foreignKey: 'pixId',
    //         as: 'compras'
    //     });
    // };

    return Pix;
}