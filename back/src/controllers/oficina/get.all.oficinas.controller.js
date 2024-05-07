const oficinaModels = require("../../models/oficina.models");

const getAllOficinas = async (req, res) => {
    try {

      const resultados = await oficinaModels.ListarTodaOficina();
      if(resultados.length === 0){
        return res.status(404).json({
          status: 404,
          error: "no se encontraron oficinas"
        });
      };

      res.status(200).json({
        status: 200,
        data: resultados,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        error: 'Error al obtener las oficinas',
      });
    }
  };

  module.exports = {getAllOficinas};