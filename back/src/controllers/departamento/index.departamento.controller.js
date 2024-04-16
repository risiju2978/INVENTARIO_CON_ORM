require("dotenv").config();
const {db} =require("../../../../utils/utils.helpers");
const { createDepartamento } = require("./create.departamento.controller");
const { deleteDepartamento } = require("./delete.departamento.controller");
const { getAllDepartamentos } = require("./get.all.departamentos.controller");
const { getDepartamentoById } = require("./get.departamentos.by.id.controller");
const { updateDepartamento } = require("./update.departamento.controller");





const departamentoCRUD = {
   //REVISADO Y FUNCIONANDO
  getAllDepartamentos,
   //REVISADO Y FUNCIONANDO
  getDepartamentoById,
 //REVISADO Y FUNCIONANDO
  createDepartamento,
 //REVISADO Y FUNCIONANDO
  updateDepartamento,
 //REVISADO Y FUNCIONANDO
  deleteDepartamento
};

module.exports = departamentoCRUD;