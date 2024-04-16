

const editarUsuario = async (req, res) => {
    try {
      // Extraer los campos relacionados, nombre de usuario, correo electrónico y contraseña
      const { user_id, username, email, password } = req.body;
  
      // Validar si user_id está definido
      if (user_id == undefined || user_id == 0) {
        return res.status(405).json({ status: 404, error: "No se proporciona id de usuario" });
      }
  
      // Verificar si el usuario existe
      const sqlUserCheck = "SELECT user_id FROM usuario WHERE user_id = ?";
      const [userCheck] = await db.promise().query(sqlUserCheck, [user_id]);
  
      if (userCheck.length === 0) {
        return res.status(404).json({ status: 404, error: "No existe usuario" });
      }
  
      // Encriptar la nueva contraseña
      const salt = bcrypt.genSaltSync();
      const passWordEncripted = bcrypt.hashSync(password, salt);
  
      // Actualizar datos de usuario con la contraseña encriptada
      const sqlUpdate = "UPDATE usuario SET username=?, email=?, password=? WHERE user_id=?";
      const data = [username, email, passWordEncripted, user_id];
  
      // Ejecutar la actualización
      const [resultUpdate] = await db.promise().query(sqlUpdate, data);
  
      if (resultUpdate.affectedRows > 0) {
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