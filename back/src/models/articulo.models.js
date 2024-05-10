const { db } = require("../database/conexion");

const fs = require("fs");
const path = require("path");
const { request } = require("express");

module.exports = {

GetAniosFromDataBase(){

    return new Promise((resolve, reject) => {
        // Consulta SQL para obtener la lista de usuarios
        const sql = "SELECT anio FROM articulo_detalle";
        db.query(sql,(err,results)=>{
            if(err) reject(err);
            else resolve(results);
        });
    });

},

async  insertarArticuloYDetalle(dataArticulo, dataDetalle) {
    return new Promise((resolve, reject) => {
      db.beginTransaction(async (error) => {
        if (error) {
          reject(error);
        }
  
        try {
          // Primera inserción: Articulo
          const sqlArticulo = "INSERT INTO articulo (articulo_estado_id, categoria_id, usuario_id, office_id) VALUES (?, ?, ?, ?)";
          const resultArticulo = await new Promise((resolve, reject) => {
            db.query(sqlArticulo, dataArticulo, (err, results) => {
              if (err) {
                return reject(err);
              }
              resolve(results);
            });
          });
  
          // Segunda inserción: Articulo Detalle
          let sqlDetalle = `
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
          // Asegúrate de incluir el ID del artículo recién insertado.
          //unshift agrega  elementos al inicio de un array.
          dataDetalle.unshift(resultArticulo.insertId);
          const resultDetalle = await new Promise((resolve, reject) => {
            db.query(sqlDetalle, dataDetalle, (err, results) => {
              if (err) {
                return reject(err);
              }
              resolve(results);
            });
          });
  
          db.commit((err) => {
            if (err) {
              return db.rollback(() => {
                reject(err);
              });
            }
            resolve({ articulo: resultArticulo, detalle: resultDetalle });
          });
        } catch (err) {
          db.rollback(() => {
            reject(err);
          });
        }
      });
    });
  },

  async EditarArticulo(dataUpdateArticuloDetalle){

  return new Promise((resolve, reject) => {
    db.beginTransaction(async (error) => {
      if (error) {
        reject(error);
      }

      try {
        // consulta sql
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
        const resultEditArticulo = await new Promise((resolve, reject) => {
          db.query(sqlArticuloDetalle, dataUpdateArticuloDetalle, (err, results) => {
            if (err) {
              return reject(err);
            }
            resolve(results);
          });
        });

        db.commit((err) => {
          if (err) {
            return db.rollback(() => {
              reject(err);
            });
          }
          resolve({ articuloEdit: resultEditArticulo });
        });
      } catch (err) {
        db.rollback(() => {
          reject(err);
        });
      }
    });
  });

},

async DarDeBajaArticulo(dataInsertArticuloBaja, [id_articulo]){

  return new Promise((resolve, reject) => {
    db.beginTransaction(async (error) => {
      if (error) {
        reject(error);
      }

      try {
        // Primera inserción: 
        const sqlArticuloBaja = `
          INSERT INTO articulo_baja (id_articulo, fecha_baja, motivo_baja, autorizacion)
          VALUES (?, ?, ?, ?)
        `;

        const resultArticuloBaja = await new Promise((resolve, reject) => {
          db.query(sqlArticuloBaja, dataInsertArticuloBaja, (err, results) => {
            if (err) {
              return reject(err);
            }
            resolve(results);
          });
        });

        // Segunda inserción: Articulo Detalle
           // Actualizar el estado del artículo en la tabla articulo a "dado de baja"
           const sqlActualizarArticulo = `
           UPDATE articulo
           SET articulo_estado_id = 1
           WHERE id_articulo = ?
         `;
 
        
        const resultActualizarEstado = await new Promise((resolve, reject) => {
          db.query(sqlActualizarArticulo, [id_articulo], (err, results) => {
            if (err) {
              return reject(err);
            }
            resolve(results);
          });
        });

        db.commit((err) => {
          if (err) {
            return db.rollback(() => {
              reject(err);
            });
          }
          resolve({ articuloBaja: resultArticuloBaja, EstadoArt: resultActualizarEstado });
        });
      } catch (err) {
        db.rollback(() => {
          reject(err);
        });
      }
    });
  });


},

};