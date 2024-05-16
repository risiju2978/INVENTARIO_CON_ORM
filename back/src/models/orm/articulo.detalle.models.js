const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define('Articulo_detalle', {
        articulo_detalle_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        id_articulo: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        anio: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dimension: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        art_num: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        art_nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        art_codigo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        art_glosa: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        art_image_path: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        art_ingreso: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    });
}