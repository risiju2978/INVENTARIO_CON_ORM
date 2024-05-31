require("dotenv").config();

const {conn} = require("./src/database/conexion-sequelize");
const app = require("./src/app/app");
const { createRoles, createSedes } = require("./src/config/bulk.data");

const port = process.env.PORT || 8080;
conn.sync({force: false}).then(() => {
  app.listen(port, () => {
    console.log("Server up", port);
  });
  })
  .then(()=>{
    createRoles();
    createSedes();
  }).catch((err) => {
    console.log("error al sincronizar la base de datos", err);
  });