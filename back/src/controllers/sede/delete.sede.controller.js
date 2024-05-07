const sedeModels = require("../../models/sede.models");

const deleteSede = async (req, res) => {
    try {
      const { campus_id } = req.params;
      if (!campus_id) {
        return res.status(400).json({
            status: 400,
            error: "Faltan campos obligatorios",
        });
    };

    const resultado = await sedeModels.DeleteSede(campus_id);
  

      if (resultado.affectedRows === 0) {
        return res.status(404).json({ 
            status: 404,
             error: 'Sede no encontrada'
             });
      };

      res.status(200).json({
         status: 200,
         message: 'Sede eliminada correctamente'
         });
    } catch (error) {
      console.error(error);
      res.status(500).json({ 
        status: 500,
         error: 'Error al eliminar la sede'
         });
    }
  };

  module.exports = {deleteSede};