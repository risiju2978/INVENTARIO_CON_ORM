const { db } = require("../database/conexion");


module.exports ={


VistaUsers(){

    return new Promise((resolve, reject) => {
        const sql = "CALL Read_Users()";  
        db.query(sql,(err, results) => { 
            if (err) {
                reject(err);  
            } else {
                resolve(results);  
            }
        });
    });

}


};