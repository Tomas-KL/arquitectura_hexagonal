const express = require('express');
const router = express.Router();
const { models } = require('../../infrastructure/database') || require('../../../src/infrastructure/database');

const dbModels = (models && models.Cliente) ? models : require('../../../infrastructure/database').models;

// Crear cliente
router.post('/', async (req, res) => {
  try {
    const { nombre, email, telefono } = req.body;
    if (!nombre || !email) return res.status(400).json({ error: 'nombre y email requeridos' });
    const cliente = await dbModels.Cliente.create({ nombre, email, telefono });
    res.status(201).json(cliente.toJSON());
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Listar clientes
router.get('/', async (req, res) => {
  try {
    const clientes = await dbModels.Cliente.findAll();
    res.json(clientes.map(c => c.toJSON()));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
