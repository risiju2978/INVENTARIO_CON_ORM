const bcrypt = require("bcrypt");
const userModels = require("../../models/user.models");

const editarUsuario = async (req, res) => {
    try {
      // Extraer los campos relacionados, nombre de usuario, correo electrónico y contraseña
      const { user_id, username, email, password } = req.body;
  
      // Validar si user_id está definido
      if (user_id == undefined || user_id == 0) {
        return res.status(405).json({ status: 404, error: "No se proporciona id de usuario" });
      }
  
      // Verificar si el usuario existe
      const CheckUser = await userModels.UserCheck(user_id);

      if (CheckUser.length === 0) {
        return res.status(404).json({ status: 404, error: "No existe usuario" });
      }
  
      // Encriptar la nueva contraseña
      const salt = bcrypt.genSaltSync();
      const passWordEncripted = bcrypt.hashSync(password, salt);
  
      // Actualizar datos de usuario con la contraseña encriptada
      const data = [username, email, passWordEncripted, user_id];
  

   
      // Ejecutar la actualización
      const resultado = await userModels.EditarUsuario(data);
  
      if (resultado.affectedRows > 0) {
        return res.status(200).json({ status: 200, message: "Usuario actualizado correctamente" });
      } else {
        return res.status(401).json({ status: 401, error: "Error al actualizar" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: 500, error: "Error en el servidor" });
    }
  }

  module.exports ={editarUsuario };