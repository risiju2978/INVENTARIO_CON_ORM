const departamentoModels = require("../../models/departamento.models");

const updateDepartamento =  async (req, res) => {
    try {
      
      const {  departament, departament_id } = req.body;

      if (!departament && !departament_id) {
        return res.status(400).json({
            status: 400,
            error: "Faltan campos obligatorios",
        });
    };

     const resultado = await departamentoModels.UpdateDepartamento( departament, departament_id);
     

      if (resultado.affectedRows === 0) {
        return res.status(404).json({
             status: 404, 
             error: 'Departamento no encontrado' 
            });
      }

      res.status(200).json({
         status: 200,
          message: 'Departamento actualizado correctamente',
          data: { departament_id: resultado.insertId },
         });
    } catch (error) {
      console.error(error);
      res.status(500).json({ 
        status: 500, 
        error: 'Error al actualizar el departamento' 
    });
    }
  };
  module.exports = {updateDepartamento};