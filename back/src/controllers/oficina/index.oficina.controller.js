const { db } = require("../../../../utils/utils.helpers");
const { createOficina } = require("./create.oficina.controller");
const { deleteOficina } = require("./delete.oficina.controller");
const { getAllOficinas } = require("./get.all.oficinas.controller");
const { getOficinaById } = require("./get.oficina.by.id.controller");
const { updateOficina } = require("./update.oficina.controller");
require("dotenv").config();



const oficinaController = {

       //REVISADO Y FUNCIONANDO
  getAllOficinas,
 //REVISADO Y FUNCIONANDO
  getOficinaById,
 //REVISADO Y FUNCIONANDO
  createOficina,
 //REVISADO Y FUNCIONANDO
  updateOficina,
 //REVISADO Y FUNCIONANDO
  deleteOficina
};

module.exports = oficinaController;