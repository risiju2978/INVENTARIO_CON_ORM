const { db } = require("../database/conexion");

const bcrypt = require("bcrypt");

module.exports = {
  listarUser() {
    return new Promise((resolve, reject) => {
      // Consulta SQL para obtener la lista de usuarios
      const sql = "SELECT * FROM usuario";
      db.query(sql, (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  },

  async crearUser(username, email, campus_id, rol_id, user_state, password) {
    return new Promise((resolve, reject) => {
      // Verificar si campus_id existe en la tabla sede
      const checkCampusQuery =
        "SELECT COUNT(*) AS count FROM sede WHERE campus_id = ?";
      const [campusCheckResult] = db.query(checkCampusQuery, [campus_id]);

      if (campusCheckResult[0].count === 0) {
        return res.status(400).json({
          status: 400,
          error: "El campus_id proporcionado no existe en la tabla sede",
        });
      }

      // Iniciar una transacción
      db.beginTransaction();

      try {
        const salt = bcrypt.genSaltSync();

        const passWordEncripted = bcrypt.hashSync(password, salt);

        // Consulta SQL para insertar un nuevo usuario
        const insertUserQuery =
          "INSERT INTO usuario (username, email, rol_id, user_state, password, campus_id) VALUES (?, ?, ?, ?, ?, ?)";
        const userCreateData = [
          username,
          email,
          rol_id,
          user_state,
          passWordEncripted,
          campus_id,
        ];

        // Ejecutar la consulta con los valores proporcionados
        const [resultDB] = db.query(insertUserQuery, userCreateData);

        // Confirmar la transacción
        db.commit();

        res.status(200).json({
          status: 200,
          data: {
            message: "Usuario agregado con éxito",
            user_id: resultDB.insertId,
          },
        });
      } catch (error) {
        // Revertir la transacción en caso de error
        db.rollback();

        console.error(error);
        res.status(500).json({
          status: 500,
          error: "Error interno del servidor",
        });
      }

      (err, results) => {
        if (err) reject(err);
        else resolve(results);
      };
    });
  },

  LoginUser(username) {
    return new Promise((resolve, reject) => {
      // Consulta SQL para obtener la lista de usuarios
      const sql = "SELECT * FROM usuario WHERE username = ?";
      db.query(sql, [username], (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  },

  GetInfoUser(user_id) {
    return new Promise((resolve, reject) => {
      // Consulta SQL para obtener la lista de usuarios
      const sql = "SELECT * FROM usuario WHERE user_id = ?";
      db.query(sql, [user_id], (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  },

  UserCheck(user_id) {
    return new Promise((resolve, reject) => {
      // Consulta SQL para obtener la lista de usuarios
      const sql = "SELECT user_id FROM usuario WHERE user_id = ?";
      db.query(sql, [user_id], (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  },

  EditarUsuario(data) {
    return new Promise((resolve, reject) => {
      // Consulta SQL para obtener la lista de usuarios
      const sql =
        "UPDATE usuario SET username=?, email=?, password=? WHERE user_id=?";
      db.query(sql, data, (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  },

  EditarPassword(data) {
    return new Promise((resolve, reject) => {
      // Consulta SQL para obtener la lista de usuarios
      const sql = "UPDATE usuario SET password=? WHERE user_id=?";
      db.query(sql, data, (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  },

  editarRolUsuario(data){
    return new Promise((resolve, reject) => {
      // Consulta SQL para obtener la lista de usuarios
      const sql = "UPDATE usuario SET rol_id=? WHERE user_id=?";
      db.query(sql,data,(err,results)=>{
          if(err) reject(err);
          else resolve(results);
      });
  });
}
};