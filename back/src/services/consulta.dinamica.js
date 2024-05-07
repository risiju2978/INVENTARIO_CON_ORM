

const editarRolUsuario = async (req, res) => {
    try {
      // Extraer los campos relacionados con roles, nombre usuario y correo electrónico
      const { user_id, rol_id, user_state } = req.body;
      //console donde observo el cuerpo de la solicitud enviada
      console.log(user_id, " |", rol_id, "| ", user_state);
      // Validaciones
      if (user_id === undefined || user_id === 0)
        return res
          .status(405)
          .json({ status: 405, error: "Falta el user id en la petición" });

      const sql = "SELECT * FROM usuario WHERE user_id = ? ";

      const user_ID = { user_id };
      
      const [user] = await db.promise().query(sql, [user_id]);
      console.log(user);


      // await db.promise().query(sql, user_ID, (err, result) => {
      //   if (err) {
      //     console.log(err);
      //     return res
      //       .status(404)
      //       .json({ status: 404, error: "Error en la consulta de usuario" });
      //   }
      //   console.log(result);

        if (user.length > 0) {
          // Actualizar datos de usuario
          let sqlUpdate = "UPDATE usuario SET ";
          let sep = "";
          let data = []; // arreglo de variables para remplazo de ?

          if (rol_id !== undefined || parseInt(rol_id) > 0) {
            sqlUpdate += " rol_id= ?";
            data.push(rol_id);
          }

          sep = data.length > 0 ? "," : "";
          //buscar funcion NaN para verificar si es numericoen mozzilla
          if (user_state !== undefined || parseInt(user_state)) {
            sqlUpdate += `${sep} user_state = ?`;
            data.push(user_state);
          }

          sqlUpdate += " WHERE user_id = ?";
          data.push(user_id);
          //verificar con console que sentencia se esta mandando al query
          console.log(sqlUpdate);
          if (data.length === 0) {
            return res.status(404).json({
              status: 404,
              error: "No existen datos para actualizar",
            });
          }

          // Realizar la actualización en la base de datos

          db.query(sqlUpdate, data, (err, result) => {
            if (err) {
              console.log(err);
              return res.status(404).json({
                status: 404,
                error: "Error en la acción de actualizar usuario",
              });
            }

            if (!result) {
              return res.status(401).json({
                status: 401,
                error: "Error al actualizar",
              });
            } else {
              return res.status(200).json({
                status: 200,
                mensaje: "Usuario actualizado correctamente",
              });
            }
          });
        } else {
          return res
            .status(404)
            .json({ status: 404, error: "No existe usuario" });
        }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        error: "Error interno del servidor",
      });
    }
  }
  module.exports ={editarRolUsuario };