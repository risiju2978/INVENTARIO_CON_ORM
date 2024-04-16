require("dotenv").config();
const {db} =require("../../../../utils/utils.helpers");
const { createCategoria } = require("./create.categoria.controller");
const { deleteCategoria } = require("./delete.categoria.controller");
const { getCategoriaById } = require("./get.categorias.by.id.controller");
const { getCategorias } = require("./get.categorias.controller");
const { updateCategoria } = require("./update.categoria.controller");







const categoriaCRUD = {
  // Obtener todas las categorías
  //REVISADO Y FUNCIONANDO
  getCategorias,

  // Obtener una categoría por ID
  //REVISADO Y FUNCIONANDO
  getCategoriaById,

  // Crear una nueva categoría
  //REVISADO Y FUNCIONANDO
  createCategoria,

  // Actualizar una categoría por ID
   //REVISADO Y FUNCIONANDO
  updateCategoria,

  // Eliminar una categoría por ID
   //REVISADO Y FUNCIONANDO
  deleteCategoria
};
module.exports =categoriaCRUD;
