 const createDepartamento = async (req, res) => {
    try {
      const { departament, campus_id } = req.body;
      const [result] = await db.promise().query('INSERT INTO departamento (departament, campus_id) VALUES (?,?)', [ departament, campus_id]);

      res.status(201).json({
         status: 201,
          message: 'Departamento creado correctamente',
           departamento_id: result.insertId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ 
        status: 500, 
        error: 'Error al crear el departamento' 
    });
    }
  };
  module.exports = {createDepartamento};