const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT || 3306;
const database = process.env.DB_NAME || 'reservas_db';
const username = process.env.DB_USER || 'reservas_user';
const password = process.env.DB_PASS || 'reservas_pass';

const sequelize = new Sequelize(database, username, password, {
  host,
  port,
  dialect: 'mysql',
  logging: false
});

// Importar modelos
const Cliente = require('../core/domain/Cliente')(sequelize, DataTypes);
const Mesa = require('../core/domain/Mesa')(sequelize, DataTypes);
const Reserva = require('../core/domain/Reserva')(sequelize, DataTypes);

// Relaciones
Cliente.hasMany(Reserva, { foreignKey: 'clienteId' });
Reserva.belongsTo(Cliente, { foreignKey: 'clienteId' });

Mesa.hasMany(Reserva, { foreignKey: 'mesaId' });
Reserva.belongsTo(Mesa, { foreignKey: 'mesaId' });

module.exports = {
  sequelize,
  Sequelize,
  models: {
    Cliente,
    Mesa,
    Reserva
  }
};
