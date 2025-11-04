require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./infrastructure/database');
const reservaRouter = require('./adapters/controllers/reservaController');
const clienteRouter = require('./adapters/controllers/clienteController');

const app = express();
app.use(bodyParser.json());

// Rutas
app.use('/api/reservas', reservaRouter);
app.use('/api/clientes', clienteRouter);

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    // Conectar DB y sincronizar modelos
    await sequelize.authenticate();
    await sequelize.sync({ alter: true }); // para desarrollo (migrar automáticamente)
    console.log('Conectado a MySQL y modelos sincronizados.');

    app.listen(PORT, () => {
      console.log(`Servidor escuchando en puerto ${PORT}`);
    });
  } catch (err) {
    console.error('Error al iniciar la app:', err);
    process.exit(1);
  }
}

start();
