require("dotenv").config();
const {db} =require("../../../../utils/utils.helpers");
const { createSede } = require("./create.sede.controller");
const { deleteSede } = require("./delete.sede.controller");
const { getAllSedes } = require("./get.all.sedes.controller");
const { getSedeById } = require("./get.sede.by.id.controller");
const { updateSede } = require("./update.sede.controller");




const sedeController = {
   //REVISADO Y FUNCIONANDO
  getAllSedes,
   //REVISADO Y FUNCIONANDO
  getSedeById,
   //REVISADO Y FUNCIONANDO
  createSede,
   //REVISADO Y FUNCIONANDO
  updateSede,
   //REVISADO Y FUNCIONANDO
  deleteSede
};

module.exports = sedeController;