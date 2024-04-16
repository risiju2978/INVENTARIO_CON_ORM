const updateDepartamento =  async (req, res) => {
    try {
      
      const {  departament, departament_id } = req.body;


      const [result] = await db.promise().execute('UPDATE departamento SET  departament = ?  WHERE departament_id = ?', [ departament, departament_id]);

      if (result.affectedRows === 0) {
        return res.status(404).json({
             status: 404, 
             error: 'Departamento no encontrado' 
            });
      }

      res.status(200).json({
         status: 200,
          message: 'Departamento actualizado correctamente'
         });
    } catch (error) {
      console.error(error);
      res.status(500).json({ 
        status: 500, 
        error: 'Error al actualizar el departamento' 
    });
    }
  };
  module.exports = {updateDepartamento};