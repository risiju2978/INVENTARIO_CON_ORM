const sedeModels = require("../../models/sede.models");

const getSedeById = async (req, res) => {
    try {
      const { campus_id } = req.body;
      if (
        !campus_id
      ) {
        return res.status(400).json({
          status: 400,
          error: "Faltan campos obligatorios",
        });
      }

      const resultado = await sedeModels.ListarSedeByID(campus_id);
    
      if (!resultado.length) {
        return res.status(404).json({ 
            status: 404,
             error: 'Sede no encontrada' 
            });
      }

      res.status(200).json({ 
        status: 200,
         data: resultado,
         mensaje: "sede obtenida correctamente",
        });
    } catch (error) {
      console.error(error);
      res.status(500).json({
         status: 500, 
         error: 'Error al obtener la sede' 
        });
    }
  };

  module.exports = {getSedeById};