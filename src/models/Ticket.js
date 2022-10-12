module.exports = (sequelize, DataType) => {
    const Ticket = sequelize.define('Ticket', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        codigoBarras: {
            type: DataType.STRING,
            allowNull: false
        },
        codigoPdf: {
            type: DataType.STRING,
            allowNull: false
        },
        vencimento: {
            type: DataType.STRING,
            allowNull: false
        }
    }, {
        tableName: 'boletos',
        timestamps: false
    })

    // Ticket.associate = (modelList) => {
    //     Ticket.belongsTo(modelList.Purchase, {
    //         foreignKey: 'boletoId',
    //         as: 'compras'
    //     });
    // };

    return Ticket;
}