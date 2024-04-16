const fs = require("fs");
const path = require("path");
const { request } = require("express");


const bajaArticulo = async (req, res) => {
    try {
      const { id_articulo, motivo_baja, autorizacion, fecha_baja } = req.body;

      // Validar campos obligatorios
      if (!id_articulo || !motivo_baja || !autorizacion || !fecha_baja) {
        return res.status(400).json({
          status: 400,
          error: "Faltan campos obligatorios para dar de baja el artículo",
        });
      }
      // hacer query con id_articulo donde muestre el estado del articulo si ests activo no hace nada si no lo hace
      db.beginTransaction(async (error) => {
        if (error) {
          throw error;
        }

        try {
          // Actualizar la tabla articulo_baja
          const sqlArticuloBaja = `
          INSERT INTO articulo_baja (id_articulo, fecha_baja, motivo_baja, autorizacion)
          VALUES (?, ?, ?, ?)
        `;

          const dataInsertArticuloBaja = [
            id_articulo,
            fecha_baja,
            motivo_baja,
            autorizacion,
          ];
          await db.promise().query(sqlArticuloBaja, dataInsertArticuloBaja);

          // Actualizar el estado del artículo en la tabla articulo a "dado de baja"
          const sqlActualizarArticulo = `
          UPDATE articulo
          SET articulo_estado_id = 1
          WHERE id_articulo = ?
        `;

          const [result] = await db
            .promise()
            .query(sqlActualizarArticulo, [id_articulo]);

          // Verificar si se actualizó algún registro
          if (result.affectedRows === 0) {
            return res.status(404).json({
              status: 404,
              error: "No se encontró el artículo para dar de baja",
            });
          }

          // Si la actualización tiene éxito, hago un commit
          db.commit((error) => {
            if (error) {
              return db.rollback(() => {
                throw error;
              });
            }

            res.status(200).json({
              status: 200,
              message: "Artículo dado de baja con éxito",
            });
          });
        } catch (error) {
          // Rollback en caso de error
          await db.promise().rollback();
          throw error;
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

  module.exports ={bajaArticulo};
