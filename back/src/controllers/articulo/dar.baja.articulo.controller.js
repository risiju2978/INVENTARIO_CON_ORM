
const articuloModels = require("../../models/articulo.models");


const bajaArticulo = async (req, res) => {
    try {
      const { id_articulo, motivo_baja, autorizacion, fecha_baja } = req.body;

      // Validar campos obligatorios
      if (!id_articulo || !motivo_baja || !autorizacion || !fecha_baja) {
        return res.status(400).json({
          status: 400,
          error: "Faltan campos obligatorios para dar de baja el artículo",
        });
      };
     
          const dataInsertArticuloBaja = [
            id_articulo,
            fecha_baja,
            motivo_baja,
            autorizacion,
          ];
         
const resultado = await articuloModels.DarDeBajaArticulo(dataInsertArticuloBaja,[id_articulo]);

          // Verificar si se actualizó algún registro
          if (resultado.affectedRows === 0) {
            return res.status(404).json({
              status: 404,
              error: "No se encontró el artículo para dar de baja",
            });
          };
            res.status(200).json({
              status: 200,
              message: "Artículo dado de baja con éxito",
              data: resultado,
            });
       
   
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        error: "Error interno del servidor al extraer datos",
      });
    }
  };

  module.exports ={bajaArticulo};
