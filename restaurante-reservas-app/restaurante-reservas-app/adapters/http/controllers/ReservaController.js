const express = require('express');
const router = express.Router();
const MySQLReservaRepository = require('../repositories/MySQLReservaRepository');
const { models } = require('../../infrastructure/database') || require('../../../src/infrastructure/database');
const ReservaService = require('../../application/ReservaService');

// Ajusta la importación de models según la estructura
const dbModels = (models && models.Reserva) ? models : require('../../../infrastructure/database').models;

const repo = new MySQLReservaRepository(dbModels);
const service = new ReservaService(repo);

// Crear reserva
router.post('/', async (req, res) => {
  try {
    const created = await service.crearReserva(req.body);
    res.status(201).json(created);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});

// Listar reservas
router.get('/', async (req, res) => {
  try {
    const list = await service.listarReservas();
    res.json(list);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Obtener reserva por id
router.get('/:id', async (req, res) => {
  try {
    const r = await service.obtenerReserva(req.params.id);
    if (!r) return res.status(404).json({ error: 'Reserva no encontrada' });
    res.json(r);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Cancelar reserva (DELETE lógica)
router.delete('/:id', async (req, res) => {
  try {
    const cancelled = await service.cancelarReserva(req.params.id);
    res.json(cancelled);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
