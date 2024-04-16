const express = require('express');
const vistaUserRouter = express.Router();
const vistaUsersController = require('../services/V_Users/V_UsersController/V_UsersController');

// Rutas
vistaUserRouter.get('/readVistaUsers', vistaUsersController.readVistaUsers);

module.exports = vistaUserRouter;
