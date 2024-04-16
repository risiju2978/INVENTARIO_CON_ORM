

const editarPasswordUsuario= async (req, res) => {
    try {
      const { user_id, password } = req.body;
      if (user_id == undefined || user_id == 0) {
        return res.status(405).json({ status: 404, error: "No se proporciona id de usuario" });
      }
  
      const sqlUserCheck = "SELECT user_id FROM usuario WHERE user_id = ?";
      const [userCheck] = await db.promise().query(sqlUserCheck, [user_id]);
      if (userCheck.length === 0) {
        return res.status(404).json({ status: 404, error: "No existe usuario" });
      }
  
      const salt = bcrypt.genSaltSync();
      const passWordEncripted = bcrypt.hashSync(password, salt);
      const sqlUpdate = "UPDATE usuario SET password=? WHERE user_id=?";
      const data = [passWordEncripted, user_id];
  
      const [resultUpdate] = await db.promise().query(sqlUpdate, data);
      if (resultUpdate.affectedRows > 0) {
        return res.status(200).json({ status: 200, message: "Contraseña de usuario actualizada correctamente" });
      } else {
        return res.status(401).json({ status: 401, error: "Error al actualizar la contraseña" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: 500, error: "Error en el servidor" });
    }
  }
  module.exports ={editarPasswordUsuario };