
  const { Sequelize  } = require('sequelize');
  const fs = require("fs");
  const path = require("path");
  
  
  const dbConnection = new Sequelize('inventario_2', 'root', 'm15126376', {
    host: '127.0.0.1',
    dialect: 'mysql',
  });
  
  const basename = path.basename(__filename);
  
  const modelDefiners = [];
  
  // Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
  fs.readdirSync(path.join(__dirname, "../models"))
    .filter(
      (file) =>
        file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    )
    .forEach((file) => {
      modelDefiners.push(require(path.join(__dirname, "../models", file)));
    });
  
  
  modelDefiners.forEach((model) => model(dbConnection));
  let entries = Object.entries(dbConnection.models);
  let capsEntries = entries.map((entry) => [
    entry[0][0].toUpperCase() + entry[0].slice(1),
    entry[1],
  ]);
  dbConnection.models = Object.fromEntries(capsEntries);
  
  // En sequelize.models están todos los modelos importados como propiedades
  // Para relacionarlos hacemos un destructuring
  const { Usuario } = dbConnection.models;

  // establecer las relaciones
  
   
  module.exports = {
    ...dbConnection.models, 
    conn: dbConnection, 
  };
