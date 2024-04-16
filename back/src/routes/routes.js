const Router = require('express').Router();
const path = require('path');
const express = require('express');


const usuarioRoutes = require('./user.routes');
const articuloRoutes = require('./art.routes');
const categoriaRoutes = require('./categoria.routes');
const departamentoRoutes = require('./departamento.routes');
const sedeRoutes = require('../routes/sede.routes');
const articuloEstadoRoutes = require('./articulo.estado.routes');
const oficinaRoutes = require('./oficina.routes');
const infGenerator = require('./art.generator.info.routes');
const vistaRoutes = require('../routes/vista.articulos.routes');
const vistaUsersRoutes = require('../routes/vista.usuarios.routes');






// Rutas
Router.use('/uploads/articulos/', express.static(path.join('uploads/articulos/')))
Router.use('/uploads/public/', express.static(path.join('uploads/public/')))
Router.use('/vistaUsers', vistaUsersRoutes);
Router.use('/vista', vistaRoutes);
Router.use('/informe', infGenerator);
Router.use('/articulo', articuloRoutes);
Router.use('/usuario', usuarioRoutes);
Router.use('/categoria', categoriaRoutes); 
Router.use('/departamento', departamentoRoutes);
Router.use('/sede', sedeRoutes);
Router.use('/articuloEstado', articuloEstadoRoutes);
Router.use('/oficina', oficinaRoutes);


// Ruta para errores no especificados
Router.use("/*", (req, res) => {
    res.status(400).json({ status: 400, message: "ruta no especificada" });
  });
  
  



module.exports = Router;