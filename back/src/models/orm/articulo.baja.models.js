const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  const Articulo_baja =  sequelize.define('Articulo_baja', {
        campus_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        campus: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    return Articulo_baja;
}