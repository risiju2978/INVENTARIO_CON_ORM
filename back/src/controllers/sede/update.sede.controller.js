 const updateSede = async (req, res) => {
    try {
      
      const {  campus, campus_id } = req.body;
      const [result] = await db.promise().query('UPDATE sede SET  campus = ? WHERE campus_id = ?', [ campus, campus_id]);

      if (result.affectedRows === 0) {
        return res.status(404).json({ 
            status: 404,
             error: 'Sede no encontrada'
             });
      }

      res.status(200).json({ 
        status: 200, 
        message: 'Sede actualizada correctamente'
     });
    } catch (error) {
      console.error(error);
      res.status(500).json({
         status: 500,
          error: 'Error al actualizar la sede'
        });
    }
  };

  module.exports = {updateSede};