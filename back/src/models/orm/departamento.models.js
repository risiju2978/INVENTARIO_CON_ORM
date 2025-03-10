const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  const Departamento =  sequelize.define('Departamento', {
        departament_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        departament: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        campus_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });
    return Departamento;
}