const sedeModels = require("../../models/sede.models");

const createSede = async (req, res) => {
    try {
        const { campus } = req.body;
        if (!campus) {
            return res.status(400).json({
                status: 400,
                error: "Faltan campos obligatorios",
            });
        };

        const resultado = await sedeModels.CrearSede(campus);
    
        if (resultado.affectedRows === 0) { // Verificamos que se haya insertado alguna fila
            return res.status(404).json({ 
                status: 404,
                error: 'Sede no fue creada' 
            });
        };

        res.status(201).json({ 
            status: 201,
            message: 'Sede creada correctamente',
            data: { sede_id: resultado.insertId } // Devolvemos el ID de la sede creada
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            status: 500, 
            error: 'Error al crear la sede' 
        });
    }
};

module.exports = {createSede};
