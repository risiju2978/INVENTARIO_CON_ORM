
const { generarJWT } = require("../../../utils/utils.generar-jwt");
const bcrypt = require("bcrypt");

const {Usuario, Sede, Rol} = require("../../database/conexion-sequelize");



const crearUsuario = async (req, res) => {
    try {
      // Datos del cuerpo de la solicitud
      const { username, email, campus_id, rol_id, user_state, password } =req.body;

      // Verificar si todos los campos necesarios están
      //tuve que cambiar user_state para que valide que tenga un valor porque si solo compruebo si es falso no me acepta el 0 pero con undefinied sirve aunque hay que verificar que no sea null
      if (
        !username ||
        !email ||
        !rol_id ||
        user_state === undefined ||
        user_state === null ||
        !password ||
        !campus_id
      ) {
        return res.status(400).json({
          status: 400,
          error: "Faltan campos obligatorios",
        });
      }

  const verifySedeInDataBase = await Sede.findOne({ where: { campus_id: campus_id } })
  const verifyRolInDataBase = await Rol.findOne({where: { rol_id: rol_id} })
  const verifyEmailInDataBase = await Usuario.findOne({where: {email: email}})

  if (!verifyRolInDataBase && !verifySedeInDataBase) {
    return res.status(400).json({
       status: 400,
      error: "no se pudo ingresar usuario"
    })
  }

  if (verifyEmailInDataBase) {
    return res.status(400).json({
      status: 400,
      error: "El email ya se encuentra registrado"
    })
  }
        const salt = bcrypt.genSaltSync();

        const passWordEncripted = bcrypt.hashSync(password, salt);

      const resultados = await Usuario.create({username, email, campus_id, rol_id, user_state, password: passWordEncripted})

      if(!resultados){
        return res.status(400).json({
          status: 400,
          error: "no se pudo ingresar usuario"
        });
      }

      res.status(200).json({
        status: 200,
        error: "Usuario creado correctamente"
      })

    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        error: "Error interno del servidor",
      });
    }
  }

  module.exports ={ crearUsuario };
