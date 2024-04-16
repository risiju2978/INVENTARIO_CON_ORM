const getSedeById = async (req, res) => {
    try {
      const { campus_id } = req.body;
      const [sede] = await db.promise().query('SELECT * FROM sede WHERE campus_id = ?', [campus_id]);

      if (!sede.length) {
        return res.status(404).json({ 
            status: 404,
             error: 'Sede no encontrada' 
            });
      }

      res.status(200).json({ 
        status: 200,
         data: sede[0] 
        });
    } catch (error) {
      console.error(error);
      res.status(500).json({
         status: 500, 
         error: 'Error al obtener la sede' 
        });
    }
  };

  module.exports = {getSedeById};