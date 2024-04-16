
const express = require('express');
const oficinaRouter = express.Router();
const oficinaCRUD = require('../services/oficina/oficinaControllers/oficinaCRUD');

// Rutas
oficinaRouter.get('/getAllOficinas', oficinaCRUD.getAllOficinas);
oficinaRouter.get('/getOficinasByID', oficinaCRUD.getOficinaById);
oficinaRouter.post('/createOficinas', oficinaCRUD.createOficina);
oficinaRouter.put('/updateOficinas', oficinaCRUD.updateOficina);
oficinaRouter.delete('/deleteOficinas/:office_id', oficinaCRUD.deleteOficina);

module.exports = oficinaRouter;