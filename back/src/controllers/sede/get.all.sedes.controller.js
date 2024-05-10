const sedeModels = require("../../models/sede.models");

const getAllSedes= async (req, res) => {
    try {

const resultados = await sedeModels.listarTodaSede();
if(resultados.length === 0){
  return res.status(404).json({
    status: 404,
    error: "no se encontraron sedes"
  });
};
res.status(200).json({
  status: 200,
  data: resultados,
  mensaje: "Lista de sedes obtenida correctamente",
});
   
    } catch (error) {
      console.error(error);
      res.status(500).json({
         status: 500, 
         error: 'Error interno del servidor al obtener la lista de sedes'
         });
    }
  };

  module.exports = {getAllSedes};
