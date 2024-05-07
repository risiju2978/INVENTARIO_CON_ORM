const oficinaModels = require("../../models/oficina.models");

 const updateOficina = async (req, res) => {
    try {
      const { departament_id, office, office_id } = req.body;

      if (!departament_id && !office && !office_id) {
        return res.status(400).json({
            status: 400,
            error: "Faltan campos obligatorios",
        });
    };

    const resultado = await oficinaModels.UpdateOficina( departament_id, office, office_id);
     

      if (resultado.affectedRows === 0) {
        return res.status(404).json({
          status: 404,
          error: 'Oficina no encontrada',
        });
      }

      res.status(200).json({
        status: 200,
        message: 'Oficina actualizada correctamente',
        data: { office_id: resultado.insertId },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        error: 'Error al actualizar la oficina',
      });
    }
  };
  module.exports = {updateOficina};