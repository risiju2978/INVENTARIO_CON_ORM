const bcrypt = require("bcrypt");
const userModels = require("../../models/user.models");
const { generarJWT } = require("../../../utils/utils.generar-jwt");


const loginUsuario = async (req, res) => {
    try {
      // Obtener credenciales del cuerpo de la solicitud
      const { username, password } = req.body;

      // Verifica si los campos obligatorios están presentes y coinciden
      if (!username || !password) {
        return res.status(400).json({
          status: 400,
          error: "Faltan campos obligatorios",
        });
      }

      // Consultar en la base de datos para obtener el usuario por nombre y contraseña

      const resultado = await userModels.LoginUser(username);
      console.log(resultado);


      // Si no está en arreglo, el usuario no existe
      if (resultado.length === 0) {
        return res.status(404).json({
          status: 404,
          error: "Usuario no encontrado",
        });
      }

      const passWordVerify = bcrypt.compareSync(password, resultado[0].password); // devuelve true o false

      if (!passWordVerify) {
        return res.status(401).json({
          status: 401,
          message: "Contraseña incorrecta",
        });
      }

      //generar token
      const token = await generarJWT(resultado[0].user_id, resultado[0].username);
      console.log(token);
      console.log(resultado[0].user_id);

      // Enviar respuesta exitosa con los datos del usuario
      res.status(200).json({
        status: 200,
        data: resultado,
        message: "Usuario accedido con exito ",
        token: token,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        error: "Error interno del servidor" + error.message,
      });
    }
  }

  module.exports ={loginUsuario };