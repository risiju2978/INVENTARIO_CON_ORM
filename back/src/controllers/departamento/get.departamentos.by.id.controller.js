const getDepartamentoById = async (req, res) => {
    try {
      const { departament_id} = req.body;
      const [departamento] = await db.promise().query('SELECT * FROM departamento WHERE departament_id = ?', [departament_id]);

      if (departamento.length === 0) {
        return res.status(404).json({ status: 404,
             error: 'Departamento no encontrado' 
            });
      }

      res.status(200).json({
         status: 200,
          data: departamento[0] 
        });
    } catch (error) {
      console.error(error);
      res.status(500).json({
         status: 500,
          error: 'Error al obtener el departamento'
         });
    }
  };
  module.exports = {getDepartamentoById};