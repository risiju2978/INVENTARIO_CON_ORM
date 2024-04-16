const getAllOficinas = async (req, res) => {
    try {
      const [oficinas] = await db.promise().query('SELECT * FROM oficina');
      res.status(200).json({
        status: 200,
        data: oficinas,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        error: 'Error al obtener las oficinas',
      });
    }
  };

  module.exports = {getAllOficinas};