const { db } = require("../../../../utils/utils.helpers");
const PDFDocument = require("pdfkit");
const mysql = require("mysql2/promise");
const excel = require("excel4node");
const fs = require("fs");
const path = require("path");
const buildPDF = require("../../../../utils/utils.pdfBuild");
const obtenerDatosInforme = require("../../../helpers/obtenerDatosInforme");
const buildExcel = require("../../../../utils/utils.excelBuild");



const generarReporteGeneralXLS=  async (req, res) => {
    const { activo } = req.query;

    let datos;
    let datosParaEnviarAConstruirXLS;
    try {
      if (activo == 3) {
        const sql =
          "SELECT * FROM `v_infogenerator` WHERE `articulo_estado_id` = ?";

        const combo = [(articulo_estado_id = 3)];
        //hacer validacion del rows y ver qwue tenga contenido  con su largo
        // Ejecutar la consulta
        [datos] = await db.promise().execute(sql, combo);


        datosParaEnviarAConstruirXLS = datos;
      } else if (activo == 1) {
        const sql =
          "SELECT * FROM `v_infogenerator` WHERE `articulo_estado_id` = ?";

        const combo = [(articulo_estado_id = 1)];
        //hacer validacion del rows y ver qwue tenga contenido  con su largo
        // Ejecutar la consulta
        [datos] = await db.promise().execute(sql, combo);
        datosParaEnviarAConstruirXLS = datos;
      } else if (activo === undefined || activo === null) {
        [datos] = await db.promise().query("CALL Read_v_infogenerator()");
        // const datos = await obtenerDatosInforme();

        datosParaEnviarAConstruirXLS = datos[0];
      }
      const wb = new excel.Workbook();
      const ws = wb.addWorksheet("Reporte inventario");

      if (activo == 3) {
        ws.cell(1, 1).string("ID");
        ws.cell(1, 2).string("Nombre");
        ws.cell(1, 3).string("Código");
        ws.cell(1, 4).string("Departamento");
        ws.cell(1, 5).string("Categoria");
        ws.cell(1, 6).string("Estado");
        ws.cell(1, 7).string("Año");
        // filas con los datos
        datosParaEnviarAConstruirXLS.forEach((row, i) => {
          ws.cell(i + 2, 1).number(row.ID);
          ws.cell(i + 2, 2).string(row.art_nombre);
          ws.cell(i + 2, 3).string(row.art_codigo);
          ws.cell(i + 2, 4).string(row.departament);
          ws.cell(i + 2, 5).string(row.categoria);
          ws.cell(i + 2, 6).string(
            row.articulo_estado_id === 3 ? "Activo" : "Dado de baja"
          );
          ws.cell(i + 2, 7).string(row.anio);
        });
      } else if (activo == 1) {
        ws.cell(1, 1).string("ID");
        ws.cell(1, 2).string("Nombre");
        ws.cell(1, 3).string("Código");
        ws.cell(1, 4).string("Departamento");
        ws.cell(1, 5).string("Categoria");
        ws.cell(1, 6).string("Estado");
        ws.cell(1, 7).string("Fecha de baja");
        ws.cell(1, 8).string("Autorización");

        datosParaEnviarAConstruirXLS.forEach((row, i) => {
          ws.cell(i + 2, 1).number(row.ID);
          ws.cell(i + 2, 2).string(row.art_nombre);
          ws.cell(i + 2, 3).string(row.art_codigo);
          ws.cell(i + 2, 4).string(row.departament);
          ws.cell(i + 2, 5).string(row.categoria);
          ws.cell(i + 2, 6).string(
            row.articulo_estado_id === 3 ? "Activo" : "Dado de baja"
          );
          ws.cell(i + 2, 7).date(row.fecha_baja, "DD/MM/YYYY");
          ws.cell(i + 2, 8).string(row.autorizacion);
        });
      } else if (activo === undefined || activo === null) {
        ws.cell(1, 1).string("ID");
        ws.cell(1, 2).string("Nombre");
        ws.cell(1, 3).string("Código");
        ws.cell(1, 4).string("Departamento");
        ws.cell(1, 5).string("Categoria");
        ws.cell(1, 6).string("Estado");
        ws.cell(1, 7).string("Año");
        // filas con los datos
        datosParaEnviarAConstruirXLS.forEach((row, i) => {
          ws.cell(i + 2, 1).number(row.ID);
          ws.cell(i + 2, 2).string(row.art_nombre);
          ws.cell(i + 2, 3).string(row.art_codigo);
          ws.cell(i + 2, 4).string(row.departament);
          ws.cell(i + 2, 5).string(row.categoria);
          ws.cell(i + 2, 6).string( row.articulo_estado_id === 3 ? "Activo" : "Dado de baja");
          ws.cell(i + 2, 7).string(row.anio);
        });
      }

      const fileName = `documento-${Math.random()
        .toString(36)
        .substring(7)}.xlsx`;

      const dirPath = path.join(process.cwd(), "/uploads/xls/", fileName);
      wb.write(dirPath, (err, stats) => {
        if (err) {
          console.error("Error al escribir el archivo:", err);
          throw new Error("Error al escribir el archivo");
        } else {
          function downloadFile() {
            res.download(dirPath);
          }
          downloadFile();
          return false;
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        error: "Error en la petición",
      });
    }
  };

  module.exports = {generarReporteGeneralXLS};