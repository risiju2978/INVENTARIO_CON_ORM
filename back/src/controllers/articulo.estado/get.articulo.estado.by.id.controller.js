const getArticuloEstadoById= async (req, res) => {
    try {
      const {articulo_estado_id} = req.body;
      const [rows] = await db.promise().query("SELECT * FROM articulo_estado WHERE articulo_estado_id = ?", [articulo_estado_id]);

      if (rows.length === 0) {
        return res.status(404).json({
             status: 404,
              error: "Estado de artículo no encontrado" });
      }

      res.status(200).json({
         status: 200, 
        data: rows[0] });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 500, error: "Error al obtener el estado de artículo por ID" });
    }
  };

  module.exports = {getArticuloEstadoById};