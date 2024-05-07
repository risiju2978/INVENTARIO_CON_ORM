const oficinaModels = require("../../models/oficina.models");

 const createOficina = async (req, res) => {
    try {
      const { departament_id, office } = req.body;

      if (!departament_id && !office) {
        return res.status(400).json({
            status: 400,
            error: "Faltan campos obligatorios",
        });
    };
      const resultado =  await oficinaModels.CrearOficina(departament_id, office);

     
      if (resultado.affectedRows === 0) { 
        return res.status(404).json({ 
            status: 404,
            error: 'oficina no fue creada' 
        });
    };

      res.status(201).json({
        status: 201,
        message: 'Oficina creada correctamente',
        data: { office_id: resultado.insertId },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        error: 'Error al crear la oficina',
      });
    }
  };

  module.exports = {createOficina};