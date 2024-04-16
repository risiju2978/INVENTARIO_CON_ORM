const getCategoriaById = async (req, res) => {
    try {
      const { categoria_id} = req.body;
      const sql = "SELECT * FROM categoria WHERE categoria_id = ?";
      const [categoria] = await db.promise().query(sql, [categoria_id]);

      if (categoria.length === 0) {
        return res.status(404).json({
             status: 404,
              error: "Categoría no encontrada" });
      }

      res.status(200).json({
         status: 200, 
         data: categoria[0] });
    } catch (error) {
      console.error(error);
      res.status(500).json({
         status: 500, 
         error: "Error al obtener la categoría" });
    }
  };

  module.exports = {getCategoriaById};