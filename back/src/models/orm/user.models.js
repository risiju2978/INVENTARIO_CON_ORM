
const { DataTypes } = require("sequelize");

const bcrypt = require("bcrypt");

module.exports = (sequelize) => {
 const Usuario = sequelize.define("Usuario", {
    user_id : {
      primaryKey: true,
      type: DataTypes.INTEGER,
      // en la I estaba el error
      autoIncrement: true,
      allowNull: false,
    },
    campus_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rol_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_state: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
    },
  });
  return Usuario;
};