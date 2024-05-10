const { db } = require("../database/conexion");


module.exports ={


VistaInfoGenerator(){

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

}


};