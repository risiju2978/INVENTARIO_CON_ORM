


const getInfoUser = async (req, res) => {
    try {
      const { user_id } = req.body;

      if (!user_id || user_id === undefined || user_id === null) {
        return res.status(400).json({
          status: 400,
          error: "Falta el parámetro id_usuario en la solicitud",
        });
      }

      const sql = "SELECT * FROM usuario WHERE user_id = ?";
      const [user] = await db.promise().query(sql, [user_id]);

      if (user.length === 0) {
        return res.status(404).json({
          status: 404,
          error: "No se encontró el usuario con el ID proporcionado",
        });
      }

      const responseData = {
        status: 200,
        data: {
          username: user[0].username,
          password: user[0].password,
          correo: user[0].email,
          rol: user[0].rol,
          estado: user[0].user_state,
        },
        message: "Información personal mostrada con éxito",
      };

      res.status(200).json(responseData);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        error: "Error interno del servidor al extraer datos: " + error.message,
      });
    }
  }

  module.exports ={getInfoUser };