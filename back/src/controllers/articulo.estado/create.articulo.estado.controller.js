const createArticuloEstado = async (req, res) => {
    try {
      const { articulo_estado } = req.body;
      const [result] = await db.promise().query("INSERT INTO articulo_estado (articulo_estado) VALUES (?)", [articulo_estado]);

      res.status(201).json({ 
        status: 201, 
        data: { id: result.insertId },
         message: "Estado de artículo creado correctamente" });
    } catch (error) {
      console.error(error);
      res.status(500).json({
         status: 500,
         error: "Error al crear el estado de artículo" });
    }
  };

  module.exports ={createArticuloEstado};