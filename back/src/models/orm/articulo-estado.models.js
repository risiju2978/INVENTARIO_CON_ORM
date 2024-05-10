
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Articulo_Estado', {
        articulo_estado_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        articulo_estado: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
}