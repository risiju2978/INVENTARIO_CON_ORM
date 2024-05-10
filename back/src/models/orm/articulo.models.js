
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Articulo', {
        articulo_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        articulo_estado_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        categoria_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        usuario_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        office_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });
}