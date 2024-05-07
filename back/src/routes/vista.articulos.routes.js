const express = require('express');
const vistaRouter = express.Router();
const vistaController = require('../controllers/vista.info.generator/index.vista.info.generator.controller');

// Rutas
vistaRouter.get('/readVista', vistaController.readVista);

module.exports = vistaRouter;
