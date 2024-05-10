const categoriaModels = require("../../models/categoria.models");

const updateCategoria = async (req, res) => {
    try {
      
      const { categoria, categoria_id } = req.body;

      if (!categoria && !categoria_id) {
        return res.status(400).json({
            status: 400,
            error: "Faltan campos obligatorios",
        });
    };

     const resultado = await categoriaModels.UpdateCategoria( categoria, categoria_id);
     

      if (resultado.affectedRows === 0) {
        return res.status(404).json({
             status: 404, 
             error: 'categoria no encontrada' 
            });
      }
   

      res.status(200).json({
         status: 200, 
         message: "Categoría actualizada correctamente",
         data: { categoria_id: resultado.insertId }
         });

    } catch (error) {
      console.error(error);
      res.status(500).json({
         status: 500,
          error: "Error al actualizar la categoría" });
    }
  };
  module.exports = {updateCategoria};