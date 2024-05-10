const departamentoModels = require("../../models/departamento.models");

const getAllDepartamentos = async (req, res) => {
    try {


     const resultado = await departamentoModels.ListarTodoDepartamento();
      if(resultado.length === 0){
        return res.status(404).json({
          status: 404,
          error: "no se encontraron departamentos"
        });
      };
    
    
      res.status(200).json({ 
        status: 200,
         data: resultado
         });
    } catch (error) {
      console.error(error);
      res.status(500).json({
         status: 500, 
         error: 'Error al obtener los departamentos'
         });
    }
  };

  module.exports = {getAllDepartamentos};