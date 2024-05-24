
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
fs.readdirSync(path.join(__dirname, "../models/orm"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "../models/orm", file)));
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
  const { 
    Usuario,
    Articulo, 
    Articulo_Estado,
    Articulo_detalle ,
    Articulo_baja,
    Categoria,
    Oficina,
    Departamento,
    Sede,
    Rol
  } = dbConnection.models;

  // establecer las relaciones ###

  //relacion usuario-articulo
  Usuario.hasMany(Articulo, {foreignKey:"usuario_id"})
  Articulo.hasMany(Usuario,{foreignKey:"usuario_id"})
  
 //relacion articulo-articulo-estado
Articulo_Estado.hasMany(Articulo,{foreignKey:"articulo_estado_id"})
Articulo.belongsTo(Articulo_Estado, {foreignKey:"articulo_estado_id"})

//relacion articulo-articulo-detalle
Articulo.hasMany(Articulo_detalle,{foreignKey:"id_articulo"})
Articulo_detalle.belongsTo(Articulo, {foreignKey:"id_articulo"})

//relacionarticulo-articulo-baja
Articulo.hasMany(Articulo_baja,{foreignKey:"id_articulo"})
Articulo_baja.belongsTo(Articulo,{foreignKey:"id_articulo"})

//relacion articulo-categoria
Categoria.hasMany(Articulo,{foreignKey:"categoria_id"})
Articulo.belongsTo(Categoria,{foreignKey:"categoria_id"})

//relacion articulo-oficina
Oficina.hasMany(Articulo,{foreignKey:"office_id"})
Articulo.belongsTo(Oficina,{foreignKey:"office_id"})

//relacion oficina-departamento
Departamento.hasMany(Oficina,{foreignKey:"departament_id"})
Oficina.belongsTo(Departamento,{foreignKey:"departament_id"})

//relacion departamento-sede
Sede.hasMany(Departamento,{foreignKey:"campus_id"})
Departamento.belongsTo(Sede,{foreignKey:"campus_id"})

//relacion sede-usuario
Sede.hasMany(Usuario,{foreignKey:"campus_id"})
Usuario.belongsTo(Sede,{foreignKey:"campus_id"})

// usuario-rol
Rol.hasMany(Usuario,{foreignKey:"rol_id"})
Usuario.belongsTo(Rol,{foreignKey:"rol_id"})

module.exports = {
  ...dbConnection.models, 
  conn: dbConnection, 
};