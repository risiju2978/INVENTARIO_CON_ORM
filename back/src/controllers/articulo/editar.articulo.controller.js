const fs = require("fs");
const path = require("path");
const { request } = require("express");


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

      db.beginTransaction((error) => {
        if (error) {
          throw error;
        }

        // Validar campos obligatorios para editar en la tabla articulo
        // if (
        //   !id_articulo ||
        //   !anio ||
        //   !dimension ||
        //   !art_num ||
        //   !art_nombre ||
        //   !art_codigo ||
        //   !art_glosa ||
        //   !imgArticulo
        // ) {
        //   return res.status(400).json({
        //     status: 400,
        //     error:
        //       "Faltan campos obligatorios para editar en la tabla articulo",
        //   });
        // }
            // Actualizar en articulo_detalle
            const sqlArticuloDetalle = `
                UPDATE articulo_detalle
                SET
                  anio = ?,
                  dimension = ?,
                  art_num = ?,
                  art_nombre = ?,
                  art_codigo = ?,
                  art_glosa = ?,
                  art_image_path = ?
                WHERE id_articulo = ?
              `;

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

            // Actualizar el detalle del artículo
            db.query(
              sqlArticuloDetalle,
              dataUpdateArticuloDetalle,
              (error, result, field) => {
                // si falla la actualización
                if (error) {
                  return db.rollback(() => {
                    throw error;
                  });
                }

                // si la actualización tiene éxito, hago un commit
                db.commit((error) => {
                  if (error) {
                    return db.rollback(() => {
                      throw error;
                    });
                  }

                  res.status(200).json({
                    status: 200,
                    message: "Artículo editado correctamente",
                  });
                });
              }
            );
          
        
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