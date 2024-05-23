const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
   const Categoria =  sequelize.define('Categoria', {
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
    return Categoria;
}