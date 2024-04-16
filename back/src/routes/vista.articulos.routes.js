const express = require('express');
const vistaRouter = express.Router();
const vistaController = require('../services/V_InfoGenerator/V_Controllers/V_Controller');

// Rutas
vistaRouter.get('/readVista', vistaController.readVista);

module.exports = vistaRouter;
