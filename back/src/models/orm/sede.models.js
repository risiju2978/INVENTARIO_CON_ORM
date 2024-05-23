const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
   const Sede =  sequelize.define('Sede', {
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
    return Sede;
}