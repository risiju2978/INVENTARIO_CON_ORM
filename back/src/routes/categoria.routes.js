
const categoriaCRUD = require("../controllers/categoria/index.categoria.controller")
const express = require("express");

const categoriaRouter = express.Router();

categoriaRouter.get("/getAllCategories", categoriaCRUD.getCategorias);
categoriaRouter.get("/getCategoriesByID", categoriaCRUD.getCategoriaById);
categoriaRouter.post("/CreateCategories", categoriaCRUD.createCategoria);
categoriaRouter.put("/updateCategories", categoriaCRUD.updateCategoria);
categoriaRouter.delete("/deleteCategories", categoriaCRUD.deleteCategoria);

module.exports = categoriaRouter;