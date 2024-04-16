const getOficinaById = async (req, res) => {
    try {
      const { office_id } = req.body;
      const [oficina] = await db.promise().query('SELECT * FROM oficina WHERE office_id = ?', [office_id]);

      if (!oficina.length) {
        return res.status(404).json({
          status: 404,
          error: 'Oficina no encontrada',
        });
      }

      res.status(200).json({
        status: 200,
        data: oficina[0],
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        error: 'Error al obtener la oficina',
      });
    }
  };

  module.exports = {getOficinaById};