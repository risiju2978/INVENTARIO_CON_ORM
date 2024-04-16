
//dotenv se usa en cascada para toda la aplicacion siendo usada en index donde se levanta la aplicacion
require("dotenv").config();

const app = require("./src/app/app");

const port = process.env.PORT || 8080;


app.listen(port, () => {
    console.log("inventario application up on port", port);
  });
  
