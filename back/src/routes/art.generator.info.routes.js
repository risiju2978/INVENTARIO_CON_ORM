
const GeneratorInfoController = require ('../services/articulo/artControllers/artGeneratorInfoController');
const express = require("express")
const generatorInfoRouter = express.Router();

generatorInfoRouter.post('/generator_inf', GeneratorInfoController.generarInforme);
generatorInfoRouter.get('/generar-reporte-general-pdf/', GeneratorInfoController.generarReporteGeneralPDF);
generatorInfoRouter.get('/generar-reporte-general-xls', GeneratorInfoController.generarReporteGeneralXLS);

module.exports =generatorInfoRouter;











