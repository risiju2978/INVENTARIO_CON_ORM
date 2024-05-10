const { db } = require("../database/conexion");


module.exports ={

ListarTodoDepartamento(){

    return new Promise((resolve, reject) => {
    
        const sql = "SELECT * FROM departamento";  
        db.query(sql,  (err, results) => { 
            if (err) {
                reject(err);  
            } else {
                resolve(results);  
            }
        });
    });

},

ListarDepartamentosByID(departament_id){

    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM departamento WHERE departament_id = ?";  
        db.query(sql, [departament_id], (err, results) => { 
            if (err) {
                reject(err);  
            } else {
                resolve(results);  
            }
        });
    });

},

CreateDepartamento(departament, campus_id){

    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO departamento (departament, campus_id) VALUES (?,?)";  
        db.query(sql, [departament, campus_id], (err, results) => { 
            if (err) {
                reject(err);  
            } else {
                resolve(results);  
            }
        });
    });


},

UpdateDepartamento( departament, departament_id){

    return new Promise((resolve, reject) => {
        const sql = "UPDATE departamento SET  departament = ?  WHERE departament_id = ?";  
        db.query(sql, [ departament, departament_id], (err, results) => { 
            if (err) {
                reject(err);  
            } else {
                resolve(results);  
            }
        });
    });

},

DeleteDepartamento(departament_id){

    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM departamento WHERE departament_id = ?";  
        db.query(sql, [ departament_id], (err, results) => { 
            if (err) {
                reject(err);  
            } else {
                resolve(results);  
            }
        });
    });

}

};

