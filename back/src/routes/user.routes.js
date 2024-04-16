
const userController = require ('../controllers/user/index.user.controller');
const express = require("express");
const userRouter = express.Router();

// Endpoint para listar usuarios
userRouter.get('/listar', userController.listarUsuarios);
// Endpoint para login de usuario
userRouter.post("/login", userController.loginUsuario);
// Endpoint para crear usuario
userRouter.post('/crear_usuario', userController.crearUsuario);
// Ruta para editar roles de usuario
userRouter.put("/editar_rol", userController.editarRolUsuario);
// Endpoint para editar usuario
userRouter.put('/editar_usuario',userController.editarUsuario);
// Endpoint para obtener información personal del usuario
userRouter.get("/info_User", userController.getInfoUser);
//endpoint para editar contraseña de un usuario
userRouter.put("/edit_Password",userController.editarPasswordUsuario);

module.exports = userRouter;
