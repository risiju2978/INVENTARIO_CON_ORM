const fs = require("fs");
const path = require("path");
const { request } = require("express");
const articuloModels = require("../../models/articulo.models");

const getAniosFromDataBase = async (req, res) => {
    try {

      // Realizar la consulta a la base de datos
     const resultado = await articuloModels.GetAniosFromDataBase();
  
      if(resultado.length === 0){
        return res.status(404).json({
          status: 404,
          error: "no se encontraron anios"
        });
      };


      // Generar una lista sin valores repetidos
      const listaSinRepetidos = [...new Set(resultado.map(row => row.anio))];
  
      // Enviar la lista como respuesta
      res.status(200).json({ status: 200, data: listaSinRepetidos });
    
    } catch (error) {
      console.error('Error al consultar datos:', error);
      res.status(500).json({ error: 'Error al consultar datos' });
    }
};

module.exports = {getAniosFromDataBase};