const deleteOficina = async (req, res) => {
    try {
      const { office_id } =req.params;
      const [result] = await db.promise().query('DELETE FROM oficina WHERE office_id = ?', [office_id]);

      if (result.affectedRows === 0) {
        return res.status(404).json({
          status: 404,
          error: 'Oficina no encontrada',
        });
      }

      res.status(200).json({
        status: 200,
        message: 'Oficina eliminada correctamente',
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        error: 'Error al eliminar la oficina',
      });
    }
  };

  module.exports = {deleteOficina};