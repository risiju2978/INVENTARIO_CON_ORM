
const articuloModels = require("../../models/articulo.models");


const editArticulo = async (req, res) => {
    try {
      const {
        id_articulo,
        anio,
        dimension,
        art_num,
        art_nombre,
        art_codigo,
        art_glosa,
      } = req.body;

      const imgArticulo = req.file;
      console.log(imgArticulo)

 // Validación de campos obligatorios para editar en la tabla 
 if (!id_articulo || !anio || !dimension || !art_num  || !art_nombre || !art_codigo || !art_glosa ) {
  return res.status(400).json({
    status: 400,
    error:
      "Faltan campos obligatorios para editar el articulo",
  });
}


            const dataUpdateArticuloDetalle = [
              anio,
              dimension,
              art_num,
              art_nombre,
              art_codigo,
              art_glosa,
              imgArticulo.path,
              id_articulo,
            ];

            const resultado = await articuloModels.EditarArticulo(dataUpdateArticuloDetalle);

            if (resultado.affectedRows === 0) { 
              return res.status(404).json({ 
                  status: 404,
                  error: 'articulo no fue editado' 
              });
          };


            res.status(200).json({
              status: 200,
              data: { id_articulo: resultado.insertId },
              message: "Articulo editado correctamente",
            });

    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        error: "Error interno del servidor al extraer datos",
      });
    }
  };

  module.exports ={editArticulo};