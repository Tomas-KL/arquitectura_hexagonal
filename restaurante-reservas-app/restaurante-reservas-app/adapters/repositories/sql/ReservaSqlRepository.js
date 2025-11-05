class MySQLReservaRepository {
  constructor({ Reserva, Cliente, Mesa }) {
    this.Reserva = Reserva;
    this.Cliente = Cliente;
    this.Mesa = Mesa;
  }

  async create(data) {
    return await this.Reserva.create(data);
  }

  async findAll() {
    return await this.Reserva.findAll({ include: [this.Cliente, this.Mesa] });
  }

  async findById(id) {
    return await this.Reserva.findByPk(id, { include: [this.Cliente, this.Mesa] });
  }

  async update(id, data) {
    const reserva = await this.Reserva.findByPk(id);
    if (!reserva) return null;
    return await reserva.update(data);
  }

  async delete(id) {
    const reserva = await this.Reserva.findByPk(id);
    if (!reserva) return false;
    await reserva.destroy();
    return true;
  }
}

module.exports = MySQLReservaRepository;
