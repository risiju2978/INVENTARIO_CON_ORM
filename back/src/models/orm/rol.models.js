const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define('Rol', {
        rol_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        rol: {
            type: DataTypes.STRING,
            allowNull: false,
        },
       state: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });
}