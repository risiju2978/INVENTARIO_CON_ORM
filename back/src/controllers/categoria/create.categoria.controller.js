const createCategoria = async (req, res) => {
    try {
      const { categoria } = req.body;
      const sql = "INSERT INTO categoria (categoria) VALUES (?)";
      const [result] = await db.promise().query(sql, [categoria]);
      const categoria_id = result.insertId;

      res.status(201).json({
        status: 201,
        data: { categoria_id, categoria },
        message: "Categoría creada correctamente",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 500, error: "Error al crear la categoría" });
    }
  };

  module.exports ={createCategoria};
