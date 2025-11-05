const express = require('express');
const router = express.Router();
const path = require('path');
const db = require(path.resolve(__dirname, '../../../../src/infrastructure/database')).models;

/**
 * GET /api/disponibilidad?mesaId=1&fechaInicio=...&fechaFin=...
 * Retorna true/false si la mesa está disponible (no hay reservas solapadas).
 */
router.get('/', async (req, res) => {
  try {
    const mesaId = parseInt(req.query.mesaId, 10);
    const fechaInicio = req.query.fechaInicio ? new Date(req.query.fechaInicio) : null;
    const fechaFin = req.query.fechaFin ? new Date(req.query.fechaFin) : null;

    if (!mesaId || !fechaInicio) {
      return res.status(400).json({ error: 'mesaId y fechaInicio son requeridos' });
    }

    const reservas = await db.Reserva.findAll({
      where: { mesaId },
      attributes: ['fechaHoraInicio','fechaHoraFin','estado']
    });

    const solapa = reservas.some(r => {
      const inicio = new Date(r.fechaHoraInicio);
      const fin = r.fechaHoraFin ? new Date(r.fechaHoraFin) : null;
      // Ignorar reservas canceladas o completadas
      if (r.estado === 'CANCELADA' || r.estado === 'COMPLETADA') return false;
      // Si no hay fecha fin, considerar como bloque hasta inicio + 2 horas (arbitrario)
      const finConsiderado = fin || new Date(inicio.getTime() + 2*60*60*1000);
      // Comprobación de solapamiento: [A,B) y [C,D) se solapan si A < D && C < B
      const A = inicio;
      const B = finConsiderado;
      const C = fechaInicio;
      const D = fechaFin || new Date(fechaInicio.getTime() + 2*60*60*1000);

      return (A < D && C < B);
    });

    res.json({ disponible: !solapa });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
