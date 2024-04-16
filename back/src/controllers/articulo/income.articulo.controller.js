const fs = require("fs");
const path = require("path");
const { request } = require("express");

const incomeArticulo = async (req = request, res) => {
    try {
      const {
        usuario_id,
        anio,
        dimension,
        art_num,
        art_nombre,
        art_codigo,
        art_glosa,
        articulo_estado_id,
        categoria_id,
        office_id,
      } = req.body;

      const imgArticulo = req.file;
      console.log(req.file)


      // Validación de campos obligatorios para insertar en la tabla articulo
      if (!articulo_estado_id || !categoria_id || !usuario_id || !office_id ) {
        return res.status(400).json({
          status: 400,
          error:
            "Faltan campos obligatorios para insertar en la tabla articulo",
        });
      }

      // Iniciar transacción
      db.beginTransaction(async (error) => {
        if (error) {
          throw error;
        }

        try {
          // 1. Insertar en la tabla articulo
          const sqlArticulo = `
          INSERT INTO articulo (
            articulo_estado_id,
            categoria_id,
            usuario_id,
            office_id
          ) VALUES (?, ?, ?, ?)`;

          const dataInsertArticulo = [
            articulo_estado_id,
            categoria_id,
            usuario_id,
            office_id,
          ];

          const [resultArticulo] = await db
            .promise()
            .query(sqlArticulo, dataInsertArticulo);

          const id_articulo = resultArticulo.insertId;

          // 3. Insertar en la tabla articulo_detalle
          const sqlArticuloDetalle = `
            INSERT INTO articulo_detalle (
              id_articulo,
              anio,
              dimension,
              art_num,
              art_nombre,
              art_codigo,
              art_ingreso,
              art_glosa,
              art_image_path
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

          const dataInsertArticuloDetalle = [
            id_articulo,
            anio,
            dimension,
            art_num,
            art_nombre,
            art_codigo,
            (art_ingreso = new Date()),
            art_glosa,
            art_image_path = imgArticulo === undefined ? "uploads/public/image.png" : imgArticulo.path, // Guardamos la ruta del archivo en la base de datos
          ];

          await db
            .promise()
            .query(sqlArticuloDetalle, dataInsertArticuloDetalle);

          // Hacer commit si todo fue exitoso
          db.commit((error) => {
            if (error) {
              return db.rollback(() => {
                console.log("error en el commit");
                throw new Error();
              });
            }

            res.status(200).json({
              status: 200,
              message: "Artículo creado correctamente",
            });
          });
        } catch (error) {
          // Si hay un error, hacer rollback
          console.log("error en la transacción", error);
          db.rollback(() => {
            throw new Error();
          });
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        error: "Error interno del servidor al extraer datos",
      });
    }
  };

  module.exports ={incomeArticulo};