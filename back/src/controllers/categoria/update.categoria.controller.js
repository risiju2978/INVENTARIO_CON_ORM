const updateCategoria = async (req, res) => {
    try {
      
      const { categoria, categoria_id } = req.body;

      const sql = "UPDATE categoria SET categoria = ? WHERE categoria_id = ?";
      await db.promise().query(sql, [categoria,categoria_id]);

      res.status(200).json({
         status: 200, 
         message: "Categoría actualizada correctamente" });
    } catch (error) {
      console.error(error);
      res.status(500).json({
         status: 500,
          error: "Error al actualizar la categoría" });
    }
  };
  module.exports = {updateCategoria};