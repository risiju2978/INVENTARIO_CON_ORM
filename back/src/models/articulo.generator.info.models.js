const { db } = require("../database/conexion");


module.exports = {

generarInforme(combo){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM `v_infogenerator` WHERE `articulo_estado_id` = ?";  
        db.query(sql,combo,(err, results) => { 
            if (err) {
                reject(err);  
            } else {
                resolve(results);  
            }
        });
    });


},

llamarAVista(){

    return new Promise((resolve, reject) => {
        const sql = "CALL Read_v_infogenerator()";  
        db.query(sql,(err, results) => { 
            if (err) {
                reject(err);  
            } else {
                resolve(results);  
            }
        });
    });

},

};