const getAllSedes= async (req, res) => {
    try {
      const [sedes] = await db.promise().query('SELECT * FROM sede');
      res.status(200).json({
         status: 200,
          data: sedes 
        });
    } catch (error) {
      console.error(error);
      res.status(500).json({
         status: 500, 
         error: 'Error al obtener las sedes'
         });
    }
  };

  module.exports = {getAllSedes};