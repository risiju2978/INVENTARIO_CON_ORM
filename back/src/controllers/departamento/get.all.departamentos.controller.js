const getAllDepartamentos = async (req, res) => {
    try {
      const [departamentos] = await db.promise().query('SELECT * FROM departamento');
      res.status(200).json({ 
        status: 200,
         data: departamentos
         });
    } catch (error) {
      console.error(error);
      res.status(500).json({
         status: 500, 
         error: 'Error al obtener los departamentos'
         });
    }
  };

  module.exports = {getAllDepartamentos};