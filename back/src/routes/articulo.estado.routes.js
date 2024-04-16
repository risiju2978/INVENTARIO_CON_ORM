


const articuloEstadoCRUD = require ('../services/articulo_estado/articuloEstadoControllers/articuloEstadoCRUD');
const express = require("express");
const articuloEstadoRouter = express.Router();

// Rutas
articuloEstadoRouter.get("/getAllSedesByID", articuloEstadoCRUD.getArticuloEstadoById);
articuloEstadoRouter.post("/createArticuloEstado", articuloEstadoCRUD.createArticuloEstado);
articuloEstadoRouter.put("/updateArticuloEstado", articuloEstadoCRUD.updateArticuloEstado);
articuloEstadoRouter.delete("/deleteArticuloEstado", articuloEstadoCRUD.deleteArticuloEstado);

module.exports = articuloEstadoRouter;