const articuloEstadoModels = require("../../models/articulo.estado.models");

const getArticuloEstadoById= async (req, res) => {
    try {
      const {articulo_estado_id} = req.body;

      if ( !articulo_estado_id ) {
        return res.status(400).json({
          status: 400,
          error: "Faltan campos obligatorios",
        });
      }

      const resultado = await articuloEstadoModels.ListarArticuloEstadoByID(articulo_estado_id);
  

      if (resultado.length === 0) {
        return res.status(404).json({
             status: 404,
              error: "articulo estado no encontrado" });
      }

      res.status(200).json({
         status: 200, 
        data: resultado });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 500, error: "Error al obtener el estado de artículo por ID" });
    }
  };

  module.exports = {getArticuloEstadoById};