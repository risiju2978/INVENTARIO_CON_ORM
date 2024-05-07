const articuloEstadoModels = require("../../models/articulo.estado.models");

const deleteArticuloEstado = async (req, res) => {
    try {
      const {articulo_estado_id } = req.body;

      if (!articulo_estado_id  ) {
        return res.status(400).json({
            status: 400,
            error: "Faltan campos obligatorios",
        });
    };
    
    const resultado = await articuloEstadoModels.DeleteArticuloEstado(articulo_estado_id);

      if (resultado.affectedRows === 0) {
        return res.status(404).json({
             status: 404,
              error: "Estado de artículo no encontrado" });
      }

      res.status(200).json({ 
        status: 200, 
        message: "Estado de artículo eliminado correctamente" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ 
        status: 500, 
        error: "Error al eliminar el estado de artículo" });
    }
  };
  module.exports ={deleteArticuloEstado};