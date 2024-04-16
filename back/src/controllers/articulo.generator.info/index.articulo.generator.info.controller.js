require("dotenv").config();
const { db } = require("../../../../utils/utils.helpers");
const PDFDocument = require("pdfkit");
const mysql = require("mysql2/promise");
const excel = require("excel4node");
const fs = require("fs");
const path = require("path");
const buildPDF = require("../../../../utils/utils.pdfBuild");
const obtenerDatosInforme = require("../../../helpers/obtenerDatosInforme");
const buildExcel = require("../../../../utils/utils.excelBuild");
const { generarInforme } = require("../../services/copia_generator_info");
const { generarReporteGeneralPDF } = require("./generar.reporte.general.PDF.controller");
const { generarReporteGeneralXLS } = require("./generar.reporte.general.XLS.controller");





const infGeneratorController = {
  generarReporteGeneralPDF,

  generarReporteGeneralXLS,

  generarInforme
};

module.exports = infGeneratorController;
