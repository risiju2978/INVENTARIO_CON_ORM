const userModels = require("../../models/user.models");


const editarPasswordUsuario= async (req, res) => {
    try {
      const { user_id, password } = req.body;

      if (user_id == undefined || user_id == 0) {
        return res.status(405).json({ status: 404, error: "No se proporciona id de usuario" });
      };
  
      //verificar usuario
      const CheckUser = await userModels.UserCheck(user_id);
     
      if (CheckUser.length === 0) {
        return res.status(404).json({ status: 404, error: "No existe usuario" });
      };
  

      const salt = bcrypt.genSaltSync();
      const passWordEncripted = bcrypt.hashSync(password, salt);

      const data = [passWordEncripted, user_id]; 
      
      const resultado = await userModels.EditarPassword(data);

      if (resultado.affectedRows > 0) {
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