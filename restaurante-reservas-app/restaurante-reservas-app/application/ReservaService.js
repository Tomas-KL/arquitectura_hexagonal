class ReservaService {
  constructor(reservaRepository) {
    this.repo = reservaRepository;
  }

  async crearReserva({ clienteId, mesaId, fechaHoraInicio, fechaHoraFin, notas }) {
    // Validaciones simples
    if (!clienteId || !mesaId || !fechaHoraInicio) {
      throw new Error('clienteId, mesaId y fechaHoraInicio son requeridos');
    }

    const reservaData = {
      clienteId,
      mesaId,
      fechaHoraInicio,
      fechaHoraFin: fechaHoraFin || null,
      notas,
      estado: 'PENDIENTE'
    };

    return await this.repo.create(reservaData);
  }

  async listarReservas() {
    return await this.repo.findAll();
  }

  async obtenerReserva(id) {
    return await this.repo.findById(id);
  }

  async cancelarReserva(id) {
    const r = await this.repo.update(id, { estado: 'CANCELADA' });
    return r;
  }
}

module.exports = ReservaService;
