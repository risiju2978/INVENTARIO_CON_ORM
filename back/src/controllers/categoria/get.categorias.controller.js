const categoriaModels = require("../../models/categoria.models");

 const getCategorias= async (req, res) => {
    try {
   


       const resultado = await categoriaModels.ListarTodaCategoria();
      if(resultado.length === 0){
        return res.status(404).json({
          status: 404,
          error: "no se encontraron categorias"
        });
      };

      res.status(200).json({ status: 200, data: resultado });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 500, error: "Error al obtener las categorías" });
    }
  };

  module.exports = {getCategorias};
