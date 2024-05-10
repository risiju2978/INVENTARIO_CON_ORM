const { db } = require("../database/conexion");


module.exports ={

ListarTodaOficina(){

    return new Promise((resolve, reject) => {
    
        const sql = "SELECT * FROM oficina";  
        db.query(sql,  (err, results) => { 
            if (err) {
                reject(err);  
            } else {
                resolve(results);  
            }
        });
    });
},

ListarOficinaByID(office_id ){

    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM oficina WHERE office_id = ?";  
        db.query(sql, [office_id], (err, results) => { 
            if (err) {
                reject(err);  
            } else {
                resolve(results);  
            }
        });
    });

},

CrearOficina(departament_id, office){

    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO oficina (departament_id, office) VALUES (?, ?)";  
        db.query(sql, [departament_id, office], (err, results) => { 
            if (err) {
                reject(err);  
            } else {
                resolve(results);  
            }
        });
    });

},

UpdateOficina(departament_id, office, office_id){

    return new Promise((resolve, reject) => {
        const sql = "UPDATE oficina SET departament_id = ?, office = ? WHERE office_id = ?";  
        db.query(sql, [departament_id, office, office_id], (err, results) => { 
            if (err) {
                reject(err);  
            } else {
                resolve(results);  
            }
        });
    });

},

DeleteOficina(office_id){

    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM oficina WHERE office_id = ?";  
        db.query(sql, [office_id], (err, results) => { 
            if (err) {
                reject(err);  
            } else {
                resolve(results);  
            }
        });
    });
}

};


