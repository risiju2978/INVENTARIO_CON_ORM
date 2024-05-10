const { db } = require("../database/conexion");


module.exports ={

ListarArticuloEstadoByID(articulo_estado_id){

    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM articulo_estado WHERE articulo_estado_id = ?";  
        db.query(sql,[ articulo_estado_id],(err, results) => { 
            if (err) {
                reject(err);  
            } else {
                resolve(results);  
            }
        });
    });

},

CreateArticuloEstado(articulo_estado){

    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO articulo_estado (articulo_estado) VALUES (?)";  
        db.query(sql,[articulo_estado],(err, results) => { 
            if (err) {
                reject(err);  
            } else {
                resolve(results);  
            }
        });
    });

},


UpdateArticuloEstado(articulo_estado, articulo_estado_id){

    return new Promise((resolve, reject) => {
        const sql = "UPDATE articulo_estado SET articulo_estado = ? WHERE articulo_estado_id = ?";  
        db.query(sql,[articulo_estado, articulo_estado_id],(err, results) => { 
            if (err) {
                reject(err);  
            } else {
                resolve(results);  
            }
        });
    });

},

DeleteArticuloEstado(articulo_estado_id){

    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM articulo_estado WHERE articulo_estado_id = ?";  
        db.query(sql,[ articulo_estado_id],(err, results) => { 
            if (err) {
                reject(err);  
            } else {
                resolve(results);  
            }
        });
    });

}



};


