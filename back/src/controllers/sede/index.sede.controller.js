require("dotenv").config();

const { createSede } = require("./create.sede.controller");
const { deleteSede } = require("./delete.sede.controller");
const { getAllSedes } = require("./get.all.sedes.controller");
const { getSedeById } = require("./get.sede.by.id.controller");
const { updateSede } = require("./update.sede.controller");




const sedeController = {

  getAllSedes,

  getSedeById,
  
  createSede,
 
  updateSede,

  deleteSede
};

module.exports = sedeController;