
const sedeCRUD = require ("../controllers/sede/index.sede.controller.js");
const express = require("express");

const sedeRouter = express.Router();

// Rutas para CRUD de sede
sedeRouter.get('/getAllSedes', sedeCRUD.getAllSedes);
sedeRouter.get('/getSedeByID', sedeCRUD.getSedeById);
sedeRouter.post('/createSede', sedeCRUD.createSede);
sedeRouter.put('/updateSede', sedeCRUD.updateSede);
sedeRouter.delete('/deleteSede/:campus_id', sedeCRUD.deleteSede);

module.exports = sedeRouter;