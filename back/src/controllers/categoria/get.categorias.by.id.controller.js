const categoriaModels = require("../../models/categoria.models");

const getCategoriaById = async (req, res) => {
    try {
      const { categoria_id} = req.body;
      if ( !categoria_id ) {
        return res.status(400).json({
          status: 400,
          error: "Faltan campos obligatorios",
        });
      }

      const resultado = await categoriaModels.ListarCategoriaByID(categoria_id);
  

      if (resultado.length === 0) {
        return res.status(404).json({
             status: 404,
              error: "Categoría no encontrada" });
      }

      res.status(200).json({
         status: 200, 
         data: resultado });
    } catch (error) {
      console.error(error);
      res.status(500).json({
         status: 500, 
         error: "Error al obtener la categoría" });
    }
  };

  module.exports = {getCategoriaById};