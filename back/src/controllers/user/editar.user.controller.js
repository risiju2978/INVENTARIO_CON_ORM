
const {Usuario} = require("../../database/conexion-sequelize");

const editarUsuario = async (req, res) => {
    try {
      // Extraer los campos relacionados, nombre de usuario, correo electrónico y contraseña
      const { user_id, username, email } = req.body;
  
      // Validar si user_id está definido
      if (user_id == undefined || user_id == 0) {
        return res.status(405).json({ status: 404, error: "No se proporciona id de usuario" });
      }
  
      // Verificar si el usuario existe
      const verifyUserId = await Usuario.findOne({ where: { user_id: user_id } })

      if (!verifyUserId) {
        return res.status(404).json({ status: 404, error: "No existe usuario" });
      }
  
      // Actualizar datos de usuario con la contraseña encriptada
      const data = {username, email};
   
      // Ejecutar la actualización
      const resultado = await Usuario.update(data, { where: { user_id: user_id } });

      const vericarUpdate = await Usuario.findOne({ where: { user_id: user_id } });
  
      if (resultado && username === vericarUpdate.username) {
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