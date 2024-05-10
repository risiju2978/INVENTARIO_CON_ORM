const oficinaModels = require("../../models/oficina.models");

const getOficinaById = async (req, res) => {
    try {
      const { office_id } = req.body;

      if ( !office_id ) {
        return res.status(400).json({
          status: 400,
          error: "Faltan campos obligatorios",
        });
      }

      const resultados = await oficinaModels.ListarOficinaByID(office_id);
    

      if (!resultados.length) {
        return res.status(404).json({
          status: 404,
          error: 'Oficina no encontrada',
        });
      }

      res.status(200).json({
        status: 200,
        data: resultados,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        error: 'Error al obtener la oficina',
      });
    }
  };

  module.exports = {getOficinaById};