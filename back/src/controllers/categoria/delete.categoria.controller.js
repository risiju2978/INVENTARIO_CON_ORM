const deleteCategoria= async (req, res) => {
    try {
      const {categoria_id } = req.body;
      const sql = "DELETE FROM categoria WHERE categoria_id = ?";
      await db.promise().query(sql, [categoria_id]);

      res.status(200).json({ 
        status: 200, 
        message: "Categoría eliminada correctamente" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ 
        status: 500,
         error: "Error al eliminar la categoría" });
    }
  };

  module.exports = {deleteCategoria};