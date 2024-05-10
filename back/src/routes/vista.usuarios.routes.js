const express = require('express');
const vistaUserRouter = express.Router();
const vistaUsersController = require('../controllers/vista.users/index.vista.users.controller');

// Rutas
vistaUserRouter.get('/readVistaUsers', vistaUsersController.readVistaUsers);

module.exports = vistaUserRouter;
