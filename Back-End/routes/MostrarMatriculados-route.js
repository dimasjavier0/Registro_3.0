const express = require('express');
const DocenteController = require('../controllers/MostrarMatriculados');

const router = express.Router();

router.get('/docentes/:idDocente/clases', async (req, res) => {
  try {
    const clasesAsignadas = await DocenteController.obtenerClasesAsignadas(req.params.idDocente);
    res.json(clasesAsignadas);
  } catch (error) {
    console.error('Error en la solicitud:', error);
    res.status(500).send('Error interno del servidor');
  }
});

module.exports = router;

