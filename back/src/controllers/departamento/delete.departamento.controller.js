const departamentoModels = require("../../models/departamento.models");

const deleteDepartamento =  async (req, res) => {
    try {
      const { departament_id } = req.params;

      if (!departament_id  ) {
        return res.status(400).json({
            status: 400,
            error: "Faltan campos obligatorios",
        });
    };

    const resultado = await departamentoModels.DeleteDepartamento(departament_id);
    
  

      if (resultado.affectedRows === 0) {
        return res.status(404).json({
             status: 404, 
             error: 'Departamento no encontrado'
             });
      }

      res.status(200).json({ 
        status: 200, 
        message: 'Departamento eliminado correctamente' 
    });
    } catch (error) {
      console.error(error);
      res.status(500).json({
         status: 500,
          error: 'Error al eliminar el departamento'
         });
    }
  };
  module.exports = {deleteDepartamento};