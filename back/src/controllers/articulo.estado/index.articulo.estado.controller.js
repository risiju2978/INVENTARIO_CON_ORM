require("dotenv").config();
const {db} =require("../../../../utils/utils.helpers");
const { createArticuloEstado } = require("./create.articulo.estado.controller");
const { deleteArticuloEstado } = require("./delete.articulo.estado.controller");
const { getArticuloEstadoById } = require("./get.articulo.estado.by.id.controller");
const { updateArticuloEstado } = require("./update.articulo.estado.controller");





const articuloEstadoCRUD = {

   //REVISADO Y FUNCIONANDO
  getArticuloEstadoById,
   //REVISADO Y FUNCIONANDO
  createArticuloEstado,
   //REVISADO Y FUNCIONANDO
  updateArticuloEstado,
   //REVISADO Y FUNCIONANDO
  deleteArticuloEstado
};

module.exports = articuloEstadoCRUD;