


const fs = require("fs");
const path = require("path");
const { request } = require("express");

const { editArticulo } = require("./editar.articulo.controller");
const { bajaArticulo } = require("./dar.baja.articulo.controller");
const { incomeArticulo } = require("./income.articulo.controller");
const { getAniosFromDataBase } = require("./get.anios.from.db.controller");










const artController = {

  editArticulo,
  bajaArticulo,
  incomeArticulo,
  getAniosFromDataBase
};


module.exports = artController;
