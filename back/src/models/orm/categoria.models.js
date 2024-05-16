const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define('Categoria', {
        categoria_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
       categoria: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
}