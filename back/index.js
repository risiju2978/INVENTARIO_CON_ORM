require("dotenv").config();

const initializeSequelize = require("./src/database/conexion-sequelize");
const app = require("./src/app/app");

const port = process.env.PORT || 8080;

initializeSequelize()
  .then(async (conn) => {
    try {
      await conn.authenticate();
      console.log('Connection has been established successfully.');

      await conn.sync({ force: false });
      console.log('Database synchronized');

      app.listen(port, () => {
        console.log("Server up on port", port);
      });
    } catch (error) {
      console.error('Unable to synchronize the database:', error);
    }
  })
  .catch((error) => {
    console.error('Unable to initialize the database:', error);
  });
