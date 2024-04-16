 const updateOficina = async (req, res) => {
    try {
      const { departament_id, office, office_id } = req.body;
      const [result] = await db.promise().query('UPDATE oficina SET departament_id = ?, office = ? WHERE office_id = ?', [departament_id, office, office_id]);

      if (result.affectedRows === 0) {
        return res.status(404).json({
          status: 404,
          error: 'Oficina no encontrada',
        });
      }

      res.status(200).json({
        status: 200,
        message: 'Oficina actualizada correctamente',
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        error: 'Error al actualizar la oficina',
      });
    }
  };
  module.exports = {updateOficina};