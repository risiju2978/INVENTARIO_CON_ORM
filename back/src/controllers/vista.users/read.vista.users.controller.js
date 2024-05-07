const vistaUsersModels = require("../../models/vista.users.models");

const readVistaUsers = async (req, res) => {
    try {

      const resultado = await vistaUsersModels.VistaUsers();
      if(resultado.length === 0){
        return res.status(404).json({
          status: 404,
          error: "no se encontro la vista de usuarios"
        });
      };

      res.status(200).json({
        status: 200,
        data: resultado, // Devuelve los resultados del SP (en el primer índice del array)
      });
    } catch (error) {
      console.error('Error al llamar al SP Read_Users:', error);
      res.status(500).json({
        status: 500,
        error: 'Error al obtener datos de la vista',
      });
    }
  };

  module.exports ={readVistaUsers };