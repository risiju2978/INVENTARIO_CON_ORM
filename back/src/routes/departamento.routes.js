const departamentoCRUD = require ('../services/departamento/departamentoControllers/departamentoCRUD');
const express = require("express");
const departamentoRouter = express.Router();

departamentoRouter.get('/getAllDepartaments', departamentoCRUD.getAllDepartamentos);
departamentoRouter.get('/getDepartamentsByID', departamentoCRUD.getDepartamentoById);
departamentoRouter.post('/createDepartament', departamentoCRUD.createDepartamento);
departamentoRouter.put('/updateDepartament', departamentoCRUD.updateDepartamento);
departamentoRouter.delete('/deleteDepartament/:departament_id', departamentoCRUD.deleteDepartamento);

module.exports = departamentoRouter;