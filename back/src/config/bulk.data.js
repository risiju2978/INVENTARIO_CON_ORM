
const {Rol, Sede} = require("../database/conexion-sequelize");

// Datos de ejemplo para Campus
const datosCampus = [
    { campus: 'Campus 1' },
    { campus: 'Campus 2'  },
    // ...otros campus
  ];
  
  // Datos de ejemplo para Roles
  const datosRoles = [
    { rol: 'Rol 1', state: 0 },
    { rol: 'Rol 2', state: 1 },
    // ...otros roles
  ];
  
  // Cargar datos en Campus
  const createSedes = () => Sede.bulkCreate(datosCampus)
    .then(() => {
      console.log('Datos de campus cargados correctamente');
    })
    .catch(error => {
      console.error('Error al cargar datos de campus:', error);
    });
  
  // Cargar datos en Roles
  const createRoles = () => Rol.bulkCreate(datosRoles)
    .then(() => {
      console.log('Datos de roles cargados correctamente');
    })
    .catch(error => {
      console.error('Error al cargar datos de roles:', error);
    });

    createRoles();
    createSedes();

    module.exports = {
        createRoles,
        createSedes
    }