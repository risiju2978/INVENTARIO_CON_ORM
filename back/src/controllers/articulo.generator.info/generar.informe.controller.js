const { db } = require("../../database/conexion");

const PDFDocument = require("pdfkit");
const mysql = require("mysql2/promise");
const excel = require("excel4node");
const fs = require("fs");
const path = require("path");
const buildPDF = require("../../../utils/utils.pdfBuild");
const obtenerDatosInforme = require("../../helpers/obtenerDatosInforme");
const buildExcel = require("../../../utils/utils.excelBuild");


 const generarInforme= async (req, res) => {
    try {
      const {
        tipo_formato,
        fecha_inicio,
        fecha_fin,
        categoria_id,
        office_id,
        campus_id,
        departament_id,
        id_articulo_baja,
        articulo_estado_id,
        anio,
      } = req.body;

      console.log("req.body:", req.body);

      // VALIDACIONES

      // if (!fecha_inicio || !fecha_fin || fecha_inicio > fecha_fin) {
      //   return res.status(400).json({
      //     status: 400,
      //     error: "Rango de fechas de art_ingreso no válido",
      //   });
      // }

      if (categoria_id === undefined || isNaN(categoria_id)) {
        return res.status(400).json({
          status: 400,
          error: "categoria_id no puede ser nulo y debe ser un número",
        });
      }

      if (office_id === undefined || isNaN(office_id)) {
        return res.status(400).json({
          status: 400,
          error: "office_id no puede ser nulo y debe ser un número",
        });
      }

      if (campus_id === undefined || isNaN(campus_id)) {
        return res.status(400).json({
          status: 400,
          error: "campus_id no puede ser nulo y debe ser un número",
        });
      }

      if (departament_id === undefined || isNaN(departament_id)) {
        return res.status(400).json({
          status: 400,
          error: "departament_id no puede ser nulo y debe ser un número",
        });
      }

      if (tipo_formato !== "PDF" && tipo_formato !== "XLS") {
        return res.status(400).json({
          status: 400,
          error: 'El tipo de formato debe ser "PDF" o "XLS"',
        });
      }

      // if (id_articulo_baja === undefined || isNaN(id_articulo_baja)) {
      //   return res.status(400).json({
      //     status: 400,
      //     error: "id_articulo_baja debe ser un número",
      //   });
      // }

      const datos = await obtenerDatosInforme(
        fecha_inicio,
        fecha_fin,
        categoria_id,
        office_id,
        campus_id,
        departament_id,
        id_articulo_baja,
        articulo_estado_id,
        anio
      );

      try {
        if (tipo_formato.toLowerCase() === "pdf" && datos.length !== false) {
          const fileName = `documento-${new Date().toISOString()}`;
          const stream = res.writeHead(200, {
            "Content-Type": "application/pdf",
            "Content-Disposition": `attachment; filename=${fileName}.pdf`,
          });
          console.log("datos:", datos);

          buildPDF(
            (data) => stream.write(data),
            () => stream.end(),
            datos
          );
          return;
        } else if (
          tipo_formato.toLowerCase() === "xls" &&
          datos.length !== false
        ) {
          const wb = new excel.Workbook();
          const ws = wb.addWorksheet("Reporte inventario");
          ws.cell(1, 1).string("ID");
          ws.cell(1, 2).string("Nombre");
          ws.cell(1, 3).string("Código");
          ws.cell(1, 4).string("Departamento");
          ws.cell(1, 5).string("Categoria");
          ws.cell(1, 6).string("Año");
          ws.cell(1, 7).string("Estado");
          // filas con los datos
          datos.forEach((row, i) => {
            ws.cell(i + 2, 1).number(row.ID);
            ws.cell(i + 2, 2).string(row.art_nombre);
            ws.cell(i + 2, 3).string(row.art_codigo);
            ws.cell(i + 2, 4).string(row.departament);
            ws.cell(i + 2, 5).string(row.categoria);
            ws.cell(i + 2, 6).string(row.anio);
            ws.cell(i + 2, 7).string(row.articulo_estado_id);
          });
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
        }
      } catch (error) {
        console.error(error);
        throw new Error("Error al generar el informe");
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        error: "Error al generar el informe",
      });
    }
  };

  module.exports = {generarInforme};