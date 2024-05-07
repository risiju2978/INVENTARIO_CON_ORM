const userModels = require("../../models/user.models");

const editarRolUsuario = async (req, res) => {
  try {
    // Extraer los campos relacionados con roles, nombre usuario y correo electrónico
    const { user_id, rol_id } = req.body;

    // Validaciones
    if (user_id === undefined || user_id === 0) {
      return res
        .status(405)
        .json({ status: 405, error: "Falta el user id en la petición" });
    }

    const user = await userModels.GetInfoUser(user_id);

    if (user[0].length === 0) {
      return res.status(404).json({
        status: 404,
        error: "No existe usuario con el id proporcionado",
      });
    }

    if (user[0].user_state === 0) {
      return res.status(400).json({
        status: 400,
        error: "El usuario se encuentra inactivo",
      });
    }

    if (!user[0].rol_id) {
      return res
        .status(400)
        .json({ status: 400, error: "El registro del usuario no tiene id" });
    }

    function definicionDeRol(rolIdActual, rolIdNuevo) {
      if (rolIdActual === rolIdNuevo) {
        return false;
      }

      switch (rolIdNuevo) {
        case 1:
          return 1;
          break;
        case 2:
          return 2;
          break;
        case 3:
          return 3;
          break;
        default:
          return 0;
          break;
      }
    
      
    }
    const rolParaActualizar = definicionDeRol(user[0].rol_id, rol_id);
    console.log(rolParaActualizar);

    if (rolParaActualizar === false) {
      return res.status(400).json({
        status: 400,
        error: "El usuario ya tiene asignado el rol que se intenta asignar",
      });
    }

    if (rolParaActualizar === 0) {
      return res.status(400).json({
        status: 400,
        error: "El rol proporcionado no es válido",
      });
    }



    const usuarioEditado = await userModels.editarRolUsuario([rolParaActualizar, user_id]);

    if (usuarioEditado.affectedRows === 0) {
      return res.status(400).json({
        status: 400,
        error: "No se pudo actualizar el rol del usuario",
      });
    }

    return res.status(200).json({
      status: 200,
      data: {
        message: "Rol de usuario actualizado con éxito",
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 500,
      error: "Error interno del servidor",
    });
  }

  // const sql = "SELECT * FROM usuario WHERE user_id = ? ";

  // const user_ID = { user_id };

  // // const [user] = await db.promise().query(sql, [user_id]);
  // console.log(user);

  //   if (user.length > 0) {
  //     // Actualizar datos de usuario
  //     let sqlUpdate = "UPDATE usuario SET ";
  //     let sep = "";
  //     let data = []; // arreglo de variables para remplazo de ?

  //     if (rol_id !== undefined || parseInt(rol_id) > 0) {
  //       sqlUpdate += " rol_id= ?";
  //       data.push(rol_id);
  //     }

  //     sep = data.length > 0 ? "," : "";
  //     //buscar funcion NaN para verificar si es numericoen mozzilla
  //     if (user_state !== undefined || parseInt(user_state)) {
  //       sqlUpdate += `${sep} user_state = ?`;
  //       data.push(user_state);
  //     }

  //     sqlUpdate += " WHERE user_id = ?";
  //     data.push(user_id);
  //     if (data.length === 0) {
  //       return res.status(404).json({
  //         status: 404,
  //         error: "No existen datos para actualizar",
  //       });
  //     }

  //     // Realizar la actualización en la base de datos

  //     db.query(sqlUpdate, data, (err, result) => {
  //       if (err) {
  //         console.log(err);
  //         return res.status(404).json({
  //           status: 404,
  //           error: "Error en la acción de actualizar usuario",
  //         });
  //       }

  //       if (!result) {
  //         return res.status(401).json({
  //           status: 401,
  //           error: "Error al actualizar",
  //         });
  //       } else {
  //         return res.status(200).json({
  //           status: 200,
  //           mensaje: "Usuario actualizado correctamente",
  //         });
  //       }
  //     });
  //   } else {
  //     return res
  //       .status(404)
  //       .json({ status: 404, error: "No existe usuario" });
  //   }
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({
  //     status: 500,
  //     error: "Error interno del servidor",
  //   });
  // }
};
module.exports = { editarRolUsuario };
