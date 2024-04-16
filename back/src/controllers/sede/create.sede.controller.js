const createSede = async (req, res) => {
    try {
      const {  campus } = req.body;
      const [result] = await db.promise().query('INSERT INTO sede ( campus) VALUES ( ?)', [ campus]);

      res.status(201).json({ 
        status: 201,
         message: 'Sede creada correctamente',
          data: { sede_id: result.insertId }
         });
    } catch (error) {
      console.error(error);
      res.status(500).json({ 
        status: 500, 
        error: 'Error al crear la sede' 
    });
    }
  };

  module.exports = {createSede};