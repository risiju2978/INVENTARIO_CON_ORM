const userModels = require("../../models/user.models");
const {Usuario} = require("../../database/conexion-sequelize");


const getInfoUser = async (req, res) => {
    try {
      const { user_id } = req.body;

      if (!user_id || user_id === undefined || user_id === null) {
        return res.status(400).json({
          status: 400,
          error: "Falta el parámetro id_usuario en la solicitud",
        });
      }

        const resultado = await Usuario.findAll({where: {user_id: user_id}})
     

      if (resultado.length === 0) {
        return res.status(404).json({
          status: 404,
          error: "No se encontró el usuario con el ID proporcionado",
        });
      }

      const responseData = {
        status: 200,
        data: {
          username: resultado[0].username,
          password: resultado[0].password,
          correo: resultado[0].email,
          rol: resultado[0].rol,
          estado: resultado[0].user_state,
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