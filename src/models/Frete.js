module.exports = (sequelize, DataType) => {
    const Frete = sequelize.define('Frete', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        empresa:{
            type:DataType.STRING,
            allowNull:false
        },
        prazo:{
            type:DataType.INTEGER,
            allowNull:false
        },
        valor:{
            type:DataType.INTEGER,
            allowNull:false
        }
    }, {
        tableName: 'fretes',
        timestamps: false
    })
        return Frete;
    }