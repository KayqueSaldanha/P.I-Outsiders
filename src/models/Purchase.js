module.exports = (sequelize, DataType) => {
    const Purchase = sequelize.define('Purchase', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        usuarioId: {
            type: DataType.INTEGER,
            primaryKey: true
        },
        freteId: {
            type: DataType.INTEGER,
            primaryKey: true
        },
        enderecoId: {
            type: DataType.INTEGER,
            primaryKey: true
        },
        boletoId: {
            type: DataType.INTEGER,
            primaryKey: true
        },
        pixId: {
            type: DataType.INTEGER,
            primaryKey: true
        },
        cartaoId: {
            type: DataType.INTEGER,
            primaryKey: true
        },
        status: {
            type: DataType.STRING,
            allowNull: false
        },
        numeroParcela: {
            type: DataType.INTEGER
        }
    }, {
        tableName: 'compras',
        timestamps: false
    })

    return Purchase;
}