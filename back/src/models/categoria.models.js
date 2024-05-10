const { db } = require("../database/conexion");


module.exports ={

ListarTodaCategoria(){

    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM categoria";  
        db.query(sql,(err, results) => { 
            if (err) {
                reject(err);  
            } else {
                resolve(results);  
            }
        });
    });
},

ListarCategoriaByID(categoria_id){

    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM categoria WHERE categoria_id = ?";  
        db.query(sql,[ categoria_id],(err, results) => { 
            if (err) {
                reject(err);  
            } else {
                resolve(results);  
            }
        });
    });

},

CrearCategoria(categoria){

    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO categoria (categoria) VALUES (?)";  
        db.query(sql,[ categoria],(err, results) => { 
            if (err) {
                reject(err);  
            } else {
                resolve(results);  
            }
        });
    });

},

UpdateCategoria(categoria, categoria_id){

    return new Promise((resolve, reject) => {
        const sql = "UPDATE categoria SET categoria = ? WHERE categoria_id = ?";  
        db.query(sql,[categoria, categoria_id],(err, results) => { 
            if (err) {
                reject(err);  
            } else {
                resolve(results);  
            }
        });
    });

},

DeleteCategoria(categoria_id){

    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM categoria WHERE categoria_id = ?";  
        db.query(sql,[ categoria_id],(err, results) => { 
            if (err) {
                reject(err);  
            } else {
                resolve(results);  
            }
        });
    });

}


};