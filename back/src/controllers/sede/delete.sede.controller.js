const deleteSede = async (req, res) => {
    try {
      const { campus_id } = req.params;
      const [result] = await db.promise().execute('DELETE FROM sede WHERE campus_id = ?', [campus_id]);

      if (result.affectedRows === 0) {
        return res.status(404).json({ 
            status: 404,
             error: 'Sede no encontrada'
             });
      }

      res.status(200).json({
         status: 200,
         message: 'Sede eliminada correctamente'
         });
    } catch (error) {
      console.error(error);
      res.status(500).json({ 
        status: 500,
         error: 'Error al eliminar la sede'
         });
    }
  };

  module.exports = {deleteSede};