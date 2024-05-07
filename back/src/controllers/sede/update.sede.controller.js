const sedeModels = require("../../models/sede.models");

 const updateSede = async (req, res) => {
    try {
      
      const {  campus, campus_id } = req.body;
      if (!campus && !campus_id) {
        return res.status(400).json({
            status: 400,
            error: "Faltan campos obligatorios",
        });
    };
    const resultado = await sedeModels.UpdateSede( campus, campus_id );
    

      if ( resultado.affectedRows === 0) {
        return res.status(404).json({ 
            status: 404,
             error: 'Sede no encontrada'
             });
      };

      res.status(200).json({ 
        status: 200, 
        message: 'Sede actualizada correctamente',
        data: { campus_id: resultado.insertId },
     });
    } catch (error) {
      console.error(error);
      res.status(500).json({
         status: 500,
          error: 'Error al actualizar la sede'
        });
    }
  };

  module.exports = {updateSede};