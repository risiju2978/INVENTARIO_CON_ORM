require("dotenv").config();
const bcrypt = require("bcrypt");


//importaciones de funcionalidades dentro del objeto userscontroller
const { listarUsuarios } = require("./listar.user.controller");
const { loginUsuario } = require("./login.user.controller");
const { crearUsuario } = require("./crear.user.controller");
const { editarRolUsuario } = require("./editar.rol.user.controller");
const { editarUsuario } = require("./editar.user.controller");
const { getInfoUser } = require("./get.info.user.controller");
const { editarPasswordUsuario } = require("./editar.password.user.controller");
const { db } = require("../../database/conexion");




const userController = {
  listarUsuarios,
  loginUsuario,
  crearUsuario,
  editarRolUsuario,
  editarUsuario,
  getInfoUser,
editarPasswordUsuario
};

module.exports = userController;