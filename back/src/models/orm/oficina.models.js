const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define('Oficina', {
        office_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        office: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        departament_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });
}