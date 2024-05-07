const departamentoModels = require("../../models/departamento.models");

const getDepartamentoById = async (req, res) => {
    try {
      const { departament_id} = req.body;

      if ( !departament_id ) {
        return res.status(400).json({
          status: 400,
          error: "Faltan campos obligatorios",
        });
      }
      const resultado = await departamentoModels.ListarDepartamentosByID(departament_id);
    

      if (resultado.length === 0) {
        return res.status(404).json({ 
          status: 404,
          error: 'Departamento no encontrado' 
            });
      }

      res.status(200).json({
         status: 200,
          data: resultado 
        });
    } catch (error) {
      console.error(error);
      res.status(500).json({
         status: 500,
          error: 'Error al obtener el departamento'
         });
    }
  };
  module.exports = {getDepartamentoById};