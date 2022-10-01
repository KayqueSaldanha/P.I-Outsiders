module.exports = (sequelize, DataType) => {
    const Shipping = sequelize.define('Shipping', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        empresa: {
            type: DataType.STRING,
            allowNull: false
        },
        prazo: {
            type: DataType.STRING,
            allowNull: false
        },
        valor: {
            type: DataType.DECIMAL,
            allowNull: false
        }
    }, {
        tableName: 'fretes',
        timestamps: false
    })

    return Shipping;
}