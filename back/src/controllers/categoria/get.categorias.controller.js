 const getCategorias= async (req, res) => {
    try {
      const sql = "SELECT * FROM categoria";
      const [categoria] = await db.promise().query(sql);
      res.status(200).json({ status: 200, data: categoria });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 500, error: "Error al obtener las categorías" });
    }
  };

  module.exports = {getCategorias};
