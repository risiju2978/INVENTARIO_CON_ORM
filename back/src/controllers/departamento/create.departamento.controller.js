const departamentoModels = require("../../models/departamento.models");

 const createDepartamento = async (req, res) => {
    try {
      const { departament, campus_id } = req.body;

      if (!departament && !campus_id) {
        return res.status(400).json({
            status: 400,
            error: "Faltan campos obligatorios",
        });
    };

    const resultado = await departamentoModels.CreateDepartamento(departament, campus_id);
    
    if (resultado.affectedRows === 0) { 
      return res.status(404).json({ 
          status: 404,
          error: 'departamento no fue creado' 
      });
  };


      res.status(201).json({
         status: 201,
          message: 'Departamento creado correctamente',
           departamento_id: resultado.insertId });
           
    } catch (error) {
      console.error(error);
      res.status(500).json({ 
        status: 500, 
        error: 'Error al crear el departamento' 
    });
    }
  };
  module.exports = {createDepartamento};