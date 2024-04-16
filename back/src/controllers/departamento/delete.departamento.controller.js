const deleteDepartamento =  async (req, res) => {
    try {
      const { departament_id } = req.params;

      const [result] = await db.promise().execute('DELETE FROM departamento WHERE departament_id = ?', [departament_id]);
      console.log(result)

      if (result.affectedRows === 0) {
        return res.status(404).json({
             status: 404, 
             error: 'Departamento no encontrado'
             });
      }

      res.status(200).json({ 
        status: 200, 
        message: 'Departamento eliminado correctamente' 
    });
    } catch (error) {
      console.error(error);
      res.status(500).json({
         status: 500,
          error: 'Error al eliminar el departamento'
         });
    }
  };
  module.exports = {deleteDepartamento};