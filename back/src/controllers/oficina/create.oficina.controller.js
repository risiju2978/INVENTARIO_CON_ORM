 const createOficina = async (req, res) => {
    try {
      const { departament_id, office } = req.body;
      const [result] = await db.promise().query('INSERT INTO oficina (departament_id, office) VALUES (?, ?)', [departament_id, office]);

      res.status(201).json({
        status: 201,
        message: 'Oficina creada correctamente',
        data: { office_id: result.insertId },
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