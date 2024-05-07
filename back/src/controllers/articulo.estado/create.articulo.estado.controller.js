const articuloEstadoModels = require("../../models/articulo.estado.models");

const createArticuloEstado = async (req, res) => {
    try {
      const { articulo_estado } = req.body;

      if (!articulo_estado) {
        return res.status(400).json({
            status: 400,
            error: "Faltan campos obligatorios",
        });
    };

    const resultado = await articuloEstadoModels.CreateArticuloEstado(articulo_estado);
    
    if (resultado.affectedRows === 0) { 
      return res.status(404).json({ 
          status: 404,
          error: 'Estado del articulo no fue creado' 
      });
  };
    

      res.status(201).json({ 
        status: 201, 
        data: { id: resultado.insertId },
         message: "Estado de artículo creado correctamente" });
    } catch (error) {
      console.error(error);
      res.status(500).json({
         status: 500,
         error: "Error al crear el estado de artículo" });
    }
  };

  module.exports ={createArticuloEstado};