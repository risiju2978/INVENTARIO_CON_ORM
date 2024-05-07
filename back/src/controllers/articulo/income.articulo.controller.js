
const fs = require("fs");
const path = require("path");
const { request } = require("express");
const articuloModels = require("../../models/articulo.models");

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
     


      // Validación de campos obligatorios para insertar en la tabla articulo
      if (!articulo_estado_id || !categoria_id || !usuario_id || !office_id ) {
        return res.status(400).json({
          status: 400,
          error:
            "Faltan campos obligatorios para insertar en la tabla articulo",
        });
      }
// data del ingreso de articulo 
      const dataInsertArticulo = [
        articulo_estado_id,
        categoria_id,
        usuario_id,
        office_id,
      ];


      //array de ingreso para articulo detalle
          const dataInsertArticuloDetalle = [
            //id_articulo,
            anio,
            dimension,
            art_num,
            art_nombre,
            art_codigo,
            (art_ingreso = new Date()),
            art_glosa,
            art_image_path = imgArticulo === undefined ? "uploads/public/image.png" : imgArticulo.path, // Guardamos la ruta del archivo en la base de datos
          ];

          const resultados = await articuloModels.insertarArticuloYDetalle( dataInsertArticulo , dataInsertArticuloDetalle);


          if (resultados.affectedRows === 0) { 
            return res.status(404).json({ 
                status: 404,
                error: 'articulo no fue creado' 
            });
        };
           
            res.status(201).json({
              status: 201,
              data: {id_articulo: resultados.articulo.insertId},
              message: "Artículo creado correctamente",

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