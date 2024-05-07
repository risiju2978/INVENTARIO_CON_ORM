const categoriaModels = require("../../models/categoria.models");

const createCategoria = async (req, res) => {
    try {
      const { categoria } = req.body;

      if (!categoria) {
        return res.status(400).json({
            status: 400,
            error: "Faltan campos obligatorios",
        });
    };
 
    const resultado = await categoriaModels.CrearCategoria(categoria);
    
    if (resultado.affectedRows === 0) { 
      return res.status(404).json({ 
          status: 404,
          error: 'categoria no fue creada' 
      });
  };
     
      res.status(201).json({
        status: 201,
        data: { categoria_id: resultado.insertId },
        message: "Categoría creada correctamente",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 500, error: "Error al crear la categoría" });
    }
  };

  module.exports ={createCategoria};
