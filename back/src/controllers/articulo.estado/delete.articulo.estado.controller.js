const deleteArticuloEstado = async (req, res) => {
    try {
      const {articulo_estado_id } = req.body;
      const [result] = await db.promise().query("DELETE FROM articulo_estado WHERE articulo_estado_id = ?", [articulo_estado_id]);

      if (result.affectedRows === 0) {
        return res.status(404).json({
             status: 404,
              error: "Estado de artículo no encontrado" });
      }

      res.status(200).json({ 
        status: 200, 
        message: "Estado de artículo eliminado correctamente" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ 
        status: 500, 
        error: "Error al eliminar el estado de artículo" });
    }
  };
  module.exports ={deleteArticuloEstado};