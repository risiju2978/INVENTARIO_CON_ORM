
const GeneratorInfoController = require ('../controllers/articulo.generator.info/index.articulo.generator.info.controller.js');
const express = require("express")
const generatorInfoRouter = express.Router();

generatorInfoRouter.post('/generator_inf', GeneratorInfoController.generarInforme);
generatorInfoRouter.get('/generar-reporte-general-pdf/', GeneratorInfoController.generarReporteGeneralPDF);
generatorInfoRouter.get('/generar-reporte-general-xls', GeneratorInfoController.generarReporteGeneralXLS);

module.exports =generatorInfoRouter;











