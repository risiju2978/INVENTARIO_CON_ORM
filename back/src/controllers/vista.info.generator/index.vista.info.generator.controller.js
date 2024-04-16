const { db } = require("../../../../utils/utils.helpers");
const { readVista } = require("./read.vista.controller");
require("dotenv").config();



const vistaController = {
  readVista
};

module.exports = vistaController;
