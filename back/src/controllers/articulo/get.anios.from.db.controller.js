const fs = require("fs");
const path = require("path");
const { request } = require("express");

const getAniosFromDataBase = async (req, res) => {
    try {
      // Realizar la consulta a la base de datos
      const [rows] = await db.promise().query('SELECT anio FROM articulo_detalle');
  
      // Generar una lista sin valores repetidos
      const listaSinRepetidos = [...new Set(rows.map(row => row.anio))];
  
      // Enviar la lista como respuesta
      res.status(200).json({ status: 200, data: listaSinRepetidos });
    
    } catch (error) {
      console.error('Error al consultar datos:', error);
      res.status(500).json({ error: 'Error al consultar datos' });
    }
};

module.exports = {getAniosFromDataBase};