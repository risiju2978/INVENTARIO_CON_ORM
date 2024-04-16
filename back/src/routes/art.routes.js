

const upload = require('../middlewares/upload-files');
const artController = require ('../services/articulo/artControllers/artController');
const express = require("express");
const artRouter = express.Router();

  

// Endpoint para editar articulo
artRouter.put('/edit_art', upload.single('img'), artController.editArticulo);
// Endpoint para dar de baja el articulo
artRouter.post('/baja_art', artController.bajaArticulo);
// Endpoint para crear articulo
artRouter.post("/income_art", upload.single('img'), artController.incomeArticulo);
// Endpoint para listar años
artRouter.get('/anios', artController.getAniosFromDataBase)



module.exports = artRouter;

