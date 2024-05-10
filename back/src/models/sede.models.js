const { db } = require("../database/conexion");



module.exports = {

listarTodaSede(){
return new Promise((resolve, reject) => {
  
    const sql ="SELECT * FROM sede";
    db.query(sql,(err,results) =>{
    if(err) reject(err);
    else resolve(results);
    });
 });
},

 ListarSedeByID(campus_id){
     return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM sede WHERE campus_id = ?";  // SQL con placeholder
            db.query(sql, [campus_id], (err, results) => {  // Paso el campus_id como parámetro a la consulta
                if (err) {
                    reject(err);  // Si hay error, la promesa se rechaza
                } else {
                    resolve(results);  // Si todo va bien, resuelve la promesa con los resultados
                }
            });
        });
    },
    
  CrearSede(campus){
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO sede (campus) VALUES (?)";  // SQL con placeholder
        db.query(sql, [campus], (err, results) => {  // Paso el campus_id como parámetro a la consulta
            if (err) {
                reject(err);  // Si hay error, la promesa se rechaza
            } else {
                resolve(results);  // Si todo va bien, resuelve la promesa con los resultados
            }
        });
    });
  }, 

UpdateSede( campus, campus_id){
    return new Promise((resolve, reject) => {
        const sql = "UPDATE sede SET  campus = ? WHERE campus_id = ?";  // SQL con placeholder
        db.query(sql, [ campus, campus_id], (err, results) => {  // Paso el campus_id como parámetro a la consulta
            if (err) {
                reject(err);  // Si hay error, la promesa se rechaza
            } else {
                resolve(results);  // Si todo va bien, resuelve la promesa con los resultados
            }
        });
    });
},

DeleteSede(campus_id){
    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM sede WHERE campus_id = ?";  
        db.query(sql, [campus_id], (err, results) => { 
            if (err) {
                reject(err);  
            } else {
                resolve(results);  
            }
        });
    });

}



};