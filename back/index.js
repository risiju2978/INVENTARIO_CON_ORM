require("dotenv").config();

const {conn} = require("./src/database/conexion-sequelize");
const app = require("./src/app/app");

const port = process.env.PORT || 8080;
conn.sync({force: true}).then(() => {
  app.listen(port, () => {
    console.log("Server up", port);
  });
  }).catch((err) => {
    console.log("error al sincronizar la base de datos", err);
  });