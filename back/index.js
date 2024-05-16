
//dotenv se usa en cascada para toda la aplicacion siendo usada en index donde se levanta la aplicacion
require("dotenv").config();

const { conn } = require("./src/database/conexion-sequelize")

const app = require("./src/app/app");
const { conn } = require("./src/database/conexion-sequelize");

const port = process.env.PORT || 8080;

async function testDatabase() {
  try {
    await conn.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

conn.sync({force: false}).then(() => {
  app.listen(port, () => {
    console.log("Server up", port);
  });
  }).catch((err) => {
    console.log("error al sincronizar la base de datos", err);
  });
  



  
