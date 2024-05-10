const oficinaModels = require("../../models/oficina.models");

const deleteOficina = async (req, res) => {
    try {
      const { office_id } =req.params;

      if (!office_id ) {
        return res.status(400).json({
            status: 400,
            error: "Faltan campos obligatorios",
        });
    };

     const resultado =  await oficinaModels.DeleteOficina(office_id);
     

      if (resultado.affectedRows === 0) {
        return res.status(404).json({
          status: 404,
          error: 'Oficina no encontrada',
        });
      };

      res.status(200).json({
        status: 200,
        message: 'Oficina eliminada correctamente',
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        error: 'Error al eliminar la oficina',
      });
    }
  };

  module.exports = {deleteOficina};