const { models } = require('../../src/infrastructure/database') || require('../../infrastructure/database');

class MySQLReservaRepository {
  constructor(dbModels) {
    this.Reserva = dbModels.Reserva;
    this.Cliente = dbModels.Cliente;
    this.Mesa = dbModels.Mesa;
  }

  async create(reservaData) {
    const reserva = await this.Reserva.create(reservaData);
    return reserva.toJSON();
  }

  async findById(id) {
    const r = await this.Reserva.findByPk(id, { include: [this.Cliente, this.Mesa] });
    return r ? r.toJSON() : null;
  }

  async findAll(filter = {}) {
    const list = await this.Reserva.findAll({ where: filter, include: [this.Cliente, this.Mesa] });
    return list.map(r => r.toJSON());
  }

  async update(id, updates) {
    const reserva = await this.Reserva.findByPk(id);
    if (!reserva) return null;
    await reserva.update(updates);
    return reserva.toJSON();
  }

  async delete(id) {
    const reserva = await this.Reserva.findByPk(id);
    if (!reserva) return false;
    await reserva.destroy();
    return true;
  }
}

module.exports = MySQLReservaRepository;
