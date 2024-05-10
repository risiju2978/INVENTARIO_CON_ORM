const { db } = require("../../database/conexion");

const PDFDocument = require("pdfkit");
const mysql = require("mysql2/promise");
const excel = require("excel4node");
const fs = require("fs");
const path = require("path");
const buildPDF = require("../../../utils/utils.pdfBuild");
const obtenerDatosInforme = require("../../helpers/obtenerDatosInforme");




const generarReporteGeneralPDF = async (req, res) => {
    const { activo } = req.query;

    let datos;
    let datosParaEnviarAConstruirPDF;

    try {
      if (activo == 3) {
    
        const combo = [(articulo_estado_id = 3)];
   
        datos = await articuloGeneratorInfoModels.generarInforme(combo);

        datosParaEnviarAConstruirPDF = datos;

      } else if (activo == 1) {
     

        const combo = [(articulo_estado_id = 1)];
        //hacer validacion del rows y ver qwue tenga contenido  con su largo
        // Ejecutar la consulta
        [datos] = await db.promise().execute(sql, combo);
        datosParaEnviarAConstruirPDF = datos;
        
      } else if (activo === undefined || activo === null) {
        [datos] = await db.promise().query("CALL Read_v_infogenerator()");
        // const datos = await obtenerDatosInforme();

        datosParaEnviarAConstruirPDF = datos;
        
      } else if (activo === undefined || activo === null) {
      
        datos = await articuloGeneratorInfoModels.llamarAVista();
    

        datosParaEnviarAConstruirPDF = datos;
      }

      console.log("datos para enviar a buildPdf", datosParaEnviarAConstruirPDF);

      try {
        const fileName = `documento-${Math.random().toString(36).substring(7)}`;
        const stream = res.writeHead(200, {
          "Content-Type": "application/pdf",
          "Content-Disposition": `attachment; filename=${fileName}.pdf`,
        });

        buildPDF(
          (data) => stream.write(data),
          () => stream.end(),
          datosParaEnviarAConstruirPDF,
          activo
        );
        return;
      } catch (error) {
        console.error(error);
        throw new Error("Error al generar el informe");
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        error: "Error en la petición",
      });
    }
  };

  module.exports ={generarReporteGeneralPDF};