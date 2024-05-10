

const express = require("express");
const morgan = require("morgan");

const Router = require("../routes/routes");
const port = process.env.PORT;
const app = express();
const cors = require('cors');



app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", Router);

// Configuración CORS

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'GET, POST, OPTIONS, PUT, DELETE'
//   );
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'Authorization,X-API-KEY,Origin,X-Requested-With,Content-Type,Accept,Access-Control-Allow-Request-Method'
//   );
//   res.setHeader('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });




module.exports = app;
